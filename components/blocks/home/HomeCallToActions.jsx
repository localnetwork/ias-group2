import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";

export default function HomeCallToActions() {
  const containerRef = useRef(null);

  const sampleArr = [
    {
      title: "ISACA",
      description:
        "<p>Empowering IT Professionals Worldwide: ISACA's Role in Advancing IT Governance, Cybersecurity, and Risk Management Through Education and Certification</p>",
      icon: "/images/cta1.webp",
      link: "/isaca",
    },
    {
      title: "ISC2",
      description:
        "<p>This report highlights ISC2's contributions in the cybersecurity field, including certifications, training, and its global impact on tackling the skills gap.</p>",
      icon: "/images/cta2.webp",
      link: "/isc2",
    },
    {
      title: "SANS Institute",
      description:
        "<p>The leading provider of cybersecurity training, certifications, and research, focused on developing the next generation of professionals.</p>",
      icon: "/images/cta3.webp",
      link: "/sans",
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
              className="hover:!opacity-50 transition cta-item relative px-[30px] flex justify-center items-center flex-col"
              key={index}
            >
              <Link
                href={item?.link}
                className="absolute top-0 left-0 w-full h-full block"
              />
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
