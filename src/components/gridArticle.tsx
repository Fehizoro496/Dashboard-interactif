"use client"
import { useFilterStore } from '@/stores/filterStore'
import gridArticleProps from '../types/gridArticle'
import ArticleCard from "./articleCard"
import { useListArticleStore } from '@/stores/listArticleStore'
export default function GridArticle () {

    const {searchQuerry,filterCategory} = useFilterStore()
    const {listArticles} = useListArticleStore()
    
    let filteredArticle = listArticles.filter(article => 
        (article.title.includes(searchQuerry))
        && 
        (filterCategory==="all" || article.category === filterCategory))

    return <div className='flex-1 grid gap-4 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
    {filteredArticle.map((el)=>ArticleCard(el))}
    </div>
}