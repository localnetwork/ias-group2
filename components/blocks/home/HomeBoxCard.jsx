"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function HomeBoxCard() {
  const textRef = useRef(null);

  useEffect(() => {
    let ScrollTrigger;

    const initializeGSAP = async () => {
      const test = await import("gsap/ScrollTrigger");
      ScrollTrigger = test.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      const textElement = textRef.current;
      const textContent = textElement.innerText;

      // Clear initial text
      textElement.innerHTML = "";

      // Split text into spans, keeping spaces intact
      const chars = textContent.split("").map((char) => {
        const span = document.createElement("span");
        span.innerText = char === " " ? "\u00A0" : char; // Replace spaces with a non-breaking space
        span.style.display = "inline-block";
        span.style.opacity = "0"; // Start hidden
        textElement.appendChild(span);
        return span;
      });

      // GSAP ScrollTrigger animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: textElement,
            start: "top 80%", // Trigger when the top of the element is at 80% of the viewport height
            end: "top 50%", // End animation when the top of the element reaches 50% of the viewport
            toggleActions: "play none none reverse", // Play forward on enter, reverse on leave
          },
        })
        .fromTo(
          chars,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05, // Stagger each character
            duration: 0.5, // Animation duration
          }
        );
    };

    initializeGSAP();

    return () => {
      if (ScrollTrigger) ScrollTrigger.kill(); // Cleanup ScrollTrigger instances
    };
  }, []);

  return (
    <div className="py-[100px] px-[30px] bg-[#0E100F] relative">
      <span className="bg-[#9A0C16] w-full h-[50%] absolute left-0 bottom-0" />
      <div className="container relative z-[100]">
        <div className="bg-[#FFFCE1] flex flex-col px-[200px] min-h-[700px] rounded-[50px] py-[50px] shadow-md text-black ">
          <p className="text-[#9A0C16] text-center font-bold">Hello World</p>
          <h2 ref={textRef} className="font-bold text-[50px] mt-5 text-center">
            Bigger Caption Here Lorem Ipsum
          </h2>

          <div className="py-[50px]">
            <Image
              src="/images/cat-typing.gif"
              width={500}
              height={400}
              className="h-[400px] w-full object-cover"
            />
          </div>

          <div className="mt-auto text-center">
            <Link
              href="#"
              className="bg-[#9A0C16] inline-block px-[30px] py-[15px] text-white rounded-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
