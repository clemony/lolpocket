import { reactive } from 'vue';

export interface Rune {
  name: string;
  wiki: string;
  tier: number;
  type: string;
  img: string;
  stats: string;
  path: string;
}

export interface SheetStore {
  isOpen: boolean;
  clickedRune: Rune | null;
}

export const sheetStore = reactive<SheetStore>({
  isOpen: false,
  clickedRune: null,
});
