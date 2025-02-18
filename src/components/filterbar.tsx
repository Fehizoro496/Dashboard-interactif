"use client"

import { useFilterStore } from "@/stores/filterStore"
import { Input } from "./ui/input"
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "./ui/select"
import { Search,Filter } from "lucide-react"

interface filterProps {
    categories : string[]
}

export default function FilterBar(params:filterProps){

    const {filterCategory,setFilterCategory} = useFilterStore()

    return <div className="sticky top-0 flex gap-4 justify-between py-4 flex-wrap bg-white">
        <div className="relative flex-1 cursor-text sm:min-w-72 ">
            <label htmlFor="searchbar" className="cursor-text">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"/>
            </label>
            <Input type="search" id="searchbar" placeholder="Search products ..." className="pl-10"/>
        </div>

        <div className="relative w-full sm:w-72 cursor-pointer">
            <Filter className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer"/>
            
            <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="pl-10">
                    <SelectValue placeholder='Filter by category' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All category</SelectItem>
                    {params['categories'].map((category:string)=>{
                        return <SelectItem value={category}>{category}</SelectItem>
                    })}
                </SelectContent>
                </Select>
 
        </div>
    
    </div>
}