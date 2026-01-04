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
import { useEffect, useState } from "react";
import { ViewEnum } from ".";
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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Spinner } from "@/components/ui/spinner";
import { BREADCRUM_SKILLS, BreadcrumbSkillsItem, BreadcrumSkillsType } from "@/app/config/menu";
interface ProjectsSkillsProps {
  onChangeView: (view: BreadcrumSkillsType) => void;
  viewActive: BreadcrumSkillsType;
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

type PaginationState = {
  page: number; // trang hiện tại (1-based)
  pageSize: number; // số item / trang
  totalItems: number; // tổng item

  totalPages: number; // tổng số trang

  isLoading: boolean;
  hasNext: boolean;
  hasPrev: boolean;
};

export default function ProjectsSkills(props: ProjectsSkillsProps) {
  const { onChangeView, viewActive } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [breadcrumb, setBreadcrumb] = useState<BreadcrumbSkillsItem[]>([BREADCRUM_SKILLS.projects]);
  const [projects, setProjects] = useState<
    typeof PersonalInfoData.skills.projects
  >([]);
  const [pagination, setPagination] = useState<PaginationState>({
    page: 1,
    pageSize: 10,
    totalItems: 0,

    totalPages: 0,

    isLoading: false,
    hasNext: false,
    hasPrev: false,
  });

  function buildPagination(
    page: number,
    pageSize = 12,
    totalItems = PersonalInfoData.skills.projects.length
  ) {
    setPagination((prev) => ({ ...prev, isLoading: true }));
    setTimeout(() => {
      const totalPages = Math.ceil(totalItems / pageSize);

      const safePage = Math.min(Math.max(page, 1), totalPages || 1);
      const from = totalItems === 0 ? 0 : (safePage - 1) * pageSize + 1;
      const to = Math.min(safePage * pageSize, totalItems);
      let items = PersonalInfoData.skills.projects.slice(from, to + 1);
      setProjects(items);
      setPagination({
        page: safePage,
        pageSize,
        totalItems,

        totalPages,

        isLoading: false,
        hasPrev: safePage > 1,
        hasNext: safePage < totalPages,
      });
    }, 1000);
  }

  const goNext = () => {
    if (!pagination.hasNext) return;
    buildPagination(pagination.page + 1);
  };

  const goPrev = () => {
    if (!pagination.hasPrev) return;
    buildPagination(pagination.page - 1);
  };

  const handleChangeView = (view: BreadcrumSkillsType) => {
    onChangeView(view);
    let isIndexPrev = breadcrumb.findIndex((item) => item.id === view)
    console.log('isIndexPrev: ', isIndexPrev)
    console.log(breadcrumb)
    if (isIndexPrev >= 0) {
      if (view === 'skills') {
        setBreadcrumb([BREADCRUM_SKILLS.projects])
      } else {
        setBreadcrumb((prev) => prev.slice(0, isIndexPrev + 1))
      }
      
    } else {
      
    }

    if (view === ViewEnum.Projects) {
      setBreadcrumb((prev) => [BREADCRUM_SKILLS.skills, ...prev])
    }
    
  }

  useEffect(() => {
    if (isFullScreen) buildPagination(1);
  }, [isFullScreen]);

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
        onAnimationComplete={(definition) => {
          if (typeof definition === "object" && "width" in definition) {
            if (definition.width === "100%") {
              setIsFullScreen(true);
            }
          }
        }}
        onAnimationStart={() => setIsFullScreen(false)}
      >
        <CardHeader>
          <CardTitle>
            <div className="flex items-center">
              {/* <AnimatePresence>
                {viewActive !== ViewEnum.Skills && (
                  <Button
                    initial={{ opacity: 0, width: 0, x: "-1rem" }}
                    animate={{ opacity: 1, width: "revert-layer", x: 0 }}
                    exit={{ opacity: 0, width: 0, x: "-1rem" }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      handleChangeView("skills");
                      setProjects([]);
                    }}
                  >
                    <ChevronLeftIcon strokeWidth={6} />
                  </Button>
                )}
              </AnimatePresence> */}
              <Breadcrumb>
                <BreadcrumbList>
                <AnimatePresence mode="wait" propagate>
                  {breadcrumb.map((item, index) => {
                    if (index !== 0 && index === breadcrumb.length - 1)
                      return (
                        <BreadcrumbItem id={item.id}>
                          <motion.h5 key={`breadcrum-${item.id}`}
                        initial={{opacity: 0, width: 0}}
                        animate={{opacity: 1, width: 'max-content', transition: {delay: isFullScreen ? 0 : 1.3, duration: 0.5}}}
                        exit={{opacity: 0, width: 0}} className="font-bold pl-4 text-nowrap overflow-hidden">
                            {item.icon}
                            <span className="ml-3">{item.label}</span>
                          </motion.h5>
                        </BreadcrumbItem>
                      );
                    return (
                      <>
                      
                      <BreadcrumbItem id={item.id}>
                      
                        <Button
                        key={`breadcrum-${item.id}`}
                        initial={{opacity: 0, width: 0}}
                        animate={{opacity: 1, width: 'max-content', transition: {delay: isFullScreen ? 0 : 1.3, duration: 0.5}}}
                        exit={{opacity: 0, width: 0}}
                          variant="ghost"
                          className={cn("text-lg font-bold", breadcrumb.length === 1 ? 'text-heading' : '')}
                          onClick={() => handleChangeView(item.id)}
                        >
                          {item.icon}
                          <span className="ml-1">{item.label}</span>
                        </Button>
                        
                      </BreadcrumbItem>
                      {index !== breadcrumb.length - 1 && <BreadcrumbSeparator />}
                      
                      </>
                    );
                  })}
                  </AnimatePresence>
                </BreadcrumbList>
              </Breadcrumb>
              {/* {viewActive === ViewEnum.Skills ? (
                <Button
                  variant="ghost"
                  className="text-lg font-bold"
                  onClick={() => handleChangeView("Projects")}
                >
                  🗂️
                  <span className="ml-1">Projects</span>
                </Button>
              ) : (
                <h5 className="font-bold pl-4">
                  🗂️
                  <span className="ml-3">Projects</span>
                </h5>
              )} */}
            </div>
          </CardTitle>
          <AnimatePresence>
            {isFullScreen && (
              <CardAction
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex gap-4"
              >
                <Pagination
                  initial={{ opacity: 0, y: "1rem" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <PaginationContent className="w-full justify-between">
                    <PaginationItem>
                      <PaginationPrevious
                        isActive={pagination.hasPrev}
                        className="border"
                        onClick={() => !pagination.isLoading && goPrev()}
                      />
                    </PaginationItem>
                    <PaginationItem>
                      <p
                        className="text-muted-foreground text-sm"
                        aria-live="polite"
                      >
                        Page{" "}
                        <span className="text-foreground">
                          {pagination.page}
                        </span>{" "}
                        of{" "}
                        <span className="text-foreground">
                          {pagination.totalPages ? pagination.totalPages : "-"}
                        </span>
                      </p>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext
                        isActive={pagination.hasNext}
                        className="border"
                        onClick={() => !pagination.isLoading && goNext()}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      initial={{ opacity: 0, y: "1rem" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
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
                <Select>
                  <SelectTrigger
                    initial={{ opacity: 0, y: "1rem" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    variant="outline"
                    className="w-[180px]"
                  >
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
          </AnimatePresence>
        </CardHeader>
        <CardContent
          animate={{
            gridTemplateColumns:
              viewActive === ViewEnum.Skills
                ? "repeat(2, minmax(0, 1fr))"
                : "repeat(4, minmax(0, 1fr))",
          }}
          transition={{ delay: 0.5 }}
          className={cn("grid content-start h-full gap-x-8 gap-y-6 relative")}
        >
          <AnimatePresence>
            {pagination.isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <Spinner
                  initial={{ display: "none" }}
                  animate={{ display: "block" }}
                  transition={{ delay: 0.8 }}
                />
              </div>
            ) : (
              (viewActive === ViewEnum.Skills
                ? PersonalInfoData.skills.projectsOutstanding
                : projects
              ).map((item, index) => {
                return (
                  <motion.figure
                    key={`${viewActive}-${item.name}-${index}`}
                    initial={{ opacity: 0.9, scale: 0, display: "none" }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      display: "block",
                      transition: {
                        duration: 0.3,
                        delay: index * 0.05 + (projects.length ? 0 : 1.3),
                      },
                    }}
                    exit={{
                      opacity: 0,
                      display: "none",
                      transition: { duration: 0.5 },
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-[16/9] w-full bg-zinc-700 rounded-sm cursor-pointer"
                    onClick={() => handleChangeView("project")}
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
              })
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </AnimatePresence>
  );
}
