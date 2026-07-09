"use client";

import { ElementType, useEffect, useMemo, useRef, useState } from "react";

type TypewriterHeadingProps = {
  as?: "h1" | "h2";
  id?: string;
  className?: string;
  text: string;
  highlight?: string;
};

export function TypewriterHeading({
  as = "h2",
  id,
  className = "",
  text,
  highlight
}: TypewriterHeadingProps) {
  const Component = as as ElementType;
  const [typedLength, setTypedLength] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const headingRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = headingRef.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const timeout = window.setTimeout(() => setTypedLength(text.length), 0);
      return () => window.clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [text.length]);

  useEffect(() => {
    if (!hasStarted) return;

    let index = 0;

    const interval = window.setInterval(() => {
      index += 1;
      setTypedLength(index);

      if (index >= text.length) {
        window.clearInterval(interval);
      }
    }, 34);

    return () => window.clearInterval(interval);
  }, [hasStarted, text]);

  const typedText = text.slice(0, typedLength);
  const renderedText = useMemo(() => {
    if (!highlight) return typedText;

    const highlightStart = text.indexOf(highlight);
    if (highlightStart === -1) return typedText;

    const before = text.slice(0, highlightStart);
    const highlighted = text.slice(highlightStart, highlightStart + highlight.length);
    const after = text.slice(highlightStart + highlight.length);

    const visibleBefore = typedText.slice(0, before.length);
    const visibleHighlight = typedText.slice(before.length, before.length + highlighted.length);
    const visibleAfter = typedText.slice(before.length + highlighted.length);

    return (
      <>
        {visibleBefore}
        {visibleHighlight && <span className="typed-highlight">{visibleHighlight}</span>}
        {visibleAfter || (typedText.length > before.length + highlighted.length ? after.slice(0, 0) : null)}
      </>
    );
  }, [highlight, text, typedText]);

  return (
    <Component
      id={id}
      ref={headingRef}
      className={`typewriter-heading ${className}`.trim()}
      aria-label={text}
      suppressHydrationWarning
    >
      <span className="sr-only">{text}</span>
      <span className="typed-measure" aria-hidden="true">
        {text}
      </span>
      <span className="typed-visible" aria-hidden="true">
        {renderedText}
        <span className="typing-caret" aria-hidden="true" />
      </span>
    </Component>
  );
}
