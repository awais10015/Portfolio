"use client";
import { useEffect, useState } from "react";
import AnimatedMenuIcon from "./animated-menu-icon";

export default function Navbar() {
  const paths = [
    // Gentle wavy line
    "M5 5 Q 20 2, 40 6 T 80 4 T 95 5",
    // Slightly bumpy wave
    "M5 6 Q 15 3, 30 7 Q 45 4, 60 6 Q 75 3, 95 5",
    // Loose sketchy scribble
    "M5 5 C 15 2, 25 8, 35 5 C 45 3, 55 7, 65 4 C 75 6, 85 2, 95 5",
    // Small zigzag pattern
    "M5 5 L 15 7 L 25 4 L 35 6 L 45 3 L 55 6 L 65 4 L 75 7 L 85 5 L 95 6",
    // Organic wavy with variations
    "M5 6 Q 12 3, 25 5 Q 38 8, 50 4 Q 62 2, 75 6 Q 88 4, 95 5",
    // Double line effect
    "M5 5 Q 25 2, 50 6 T 95 4 M5 7 Q 25 4, 50 8 T 95 6",
    // Messy hand-drawn style
    "M5 5 C 12 2, 18 8, 28 4 C 38 6, 48 3, 58 5 C 68 7, 78 2, 88 6 C 92 4, 95 5",
    // Subtle wave with tiny bumps
    "M5 5 Q 20 3, 35 6 Q 50 4, 65 5 Q 80 7, 95 4",
    // Irregular sketchy line
    "M5 6 L 12 4 Q 25 7, 38 5 L 52 6 Q 68 3, 82 5 L 95 6",
    // Loose curvy underline
    "M5 5 C 20 1, 30 9, 50 4 C 70 2, 80 8, 95 5",
    // Choppy wave pattern
    "M5 5 Q 15 8, 25 4 Q 35 2, 45 6 Q 55 8, 65 3 Q 75 1, 85 5 Q 90 7, 95 4",
    // Organic scribble
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

  // Reset clicked state after 150ms
  useEffect(() => {
    let timer;
    if (clicked) {
      timer = setTimeout(() => {
        setClicked(false);
      }, 150);
    }
    return () => clearTimeout(timer);
  }, [clicked]);

  // Pick a random underline path whenever active link changes
  useEffect(() => {
    if (active) {
      const pick = paths[Math.floor(Math.random() * paths.length)];
      setRandomPath(pick);
    }
  }, [active]);

  // on scroll underline active
  // Track the active section based on scroll position
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]"); // only sections with id
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`); // update active when section enters view
          }
        });
      },
      {
        threshold: [0.1, 0.3, 0.5], // triggers as soon as part of section is visible
        rootMargin: "-20% 0px -20% 0px", // middle of viewport
      } // 60% of section visible = active
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
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
  );
}