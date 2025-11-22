import React, { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  videoLoader: () => Promise<{ default: string }>;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  poster?: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  videoLoader,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  poster,
}) => {
  const [videoSrc, setVideoSrc] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !videoSrc) {
            videoLoader().then((module) => {
              setVideoSrc(module.default);
              setIsLoaded(true);
            });
            if (observerRef.current && videoRef.current) {
              observerRef.current.unobserve(videoRef.current);
            }
          }
        });
      },
      { rootMargin: "200px" }
    );

    observerRef.current.observe(videoRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [videoLoader, videoSrc]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay && isLoaded}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      poster={poster}
      preload="none"
    >
      {videoSrc && <source src={videoSrc} type="video/mp4" />}
    </video>
  );
};

export default LazyVideo;
