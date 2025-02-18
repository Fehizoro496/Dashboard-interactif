"use client"
import { useFilterStore } from '@/stores/filterStore'
import gridArticleProps from '../types/gridArticle'
import ArticleCard from "./articleCard"
export default function GridArticle (articles:gridArticleProps) {

    const {searchQuerry,filterCategory} = useFilterStore()
    
    let filteredArticle = articles.listArticle.filter(article => 
        ( article.nom.includes(searchQuerry) 
        && 
        (filterCategory==="all" || article.categorie === filterCategory))
    )

    return <div className='flex-1 grid gap-4 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
    {filteredArticle.map((el)=>ArticleCard(el))}
    </div>
}