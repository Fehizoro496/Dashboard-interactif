"use client"
import { motion, AnimatePresence } from 'framer-motion';
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
      <AnimatePresence mode="popLayout">
        {filteredArticle?.reverse().map((el:Article, index: number) => 
            <motion.div
            key={el.id}
            initial={{ opacity: 0, y: -1 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -1, transition: { duration: 0.2 } }}
            transition={{ delay: index % 6 * 0.15 }}
            viewport={{ once: true }}
            layout
            >
            <ArticleCard article={el} />
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}