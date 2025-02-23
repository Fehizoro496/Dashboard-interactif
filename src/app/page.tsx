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
import { Toaster } from "sonner";

const queryClient = new QueryClient()

export default function Home() {

  const {toogleIsOpen} = useAddModalStore()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen flex flex-col"> {/* Add this wrapper */}
        <div id='top' className="relative grid grid-cols-8 flex-1 overflow-y-scroll pb-8 px-8">
          <div className="col-span-8 flex gap-4 items-center justify-between mt-4 flex-wrap">
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

          <Toaster/>

        </div>
      </div>
    </QueryClientProvider>
  );
}