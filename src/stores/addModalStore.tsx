import {create} from 'zustand'

interface State {
    isOpen:boolean
}

interface Action {
    toogleIsOpen:()=>void
}

export const useAddModalStore = create<State & Action>((set)=>({
    isOpen:false,
    toogleIsOpen:() => set((state)=>({isOpen : !state.isOpen})),
}))