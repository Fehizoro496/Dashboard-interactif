"use client"
import { useFilterStore } from '@/stores/filterStore'
import ArticleCard from "./articleCard"
import { useListArticleStore } from '@/stores/listArticleStore'
import { useArticles } from '@/hooks/useArticles'
import Article from '@/types/Article'
export default function GridArticle () {

  const { articles, isLoading, error} = useArticles();

    const {searchQuerry,filterCategory} = useFilterStore()
    // const {listArticles} = useListArticleStore()
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Failed</div>

    let listArticles = articles;
    
    let filteredArticle = listArticles.filter((article:Article) => 
        (article.title.includes(searchQuerry))
        && 
        (filterCategory==="all" || article.category === filterCategory))

    return <div className='flex-1 grid gap-4 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
    {filteredArticle.map((el:Article)=>ArticleCard(el))}
    </div>
}