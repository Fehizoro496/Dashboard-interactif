// import Image from "next/image";
import FilterBar from "@/components/filterBar";
import GridArticle from "@/components/gridArticle";
import Article from '../types/Article';
import { Button } from "../components/ui/button"
import { Plus} from 'lucide-react';
import ScrollToTopButton from "@/components/scrollToTopButton";

export default function Home() {

  return (
    <div className="h-screen flex flex-col">
      <div className="w-full bg-primary text-primary-foreground py-5 text-center font-bold text-xl">Dashboard</div>
      
      <div id='top' className="relative flex flex-col flex-1 overflow-y-scroll pb-8 mx-8 sm:mx-auto">

        <div className="flex gap-4 items-center justify-between mt-4 flex-wrap">
            <div className="text-xl sm:text-3xl font-bold ">My products</div>
            <Button className="font-bold">
              <Plus/> Add product
            </Button>
        </div>
        
        <FilterBar categories={categories}/>
        
        <GridArticle listArticle={articles}/>

        <ScrollToTopButton/>
      
      </div>
    </div>
  );
}

let articles:Article[] = [
  {nom:'article 1',categorie:'cat A'},
  {nom:'article 2',categorie:'cat B'},
  {nom:'article 3',categorie:'cat B'},
  {nom:'article 4',categorie:'cat A'},
  {nom:'article 5',categorie:'cat B'},
  {nom:'article 6',categorie:'cat A'},
  {nom:'article 7',categorie:'cat B'},
  {nom:'article 8',categorie:'cat A'},
  {nom:'article 9',categorie:'cat A'},
  {nom:'article 10',categorie:'cat A'},
  {nom:'article 11',categorie:'cat B'},
]

let categories:string[] = Array.from(new Set(articles.map(el=>el.categorie)))