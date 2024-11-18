import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import Header from "@/components/partials/Header";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

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

    // Ensure page scrolls to top on route change or reload
    const handleRouteChange = () => {
      window.scrollTo(0, 0); // Force scroll to top
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Scroll to top initially on mount
    window.scrollTo(0, 0);

    // Cleanup event listener
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <div className={poppins.className}>
      <Header />
      <div ref={containerRef} className="page-transition">
        {children}
      </div>
    </div>
  );
};

export default Layout;
