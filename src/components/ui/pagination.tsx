import * as React from "react";
import { MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps } from "@/components/ui/button";
import { Icon } from "../Common/Icon";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn(
      "mx-auto mt-4 mb-8 flex w-full h-8 justify-center",
      className
    )}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
  disabled?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  disabled = false,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    role="link"
    aria-disabled={disabled}
    className={cn(
      "flex items-center justify-center w-8 h-8 py-1 px-2 text-sm text-black-700 rounded-lg hover:bg-secondary-200 cursor-pointer",
      disabled && "cursor-not-allowed pointer-events-none",
      isActive && "bg-black-900 text-white",
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn("hover:bg-transparent", className)}
    {...props}
  >
    <Icon iconType="chevronLeft" size="m" />
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn("hover:bg-transparent", className)}
    {...props}
  >
    <Icon iconType="chevronRight" size="m" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationFirst = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to first page"
    className={cn("hover:bg-transparent", className)}
    {...props}
  >
    <Icon iconType="arrowFirst" size="m" />
  </PaginationLink>
);
PaginationFirst.displayName = "PaginationFirst";

const PaginationLast = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to last page"
    className={cn("hover:bg-transparent", className)}
    {...props}
  >
    <Icon iconType="arrowLast" size="m" />
  </PaginationLink>
);
PaginationLast.displayName = "PaginationLast";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
};
