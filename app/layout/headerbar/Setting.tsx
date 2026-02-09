import { Sheet, SheetHeader, SheetDescription, SheetTitle, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Setting } from "@/public/assets/icons/Setting";
import { motion } from "motion/react";

export default function SettingHeaderbar() {

  return (
    <Sheet>
      <SheetTrigger asChild>
      <motion.div initial={{opacity: 0, x: "5rem"}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8}}>
          <Setting
            className={"hover:text-primary cursor-pointer h-5"}
          />
          </motion.div>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Setting</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          123
        </div>
      </SheetContent>
    </Sheet>
  );
}
