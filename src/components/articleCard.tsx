import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";import Image from "next/image";
import Article from '../types/Article'
import { useDeleteDialogStore } from "@/stores/deleteDialogStore";

interface ArticleCardProps {
    article:Article
    setArticleDetail:(article:Article)=>void,
    toogleIsDetailDialogOpen:()=>void
}


export default function ArticleCard(params:ArticleCardProps){
    
    const {toogleDeleteDialogIsOpen} = useDeleteDialogStore()

    const handleClick = ()=>{
        params.setArticleDetail(params.article)
        params.toogleIsDetailDialogOpen()
    } 

    return <>
        <div className='aspect-square border shadow-md rounded-lg w-full max-w-72 min-w-60 sm:min-w-72 md:min-w-80 grid grid-rows-3 divide-y' onClick={handleClick}>
            
            <div className='relative row-span-2 bg-none overflow-hidden w-full'>
                <Image unoptimized src={params.article.image} alt={params.article.image} 
                    width={1}
                    height={1}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                    }} 
                className="scale-75"/>
                <div className="absolute text-xs top-2 left-2 bg-primary/35 font-bold px-2 py-1 rounded-sm text-primary-foreground">{params.article.category}</div>
            </div>

            <div className='row-span-1 bg-white rounded-b-lg px-4 py-2 flex flex-col justify-evenly'>
                <div className="line-clamp-1 font-bold">
                    {params.article.title}
                </div>

                <div className="font-medium">
                    $ {params.article.price}
                </div>

                <div className="flex justify-between">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {}}
                    >
                        <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="text-destructive"
                        onClick={toogleDeleteDialogIsOpen}
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>

            </div>
        </div>
    </>
}