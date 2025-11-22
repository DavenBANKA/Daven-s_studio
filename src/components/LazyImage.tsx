import React, { useEffect, useRef, useState } from "react";

interface LazyImageProps {
  imageLoader: () => Promise<{ default: string }>;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ imageLoader, alt, className = "" }) => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !imageSrc) {
            imageLoader().then((module) => {
              setImageSrc(module.default);
            });
            if (observerRef.current && imgRef.current) {
              observerRef.current.unobserve(imgRef.current);
            }
          }
        });
      },
      { rootMargin: "100px" }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [imageLoader, imageSrc]);

  return (
    <img
      ref={imgRef}
      src={imageSrc || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};

export default LazyImage;
