import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger);
export default function HomeBanner() {
  const h1Ref = useRef(null);
  const captionRef = useRef(null);
  const scaleBgRef = useRef(null);
  const router = useRouter();
  const scrollTriggerInstance = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    const animateElements = () => {
      // Initial animations for h1 and caption
      gsap.fromTo(
        h1Ref.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          delay: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: h1Ref.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        captionRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 0.5,
          duration: 1.2,
          delay: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: captionRef.current,
            start: "top 80%",
          },
        }
      );

      // Scroll-based scale animation for scaleBgRef
      scrollTriggerInstance.current = gsap.fromTo(
        scaleBgRef.current,
        { scale: 1 },
        {
          scale: 8,
          scrollTrigger: {
            trigger: scaleBgRef.current,
            start: "center bottom",
            end: "top top",
            scrub: true,
          },
        }
      );

      // Infinite up-down animation for planet1.webp
      gsap.to(".planet1", {
        y: 20,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Scroll-based vertical movement for planet1.webp
      gsap.to(".planet1", {
        y: -200,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".planet1",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".planet2", {
        duration: 10, // Time for one orbit
        ease: "none", // Linear motion
        repeat: -1, // Infinite loop
        motionPath: {
          path: [
            { x: 0, y: 0 }, // Start
            { x: 100, y: -100 }, // Top-right
            { x: 200, y: 0 }, // Bottom-right
            { x: 100, y: 100 }, // Bottom-left
            { x: 0, y: 0 }, // Back to start
          ],
          curviness: 1, // Smooth curve
          autoRotate: false, // No rotation
        },
      });

      // Ensure ScrollTrigger updates
      ScrollTrigger.refresh();
    };

    const handleRouteChange = () => {
      if (router.asPath !== router.route) {
        if (scrollTriggerInstance.current) {
          scrollTriggerInstance.current.kill();
        }
        gsap.set(scaleBgRef.current, { scale: 2 });
        animateElements();
      }
    };

    setTimeout(() => {
      window.scrollTo(0, 0); // Scroll to top on route change
    }, 100);

    router.events.on("routeChangeComplete", handleRouteChange);
    animateElements();

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      if (scrollTriggerInstance.current) {
        scrollTriggerInstance.current.kill();
      }
    };
  }, [router.events, router.asPath]);

  const containerRef = useRef(null);

  useEffect(() => {
    const generateRandomCharacter = () => {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      return chars.charAt(Math.floor(Math.random() * chars.length));
    };

    const createCharacterElement = () => {
      const charElement = document.createElement("span");
      charElement.textContent = generateRandomCharacter();
      charElement.style.position = "absolute";
      charElement.style.left = `${Math.random() * 100}%`;
      charElement.style.top = `${100 + Math.random() * 20}%`; // Start slightly below the screen
      charElement.style.fontSize = `${Math.random() * 20 + 20}px`;
      charElement.style.opacity = 0;
      charElement.style.color = `hsl(${Math.random() * 360}, 80%, 70%)`; // Random color
      containerRef.current.appendChild(charElement);
      return charElement;
    };

    const animateCharacter = (element) => {
      const duration = Math.random() * 3 + 2; // 2-5 seconds duration
      gsap.to(element, {
        y: -window.innerHeight - 50, // Move upwards off-screen
        opacity: 1,
        duration: duration / 2, // Fade in for half the duration
        ease: "power1.out",
        onComplete: () => {
          gsap.to(element, {
            opacity: 0,
            duration: duration / 2, // Fade out for the remaining duration
            ease: "power1.in",
            onComplete: () => {
              element.remove(); // Remove element after animation
            },
          });
        },
      });
    };

    const spawnCharacter = () => {
      const charElement = createCharacterElement();
      animateCharacter(charElement);
    };

    const interval = setInterval(() => {
      spawnCharacter();
    }, 300); // Generate a new character every 300ms

    return () => {
      clearInterval(interval); // Clear interval on unmount
    };
  }, []);

  return (
    <section className="min-h-[100vh] bg-[#0E100F] overflow-hidden flex items-center relative">
      <div
        ref={containerRef}
        className="opacity-20"
        style={{
          position: "absolute",
          overflow: "hidden",
          width: "100%",
          height: "100vh",
          backgroundColor: "#0E100F",
        }}
      />
      <Image
        className="planet1 absolute z-[5]  top-[  10vh] mix-blend-difference opacity-50 right-[10vw]"
        src="/images/planet1.webp"
        width={100}
        height={100}
      />
      <Image
        className="planet2 absolute mix-blend-difference z-[5] top-[55vh] opacity-50 left-[-10vw]"
        src="/images/planet2.png"
        width={100}
        height={100}
      />
      <div className="container mix-blend-difference relative z-[20]">
        <div className="flex flex-col">
          <h1
            ref={h1Ref}
            className="text-[50px] leading-[60px] mix-blend-difference font-bold"
          >
            Professional organizations overseeing information security in the
            Philippines and globally
          </h1>
          <div
            ref={captionRef}
            className="type-writer mt-[50px] mix-blend-difference"
          >
            - {`Group 2 - Information Assurance and Security`}
          </div>
        </div>
      </div>
      <div
        ref={scaleBgRef}
        className="scale-bg z-[1] bg-[#FFFCE1] text-[#333333] font-bold block py-[50px] justify-center w-[200px] h-[200px] rounded-full absolute bottom-[-100px] left-[50%] translate-x-[-50%]"
      />
      <div className="z-[2] text-[#333333] font-bold flex flex-col items-center py-[20px] justify-center w-[150px] h-[100px] rounded-full absolute bottom-0 left-[50%] translate-x-[-50%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#000"
          className="w-[24px] mb-[15px] h-[24px] text-[#333333] block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
        Scroll down
      </div>
    </section>
  );
}
