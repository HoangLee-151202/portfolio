import { cn } from "@/lib/utils";
import { PersonalInfoData } from "@/app/mocks/personal-info";
import {
  CardAction,
} from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { ProjectsSkillFilter, ProjectsTypeFilter } from "@/app/mocks/projects";
import { useSkills } from "../context/SkillsContext";
interface FilterSkillsProps {}

export default function FilterSkills(props: FilterSkillsProps) {
  const { isFullScreen, setProjects, pagination, setPagination, filter, setFilter } = useSkills();
  const [open, setOpen] = useState(false);

  const isSelectEmpty = useRef(false);

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

      let items = PersonalInfoData.skills.projects;
      if (filter.type !== "") {
        items = items.filter(
          (item) =>  item.type === filter.type
        );
      }

      if (filter.skill !== "") {
        items = items.filter((item) => item.techs.some((tech) => tech.value === filter.skill))
      }
      

      items = items.slice(from - 1, to);
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

  const handleChangeFilter = (name: string, value: string) => {
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (isFullScreen) buildPagination(1);
  }, [isFullScreen, filter]);

  return (
    <AnimatePresence mode="wait">
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
                <p className="text-muted-foreground text-sm" aria-live="polite">
                  Page{" "}
                  <span className="text-foreground">{pagination.page}</span> of{" "}
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
                {filter.skill
                  ? Object.entries(ProjectsSkillFilter)
                      .flatMap(([category, { techs }]) =>
                        techs.map((tech) => ({
                          ...tech,
                          category, // key
                        }))
                      )
                      .find((skill) => skill.value === filter.skill)?.label
                  : "Select skill"}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search skill..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No skill found.</CommandEmpty>
                  {Object.entries(ProjectsSkillFilter).map(([key, value]) => (
                    <CommandGroup heading={value.label}>
                      {value.techs.map((tech) => (
                        <CommandItem
                          key={tech.value}
                          value={tech.value}
                          onSelect={(currentValue) => {
                            handleChangeFilter(
                              "skill",
                              currentValue === filter.skill ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          {tech.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              filter.skill === tech.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  ))}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <Select
            value={filter.type}
            onValueChange={(value) => {
              if (isSelectEmpty.current) {
                isSelectEmpty.current = false;
                return;
              }
              handleChangeFilter("type", value);
            }}
          >
            <SelectTrigger
              initial={{ opacity: 0, y: "1rem" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variant="outline"
              className="w-[180px]"
            >
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {ProjectsTypeFilter.map((item) => (
                <SelectItem
                key={item.value}
                  value={item.value}
                  onPointerDown={(e) => {
                    if (filter.type === item.value) {
                      e.preventDefault();
                      isSelectEmpty.current = true;
                      handleChangeFilter("type", "");
                    }
                  }}
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardAction>
      )}
    </AnimatePresence>
  );
}
