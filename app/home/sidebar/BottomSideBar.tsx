import Link from "next/link";
import { PersonalInfoData } from "@/app/mocks/personal-info";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";

export default function BottomSideBar() {
  return (
    <div className="flex gap-4 fixed bottom-8">
      {PersonalInfoData.contacts.map((contact, index) => {
        let delayTime = index * 0.05;
        return (
          <Link key={contact.name} href={contact.href} target="_blank">
            <motion.div
              initial={{
                opacity: 0,
                y: "5rem",
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: delayTime,
              }}
            >
              <contact.icon
                className="hover:text-primary"
              />
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}
