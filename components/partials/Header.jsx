"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const logoRef = useRef(null);
  const router = useRouter(); // Use Next.js router

  useEffect(() => {
    let ScrollTrigger;

    const initializeScrollTrigger = async () => {
      // Dynamically import ScrollTrigger
      const st = await import("gsap/ScrollTrigger");
      ScrollTrigger = st.ScrollTrigger;

      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // GSAP animation to rotate logo on scroll
      gsap.to(logoRef.current, {
        rotation: 360, // Rotate 360 degrees
        scrollTrigger: {
          trigger: document.body, // Use the entire page as the trigger
          start: "top top", // Start at the top of the page
          end: "bottom top", // End when scrolling to the bottom
          scrub: true, // Smoothly animate with scroll
        },
      });
    };

    initializeScrollTrigger();

    return () => {
      // Cleanup ScrollTrigger on unmount
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  useEffect(() => {
    // Restart logo animation on route change
    if (logoRef.current) {
      gsap.set(logoRef.current, { rotation: 0 }); // Reset rotation
      gsap.to(logoRef.current, {
        rotation: 360,
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, [router.pathname]); // Trigger when the route changes

  const menuLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Our Team",
      url: "/our-team",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <header className="mix-blend-difference fixed z-[100] py-[15px] top-0 left-0 w-full">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="logo text-[#FFFCE1] mix-blend-difference font-bold text-[40px] leading-[25px]">
            <Link href="/" className="flex gap-[1px]">
              <Image
                src="/images/logo.svg"
                width={200}
                height={200}
                alt="Logo"
                className="max-h-[50px] w-[50px]"
                ref={logoRef} // Attach ref to logo for GSAP targeting
              />
            </Link>
          </div>
          <nav>
            <ul className="flex gap-[30px]">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.url} className="group relative">
                    <span
                      className={`transition ${
                        router?.asPath == link?.url ? "!opacity-100" : ""
                      } opacity-0 group-hover:opacity-100 absolute block top-[calc(50%-10px)] left-[calc(50%-35px)] bg-red-500 w-[70px] h-[20px] rounded-[500%] z-[-1] translate-[-50%]`}
                    />
                    {link?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
