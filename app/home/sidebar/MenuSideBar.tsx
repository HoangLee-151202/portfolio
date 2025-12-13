import Link from "next/link";
import { MAIN_MENU, MAIN_MENU_TYPE } from "@/app/config/menu";
import { Icon } from "@iconify/react";
import { MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { useApp } from "@/app/context/AppContext";
import * as motion from "motion/react-client"

export default function MenuSideBar() {
  const { activeSection, onChangeActiveSection } = useApp();

  return (
    <nav className="mt-[25vh]">
      {MAIN_MENU.map((item, index) => {
        let delayTime = index * 0.05;
        return (
          <Link
            key={item.name}
            href=""
            onClick={(e) =>
              item.id !== activeSection && onChangeActiveSection(item.id)
            }
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
                "hover:text-primary-foreground font-bold text-xl flex my-8 w-fit",
                activeSection === item.id
                  ? "!text-primary"
                  : "text-sidebar-foreground",
              )}
            >
              <item.icon className="mr-2" width={24} height={24} />
              {item.name}
            </motion.div>
          </Link>
        );
      })}
    </nav>
  );
}
