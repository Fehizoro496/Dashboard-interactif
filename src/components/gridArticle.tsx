import gridArticleProps from '../types/gridArticle'
import ArticleCard from "./articleCard"
export default function GridArticle (articles:gridArticleProps) {
    return <div className='flex-1 bg-green-300 grid grid-cols-4 gap-4'>
    {articles.listArticle.map((el)=>ArticleCard(el))}
    </div>
}