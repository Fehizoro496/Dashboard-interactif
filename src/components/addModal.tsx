import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Article, { ArticleFormData } from "@/types/Article";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAddModalStore } from '@/stores/addModalStore';
import { useArticles } from '@/hooks/useArticles';
import { useListArticleStore } from '@/stores/listArticleStore';
import { DialogDescription } from '@radix-ui/react-dialog';

const articleSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    price: z.number().min(0, 'Price must be positive'),
    description: z.string().min(1, 'Description is required'),
    category: z.string().min(1, 'Category is required'),
    image: z.string().url('Invalid URL'),
});

const AddArticleModal = () => {
    const { register, handleSubmit, formState: { errors } ,reset} = useForm<ArticleFormData>({
        resolver: zodResolver(articleSchema),
    });

    const { isOpen, toogleIsOpen } = useAddModalStore();

    const {addArticle,listArticles} = useListArticleStore()

    const {addMutation} = useArticles()

    const onSubmit: SubmitHandler<ArticleFormData> = (data) => {
        //TODO send data to the API then update listArticle in the store
        addMutation.mutate(data, {
            onSuccess: (returnedData:Article) => {
              addArticle({...returnedData,id:listArticles.length});
              toogleIsOpen();
              reset();
            },
          });
    };

    return (
        <Dialog open={isOpen} onOpenChange={toogleIsOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Article</DialogTitle>
                    <DialogDescription/>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" {...register('title')} required />
                        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="price">Price</Label>
                        <Input id="price" type="number" {...register('price', { valueAsNumber: true })} required />
                        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Input id="category" {...register('category')} required />
                        {errors.category && <p className="text-red-500">{errors.category.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="image">Image URL</Label>
                        <Input id="image" {...register('image')} required />
                        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" {...register('description')} required />
                        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button type="button" variant="outline" onClick={toogleIsOpen}>
                            Cancel
                        </Button>
                        <Button type="submit">Add Article</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddArticleModal;
