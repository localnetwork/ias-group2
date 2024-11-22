import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function OurTeamThanks() {
  useEffect(() => {
    // Animations using GSAP
    gsap.from(".thanks-container", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".thanks-heading", {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.from(".thanks-name", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 1,
      ease: "power3.out",
    });

    gsap.from(".thanks-image", {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      delay: 1.5,
      ease: "elastic.out(1, 0.75)",
    });
  }, []);

  return (
    <div className="min-h-[100vh] flex items-center bg-white py-[100px]">
      <div className="container flex flex-col justify-center text-center text-[#333333] thanks-container">
        <h2 className="mb-[30px] text-[30px] thanks-heading">Special Thanks</h2>

        <p className="text-[80px] leading-[60px] mb-[50px] font-bold thanks-name">
          John Ranel Intong
        </p>
        <Image
          src="/images/ranel.jpg"
          className="rounded-full mx-auto thanks-image"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
