<script lang="ts" setup>
import { motion } from 'motion-v'

const { currentPath, title, layoutId } = defineProps<{
  currentPath: string | null
  title?: string
  layoutId: string
}>()

const pathDescriptions = [
  {
    name: 'Precision',
    tag: 'Become a Legend',
    description: 'Improved attacks and sustained damage',
  },
  {
    name: 'Domination',
    tag: 'Hunt and Eliminate Prey',
    description: 'Burst damage and target access',
  },
  {
    name: 'Sorcery',
    tag: 'Unleash Destruction',
    description: 'Empowered abilities and resource manipulation',
  },
  {
    name: 'Resolve',
    tag: 'Live Forever',
    description: 'Durability and crowd control',
  },
  {
    name: 'Inspiration',
    tag: 'Outwit Mere Mortals',
    description: 'Creative tools and rule bending',
  },

  {
    name: null,
    tag: 'Select a Path',
    description: 'Precision, Domination, Sorcery, Resolve, Inspiration',
  },
]

const a = computed(() => {
  return pathDescriptions.find(path => path.name == currentPath)
})
</script>

<template>
  <motion.div layout :layoutId="layoutId" :key="currentPath"
  :animate="{ opacity: 1}"
  :initial="{opacity: 0}"
  
  :exit="{opacity: 0}">
    <div class="flex items-center gap-6 leading-none">
      <h1 class="tracking-tight transition-all duration-300 text-8">
        {{ currentPath ?? (title || 'Runes') }}
      </h1>
      <span class="pt-1 text-3 lowercase">{{ a.tag ?? 'select a path' }}</span>
    </div>
    <p class="text-4 mt-2.5 font-serif">
      {{ a.description || 'Precision, Domination, Sorcery, Resolve, Inspiration' }}.
    </p>
  </motion.div>
</template>