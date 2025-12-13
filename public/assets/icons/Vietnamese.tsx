import type { SVGProps } from "react";

export function Vietnamese(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={640}
      height={480}
      viewBox="0 0 640 480"
      {...props}
    >
      <defs>
        <clipPath id="SVGMXVQpcWp">
          <path fillOpacity={0.7} d="M-85.3 0h682.6v512H-85.3z"></path>
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        clipPath="url(#SVGMXVQpcWp)"
        transform="translate(80)scale(.9375)"
      >
        <path fill="#da251d" d="M-128 0h768v512h-768z"></path>
        <path
          fill="#ff0"
          d="M349.6 381L260 314.3l-89 67.3L204 272l-89-67.7l110.1-1l34.2-109.4L294 203l110.1.1l-88.5 68.4l33.9 109.6z"
        ></path>
      </g>
    </svg>
  );
}
