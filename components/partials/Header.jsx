"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const logoRef = useRef(null);
  const router = useRouter(); // Use Next.js router
  const [openDropdown, setOpenDropdown] = useState(null); // State to manage dropdown visibility

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
      name: "Local Organizations",
      url: "#",
      items: [
        { name: "National Privacy Commission", url: "/npc" },
        {
          name: "Philippine Computer Emergency Response Team",
          url: "/pcert",
        },
      ],
    },
    {
      name: "International Organizations",
      url: "#",
      items: [
        {
          name: "Information Systems Audit and Control Association",
          url: "/isaca",
        },
        {
          name: "International Information System Security Certification Consortium",
          url: "/isc2",
        },
        {
          name: "SANS Institute",
          url: "/sans",
        },
      ],
    },
    {
      name: "Our Team",
      url: "/our-team",
    },
  ];

  // Toggle dropdown visibility
  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index); // Toggle dropdown visibility
  };

  return (
    <header className="fixed z-[100000] py-[15px] top-0 left-0 w-full mix-blend-difference">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="logo text-[#FFFCE1] font-bold text-[40px] leading-[25px]">
            <Link href="/" className="flex gap-[1px]">
              <Image
                src="/images/logo.svg"
                width={200}
                height={200}
                alt="Logo"
                className="max-h-[70px] w-[70px] p-[8px] border-[2px] border-dashed border-[#ccc] rounded-full"
                ref={logoRef} // Attach ref to logo for GSAP targeting
              />
            </Link>
          </div>
          <nav>
            <ul className="flex gap-[30px]">
              {menuLinks.map((link, index) => (
                <li
                  key={link.name}
                  className="relative "
                  onMouseEnter={() => link.items && handleDropdownToggle(index)} // Show dropdown on hover
                  onMouseLeave={() => link.items && handleDropdownToggle(null)} // Hide dropdown on hover out
                >
                  <Link
                    href={link.url}
                    className="group  text-white"
                    onClick={(e) => link.items && e.preventDefault()} // Prevent navigation if there are items
                  >
                    <span
                      className={`transition ${
                        router?.asPath == link?.url ? "!opacity-100" : ""
                      } opacity-0 group-hover:opacity-100 absolute block top-[calc(50%-10px)] left-[calc(50%-35px)] bg-red-500 w-[70px] h-[20px] rounded-[500%] z-[-1] translate-[-50%]`}
                    />
                    {link.name}
                  </Link>

                  {/* Dropdown menu */}
                  {link.items && openDropdown === index && (
                    <ul className="absolute left-0 top-full !mix-blend-normal bg-white shadow-lg rounded-md z-[200] w-[200px]">
                      {link.items.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.url}
                            className="block px-4 py-2 text-black hover:bg-gray-100"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
