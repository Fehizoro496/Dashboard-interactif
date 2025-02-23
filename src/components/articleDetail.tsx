import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDialogStore } from "@/stores/dialogStore";
import Image from "next/image";

const ArticleDetailsDialog = () => {
  const {
    isDialogOpen,
    toogleIsDialogOpen,
    selectedArticle,
    setSelectedArticle,
    typeDialog,
    setDialogType,
    clearState,
  } = useDialogStore();

  const handleClose = () => {
    toogleIsDialogOpen();
    clearState();
  };

  return (
    <Dialog
      open={isDialogOpen && typeDialog === "detail"}
      onOpenChange={handleClose}
    >
      <DialogContent className="sm:max-w-[600px] w-full">
      <DialogHeader>
        <DialogTitle>{selectedArticle?.title}</DialogTitle>
      </DialogHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-64 md:h-full col-span-1">
        {selectedArticle?.image && (
          <Image
          unoptimized
          src={selectedArticle?.image}
          alt={selectedArticle?.image}
          width={1}
          height={1}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          priority
          className="-translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 scale-75"
          />
        )}
        </div>
        <div className="space-y-4 col-span-1 md:col-span-2">
        <div className="flex justify-between items-center">
          <div>
          <p className="text-md bg-primary/50 font-bold px-4 py-2 rounded-sm text-black/90">
            {selectedArticle?.category}
          </p>
          </div>
          <div>
          <p className="text-md font-bold text-primary text-lg">
            $ {selectedArticle?.price.toFixed(2)}
          </p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-muted-foreground">
          Description
          </h4>
          <p className="text-sm overflow-y-scroll">
          {selectedArticle?.description}
          </p>
        </div>
        </div>
      </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleDetailsDialog;
