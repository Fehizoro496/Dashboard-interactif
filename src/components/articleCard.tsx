import Article from '../types/Article'
export default function ArticleCard(article:Article){
    return <div className=' aspect-square border bg-blue-200 rounded-lg w-full max-w-96 min-w-60 sm:min-w-72 md:min-w-80 grid grid-rows-3' key={article.nom}>
        <div className='row-span-2 bg-none'>{article.nom}</div>
        <div className='row-span-1 bg-white rounded-b-lg'>{article.nom} <br />{article.categorie} </div>
    </div>
} 