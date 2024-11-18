import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeTopics() {
  const rocketRef = useRef(null);
  const boxRefs = useRef([]);

  useEffect(() => {
    // Animate rocket horizontally
    gsap.fromTo(
      rocketRef.current,
      { x: "-1000%" }, // Start from the left of the viewport
      {
        x: "1000%", // Move to the right of the viewport
        scrollTrigger: {
          trigger: rocketRef.current,
          start: "top bottom", // Start animation when the top of the rocket enters the bottom of the viewport
          end: "top top", // End animation when the top of the rocket reaches the top of the viewport
          scrub: true, // Smooth animation based on scroll position
          markers: true, // Debug markers to visualize the start and end points
          toggleActions: "play none none none", // Controls the animation behavior
        },
      }
    );

    // Animate boxes with a rotate effect when they enter the viewport
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
            scrub: true, // Smooth animation based on scroll position
            markers: true, // Debug markers
            toggleActions: "play none none none", // Controls the animation behavior
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-[100vh] pt-[150px] bg-[#0E100F] py-[100px] flex items-start relative overflow-hidden">
      <div className="container relative">
        <h2 className="font-bold text-[80px] text-white">Sample Heading</h2>

        <div
          ref={(el) => (boxRefs.current[0] = el)}
          className="box bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-8 m-4 rounded-xl shadow-lg flex justify-center items-center"
        >
          Box 1
        </div>
        <div
          ref={(el) => (boxRefs.current[1] = el)}
          className="box bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-8 m-4 rounded-xl shadow-lg flex justify-center items-center"
        >
          Box 2
        </div>
        <div
          ref={(el) => (boxRefs.current[2] = el)}
          className="box bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-8 m-4 rounded-xl shadow-lg flex justify-center items-center"
        >
          Box 3
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
    </div>
  );
}
