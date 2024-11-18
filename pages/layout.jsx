import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import Header from "@/components/partials/Header";

const Layout = ({ children }) => {
  const containerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    // Run enter animation on mount
    gsap.set(node, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
    gsap
      .timeline({
        paused: false,
        onComplete: () => console.log("Animation completed"),
      })
      .to(node, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
      .to(node, { scale: 1, duration: 0.25 })
      .play();

    return () => {
      // Run exit animation on unmount
      //   gsap
      //     .timeline({ paused: true })
      //     .to(node, { scale: 0.8, duration: 0.2 })
      //     .to(node, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
      //     .play();
    };
  }, [router.asPath]);

  return (
    <>
      <Header />
      <div ref={containerRef} className="page-transition">
        {children}
      </div>
    </>
  );
};

export default Layout;
