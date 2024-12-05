import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Challenges = () => {
  useEffect(() => {
    const container = document.querySelector(".contain");
    const sections = gsap.utils.toArray(".contain section");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".contain",
        pin: true,
        scrub: 1,
        end: "+=3000",
      },
    });
  }, []); 

  return (
    <div id="challenges">
      <div class="wrapper">
        <div class="contain scrollx">
          <section class="card anim">
            <img src="img/algiers.svg" alt="Algiers"></img>
            <div class="col"></div>
          </section>

          <section class="card anim">
            <div class="col anim">
              <img src="img/oran.svg" alt="Oran"></img>
            </div>
          </section>

          <section class="card anim">
            <div class="col anim">
              <img src="img/setif.svg" alt="Setif"></img>
            </div>
          </section>

          <section class="card anim">
            <div class="col anim">
              <img src="img/algiers2.svg" alt="Algiers 2"></img>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
