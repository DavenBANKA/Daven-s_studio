(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const navLinks = Array.from(document.querySelectorAll(".nav__link"));
  const sections = navLinks
    .map((link) => {
      const id = link.getAttribute("href")?.replace("#", "");
      if (!id) return null;
      const section = document.getElementById(id);
      return section ? { section, link } : null;
    })
    .filter(Boolean);

  const cursorOrb = document.querySelector(".cursor-orb");
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let orbX = pointerX;
  let orbY = pointerY;

  if (cursorOrb) {
    window.addEventListener("pointermove", (e) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
    });

    const loop = () => {
      const ease = 0.12;
      orbX += (pointerX - orbX) * ease;
      orbY += (pointerY - orbY) * ease;
      cursorOrb.style.transform = `translate3d(${orbX - 23}px, ${orbY - 23}px, 0)`;
      requestAnimationFrame(loop);
    };

    loop();
  }

  const animated = document.querySelectorAll("[data-animate]");
  if ("IntersectionObserver" in window && animated.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.22 }
    );

    animated.forEach((el) => observer.observe(el));
  } else {
    animated.forEach((el) => el.classList.add("is-visible"));
  }

  const onScroll = () => {
    const scrollPos = window.scrollY;
    const viewport = window.innerHeight;

    sections.forEach((item) => {
      const rect = item.section.getBoundingClientRect();
      const offsetTop = rect.top + scrollPos;
      const offsetBottom = offsetTop + rect.height;
      const middle = scrollPos + viewport / 2;

      const isActive = middle >= offsetTop && middle < offsetBottom;
      if (isActive) {
        navLinks.forEach((link) => link.classList.remove("nav__link--active"));
        item.link.classList.add("nav__link--active");
      }
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("load", () => {
    onScroll();
  });
})();
