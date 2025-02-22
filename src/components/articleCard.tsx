import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";import Image from "next/image";
import { useDialogStore } from "@/stores/dialogStore";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Article from "@/types/Article";
 
interface ArticleCardProps {
    article:Article
}


export default function ArticleCard({article}:ArticleCardProps){
    
    const {toogleIsDialogOpen,setDialogType,setSelectedArticle} = useDialogStore()

    const handleClick = ()=>{
        setSelectedArticle(article)
        toogleIsDialogOpen()
    } 

    return <>
        <Card className="aspect-square w-full max-w-72 min-w-60 sm:min-w-72 md:min-w-80 grid grid-rows-3 divide-y" onClick={handleClick}>
            <CardHeader className="relative row-span-2 bg-none overflow-hidden w-full">
                <Image
                    unoptimized
                    src={article.image}
                    alt={article.image}
                    width={1}
                    height={1}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                    priority
                    className="scale-75"
                />
                <div className="absolute text-xs top-2 left-2 bg-primary/35 font-bold px-2 py-1 rounded-sm text-black/65">
                    {article.category}
                </div>
            </CardHeader>
            <CardContent className="row-span-1 bg-white rounded-b-lg px-4 py-2 flex flex-col justify-evenly">
                <CardTitle className="line-clamp-1 font-bold">{article.title}</CardTitle>
                <CardDescription className="font-medium">${article.price}</CardDescription>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" size="icon" onClick={() => setDialogType("modify")}>
                        <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="text-destructive" onClick={() => setDialogType("delete")}>
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </CardFooter>
            </CardContent>
        </Card>
    </>
}