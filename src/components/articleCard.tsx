import Article from '../types/Article'
export default function ArticleCard(article:Article){
    return <div className=' aspect-square bg-blue-200 rounded-lg w-full max-w-96 min-w-60 sm:min-w-72 md:min-w-80 grid place-content-center' key={article.nom}>{article.nom}</div>
} 