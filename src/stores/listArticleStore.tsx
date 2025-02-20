import { useArticles } from '@/hooks/useArticles'
import Article from '@/types/Article'
import {create} from 'zustand'

interface State {
    listArticles : Article[]
}

interface Action {
    deleteArticle : (article:Article) => void,
    addArticle : (article:Article) => void,
    setListArticles : (articles:Article[]) => void,
}

export const useListArticleStore = create<State & Action>((set)=>({
    listArticles:[],
    deleteArticle:(article:Article) => set((state)=>({listArticles: state.listArticles.filter(art => art !== article)})),
    addArticle: (article: Article) => set((state) => ({listArticles: [...state.listArticles,article]})),
    setListArticles:(articles:Article[]) => set((state) => ({listArticles: articles})),
}))