import { useRef, useEffect, useState } from "react";
import "../blocks/content.scss";
import figmaLogo from "../assets/images/figmaLogo.svg";
import adobeIllustratorLogo from "../assets/images/adobeIllustratorLogo.svg";
import { galleryData } from "../data/galleryData";
function GridItem({ item }) {
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const randNum = Math.random() * 0.6 + 0.1; // random between 0.1 and 0.7
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: randNum }
    );

    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`content__item ${isVisible ? "visible" : ""}`}
    >
      <div className="content__corner"></div>
      <p className="content__name">{item.name}</p>
      <img className="content__image" src={item.image} alt={item.image} />
    </div>
  );
}

function ContentContainer() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const randNum = Math.floor(Math.random() * 1) + 0.4;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: randNum } // fires when 50% of the element is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="content__container">
      <div className="content__paragraph-bg">
        <p className="content__paragraph">
          <span className="content__start">UX</span> frontend development is
          fundamental. Websites are{" "}
          <span className="content__highlight">works of art</span> that deserve
          to come to life for people to interact with, so I dedicate all of my
          skills for all people by making sure they are accessible and
          responsive. <br></br> <br></br>These are the main tools I use for UX
          Design:
        </p>
        <div className="content__tools">
          <img className="content__tool" src={figmaLogo} alt="Figma Logo"></img>
          <img
            className="content__tool"
            src={adobeIllustratorLogo}
            alt="Adobe Illustrator Logo"
          ></img>
        </div>
        <p className="content__paragraph">
          <span className="content__start">F</span>eatured are the clients and
          projects for which I provided design and development.
          <br></br> <br></br>These are the main tools I use for UX Development:
        </p>
        <div className="content__tools">
          <img className="content__tool" src={figmaLogo} alt="Figma Logo"></img>
          <img
            className="content__tool"
            src={adobeIllustratorLogo}
            alt="Adobe Illustrator Logo"
          ></img>
        </div>
      </div>
      {/* <div > */}
      <ul className="content__grid">
        {galleryData.map((item, index) => (
          <GridItem key={index} item={item} />
        ))}
      </ul>

      {/* </div> */}
    </div>
  );
}

export default ContentContainer;
