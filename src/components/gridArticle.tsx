"use client"
import { motion } from 'framer-motion';
import { useFilterStore } from '@/stores/filterStore'
import ArticleCard from "./articleCard"
import { useListArticleStore } from '@/stores/listArticleStore'
import { useArticles } from '@/hooks/useArticles'
import Article from '@/types/Article'
import { useEffect } from 'react'

export default function GridArticle () {

  const { articles, isLoading, error} = useArticles();
  const {searchQuerry,filterCategory} = useFilterStore();
  const {listArticles, setListArticles} = useListArticleStore();
  
  useEffect(() => {
    setListArticles(articles)
  }, [articles,setListArticles]);
  
  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Failed</div>

  let filteredArticle:Article[] = []  
  filteredArticle= listArticles?.filter((article:Article) => 
      (article.title.includes(searchQuerry))
      && 
      (filterCategory==="all" || article.category === filterCategory))

  return (
    <div className='flex-1 grid gap-4 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
      {filteredArticle?.reverse().map((el:Article, index: number) => 
      <motion.div
        key={el.id}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index % 3 * 0.1 }}
        viewport={{ once: true}}
      >
        <ArticleCard
        article={el}
        />
      </motion.div>
      )}
    </div>
  )
}