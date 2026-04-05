import { useRef, useEffect } from "react";
import "../blocks/content.scss";

function ContentTwo() {
  const text = "";
  const ref = useRef(null);

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

  return (
    <div className="content">
      <h2 ref={ref} style={{ whiteSpace: "nowrap", display: "block" }}>
        {text}
      </h2>
    </div>
  );
}

export default ContentTwo;
