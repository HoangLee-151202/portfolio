import ContentHero from "./ContentHero";
import ImageHero from "./ImageHero";
import * as motion from "motion/react-client";

export default function Hero() {
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
