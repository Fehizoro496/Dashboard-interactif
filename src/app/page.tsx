"use client"
// import Image from "next/image";
import FilterBar from "@/components/filterBar";
import GridArticle from "@/components/gridArticle";
import Article from '../types/Article';
import { Button } from "../components/ui/button"
import { Plus} from 'lucide-react';
import ScrollToTopButton from "@/components/scrollToTopButton";
import { useListArticleStore } from "@/stores/listArticleStore";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Home() {


  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen flex flex-col">
        <div className="w-full bg-primary text-primary-foreground py-5 text-center font-bold text-xl">Dashboard</div>
        
        <div id='top' className="relative flex flex-col flex-1 overflow-y-scroll pb-8 mx-8 sm:mx-auto">

          <div className="flex gap-4 items-center justify-between mt-4 flex-wrap">
              <div className="text-xl sm:text-3xl font-bold ">My products</div>
              <Button className="font-bold">
                <Plus/> Add product
              </Button>
          </div>
          
          <FilterBar/>
          
          <GridArticle />

          <ScrollToTopButton/>
        
        </div>
      </div>
    </QueryClientProvider>
  );
}