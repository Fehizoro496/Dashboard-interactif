import { Button } from "../components/ui/button"
import { Plus} from 'lucide-react';

export default function ActionBar(){
    return  <div className="flex gap-4 items-center justify-between mt-4">
                <div className="text-3xl font-bold ">My products</div>
                <Button className="font-bold">
                <Plus/> Add product
                </Button>
            </div>
}

