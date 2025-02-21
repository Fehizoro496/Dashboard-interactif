import { useDeleteDialogStore } from "@/stores/deleteDialogStore";
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

  const DeleteConfirmDialog = () => {

    const {isDeleteDialogOpen,toogleDeleteDialogIsOpen,articleToDelete} = useDeleteDialogStore()
    const {deleteMutation} = useArticles()
    const {deleteArticle,listArticles} = useListArticleStore()
    // setArticleToDelete(article?)

    const handleDelete = ()=>{
        if (articleToDelete) {
            deleteMutation.mutate(articleToDelete, {
                onSuccess: (data:void, variables:Article, context:unknown) => {
                    deleteArticle(variables);
                    console.log(listArticles);
                    toogleDeleteDialogIsOpen();
                },
            });
        }
    }

    return (
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={toogleDeleteDialogIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Product</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{articleToDelete?.title}"? 
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
  