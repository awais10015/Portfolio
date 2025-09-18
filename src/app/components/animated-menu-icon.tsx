"use client";
import { useEffect, useState } from "react";

interface AnimatedMenuIconProps {
  isOpen: boolean;
  className?: string;
}

export default function AnimatedMenuIcon({
  isOpen,
  className = "h-8 w-8",
}: AnimatedMenuIconProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, [isOpen]);

  if (isOpen) {
    // Close/X icon (menu2.svg)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        className={className}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Close menu"
      >
        <defs>
          <clipPath id="lottie_clip_close">
            <rect width="400" height="400" x="0" y="0" />
          </clipPath>
        </defs>

        <g clipPath="url(#lottie_clip_close)">
          {/* First diagonal line */}
          <g
            transform="matrix(0.7071067690849304 0.7071067690849304 -0.7071067690849304 0.7071067690849304 188.05499267578125 188.3730010986328)"
            opacity="1"
          >
            <g transform="matrix(2.9994091987609863 -0.43158024549484253 0.43158024549484253 2.9994091987609863 0 0)">
              <path
                d="M52.569 0.335 C44.373 3.794 35.824 0.491 18.405 -0.164 C12.096 -0.401 7.89 1.252 1.056 0.836 C-11.617 0.064 -17.444 -1.29 -30.488 -1.799 C-40.131 -2.175 -45.011 -1.273 -52.569 -0.665"
                fill="none"
                stroke="currentColor"
                strokeOpacity="1"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={animate ? "animate-draw-in" : ""}
                style={{
                  strokeDasharray: "200",
                  strokeDashoffset: "200",
                  animationDelay: animate ? "0s" : "0s", // first
                }}
              />
            </g>
          </g>

          {/* Second diagonal line */}
          <g
            transform="matrix(-0.6560590267181396 0.7547096014022827 -0.7547096014022827 -0.6560590267181396 201.38800048828125 196.89700317382812)"
            opacity="1"
          >
            <g transform="matrix(3.0155417919158936 -0.2987055778503418 0.2987055778503418 3.0155417919158936 0 0)">
              <path
                d="M50.518 0.277 C42.642 3.136 34.427 0.405 17.687 -0.136 C11.624 -0.332 7.582 1.035 1.014 0.691 C-11.165 0.053 -16.764 -1.066 -29.299 -1.487 C-38.565 -1.798 -43.255 -1.052 -50.518 -0.55"
                fill="none"
                stroke="currentColor"
                strokeOpacity="1"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={animate ? "animate-draw-in" : ""}
                style={{
                  strokeDasharray: "200",
                  strokeDashoffset: "200",
                  animationDelay: animate ? "0.6s" : "0s", // second
                }}
              />
            </g>
          </g>
        </g>
      </svg>
    );
  }

  // Hamburger menu icon (menu1.svg)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Open menu"
    >
      <defs>
        <clipPath id="lottie_clip_open">
          <rect width="400" height="400" x="0" y="0" />
        </clipPath>
      </defs>

      <g clipPath="url(#lottie_clip_open)">
        {/* Top line */}
        <g transform="matrix(-1 0 0 -1 201.388 324.897)" opacity="1">
          <g
            transform="matrix(3.01554179 -0.29870558 0.29870558 3.01554179 0 0)"
            opacity="1"
          >
            <path
              key={`line1-${isOpen}`}
              d="M50.518 0.277 C42.642 3.136 34.427 0.405 17.687 -0.136 C11.624 -0.332 7.582 1.035 1.014 0.691 C-11.165 0.053 -16.764 -1.066 -29.299 -1.487 C-38.565 -1.798 -43.255 -1.052 -50.518 -0.55"
              stroke="currentColor"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={animate ? "animate-draw-in" : ""}
              style={{
                strokeDasharray: "200",
                strokeDashoffset: "200",
                ["--dash-length" as any]: "200", // pass custom var
                animationDelay: animate ? "0s" : "0s",
              }}
            />
          </g>
        </g>

        {/* Middle line */}
        <g transform="matrix(-1 0 0 -1 206.03 204.961)" opacity="1">
          <g
            transform="matrix(3.03029990 0.00084622 -0.00084622 3.03029990 0 0)"
            opacity="1"
          >
            <path
              key={`line1-${isOpen}`}
              d="M42.76 0.653 C29.048 -2.295 14.638 1.921 0.859 1.068 C-9.449 0.43 -14.19 -0.689 -24.8 -1.11 C-32.643 -1.421 -36.612 -0.675 -42.76 -0.173"
              stroke="currentColor"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={animate ? "animate-draw-in" : ""}
              style={{
                strokeDasharray: "200",
                strokeDashoffset: "200",
                ["--dash-length" as any]: "200",
                animationDelay: animate ? "0.6s" : "0s", // wait 0.6s
              }}
            />
          </g>
        </g>

        {/* Bottom line */}
        <g transform="translate(188.055 78.373)" opacity="1">
          <g
            transform="matrix(2.99940920 -0.43158025 0.43158025 2.99940920 0 0)"
            opacity="1"
          >
            <path
              key={`line1-${isOpen}`}
              d="M52.569 0.335 C44.373 3.794 35.824 0.491 18.405 -0.164 C12.096 -0.401 7.89 1.252 1.056 0.836 C-11.617 0.064 -17.444 -1.29 -30.488 -1.799 C-40.131 -2.175 -45.011 -1.273 -52.569 -0.665"
              stroke="currentColor"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={animate ? "animate-draw-in" : ""}
              style={{
                strokeDasharray: "200",
                strokeDashoffset: "200",
                ["--dash-length" as any]: "200",
                animationDelay: animate ? "1.2s" : "0s", // wait longer
              }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
