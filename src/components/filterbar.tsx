"use client"
import { useFilterStore } from "@/stores/filterStore"
import { Input } from "./ui/input"
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "./ui/select"
import { Search,Filter } from "lucide-react"
import { useListArticleStore } from "@/stores/listArticleStore"

export default function FilterBar(){

    const {listArticles} = useListArticleStore()

    let listCategory:string[] = Array.from(new Set(listArticles?.map(el=>el.category)))

    const {searchQuerry,filterCategory,setFilterCategory,setSearchQuerry} = useFilterStore()
    
    function handleSearchChange(e:React.ChangeEvent<HTMLInputElement>) { setSearchQuerry(e.target.value) }

    return <div className="z-50 sticky top-0 flex gap-4 justify-between py-4 flex-wrap bg-white">
        <div className="relative flex-1 cursor-text sm:min-w-72 ">
            <label htmlFor="searchbar" className="cursor-text">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"/>
            </label>
            <Input type="search" value={searchQuerry} onChange={handleSearchChange} id="searchbar" placeholder="Search products ..." className="pl-10"/>
        </div>

        <div className="relative w-full sm:w-72 cursor-pointer">
            <Filter className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer"/>
            
            <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="pl-10">
                    <SelectValue placeholder='Filter by category' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All category</SelectItem>
                    {listCategory.map((category:string)=>{
                        return <SelectItem key={category} value={category}>{category}</SelectItem>
                    })}
                </SelectContent>
                </Select>
 
        </div>
    
    </div>
}