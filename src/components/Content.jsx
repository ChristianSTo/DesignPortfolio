import { useRef, useEffect, useState } from "react";
import "../blocks/content.scss";

function ContentFive() {
  const text = "CHRISTIAN";
  const ref = useRef(null);
  const [showBg, setShowBg] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fit = () => {
      const base = window.innerWidth;
      el.style.fontSize = `${base}px`;
      const ratio = window.innerWidth / el.scrollWidth;
      el.style.fontSize = `${base * ratio}px`;
    };

    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [text]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const scrollContainer = document.querySelector(
        'div[style*="overflow: hidden auto"]'
      );
      if (!scrollContainer) return;

      const handleScroll = () => {
        setShowBg(scrollContainer.scrollTop === 0);
      };

      // Use passive: true for better scroll performance
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="content-five" style={{ position: "relative" }}>
      <div className="content__bg" style={{ opacity: showBg ? 1 : 0 }} />

      <h2
        ref={ref}
        className="content__h2"
        style={{ whiteSpace: "nowrap", display: "block" }}
      >
        {text}
      </h2>
      <p className="content__cta">﹀</p>
    </div>
  );
}

export default ContentFive;
