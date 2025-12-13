import * as React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
Timeline.displayName = 'Timeline';

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  React.LiHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('group relative pb-8 pl-8', className)}
    {...props}
  />
));
TimelineItem.displayName = 'TimelineItem';

const TimelineHeader = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'mb-1 flex flex-col before:absolute before:left-2 sm:before:ml-[0.5rem] before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-orange-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-primary-foreground/95 after:bg-primary group-last:before:hidden sm:flex-row sm:before:left-0 sm:after:left-0 sm:after:ml-[0.5rem] after:rounded-[100%]',
      className
    )}
    {...props}
  />
));
TimelineHeader.displayName = 'TimelineHeader';

const TimelineTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('relative text-secondary-foreground', className)}
    {...props}
  >
    {children}
  </h5>
));
TimelineTitle.displayName = 'TimelineTitle';

const TimelineTime = ({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof Badge>) => {
  return (
    <Badge
      className={cn(
        'right-28 mb-3 inline-flex h-6 translate-y-0.5 items-center justify-center text-xs font-semibold uppercase sm:absolute sm:mb-0',
        className
      )}
      variant={variant}
      {...props}
    >
      {props.children}
    </Badge>
  );
};
TimelineTime.displayName = 'TimelineTime';

const TimelineDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-muted-foreground', className)}
    {...props}
  />
));
TimelineDescription.displayName = 'TimelineDescription';

export {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTime,
  TimelineTitle,
  TimelineDescription,
};