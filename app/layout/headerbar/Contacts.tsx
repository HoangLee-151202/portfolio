import { Sheet, SheetHeader, SheetDescription, SheetTitle, SheetContent, SheetTrigger, SheetClose, SheetFooter } from "@/components/ui/sheet";
import { Contact } from "@/public/assets/icons/Contact";
import { motion } from "motion/react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";
import { CONTACTS_EXTRA } from "@/app/config/extra";


export default function ContactsHeaderbar() {

  return (
    <Sheet>
      <SheetTrigger asChild>
      <motion.div initial={{opacity: 0, x: "5rem"}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8}} className="mt-[0.1rem]">
          <Contact
            className={"hover:text-primary cursor-pointer h-5"}
            // onClick={(e) => onchangeAction(index)}
          />
          </motion.div>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle className="text-prih-5mary">Contacts</SheetTitle>
        </SheetHeader>
        {CONTACTS_EXTRA.map((item, index) => (
          <Item variant="outline" size="sm" asChild className="w-fill">
        <a href={item.href} className="flex place-items-center justify-center gap-2">
          <ItemMedia>
            <item.icon width={14} height={14} className="mb-1"/>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{item.name}</ItemTitle>
          </ItemContent>
        </a>
      </Item>
        ))}
      </SheetContent>
    </Sheet>
  );
}
