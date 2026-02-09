"use client";

import { motion } from "motion/react";
import ContentHero from "./hero/Content";
import ImageHero from "./hero/Image";

export default function Page() {

  return (
    <motion.article
    className="grid md:grid-cols-2 gap-8 items-center h-[100vh] align-middle pb-[20vh]"
    id="hero"
  > 
    <ContentHero/>
    <ImageHero/>
  </motion.article>
  );
}
