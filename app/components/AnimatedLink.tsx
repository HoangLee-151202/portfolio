"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, MouseEventHandler } from "react";
import { usePageTransition } from "../context/PageTransitionContext";

type AnimatedLinkProps = {
  href?: string;
  delay?: number;
  children: React.ReactNode;
  className?: string;
};

export function AnimatedLink({
  href,
  delay = 500,
  children,
  className,
}: AnimatedLinkProps) {
  const router = useRouter();
  const pageTransition = usePageTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!href) return;

    pageTransition.start('exit')
    router.prefetch(href);

    setTimeout(() => {
      router.push(href);
    }, delay);
  };

  return (
    <Link href={href ?? '/'} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
