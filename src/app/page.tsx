"use client"
import FilterBar from "@/components/filterBar";
import GridArticle from "@/components/gridArticle";
import { Button } from "../components/ui/button"
import { Plus} from 'lucide-react';
import ScrollToTopButton from "@/components/scrollToTopButton";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AddArticleModal from "@/components/addModal";
import { useAddModalStore } from "@/stores/addModalStore";
import ArticleDetailsDialog from "@/components/articleDetail";
import DeleteConfirmDialog from "@/components/deleteConfirmDialog";
import UpdateArticleModal from "@/components/updateModal";

const queryClient = new QueryClient()

export default function Home() {

  const {toogleIsOpen} = useAddModalStore()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen flex flex-col">
        <div className="w-full bg-primary text-primary-foreground py-5 text-center font-bold text-xl">Dashboard</div>
        
        <div id='top' className="relative flex flex-col flex-1 overflow-y-scroll pb-8 mx-8 sm:mx-auto">

          <div className="flex gap-4 items-center justify-between mt-4 flex-wrap">
              <div className="text-xl sm:text-3xl font-bold ">My products</div>
              <Button className="font-bold" onClick={toogleIsOpen}>
                <Plus/> Add product
              </Button>
          </div>
          
          <FilterBar/>
          
          <GridArticle />

          <ScrollToTopButton/>

          <AddArticleModal/>

          <ArticleDetailsDialog/>
          <DeleteConfirmDialog/>
          <UpdateArticleModal/>

        </div>
      </div>
    </QueryClientProvider>
  );
}