import Article from '../types/Article'
export default function ArticleCard(article:Article){
    return <div className='w-full aspect-square bg-white border-4 border-slate-400 grid place-content-center' key={article.nom}>{article.nom}</div>
} 