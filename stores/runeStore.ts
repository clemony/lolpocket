import { defineStore } from 'pinia'

export const useRuneStore = defineStore('runeStore', () => {
  const selectedRuneSet = ref<RuneSet | null>(null)
  const hoveredRune = ref<Rune | null>(null)
  const selectedRune = ref(null)
  return {
    selectedRune,
    selectedRuneSet,
    hoveredRune,
  }
})
