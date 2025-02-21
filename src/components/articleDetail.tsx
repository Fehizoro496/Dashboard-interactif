
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
import { useDialogStore } from "@/stores/dialogStore";
  import Article from "@/types/Article";


  const ArticleDetailsDialog = () => {

    const {isDialogOpen,toogleIsDialogOpen,selectedArticle,setSelectedArticle,typeDialog,setDialogType,clearState} = useDialogStore()

    const handleClose = ()=>{
      toogleIsDialogOpen();
      clearState();
    }



    return (
      <Dialog open={(isDialogOpen && typeDialog==="detail")} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedArticle?.title}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-full">
              <img
                src={selectedArticle?.image}
                alt={selectedArticle?.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Category
                </h4>
                <p className="text-lg">{selectedArticle?.category}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Price
                </h4>
                <p className="text-lg">${selectedArticle?.price.toFixed(2)}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Description
                </h4>
                <p className="text-base/relaxed">{selectedArticle?.description}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default ArticleDetailsDialog;
  