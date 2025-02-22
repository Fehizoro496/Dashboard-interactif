import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Article, { ArticleFormData } from "@/types/Article";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useArticles } from '@/hooks/useArticles';
import { useListArticleStore } from '@/stores/listArticleStore';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useDialogStore } from '@/stores/dialogStore';
import Image from "next/image";
import { toast } from 'sonner';

const articleSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    price: z.number().min(0, 'Price must be positive'),
    description: z.string().min(1, 'Description is required'),
    category: z.string().min(1, 'Category is required'),
    image: z.string().url('Invalid URL'),
});

const UpdateArticleModal = () => {

    const {selectedArticle,isDialogOpen,clearState,typeDialog,toogleIsDialogOpen} = useDialogStore()
    
    const initialValue:ArticleFormData={
        title : selectedArticle?selectedArticle.title:'',
        description : selectedArticle?selectedArticle.description:'',
        category : selectedArticle?selectedArticle.category:'',
        image : selectedArticle?selectedArticle.image:'',
        price : selectedArticle?selectedArticle.price:0,
    }
    const { register, handleSubmit, formState: { errors } ,reset, watch} = useForm<ArticleFormData>({
        resolver: zodResolver(articleSchema),
        values: initialValue
    });

    // Watch the image field for changes
    const imageUrl = watch('image');

    const {updateArticle,listArticles} = useListArticleStore()

    const {updateMutation} = useArticles()
    
    const handleClose=()=>{
        toogleIsDialogOpen();
        clearState();
        reset();
    }

    const onSubmit: SubmitHandler<ArticleFormData> = (data) => {
        if (selectedArticle) {
            updateMutation.mutate({
            ...data, id: selectedArticle.id,
            rating: selectedArticle.rating
            }, {
            onSuccess: (returnedData: Article) => {
                updateArticle(returnedData);
                console.log(listArticles);
                handleClose();
                // Show success notification
                toast.success('Article updated successfully');
            }
            });
        }
    };

    return (
        <Dialog open={isDialogOpen && typeDialog==="modify"} onOpenChange={handleClose}>
            <DialogContent className="max-w-[425px] md:max-w-[600px]">
            <DialogHeader>
                <DialogTitle>Modify an Article</DialogTitle>
                <DialogDescription/>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-col sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center max-h-[450px] overflow-y-scroll md:max-h-full">
                    {imageUrl && (
                        <div className="relative aspect-square col-span-1">
                        <Image 
                            src={imageUrl}
                            alt="Preview"
                            fill
                            className="object-contain"
                            unoptimized
                        />
                        </div>
                    )}
                <div className="space-y-4 col-span-2">
                    <div className="space-y-1">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" {...register('title')} required />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                    </div>
                    <div className="space-y-1">
                    <Label htmlFor="price">Price</Label>
                    <Input id="price" type="number" step={0.01} {...register('price', { valueAsNumber: true })} required />
                    {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                    </div>
                    <div className="space-y-1">
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" {...register('category')} required />
                    {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
                    </div>
                    <div className="space-y-1">
                    <Label htmlFor="image">Image URL</Label>
                    <Input id="image" {...register('image')} required />
                    {errors.image && <p className="text-red-500 text-xs">{errors.image.message}</p>}
                    </div>
                    <div className="space-y-1">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" {...register('description')} required />
                    {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
                    </div>
                </div>
                </div>
                <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={handleClose}>
                    Cancel
                </Button>
                <Button type="submit">Modify</Button>
                </div>
            </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateArticleModal;