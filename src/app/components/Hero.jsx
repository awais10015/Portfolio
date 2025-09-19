"use client";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const letters = [
  { char: "M", img: "/note.avif" },
  { char: ".", img: "/punch.avif", scale: "scale-200" },
];
const letters2 = [
  { char: "A", img: "/helloCard.avif" },
  { char: "W", img: "/card2.avif" },
  { char: "A", img: "/card3.avif" },
  { char: "I", img: "/card4.avif" },
  { char: "S", img: "/card5.avif" },
];

const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Background parallax
    gsap.to(".hero-bg", {
      y: -200,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.fromTo(
      ".glow-img",
      { y: 200, opacity: 1 }, // start lower + visible
      {
        y: -200, // move upward
        opacity: 0, // fade out
        duration: 2,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    // Heading animation (on mount)
    gsap.fromTo(
      ".hero-heading",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );

    // Letters animation (staggered reveal on mount)
    gsap.fromTo(
      ".letter",
      { opacity: 0, scale: 0.8, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
        delay: 0.8,
      }
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden"
    >
      {/* Background */}
      <img
        src="/bg2.avif"
        alt="bg"
        className="hero-bg absolute inset-0 w-full h-full object-cover object-top"
      />

      <img
        src="/c5.png"
        alt="glow"
        className="glow-img absolute bottom-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
      />

      {/* Content */}
      <div className="relative mb-20 lg:mb-0 mt-0 lg:mt-20 z-10 px-4 sm:px-6 md:px-10 pb-16 flex flex-col items-start">
        {/* Heading */}
        <h1 className="hero-heading text-2xl md:text-3xl font-medium text-black/60 drop-shadow-2xl mb-6">
          "Howdy! Meet your trusted web developer, <br /> building modern,
          scalable, and user-friendly websites."
        </h1>

        {/* First row */}
        <div className="flex font-extrabold leading-none mb-2">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`letter relative inline-flex items-center justify-center cursor-pointer group text-[clamp(5rem,16vw,22rem)] text-black ${
                letter.char === "." ? "mx-2 md:mx-4 lg:mx-6" : ""
              }`}
            >
              {/* Default letter */}
              <span className="transition-opacity duration-300 group-hover:opacity-0">
                {letter.char}
              </span>

              {/* Hover image */}
              <span className="absolute inset-0 flex items-center justify-center z-10">
                <img
                  src={letter.img}
                  alt={letter.char}
                  className={`object-contain w-full h-full opacity-0 group-hover:opacity-100 transition duration-500 transform group-hover:scale-150 ${
                    letter.scale || ""
                  }`}
                />
              </span>
            </span>
          ))}
        </div>

        {/* Second row */}
        <div className="flex font-extrabold leading-none">
          {letters2.map((letter, index) => (
            <span
              key={index}
              className={`letter relative inline-flex items-center justify-center cursor-pointer group text-[clamp(5rem,16vw,22rem)] text-black ${
                letter.char === "." ? "mx-2 md:mx-4 lg:mx-6" : ""
              }`}
            >
              <span className="transition-opacity duration-300 group-hover:opacity-0">
                {letter.char}
              </span>
              <span className="absolute inset-0 flex items-center justify-center z-10">
                <img
                  src={letter.img}
                  alt={letter.char}
                  className="object-contain w-full h-full opacity-0 group-hover:opacity-100 transition duration-500 transform group-hover:scale-150"
                />
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
