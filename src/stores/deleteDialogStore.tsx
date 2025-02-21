import Article from '../types/Article'
import {create} from 'zustand'

interface State {
    isDeleteDialogOpen:boolean,
    articleToDelete:Article|undefined
}

interface Action {
    toogleDeleteDialogIsOpen:()=>void
    setArticleToDelete:(article:Article)=>void
}

export const useDeleteDialogStore = create<State & Action>((set)=>({
    isDeleteDialogOpen:false,
    articleToDelete:undefined,
    toogleDeleteDialogIsOpen:() => set((state)=>({isDeleteDialogOpen : !state.isDeleteDialogOpen})),
    setArticleToDelete:(article:Article) => set((state)=>({articleToDelete:article})),
}))