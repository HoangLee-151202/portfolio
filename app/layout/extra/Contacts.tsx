import { CONTACTS_EXTRA } from "@/app/config/extra";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import Link from "next/link";

export default function ContactsExtra() {
  return (
    <div className="fixed bottom-10 right-10 flex flex-col gap-2 z-10">
      {CONTACTS_EXTRA.map((contact, index) => {
        let delayTime = index * 0.05;
        return (
          <Link key={contact.name} href={contact.href} target="_blank">
            <Button
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
              size="icon-lg"
              className="border border-input bg-transparent text-zinc-100 rounded-[100%]"
            >
                <contact.icon className="hover:text-primary" />
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
