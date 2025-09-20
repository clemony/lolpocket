<script lang="ts" setup>
const { currentPath, title } = defineProps<{
  currentPath: string | null
  title?: string
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
    name: '',
    tag: 'Select a Path',
    description: 'Precision, Domination, Sorcery, Resolve, Inspiration',
  },
]

const a = computed(() => {
  return pathDescriptions.find(path => path.name===currentPath)
})
</script>

<template>
  <transition-fade
    v-if="currentPath===currentPath"
    group>
    <div class="flex items-center gap-6 leading-none">
      <h1 class="dst transition-all duration-300 text-3xl">
        {{ currentPath==='' ? 'Runes' : currentPath ?? title }}
      </h1>

      <span class="pt-1 text-xs lowercase">{{ a.tag ?? 'select a path' }}</span>
    </div>

    <p class="text-md mt-2.5 font-serif">
      {{ a.description || 'Precision, Domination, Sorcery, Resolve, Inspiration' }}.
    </p>
  </transition-fade>
</template>