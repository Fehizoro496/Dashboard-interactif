import gridArticleProps from '../types/gridArticle'
import ArticleCard from "./articleCard"
export default function GridArticle (articles:gridArticleProps) {
    return <div className='flex-1 grid gap-4 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
    {articles.listArticle.map((el)=>ArticleCard(el))}
    </div>
}