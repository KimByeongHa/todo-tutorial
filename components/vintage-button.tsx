import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function VintageButton({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn(
        "rounded-none border-2 border-t-white border-l-white border-r-black/60 border-b-black/60 shadow-[inset_1px_1px_0_0_#fff,inset_-1px_-1px_0_0_rgba(0,0,0,0.35)] active:border-t-black/60 active:border-l-black/60 active:border-r-white active:border-b-white active:shadow-[inset_1px_1px_0_0_rgba(0,0,0,0.35),inset_-1px_-1px_0_0_#fff]",
        "data-[variant=default]:bg-primary data-[variant=default]:text-primary-foreground data-[variant=default]:hover:bg-primary",
        "data-[variant=outline]:bg-secondary data-[variant=outline]:text-secondary-foreground data-[variant=outline]:hover:bg-secondary",
        "data-[variant=ghost]:border-transparent data-[variant=ghost]:bg-transparent data-[variant=ghost]:shadow-none data-[variant=ghost]:hover:bg-foreground/10",
        className
      )}
      {...props}
    />
  );
}
