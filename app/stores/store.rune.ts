import { defineStore } from 'pinia'

export const useRuneStore = defineStore('runeStore', () => {
  const selectedRuneSet = ref(0)
  const hoveredRune = ref<Rune | null>(null)
  const selectedRune = ref(null)
  return {
    hoveredRune,
    selectedRune,
    selectedRuneSet,
  }
})
