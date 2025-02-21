import { useArticles } from '@/hooks/useArticles'
import Article from '@/types/Article'
import {create} from 'zustand'

interface State {
    listArticles : Article[]
}

interface Action {
    deleteArticleFromList : (article:Article) => void,
    addArticleToList : (article:Article) => void,
    setListArticles : (articles:Article[]) => void,
}

export const useListArticleStore = create<State & Action>((set)=>({
    listArticles:[],
    deleteArticleFromList:(article:Article) => set((state)=>({listArticles: state.listArticles.filter(art => art !== article)})),
    addArticleToList: (article: Article) => set((state) => ({listArticles: [...state.listArticles,article]})),
    setListArticles:(articles:Article[]) => set((state) => ({listArticles: articles})),
}))