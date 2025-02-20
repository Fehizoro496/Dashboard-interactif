import Article from '@/types/Article'
import {create} from 'zustand'

interface State {
    isDetailDialogOpen:boolean,
    article:Article|undefined
}

interface Action {
    toogleIsDetailDialogOpen:()=>void,
    setArticleDetail:(article:Article|undefined)=>void,
}

export const useDetailDialogStore = create<State & Action>((set)=>({
    isDetailDialogOpen:false,
    article:undefined,
    toogleIsDetailDialogOpen:() => set((state)=>({...state,isDetailDialogOpen : !state.isDetailDialogOpen})),
    setArticleDetail:(article:Article|undefined) => set((state)=>({...state,article : article})),
}))