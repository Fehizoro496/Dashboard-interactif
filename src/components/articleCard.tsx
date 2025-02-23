import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";import Image from "next/image";
import { useDialogStore } from "@/stores/dialogStore";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Article from "@/types/Article";
import { motion } from 'framer-motion';
 
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
        <motion.div layout className="col-span-1">
            <Card className="h-full aspect-square group cursor-pointer grid grid-rows-3 divide-y" onClick={handleClick}>
            <CardHeader className="relative row-span-2 bg-none overflow-hidden w-full h-full m-0 space-y-0">
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
                className="-translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 scale-75 group-hover:scale-90 transition-transform duration-300"
                />
                <div className="absolute top-1/2 left-1/2 w-full mt-0 h-full -translate-y-1/2 -translate-x-1/2 rounded-t-lg inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute text-xs top-2 left-2 bg-primary/35 group-hover:bg-primary/70 transition-colors duration-300 font-bold px-2 py-1 rounded-md text-primary-foreground">
                {article.category}
                </div>
            </CardHeader>

            <div className="row-span-1 flex flex-col justify-between px-2 py-2 w-full">
                <CardContent className="bg-white rounded-b-lg p-0 space-y-1 w-full">
                <CardTitle className="line-clamp-1 font-bold">{article.title}</CardTitle>
                <CardDescription className="font-medium text-md">$ {article.price}</CardDescription>
                </CardContent>
                
                <CardFooter className="flex justify-between items-center p-0 w-full">
                <Button variant="outline" size="icon" onClick={() => setDialogType("modify")}>
                    <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="text-destructive" onClick={() => setDialogType("delete")}>
                    <Trash2 className="h-4 w-4" />
                </Button>
                </CardFooter>
            </div>
            </Card>
        </motion.div>
    </>
}