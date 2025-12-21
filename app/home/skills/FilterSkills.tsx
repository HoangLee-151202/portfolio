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
import { Spinner } from "@/components/ui/spinner";
interface FilterSkillsProps {
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

export default function FilterSkills(props: FilterSkillsProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [isShowFilter, setIsShowFilter] = useState(false);
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
    }, 800);
  }

  const goNext = () => {
    if (!pagination.hasNext) return;
    buildPagination(pagination.page + 1);
  };

  const goPrev = () => {
    if (!pagination.hasPrev) return;
    buildPagination(pagination.page - 1);
  };

  useEffect(() => {
    if (isShowFilter) buildPagination(1);
  }, []);

  return (
    <AnimatePresence>
            {isShowFilter && (
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
                        onClick={goPrev}
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
                          {pagination.totalPages}
                        </span>
                      </p>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext
                        isActive={pagination.hasNext}
                        className="border"
                        onClick={goNext}
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
  );
}
