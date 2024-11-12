import { create } from 'zustand'

interface State {
    activeId: number
    setActiveId: (id: number) => void
}

export const useActiveIdStore = create<State>((set) => ({
    activeId: 1,
    setActiveId: (activeId: number) => set({ activeId }),
}))
