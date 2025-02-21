import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
import Article from "@/types/Article";
import { useArticles } from "@/hooks/useArticles";
import { useListArticleStore } from "@/stores/listArticleStore";
import { useDialogStore } from "@/stores/dialogStore";

  const DeleteConfirmDialog = () => {

    const {isDialogOpen,toogleIsDialogOpen,selectedArticle,setSelectedArticle,typeDialog,setDialogType,clearState} = useDialogStore()
    const {deleteMutation} = useArticles()
    const {deleteArticleFromList,listArticles} = useListArticleStore()

    const handleDelete = ()=>{
        if (selectedArticle) {
            deleteMutation.mutate(selectedArticle, {
                onSuccess: (data:void, variables:Article, context:unknown) => {
                  console.log(variables);
                  deleteArticleFromList(variables);
                  console.log(listArticles);
                  toogleIsDialogOpen();
                  clearState();
                },
            });
        }
    }

    const handleClose = ()=>{
      toogleIsDialogOpen()
      clearState()
    }

    return (
      <AlertDialog open={(isDialogOpen && typeDialog==="delete")} onOpenChange={handleClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Product</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete <span className="font-bold">"{selectedArticle?.title}"</span> ? 
              <br />
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  
  export default DeleteConfirmDialog;
  