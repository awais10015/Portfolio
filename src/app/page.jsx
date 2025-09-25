"use client";
import React from "react";
import { useEffect, useState } from "react";
import AnimatedMenuIcon from "@/app/components/animated-menu-icon";
import Footer from "@/app/components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page = () => {
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

  const paths = [
    
    "M5 5 Q 20 2, 40 6 T 80 4 T 95 5",
 
    "M5 6 Q 15 3, 30 7 Q 45 4, 60 6 Q 75 3, 95 5",
   
    "M5 5 C 15 2, 25 8, 35 5 C 45 3, 55 7, 65 4 C 75 6, 85 2, 95 5",
 
    "M5 5 L 15 7 L 25 4 L 35 6 L 45 3 L 55 6 L 65 4 L 75 7 L 85 5 L 95 6",

    "M5 6 Q 12 3, 25 5 Q 38 8, 50 4 Q 62 2, 75 6 Q 88 4, 95 5",
   
    "M5 5 Q 25 2, 50 6 T 95 4 M5 7 Q 25 4, 50 8 T 95 6",
   
    "M5 5 C 12 2, 18 8, 28 4 C 38 6, 48 3, 58 5 C 68 7, 78 2, 88 6 C 92 4, 95 5",
 
    "M5 5 Q 20 3, 35 6 Q 50 4, 65 5 Q 80 7, 95 4",
   
    "M5 6 L 12 4 Q 25 7, 38 5 L 52 6 Q 68 3, 82 5 L 95 6",
  
    "M5 5 C 20 1, 30 9, 50 4 C 70 2, 80 8, 95 5",
    
    "M5 5 Q 15 8, 25 4 Q 35 2, 45 6 Q 55 8, 65 3 Q 75 1, 85 5 Q 90 7, 95 4",
  
    "M5 6 C 15 3, 20 8, 30 5 S 45 2, 55 6 S 70 8, 80 4 S 90 2, 95 5",
  ];

  const links = [
    { name: "Work", href: "#work" },
    { name: "Story", href: "#story" },
    { name: "Process", href: "#process" },
    { name: "Connect", href: "#connect" },
  ];

  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = useState(false);
  const [randomPath, setRandomPath] = useState(paths[0]);
  const [active, setActive] = useState("");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

   
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
      { y: 0, opacity: 1 }, 
      {
        y: -200, 
        opacity: 0, 
        duration: 2,
        ease: "power2.out",
        delay: 0,
      }
    );

  
    gsap.fromTo(
      ".hero-heading",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );

  
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.from(".work-heading", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".work-heading",
        start: "top 80%",
      },
    });

   
    gsap.from(".work-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#work",
        start: "top 60%",
      },
    });

   
    const paths = document.querySelectorAll(".path-animate");
    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.fromTo(
        path,
        { strokeDasharray: length, strokeDashoffset: length },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: path,
            start: "top 80%",
          },
        }
      );
    });

   
    gsap.from(".work-quote", {
      opacity: 0,
      rotate: -5,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".work-quote",
        start: "top 85%",
      },
    });
  }, []);

  useEffect(() => {
    let timer;
    if (clicked) {
      timer = setTimeout(() => {
        setClicked(false);
      }, 150);
    }
    return () => clearTimeout(timer);
  }, [clicked]);

  
  useEffect(() => {
    if (active) {
      const pick = paths[Math.floor(Math.random() * paths.length)];
      setRandomPath(pick);
    }
  }, [active]);

 
  useEffect(() => {
  const sections = document.querySelectorAll("section[id]"); 
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`); 
        }
      });
    },
    {
      rootMargin: "-50% 0px -50% 0px", 
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);


  return (
    <>
      {/* <Navbar /> */}
      <nav className="fixed top-2 left-2 right-2 z-50 md:top-3 md:left-1/2 md:-translate-x-1/2 md:right-auto">
        <div className="bg-black/70 backdrop-blur-md shadow-lg rounded-full md:rounded-full py-3 px-4 md:py-1 md:pr-1 md:pl-2 flex items-center gap-6">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center justify-center">
            <li className="flex items-center justify-center">
              <div className="framer-vgwrft-containe flex justify-center items-center">
                <a
                  href="#hero"
                  className="group relative inline-flex items-center justify-center rounded-full"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="group cursor-pointer"
                  >
                    {/* Gray Path (default) */}
                    <path
                      d="M 7.081 18.931 C 15.273 19.853 19.843 13.955 17.88 10.023 C 12.609 -0.53 -1.763 19.87 11.928 17.902 M 2.754 12.66 L 2.737 12.66 C 2.555 12.66 1.857 12.66 1.034 12.727 M 4.545 18.931 C 4.162 19.13 2.673 20.281 2.346 20.5 M 11.503 22 L 11.212 23 M 14.294 1.224 C 14.053 2.28 13.894 3.229 13.894 3.486 M 18.545 6.727 C 18.744 6.529 21.062 4.617 22.648 3.486 M 21.379 11.313 C 21.379 11.313 21.952 11.202 22.648 11.105 M 18.545 17.902 C 19.272 18.273 20.483 19.363 20.996 20.009 M 2.09 2.091 C 4.908 3.486 6.727 5.545 7.454 6.909"
                      stroke="gray"
                      strokeWidth="1.64"
                      className="group-hover:opacity-0 transition-opacity duration-0"
                    />

                    {/* Yellow Animated Path */}
                    <path
                      d="M 7.081 18.931 C 15.273 19.853 19.843 13.955 17.88 10.023 C 12.609 -0.53 -1.763 19.87 11.928 17.902 M 2.754 12.66 L 2.737 12.66 C 2.555 12.66 1.857 12.66 1.034 12.727 M 4.545 18.931 C 4.162 19.13 2.673 20.281 2.346 20.5 M 11.503 22 L 11.212 23 M 14.294 1.224 C 14.053 2.28 13.894 3.229 13.894 3.486 M 18.545 6.727 C 18.744 6.529 21.062 4.617 22.648 3.486 M 21.379 11.313 C 21.379 11.313 21.952 11.202 22.648 11.105 M 18.545 17.902 C 19.272 18.273 20.483 19.363 20.996 20.009 M 2.09 2.091 C 4.908 3.486 6.727 5.545 7.454 6.909"
                      stroke="#facc15"
                      strokeWidth="1.64"
                      className="yellow-path opacity-0 group-hover:opacity-100"
                    />
                  </svg>
                </a>
              </div>
            </li>
            {links.map((link) => (
              <li key={link.href} className="relative group">
                <a
                  href={link.href}
                  className={`text-lg font-medium transition ${
                    active === link.href
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>

                {/* Pencil underline */}
                {active === link.href && (
                  <svg
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3"
                    viewBox="0 0 100 10"
                    fill="none"
                    stroke="#facc15"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={randomPath} className="animate-draw" />
                  </svg>
                )}
              </li>
            ))}

            <li>
              <a href="mailto:awais10015@gmail.com">
                <button className="text-[#ffd500] bg-[#ffd500]/10 whitespace-nowrap hover:bg-[#ffd500]/90 hover:text-white py-1 rounded-2xl text-lg font-bold px-2 transition cursor-pointer">
                  Start Project
                </button>
              </a>
            </li>
          </ul>

          {/* Mobile Menu */}
          <ul className="flex md:hidden w-full items-center justify-between">
            <li className="flex items-center justify-center">
              <div className="framer-vgwrft-containe flex justify-center items-center">
                <a
                  href="#hero"
                  onClick={() => setClicked(true)}
                  className="group relative inline-flex items-center justify-center rounded-full"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="group cursor-pointer"
                  >
                    {/* Gray Path */}
                    <path
                      d="M 7.081 18.931 C 15.273 19.853 19.843 13.955 17.88 10.023 C 12.609 -0.53 -1.763 19.87 11.928 17.902 M 2.754 12.66 L 2.737 12.66 C 2.555 12.66 1.857 12.66 1.034 12.727 M 4.545 18.931 C 4.162 19.13 2.673 20.281 2.346 20.5 M 11.503 22 L 11.212 23 M 14.294 1.224 C 14.053 2.28 13.894 3.229 13.894 3.486 M 18.545 6.727 C 18.744 6.529 21.062 4.617 22.648 3.486 M 21.379 11.313 C 21.379 11.313 21.952 11.202 22.648 11.105 M 18.545 17.902 C 19.272 18.273 20.483 19.363 20.996 20.009 M 2.09 2.091 C 4.908 3.486 6.727 5.545 7.454 6.909"
                      stroke="gray"
                      strokeWidth="1.64"
                      className={`transition-opacity duration-200 ${
                        clicked ? "opacity-0" : "opacity-100"
                      }`}
                    />

                    {/* Yellow Animated Path */}
                    <path
                      d="M 7.081 18.931 C 15.273 19.853 19.843 13.955 17.88 10.023 C 12.609 -0.53 -1.763 19.87 11.928 17.902 M 2.754 12.66 L 2.737 12.66 C 2.555 12.66 1.857 12.66 1.034 12.727 M 4.545 18.931 C 4.162 19.13 2.673 20.281 2.346 20.5 M 11.503 22 L 11.212 23 M 14.294 1.224 C 14.053 2.28 13.894 3.229 13.894 3.486 M 18.545 6.727 C 18.744 6.529 21.062 4.617 22.648 3.486 M 21.379 11.313 C 21.379 11.313 21.952 11.202 22.648 11.105 M 18.545 17.902 C 19.272 18.273 20.483 19.363 20.996 20.009 M 2.09 2.091 C 4.908 3.486 6.727 5.545 7.454 6.909"
                      stroke="#facc15"
                      strokeWidth="1.64"
                      className={`yellow-path ${clicked ? "draw-mob" : ""}`}
                    />
                  </svg>
                </a>
              </div>
            </li>

            <li className="flex items-center justify-center">
              <h1 className="text-2xl text-gray-400 font-light mr-2">Menu</h1>
              <button className="text-white" onClick={() => setOpen(!open)}>
                <AnimatedMenuIcon
                  isOpen={open}
                  className="h-6 w-6 text-gray-400"
                />
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`absolute z-50 top-full left-0 right-0 md:left-1/2 md:-translate-x-1/2 md:right-auto md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            open
              ? "max-h-[500px] opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95"
          }`}
        >
          <ul className="flex flex-col items-center bg-black/70 backdrop-blur-md shadow-lg rounded-2xl mt-2 py-3 px-4 text-gray-400 text-2xl gap-2">
            {links.map((link) => (
              <li key={link.href} className="relative group">
                <a
                  href={link.href}
                  className={`text-lg font-medium transition ${
                    active === link.href
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>

                {/* Pencil underline */}
                {active === link.href && (
                  <svg
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3"
                    viewBox="0 0 100 10"
                    fill="none"
                    stroke="#facc15"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={randomPath} className="animate-draw" />
                  </svg>
                )}
              </li>
            ))}
            <li>
              <a href="mailto:awais10015@gmail.com">
                <button className="text-[#ffd500] bg-[#ffd500]/10 whitespace-nowrap hover:bg-[#ffd500]/90 py-1 rounded-2xl font-bold px-2 transition cursor-pointer">
                  Start Project
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <Hero /> */}
      <section id="hero"
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
          className="glow-img absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
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

      {/* <Work /> */}
      <section id="work">
        <div
          className=" w-full mt-16 px-5 md:px-14 flex flex-col gap-5"
        >
          <div className=" work-card w-full flex items-center justify-center mb-15">
            <div className="flex flex-col items-end justify-center">
              <div className="text-end flex justify-end items-end">
                <p className="caveat text-3xl text-gray-500">
                  from 2023 till today
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter">
                MY LATEST WORK
              </h1>
            </div>
          </div>
          {/* 1st 2 projects */}
          <div className="work-card w-full flex items-stretch gap-5 flex-col lg:flex-row">
            {/* Left Card */}
            <a
              href="https://line-one-eosin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex-[1.3]"
            >
              <div className="w-full cursor-pointer bg-gray-100 p-5 rounded-4xl  flex gap-2 flex-col items-start group overflow-hidden">
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex justify-between">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                      LINEONE
                    </h1>
                    <svg
                      viewBox="0 0 132 132"
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 stroke-black"
                      fill="none"
                    >
                      <path
                        d="M7.236 70.33c7.118-1.168 11.675-2.43 20.847-2.773 12.407-.464 18.038.452 30.114.278 6.512-.094 10.37-2.056 16.37-2.289 16.568-.644 30.894-.898 30.501-5.91-.638-8.131-6.46-13.173-11.245-18.2-7.932-8.33-16.193-14.612-16.624-20.099-.482-6.147 20.935 9.985 30.605 20.509 9.038 9.836 19.737 14.893 19.103 19.59-2.258 9.573-18.893 14.891-42.919 46.368"
                        stroke="currentColor"
                        strokeWidth="9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="path-animate"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-400">
                    Social Media Platform
                  </p>
                </div>
                <div className="border-5 border-white rounded-2xl bg-gray-200 overflow-hidden p-0 lg:p-5 transform translate-y-20 rotate-15 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                  <img
                    src="/Lineone.png"
                    alt="lineone"
                    className="rounded-xl "
                  />
                </div>
              </div>
            </a>

            <a
              href="https://iphone-clone-dun.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex-[1] cursor-pointer bg-gray-100 rounded-4xl  flex gap-2 flex-col items-start justify-evenly group overflow-hidden"
            >
              {/* Right Card */}
              <div className="w-full h-full cursor-pointer bg-gray-100 p-5 rounded-4xl  flex gap-2 flex-col items-start justify-between group overflow-hidden">
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex justify-between">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold">
                      IPHONE CLONE
                    </h1>
                    <svg
                      viewBox="0 0 132 132"
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 stroke-black"
                      fill="none"
                    >
                      <path
                        d="M7.236 70.33c7.118-1.168 11.675-2.43 20.847-2.773 12.407-.464 18.038.452 30.114.278 6.512-.094 10.37-2.056 16.37-2.289 16.568-.644 30.894-.898 30.501-5.91-.638-8.131-6.46-13.173-11.245-18.2-7.932-8.33-16.193-14.612-16.624-20.099-.482-6.147 20.935 9.985 30.605 20.509 9.038 9.836 19.737 14.893 19.103 19.59-2.258 9.573-18.893 14.891-42.919 46.368"
                        stroke="currentColor"
                        strokeWidth="9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="path-animate"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-400">
                    Branding, Web Design, Development
                  </p>
                </div>
                <div className="border-5 border-white rounded-2xl bg-gray-200 overflow-hidden transform translate-y-15 -rotate-15 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                  <img src="/iphone.png" alt="lineone" className="" />
                </div>
              </div>
            </a>
          </div>

          {/* 2nd 2 projects */}
          <div className="work-card w-full flex items-stretch gap-5 flex-col lg:flex-row">
            <a
              href="https://sundown-opal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex-[1] cursor-pointer bg-gray-100 rounded-4xl  flex gap-2 flex-col items-start justify-evenly group overflow-hidden"
            >
              {/* Left Card */}
              <div className="w-full cursor-pointer bg-gray-100 p-5 rounded-4xl flex-[1] flex gap-2 flex-col items-start justify-between group overflow-hidden">
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex justify-between">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold">
                      SUNDOWN
                    </h1>
                    <svg
                      viewBox="0 0 132 132"
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 stroke-black"
                      fill="none"
                    >
                      <path
                        d="M7.236 70.33c7.118-1.168 11.675-2.43 20.847-2.773 12.407-.464 18.038.452 30.114.278 6.512-.094 10.37-2.056 16.37-2.289 16.568-.644 30.894-.898 30.501-5.91-.638-8.131-6.46-13.173-11.245-18.2-7.932-8.33-16.193-14.612-16.624-20.099-.482-6.147 20.935 9.985 30.605 20.509 9.038 9.836 19.737 14.893 19.103 19.59-2.258 9.573-18.893 14.891-42.919 46.368"
                        stroke="currentColor"
                        strokeWidth="9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="path-animate"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-400">
                    Branding, Web Design, Development
                  </p>
                </div>
                <div className="border-5 border-white rounded-2xl bg-gray-200 overflow-hidden  transform translate-y-20 rotate-15 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                  <img
                    src="/sundown.png"
                    alt="lineone"
                    className="rounded-xl "
                  />
                </div>
              </div>
            </a>
            <a
              href="https://healix-inky.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex-[1.3]"
            >
              {/* Right Card */}
              <div className="w-full cursor-pointer bg-gray-100 p-5 rounded-4xl  flex gap-2 flex-col items-start justify-between group overflow-hidden">
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex justify-between">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold">
                      HEALIX
                    </h1>
                    <svg
                      viewBox="0 0 132 132"
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 stroke-black"
                      fill="none"
                    >
                      <path
                        d="M7.236 70.33c7.118-1.168 11.675-2.43 20.847-2.773 12.407-.464 18.038.452 30.114.278 6.512-.094 10.37-2.056 16.37-2.289 16.568-.644 30.894-.898 30.501-5.91-.638-8.131-6.46-13.173-11.245-18.2-7.932-8.33-16.193-14.612-16.624-20.099-.482-6.147 20.935 9.985 30.605 20.509 9.038 9.836 19.737 14.893 19.103 19.59-2.258 9.573-18.893 14.891-42.919 46.368"
                        stroke="currentColor"
                        strokeWidth="9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="path-animate"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-400">
                    Hospital Management System
                  </p>
                </div>
                <div className="border-5 p-0 lg:p-5  border-white rounded-2xl bg-gray-200 overflow-hidden transform translate-y-15 -rotate-15 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                  <img src="/healix.png" alt="lineone" className="rounded-xl" />
                </div>
              </div>
            </a>
          </div>

          {/* 3rd 2 projects */}
          <div className="work-card w-full flex items-stretch gap-5 flex-col lg:flex-row">
            <a
              href="https://mystore-seven-chi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex-[1.3]"
            >
              {/* Left Card */}
              <div className="w-full cursor-pointer bg-gray-100 p-5 rounded-4xl flex gap-2 flex-col items-start group overflow-hidden">
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex justify-between">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold">
                      FURNITURE STORE
                    </h1>
                    <svg
                      viewBox="0 0 132 132"
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 stroke-black"
                      fill="none"
                    >
                      <path
                        d="M7.236 70.33c7.118-1.168 11.675-2.43 20.847-2.773 12.407-.464 18.038.452 30.114.278 6.512-.094 10.37-2.056 16.37-2.289 16.568-.644 30.894-.898 30.501-5.91-.638-8.131-6.46-13.173-11.245-18.2-7.932-8.33-16.193-14.612-16.624-20.099-.482-6.147 20.935 9.985 30.605 20.509 9.038 9.836 19.737 14.893 19.103 19.59-2.258 9.573-18.893 14.891-42.919 46.368"
                        stroke="currentColor"
                        strokeWidth="9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="path-animate"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-400">
                    A place to buy Furniture
                  </p>
                </div>
                <div className="border-5 border-white rounded-2xl bg-gray-200 overflow-hidden p-0 lg:p-5 transform translate-y-20 rotate-15 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                  <img src="/Store.png" alt="lineone" className="rounded-xl " />
                </div>
              </div>
            </a>
            <a
              href="https://daily-book-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex-[1] cursor-pointer bg-gray-100 rounded-4xl  flex gap-2 flex-col items-start justify-evenly group overflow-hidden"
            >
              {/* Right Card */}
              <div className="w-full cursor-pointer bg-gray-100 p-5 rounded-4xl flex-[1] flex gap-2 flex-col items-start justify-between group overflow-hidden">
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex justify-between">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold">
                      DAILYBOOK
                    </h1>
                    <svg
                      viewBox="0 0 132 132"
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 stroke-black"
                      fill="none"
                    >
                      <path
                        d="M7.236 70.33c7.118-1.168 11.675-2.43 20.847-2.773 12.407-.464 18.038.452 30.114.278 6.512-.094 10.37-2.056 16.37-2.289 16.568-.644 30.894-.898 30.501-5.91-.638-8.131-6.46-13.173-11.245-18.2-7.932-8.33-16.193-14.612-16.624-20.099-.482-6.147 20.935 9.985 30.605 20.509 9.038 9.836 19.737 14.893 19.103 19.59-2.258 9.573-18.893 14.891-42.919 46.368"
                        stroke="currentColor"
                        strokeWidth="9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="path-animate"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-400">
                    A Finance tracking and Buisiness Management Platform
                  </p>
                </div>
                <div className="border-5 border-white rounded-2xl bg-gray-200 overflow-hidden transform translate-y-15 -rotate-15 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                  <img src="/dailybook.png" alt="lineone" className="" />
                </div>
              </div>
            </a>
          </div>

          {/* full width dashboard */}
          <div className="work-card w-full flex items-stretch gap-5 flex-col lg:flex-row">
            <a
              href="https://dashboard-six-pied-69.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              {" "}
              {/* full width Card */}
              <div className="w-full cursor-pointer bg-gray-100 p-5 rounded-4xl flex gap-2 flex-col items-start group overflow-hidden">
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex justify-between">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold">
                      DASHBOARD
                    </h1>
                    <svg
                      viewBox="0 0 132 132"
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 stroke-black"
                      fill="none"
                    >
                      <path
                        d="M7.236 70.33c7.118-1.168 11.675-2.43 20.847-2.773 12.407-.464 18.038.452 30.114.278 6.512-.094 10.37-2.056 16.37-2.289 16.568-.644 30.894-.898 30.501-5.91-.638-8.131-6.46-13.173-11.245-18.2-7.932-8.33-16.193-14.612-16.624-20.099-.482-6.147 20.935 9.985 30.605 20.509 9.038 9.836 19.737 14.893 19.103 19.59-2.258 9.573-18.893 14.891-42.919 46.368"
                        stroke="currentColor"
                        strokeWidth="9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="path-animate"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-400">
                    Web Design, Management, Development
                  </p>
                </div>
                <div className="border-5 border-white rounded-2xl bg-gray-200 overflow-hidden p-0 lg:p-5 transform translate-y-10 md:translate-y-30 rotate-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                  <img
                    src="/dashboard.png"
                    alt="lineone"
                    className="rounded-xl "
                  />
                </div>
              </div>
            </a>
          </div>

          <div className="work-card bg-gray-100 flex w- h-full flex-col items-center justify-center px-5 py-24 gap-14 rounded-4xl">
            <img
              src="/ProjectFuture.avif"
              alt="Upcomming Projects"
              className="h-30 w-30 md:h-40 md:w-40 lg:h-60 lg:w-60"
            />
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl  font-black text-center tracking-tighter">
              NEW CASES ARE ON THE WAY, <br /> SLOWLY BUT SURELY 😅
            </h1>
          </div>
        </div>

        {/* <div className="w-full mt-32 flex flex-col justify-center items-center">
          <p
            style={{ fontWeight: 700 }}
            className="caveat rotate-5 text-gray-500 text-3xl px-10 md:px-0"
          >
            Every experience in my life is <br /> important and has taught me a
            lot
          </p>
        </div> */}

        {/* <Journey /> */}
      </section>

      {/* <Story /> */}
      <section id="story">
        <div className="w-full mt-32 flex flex-col justify-center items-center">
          <p
            style={{ fontWeight: 700 }}
            className="caveat rotate-5 text-gray-500 text-3xl px-10 md:px-0"
          >
            Every experience in my life is <br /> important and has taught me a
            lot
          </p>
        </div>
        <div className="hidden lg:flex flex-col lg:flex-row justify-between pl-26  mt-10">
          <img src="/aspire.png" alt="aspire" className="w-30 h-30" />
          <img src="sls.png" alt="sls" className="w-30 h-30" />
          <img src="pu.png" alt="pu" className="w-30 h-30" />
          <div className="pl-10">
            <img src="rev9.png" alt="rev9" className="w-30 h-30" />
          </div>

          <img src="/younow.png" alt="you" className="w-25 h-20" />
          <div></div>
        </div>
        <div className="w-full flex justify-center">
          <div className="hidden lg:block">
            <img src="/storyHor.avif" alt="hor" />
          </div>
        </div>

        <div className="flex w-full  justify-center mt-10">
          <div className="block lg:hidden">
            <img src="/storyVer.avif" alt="ver" className="max-h-screen" />
          </div>
          <div className="flex flex-col lg:hidden justify-between pl-26  mt-10">
            <img src="/aspire.png" alt="aspire" className="w-20 h-20" />
            <img src="sls.png" alt="sls" className="w-20 h-20" />
            <img src="pu.png" alt="pu" className="w-20 h-20" />

            <img src="rev9.png" alt="rev9" className="w-20 h-20" />

            <img src="/younow.png" alt="you" className="w-25 h-20" />
            <div></div>
          </div>
        </div>
      </section>
      {/* <Process /> */}
      <section id="process">
        <div
          // id="process"
          className="w-full flex flex-col gap-12 mt-30"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-black tracking-tighter text-center">
            WHAT MY PERFECT <br /> COLLAB LOOKS LIKE
          </h1>
          <div className="overflow-hidden  relative p-5">
            <img
              src="/introCOPY.avif"
              alt="intro"
              className="transform -translate-x-20 sm:-translate-x-30 md:-translate-x-40 lg:-translate-x-50 rotate-5"
            />
          </div>
          <div className="w-full flex items-center justify-center  ">
            <img
              src="Joke.webp"
              alt="process"
              className="w-[250px] rotate-12 rounded-2xl object-center object-cover"
            />
          </div>
        </div>
      </section>
      {/* <Connect /> */}
      <section id="connect">
        <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute top-1/2 left-1/2 w-60 h-25 md:w-90 md:h-40 object-cover scale-105 -translate-x-1/2 -translate-y-1/2"
            src="/cvEffects.webm"
            autoPlay
            loop
            muted
            playsInline
          />

          
          <div className="absolute inset-0  z-5"></div>

          {/* Main content */}
          <div className="relative z-10 flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 max-w-2xl mx-auto">
              {/* Hero text */}
              <div className="space-y-4">
                <p className="caveat text-lg sm:text-xl text-gray-500 max-w-lg mx-auto">
                  Ready to collaborate? View my CV and let's discuss your next
                  project.
                </p>
              </div>

              {/* View CV Button */}
              <div className="flex justify-center mt-24 sm:mt-28 md:mt-28 lg:mt-18">
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full shadow-2xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/50 active:scale-95"
                >
                  {/* Animated background gradient */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>

                  {/* Shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out rounded-full"></span>

                  {/* Button content */}
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>View CV</span>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>

                  {/* Outer glow ring */}
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
