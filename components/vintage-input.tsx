import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function VintageInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      className={cn(
        "rounded-none border-2 border-t-black/60 border-l-black/60 border-r-white border-b-white bg-input text-foreground shadow-[inset_1px_1px_0_0_rgba(0,0,0,0.35),inset_-1px_-1px_0_0_#fff]",
        className
      )}
      {...props}
    />
  );
}
