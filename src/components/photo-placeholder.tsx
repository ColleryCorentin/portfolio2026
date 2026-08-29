import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhotoPlaceholder({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-muted/40 text-muted-foreground",
        className
      )}
    >
      <ImageIcon className="size-6" />
      {label && <span className="px-4 text-center text-xs">{label}</span>}
    </div>
  );
}
