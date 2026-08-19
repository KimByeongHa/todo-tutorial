import { cn } from "@/lib/utils";

export function VintagePanel({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "border-2 border-t-white border-l-white border-r-black/60 border-b-black/60 bg-card p-3 text-card-foreground shadow-[inset_1px_1px_0_0_#fff,inset_-1px_-1px_0_0_rgba(0,0,0,0.35)]",
        className
      )}
      {...props}
    />
  );
}
