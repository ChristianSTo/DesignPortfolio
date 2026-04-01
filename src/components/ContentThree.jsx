import { useRef, useEffect } from "react";
import "../blocks/content.scss";
import king from "../assets/images/king.png";
import ContentFour from "./ContentFour";

function ContentFive() {
  const text = "UX";
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
    <div className="content__five">
      <img src={king} alt="king" className="content__king"></img>
      <h2 ref={ref} style={{ whiteSpace: "nowrap", display: "block" }}>
        {text}
      </h2>
      <ContentFour />
    </div>
  );
}

export default ContentFive;
