"use client"
import { Button } from "../components/ui/button"
import { ArrowUp } from 'lucide-react';
import scrollToTop from '../utils/scrollToTop'

export default function ScrollToTopButton(){
    return  <Button onClick={scrollToTop} size="icon" className="fixed bottom-4 right-8">
                <ArrowUp />
            </Button>
}