import { create } from 'zustand';
import { CatsProps, CatProps } from './types';

export const useCatsStore = create<CatsProps>((set) => ({
  catData: [],
  error: null,

  setData: (data: CatProps[]) => set({ catData: data }),

  setError: (error: string | null) => set({ error }),
}));
