import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Article, { ArticleFormData } from "@/types/Article";
import { useForm, SubmitHandler, set } from 'react-hook-form';
import { useAddModalStore } from '@/stores/addModalStore';
import { useArticles } from '@/hooks/useArticles';
import { useListArticleStore } from '@/stores/listArticleStore';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useFilterStore } from '@/stores/filterStore';
import Image from "next/image";
import { toast } from 'sonner';
import { ImagePlaceholder } from "./ui/imagePlaceholder";

const articleSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    price: z.number().min(0, 'Price must be positive'),
    description: z.string().min(1, 'Description is required'),
    category: z.string().min(1, 'Category is required'),
    image: z.string().url('Invalid URL'),
});

const AddArticleModal = () => {
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<ArticleFormData>({
        resolver: zodResolver(articleSchema),
    });

    // Watch the image field for changes
    const imageUrl = watch('image');

    const { isOpen, toogleIsOpen } = useAddModalStore();

    const {addArticleToList,listArticles} = useListArticleStore()

    const {resetFilter} = useFilterStore()

    const {addMutation} = useArticles()

    const onSubmit: SubmitHandler<ArticleFormData> = (data) => {
        addMutation.mutate(data, {
            onSuccess: (returnedData: Article) => {
            addArticleToList({ ...returnedData, id: listArticles.length + 1 });
            console.log(listArticles);
            resetFilter();
            toogleIsOpen();
            reset();
            toast.success('Article added successfully!');
            }
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={toogleIsOpen}>
            <DialogContent className="max-w-[425px] md:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Add New Article</DialogTitle>
                    <DialogDescription/>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex flex-col sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center max-h-[450px] overflow-y-scroll md:max-h-full">
                        <div className="relative aspect-square col-span-1">
                            {imageUrl ? (
                                <Image 
                                    src={imageUrl}
                                    alt="Preview"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            ) : (
                                <ImagePlaceholder />
                            )}
                        </div>
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
                                {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="image">Image URL</Label>
                                <Input id="image" {...register('image')} required />
                                {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="description">Description</Label>
                                <Textarea id="description" {...register('description')} required />
                                {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
                            </div>
                        </div>
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
