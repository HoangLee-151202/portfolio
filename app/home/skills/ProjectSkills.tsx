import Image from "next/image";
import { cn } from "@/lib/utils";
import { PersonalInfoData } from "@/app/mocks/personal-info";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { ViewEnum, ViewType } from ".";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeftIcon, ChevronsUpDown } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface ProjectSkillsProps {
  onChangeView: (view: ViewType) => void;
  viewActive: ViewType;
}

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function ProjectSkills(props: ProjectSkillsProps) {
  const { onChangeView, viewActive } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <AnimatePresence mode="wait" propagate>
      <Card
        initial={{ opacity: 0, x: "5rem", width: "50%", marginLeft: "2rem" }}
        animate={{
          opacity: 1,
          x: 0,
          width: viewActive === ViewEnum.Skills ? "50%" : "100%",
          marginLeft: viewActive === ViewEnum.Skills ? "2rem" : "0rem",
          transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
        }}
        exit={{
          opacity: 0,
          x: "5rem",
          transition: { duration: 0.5, ease: "easeIn" },
        }}
      >
        <CardHeader>
          <CardTitle>
            <div className="flex items-center">
              <AnimatePresence>
                {viewActive !== ViewEnum.Skills && (
                  <Button
                    initial={{ opacity: 0, width: 0, x: "-1rem" }}
                    animate={{ opacity: 1, width: "revert-layer", x: 0 }}
                    exit={{ opacity: 0, width: 0, x: "-1rem" }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    variant="ghost"
                    size="icon"
                    onClick={() => onChangeView("Skills")}
                  >
                    <ChevronLeftIcon strokeWidth={6} />
                  </Button>
                )}
              </AnimatePresence>

              {viewActive === ViewEnum.Skills ? (
                <Button
                  variant="ghost"
                  className="text-lg font-bold"
                  onClick={() => onChangeView("Projects")}
                >
                  🗂️
                  <span className="ml-1">Projects</span>
                </Button>
              ) : (
                <h5 className="font-bold pl-4">
                  🗂️
                  <span className="ml-3">Projects</span>
                </h5>
              )}
            </div>
          </CardTitle>
          {viewActive === ViewEnum.Projects && (
            <CardAction className="flex gap-4">
              <Pagination initial={{opacity: 0, y: "1rem", display: "none"}} animate={{opacity: 1, y: 0, display: "flex"}} transition={{duration: 0.5, delay: 1.7}}>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                  initial={{opacity: 0, y: "1rem", display: "none"}} animate={{opacity: 1, y: 0, display: "flex"}} transition={{duration: 0.5, delay: 1.5}}
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                  >
                    {value
                      ? frameworks.find(
                          (framework) => framework.value === value
                        )?.label
                      : "Select skill..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search skill..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? "" : currentValue
                              );
                              setOpen(false);
                            }}
                          >
                            {framework.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                value === framework.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <Select >
                <SelectTrigger initial={{opacity: 0, y: "1rem", display: "none"}} animate={{opacity: 1, y: 0, display: "flex"}} transition={{duration: 0.5, delay: 1.3}} className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </CardAction>
          )}
        </CardHeader>
        <CardContent
          animate={{
            gridTemplateColumns:
              viewActive === ViewEnum.Skills
                ? "repeat(2, minmax(0, 1fr))"
                : "repeat(4, minmax(0, 1fr))",
          }}
          transition={{ delay: 0.5 }}
          className={cn("grid gap-x-8 gap-y-6")}
        >
          <AnimatePresence>
            {(viewActive === ViewEnum.Skills
              ? PersonalInfoData.skills.projectsOutstanding
              : PersonalInfoData.skills.projects
            ).map((item, index) => {
              return (
                <motion.figure
                  initial={{ opacity: 0.9, scale: 0, display: "none" }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    display: "block",
                    transition: {
                      duration: 0.3,
                      delay: index * 0.05 + 1.3,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    display: "none",
                    transition: { duration: 0.5 },
                  }}
                  key={`${viewActive}-${item.name}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-[16/9] w-full bg-zinc-700 rounded-sm cursor-pointer"
                >
                  <Image
                    src={item.img}
                    loading="lazy"
                    alt="Project"
                    fill
                    className="object-cover rounded-sm !relative"
                  />
                  <figcaption className="font-bold px-4 py-2 flex items-center">
                    <span className="after:border-r-2 after:mx-2">
                      {item.name}
                    </span>
                    <div className="flex gap-2">
                      {item.techs.map((tech, index) => {
                        return (
                          <Tooltip key={`${item.name}-${index}`}>
                            <TooltipTrigger asChild>
                              <div className="cursor-pointer">
                                <tech.icon width={20} height={20} />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{tech.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                    </div>
                  </figcaption>
                </motion.figure>
              );
            })}
          </AnimatePresence>
        </CardContent>
      </Card>
    </AnimatePresence>
  );
}
