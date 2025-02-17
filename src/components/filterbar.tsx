import { Input } from "../components/ui/input"
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "../components/ui/select"
import { Search,Filter } from "lucide-react"

export default function FilterBar(){
    return <div className="sticky top-0 bg-white flex gap-4 justify-between py-4 flex-wrap">
        <div className="relative flex-1 cursor-text min-w-72">
            <label htmlFor="searchbar" className="cursor-text">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"/>
            </label>
            <Input type="search" id="searchbar" placeholder="Search products ..." className="pl-10"/>
        </div>

        <div className="relative w-full sm:w-72 cursor-pointer">
            <Filter className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer"/>
            
            <Select>
                <SelectTrigger className="pl-10">
                    <SelectValue placeholder='Filtrer par catégorie' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All category</SelectItem>
                    <SelectItem value="banana">Men's clothes</SelectItem>
                </SelectContent>
                </Select>
 
        </div>
    
    </div>
}