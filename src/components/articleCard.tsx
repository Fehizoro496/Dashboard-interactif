import Image from "next/image";

import Article from '../types/Article'
export default function ArticleCard(article:Article){
    return <div key={article.id} className='aspect-square border rounded-lg w-full max-w-72 min-w-60 sm:min-w-72 md:min-w-80 grid grid-rows-3'>
        <div className='relative row-span-2 bg-none overflow-hidden w-full'>
            <Image unoptimized src={article.image} alt={article.image} 
                width={1}
                height={1}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                }} 
            className="scale-90"/>
        </div>
        <div className='row-span-1 bg-white rounded-b-lg'>{article.title} <br />{article.category} </div>
    </div>
}