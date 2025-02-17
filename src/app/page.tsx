import FilterBar from "@/components/filterbar";
import ActionBar from "@/components/actionbar";
import Appbar from "@/components/appbar";
import GridArticle from "@/components/gridArticle";
// import Image from "next/image";
import Article from '../types/Article';
import ScrollToTopButton from "@/components/scrollToTopButton";

export default function Home() {

  return (
    <div className="h-screen flex flex-col"> 
      <Appbar/>
      
      <div id='top' className="relative flex flex-col flex-1 overflow-y-scroll pb-8 mx-8 sm:mx-auto">

        <ActionBar/>
        
        
        <FilterBar/>
        
        <GridArticle listArticle={articles}/>

        <ScrollToTopButton/>
      
      </div>
    </div>
  );
}

let articles:Article[] = [
  {nom:'article1'},
  {nom:'article2'},
  {nom:'article3'},
  {nom:'article4'},
  {nom:'article5'},
  {nom:'article6'},
  {nom:'article7'},
  {nom:'article8'},
  {nom:'article9'},
  {nom:'article10'},
]