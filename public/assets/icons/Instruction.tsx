import React from "react";
import type { SVGProps } from "react";

export function Instruction(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={4}>
        <rect
          width={40}
          height={32}
          x={4}
          y={8}
          strokeLinejoin="round"
          rx={2}
        ></rect>
        <path
          fill="currentColor"
          strokeLinejoin="round"
          d="M4 10a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v6H4z"
        ></path>
        <path d="m25 23l-2 11"></path>
        <path strokeLinejoin="round" d="m31 23l6 5l-6 6M17 23l-6 5l6 6"></path>
      </g>
    </svg>
  );
}
