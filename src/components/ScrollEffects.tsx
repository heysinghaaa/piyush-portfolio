"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    const updateNavigation = () => {
      document.documentElement.classList.toggle("nav-centered", window.scrollY > 72);
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.04
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateNavigation);
      document.documentElement.classList.remove("nav-centered");
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
