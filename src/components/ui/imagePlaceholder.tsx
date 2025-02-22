import { ImageIcon } from "lucide-react";

export function ImagePlaceholder() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-muted/10 rounded-md">
      <ImageIcon className="h-10 w-10 text-muted-foreground/30" />
    </div>
  );
}
