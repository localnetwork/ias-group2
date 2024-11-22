import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function GlobalBanner({ ...props }) {
  const { title, subtext, description } = props;
  const bannerDesc = description || "Lorem ipsum";
  const bannerRef = useRef(null);

  useEffect(() => {
    const words = cybersecurityWords; // Array of cybersecurity words
    const banner = bannerRef.current;
    const colors = [
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ffa500",
      "#800080",
      "#ff1493",
      "#00ced1",
      "#7fff00",
      "#ffd700",
      "#dc143c",
    ]; // Extended color palette

    // Create word elements and add them to the DOM
    const createWord = () => {
      const word = document.createElement("span");
      word.textContent = words[Math.floor(Math.random() * words.length)];
      word.style.position = "absolute";
      word.style.color = colors[Math.floor(Math.random() * colors.length)];
      word.style.fontSize = `${Math.random() * 10 + 12}px`; // Minimum 16px font size
      word.style.pointerEvents = "none";
      banner.appendChild(word);

      // Animate word
      gsap.fromTo(
        word,
        {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: 0,
        },
        {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: 1,
          duration: 3,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(word, {
              opacity: 0,
              duration: 1,
              onComplete: () => {
                word.remove();
              },
            });
          },
        }
      );
    };

    // Spawn words every 500ms
    const interval = setInterval(createWord, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[100dvh] bg-white flex items-center text-[#333333] py-[100px] overflow-hidden">
      <div
        ref={bannerRef}
        className="absolute top-0 left-0 w-full h-full opacity-20"
      />
      <div className="container text-center relative z-10">
        <p className="text-[20px] mb-[20px] font-bold text-[#9A0C16]">
          {subtext || "Sample Subtext"}
        </p>
        <h1 className="text-[80px] font-bold leading-[100%] mb-[50px]">
          {title || "Sample Title Here"}
        </h1>

        <div dangerouslySetInnerHTML={{ __html: bannerDesc }} />
      </div>
    </div>
  );
}

const cybersecurityWords = [
  "Firewall",
  "Malware",
  "Phishing",
  "Encryption",
  "VPN",
  "Cyberattack",
  "Trojan",
  "Spyware",
  "Ransomware",
  "DDoS",
  "Authentication",
  "Botnet",
  "Keylogger",
  "Zero-Day",
  "Backdoor",
  "Hacker",
  "Exploit",
  "Patch",
  "Threat",
  "Vulnerability",
];
