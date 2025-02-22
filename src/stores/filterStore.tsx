import {create} from 'zustand'

interface State {
    searchQuerry : string,
    filterCategory : string
}

interface Action {
    setSearchQuerry : (searched: string) => void,
    setFilterCategory : (filter: string) => void,
    resetFilter : () => void,
}

export const useFilterStore = create<State & Action>((set)=>({
    searchQuerry:'',
    filterCategory:'all',
    setSearchQuerry:(searched: string) => set((state)=>({...state,searchQuerry:searched})),
    setFilterCategory:(filter: string) => set((state)=>({...state,filterCategory:filter})),
    resetFilter:() => set((state)=>({searchQuerry:'',filterCategory:'all'}))
}))