import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import './Carousel.css'
const Carousel = ({ slides }) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const content = contentRef.current;

    gsap.to(content, {
      x: () => -(content.offsetWidth - section.offsetWidth),
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        pin: true,
      },
    });
  }, []);
  return (
    <section  ref={sectionRef} style={{height:"100vh", width:"100%"}} >
      <div
        ref={contentRef}
        style={{
          width: "200%",
          height: "100%",
          display: "flex",
          justifyContent:"center",
          alignItems:"center",
          // overflow:"hidden",
        }}
        >
        <div style={{ width: "50%",height:"70%", backgroundColor: "", display:"flex",justifyContent:"center", marginRight:"20px" }}>{slides[0]}</div>
        <div style={{ width: "50%",height:"70%", backgroundColor: "", display:"flex",justifyContent:"center",marginRight:"20px" }}>{slides[1]}</div>
      </div>
    </section>
  )
}

export default Carousel