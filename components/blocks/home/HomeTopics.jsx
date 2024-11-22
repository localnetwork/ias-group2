import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function HomeTopics() {
  const rocketRef = useRef(null);
  const boxRefs = useRef([]);

  useEffect(() => {
    // Animate rocket with bidirectional scrolling
    gsap.fromTo(
      rocketRef.current,
      { x: "-1000%" }, // Start from the left of the viewport
      {
        x: "1000%", // Move to the right of the viewport
        scrollTrigger: {
          trigger: rocketRef.current,
          start: "top bottom", // Start animation when the top of the rocket enters the bottom of the viewport
          end: "top top", // End animation when the top of the rocket reaches the top of the viewport
          scrub: true, // Enable smooth animation with reverse support
          toggleActions: "play none none none", // Allow play and reverse
        },
      }
    );

    // Animate boxes with a rotate effect and support for bidirectional scrolling
    boxRefs.current.forEach((box) => {
      gsap.fromTo(
        box,
        { rotation: -90, opacity: 0 }, // Start from rotated and hidden
        {
          rotation: 0, // Rotate to the normal position
          opacity: 1, // Fade in the box
          scrollTrigger: {
            trigger: box,
            start: "top bottom", // Start animation when the top of the box enters the bottom of the viewport
            end: "top top", // End animation when the top of the box reaches the top of the viewport
            scrub: true, // Enable smooth animation with reverse support
            toggleActions: "play none none none", // Allow play and reverse
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-[100vh] pt-[200px] bg-[#0E100F] py-[100px] overflow-hidden flex flex-col items-start relative ">
      <div className="container relative z-[2000]">
        <h2 className="font-bold text-[50px] text-white">
          Local Organizations
        </h2>

        <div
          ref={(el) => (boxRefs.current[0] = el)}
          className="box relative font-bold text-[25px] hover:bg-[#712025] bg-[#9A0C16] p-8 mb-[30px] rounded-xl shadow-lg flex flex-col text-center justify-center items-center"
        >
          <Link
            className="absolute top-0 left-0 opacity-0 w-full h-full"
            href="/npc"
          />
          <div className="mb-[20px] rounded-sm flex justify-center shadow-md bg-white min-w-[250px] text-center">
            <Image src="/images/npc.png" width={150} height={150} alt="NPC" />
          </div>
          {`National Privacy Commission (NPC)`}
        </div>
        <div
          ref={(el) => (boxRefs.current[1] = el)}
          className="box relative font-bold text-[25px] hover:bg-[#712025] bg-[#9A0C16] p-8 mb-[30px] rounded-xl shadow-lg flex flex-col text-center justify-center items-center"
        >
          <Link
            className="absolute top-0 left-0 opacity-0 w-full h-full"
            href="/pcert"
          />
          <div className="mb-[20px] rounded-sm flex justify-center shadow-md bg-white min-w-[250px] text-center">
            <Image src="/images/ncert.png" width={150} height={150} alt="NPC" />
          </div>
          {`Philippine Computer Emergency Response Team`}
        </div>
      </div>

      <div ref={rocketRef} className="absolute opacity-50 top-0 rotate-[90deg]">
        <Image
          src="/images/animated-rocket.gif"
          width={200}
          height={200}
          alt="Animated Rocket"
        />
      </div>
      <div className="absolute top-[100px] left-0">
        <div id="robot" className="opacity-20">
          <div className="head"></div>
          <div className="arm l">
            <div>
              <div></div>
            </div>
          </div>
          <div className="leg l">
            <div>
              <div></div>
            </div>
          </div>
          <div className="leg r">
            <div>
              <div></div>
            </div>
          </div>
          <div className="arm r">
            <div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="shadow opacity-30"></div>
      </div>
    </div>
  );
}
