"use client"

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { AnimatedLink } from "./AnimatedLink";
import { usePathname } from "next/navigation";
import { JSX, SVGProps } from "react";

export type NavLinkType = {
  id: string,
  name: string,
  href: string,
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

interface NavLinksProps {
  links: NavLinkType[]
}

export default function NavLinks(props: NavLinksProps) {
  const {links} = props;
  const pathname = usePathname()
 
  return (
    <nav className="sm:mt-[25vh] flex sm:block">
      <div className="hidden sm:block">
      {links.map((item, index) => {
        let delayTime = index * 0.05;
        return (
          <AnimatedLink
            key={item.name}
            href={item.href}
          >
            <motion.div
              initial={{opacity: 0, x: "-5rem"}}
              animate={{opacity: 1, x: 0}}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: delayTime
              }}
              className={cn(
                "hover:text-primary-foreground font-bold text-sm sm:text-xl flex my-8 w-fit",
                ((pathname.includes(item.href) && item.href !== "/") || pathname === item.href)
                  ? "!text-primary"
                  : "text-sidebar-foreground",
              )}
            >
              <item.icon className="mr-2" width={24} height={24} />
              {item.name}
            </motion.div>
          </AnimatedLink>
        );
      })}
      </div>
    </nav>
  );
}
