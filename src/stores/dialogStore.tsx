import Article from '../types/Article'
import {create} from 'zustand'

type DialogType = "delete"|"detail"|"modify"|undefined

interface State {
    isDialogOpen: boolean,
    selectedArticle: Article|undefined,
    typeDialog: DialogType
}

interface Action {
    toogleIsDialogOpen:()=>void,
    setSelectedArticle:(article:Article)=>void,
    setDialogType:(article:DialogType)=>void,
    clearState:()=>void
}

const intialState = {
    isOpen:false,
    selectedArticle:undefined,
    typeDialog:undefined,
}

export const useDialogStore = create<State & Action>((set)=>({
    isDialogOpen:false,
    selectedArticle:undefined,
    typeDialog:undefined,
    toogleIsDialogOpen:() => set((state)=>({isDialogOpen : !state.isDialogOpen})),
    setSelectedArticle:(article:Article) => set((state)=>({selectedArticle:article})),
    setDialogType:(dialogType:DialogType) => set((state)=>({typeDialog:dialogType})),
    clearState:()=>set(intialState)
}))