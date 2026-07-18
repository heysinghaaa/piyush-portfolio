"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine) and (hover: hover)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    let pointerX = -100;
    let pointerY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrame = 0;
    let hasMoved = false;

    document.documentElement.classList.add("custom-cursor-ready");

    const render = () => {
      ringX += (pointerX - ringX) * 0.17;
      ringY += (pointerY - ringY) * 0.17;
      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      animationFrame = window.requestAnimationFrame(render);
    };

    const updateInteractiveState = (eventTarget: EventTarget | null) => {
      const target = eventTarget instanceof Element ? eventTarget : null;
      const interactive = target?.closest("a, button, input, textarea, label");
      const labeled = target?.closest<HTMLElement>("[data-cursor-label]");

      ring.classList.toggle("is-active", Boolean(interactive));
      ring.classList.toggle("has-label", Boolean(labeled));
      label.textContent = labeled?.dataset.cursorLabel ?? "";
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!hasMoved) {
        ringX = pointerX;
        ringY = pointerY;
        hasMoved = true;
      }
      dot.classList.add("is-visible");
      ring.classList.add("is-visible");
      updateInteractiveState(event.target);
    };

    const handlePointerOver = (event: PointerEvent) => {
      updateInteractiveState(event.target);
    };

    const hideCursor = () => {
      dot.classList.remove("is-visible");
      ring.classList.remove("is-visible");
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", hideCursor);
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.documentElement.removeEventListener("mouseleave", hideCursor);
      document.documentElement.classList.remove("custom-cursor-ready");
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <span className="custom-cursor-dot" ref={dotRef} />
      <span className="custom-cursor-ring" ref={ringRef}>
        <span ref={labelRef} />
      </span>
    </div>
  );
}
