import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function HomeBanner() {
  const h1Ref = useRef(null);
  const captionRef = useRef(null);
  const scaleBgRef = useRef(null);
  const router = useRouter();
  const scrollTriggerInstance = useRef(null);

  useEffect(() => {
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
        {
          scale: 1, // Start at scale 1
        },
        {
          scale: 15, // End at scale 15
          scrollTrigger: {
            trigger: scaleBgRef.current,
            markers: true,
            start: "top bottom", // Start when the top of the element hits the bottom of the viewport
            end: "top top", // End when the top of the element reaches the top of the viewport
            scrub: true, // Smoothly animate as you scroll
            onUpdate: (self) => {
              // Optionally log the progress for debugging
              console.log(self.progress);
            },
          },
        }
      );
      // Ensure ScrollTrigger updates
      ScrollTrigger.refresh();
    };

    // Run animations initially if it's the first time
    animateElements();

    // Re-run animations and reset scroll position only on initial page load
    const handleRouteChange = () => {
      // Check if it's not the initial page load (to prevent re-initializing)
      if (router.asPath !== router.route) {
        // Only reset and re-initialize if not the same route
        if (scrollTriggerInstance.current) {
          scrollTriggerInstance.current.kill(); // Kill previous ScrollTrigger instance
        }

        // Reset scale immediately before reanimating
        gsap.set(scaleBgRef.current, { scale: 1 }); // Force reset scale to 1

        animateElements(); // Re-run the animations
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      if (scrollTriggerInstance.current) {
        scrollTriggerInstance.current.kill(); // Clean up ScrollTrigger on unmount
      }
    };
  }, [router.events, router.asPath]); // Add `router.asPath` to check for route changes
  return (
    <section className="min-h-[100vh] bg-[#0E100F] overflow-hidden flex items-center relative">
      <div className="container mix-blend-difference relative z-[20]">
        <div className="flex flex-col">
          <h1
            ref={h1Ref}
            className="text-[80px] mix-blend-difference font-bold"
          >
            This is lorem ipsum.
          </h1>
          <div ref={captionRef} className="type-writer">
            This is lorem ipsum
          </div>
        </div>
      </div>
      <div
        ref={scaleBgRef}
        className="scale-bg min-h-[100px] z-[1] bg-[#FFFCE1] text-black font-bold flex items-start py-[50px] justify-center w-[100px] h-[100px] rounded-full absolute bottom-[-50px] left-[50%] translate-x-[-50%]"
      />
      <div className="min-h-[100px] z-[2] text-black font-bold flex items-start py-[50px] justify-center w-[100px] h-[100px] rounded-full absolute bottom-0 left-[50%] translate-x-[-50%]">
        Scroll down
      </div>
    </section>
  );
}
