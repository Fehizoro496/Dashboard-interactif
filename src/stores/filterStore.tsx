import {create} from 'zustand'

interface State {
    filterCategory : string
}

interface Action {
    setFilterCategory : (filter: string) => void
}

export const useFilterStore = create<State & Action>((set)=>({
    filterCategory:'',
    setFilterCategory:(filter: string) => set((state)=>({...state,filterCategory:filter})),
}))