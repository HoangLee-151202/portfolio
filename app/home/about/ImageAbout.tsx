import Image from "next/image";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

export default function ImageAbout() {
  return (
    <AnimatePresence mode="wait" propagate>
      <motion.div
        initial={{ opacity: 0, x: "5rem" }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1.5,
            ease: "easeOut",
          },
        }}
        exit={{
          opacity: 0,
          x: "5rem",
          transition: {
            duration: 0.5,
            ease: "easeIn",
          },
        }}
        className="flex justify-center"
      >
        <div className="relative w-[70%] rounded-sm">
          <Image
            src={"/assets/images/about.png"}
            loading="lazy"
            alt="About"
            fill
            className="object-cover rounded-sm !relative right-0"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
