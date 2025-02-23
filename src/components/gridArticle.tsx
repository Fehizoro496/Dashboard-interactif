"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useFilterStore } from "@/stores/filterStore";
import ArticleCard from "./articleCard";
import { useListArticleStore } from "@/stores/listArticleStore";
import { useArticles } from "@/hooks/useArticles";
import Article from "@/types/Article";
import { useEffect } from "react";
import ArticleSkeleton from "./articleSkeleton";

export default function GridArticle() {
  const { articles, isLoading, error } = useArticles();
  const { searchQuerry, filterCategory } = useFilterStore();
  const { listArticles, setListArticles } = useListArticleStore();

  useEffect(() => {
    setListArticles(articles);
  }, [articles, setListArticles]);

  if (isLoading)
    return (
      <div className="col-span-8 grid gap-4 auto-rows-fr grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="w-full h-full">
            <ArticleSkeleton />
          </div>
        ))}
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl font-semibold text-red-600">Error Loading Articles</h2>
        <p className="text-gray-600">There was an error fetching the articles. Please try again later.</p>
      </div>
    );

  let filteredArticle: Article[] = [];
  filteredArticle = listArticles?.filter(
    (article: Article) =>
      article.title.includes(searchQuerry) &&
      (filterCategory === "all" || article.category === filterCategory)
  );

  return (
    <div className="col-span-8 grid gap-4 auto-rows-fr grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
      <AnimatePresence mode="popLayout">
        {filteredArticle?.reverse().map((el: Article) => (
          <motion.div
            key={el.id}
            className="w-full h-full"
            initial={{ opacity: 0, y: -1 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -1, transition: { duration: 0.2 } }}
            transition={{ delay: 0.5}}
            viewport={{ once: true }}
            layout
          >
            <ArticleCard article={el} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
