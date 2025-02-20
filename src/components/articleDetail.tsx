
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
import { useDetailDialogStore } from "@/stores/detailDialogStore";
  import Article from "@/types/Article";


  const ArticleDetailsDialog = () => {

    const {isDetailDialogOpen,toogleIsDetailDialogOpen,article} = useDetailDialogStore()

    return (
      <Dialog open={isDetailDialogOpen} onOpenChange={toogleIsDetailDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{article?.title}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-full">
              <img
                src={article?.image}
                alt={article?.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Category
                </h4>
                <p className="text-lg">{article?.category}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Price
                </h4>
                <p className="text-lg">${article?.price.toFixed(2)}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Description
                </h4>
                <p className="text-base/relaxed">{article?.description}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default ArticleDetailsDialog;
  