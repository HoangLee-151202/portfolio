import { AnimatedLink } from "@/app/components/AnimatedLink";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function LogoSideBar() {
  const pathname = usePathname();

  return (
    <AnimatedLink
      href={pathname !== "/" ? "/" : undefined}
    >
         <div className="relative h-5 sm:h-auto sm:w-auto">
          <Image
            src={"/assets/images/logo.png"}
            loading="lazy"
            alt="logo"
            fill
            className="!relative"
          />
        </div>
    </AnimatedLink>
  );
}
