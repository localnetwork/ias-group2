import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function HomeCallToActions() {
  const containerRef = useRef(null);

  const sampleArr = [
    {
      title: "ISACA",
      description:
        "<p>Build your site in any style or brand identity — just prompt it!</p>",
      icon: "/images/cta1.webp",
    },
    {
      title: "ISC2",
      description:
        "<p>No templates or stock photos. Dora AI yields results 100% tailored to you.</p>",
      icon: "/images/cta2.webp",
    },
    {
      title: "SANS Institute",
      description:
        "<p>Seamlessly coordinate images, text, and UI elements to maximize usability.</p>",
      icon: "/images/cta3.webp",
    },
  ];

  useEffect(() => {
    let ScrollTrigger;

    const initAnimation = async () => {
      // Dynamically import ScrollTrigger
      const mod = await import("gsap/ScrollTrigger");
      ScrollTrigger = mod.ScrollTrigger;

      // Register ScrollTrigger with GSAP
      gsap.registerPlugin(ScrollTrigger);

      const items = containerRef.current.querySelectorAll(".cta-item");

      gsap.fromTo(
        items,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
            end: "bottom 20%",
            scrub: false,
            markers: false, // Set to true for debugging
          },
        }
      );
    };

    initAnimation();
  }, []);

  return (
    <div className="bg-white py-[100px]">
      <div className="container">
        <div
          ref={containerRef}
          className="bg-black rounded-[64px] overflow-hidden grid gap-[30px] px-[35px] py-[50px] text-center grid-cols-3"
        >
          {sampleArr.map((item, index) => (
            <div
              className="cta-item relative px-[30px] flex justify-center items-center flex-col"
              key={index}
            >
              <Image src={item?.icon} width={100} height={100} alt="Icon" />
              <h2 className="font-bold">{item?.title}</h2>
              <div
                className="text-[14px] opacity-50 mt-[20px]"
                dangerouslySetInnerHTML={{ __html: item?.description }}
              />
              {sampleArr.length - 1 !== index && (
                <span className="bg-[url('/images/bullet-one.webp')] absolute top-[50%] translate-y-[-50%] right-[-10px] h-[93%] w-[10px] bg-[length:10px_15px] bg-top " />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
