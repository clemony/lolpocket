<script lang="ts" setup>
const { title, currentPath } = defineProps<{
  currentPath: string | null
  title?: string
}>()

const pathDescriptions = [
  {
    name: 'Precision',
    description: 'Improved attacks and sustained damage',
    tag: 'Become a Legend',
  },
  {
    name: 'Domination',
    description: 'Burst damage and target access',
    tag: 'Hunt and Eliminate Prey',
  },
  {
    name: 'Sorcery',
    description: 'Empowered abilities and resource manipulation',
    tag: 'Unleash Destruction',
  },
  {
    name: 'Resolve',
    description: 'Durability and crowd control',
    tag: 'Live Forever',
  },
  {
    name: 'Inspiration',
    description: 'Creative tools and rule bending',
    tag: 'Outwit Mere Mortals',
  },

  {
    name: '',
    description: 'Precision, Domination, Sorcery, Resolve, Inspiration',
    tag: 'Select a Path',
  },
]

const a = computed(() => {
  return pathDescriptions.find(path => path.name === currentPath)
})
</script>

<template>
  <transition-fade
    v-if="currentPath === currentPath"
    group>
    <div class="flex items-center gap-6 leading-none">
      <h1 class="dst transition-all duration-300 text-8">
        {{ currentPath === '' ? 'Runes' : currentPath ?? title }}
      </h1>

      <span class="pt-1 text-2 lowercase">{{ a.tag ?? 'select a path' }}</span>
    </div>

    <p class="text-4 mt-2.5 font-serif">
      {{ a.description || 'Precision, Domination, Sorcery, Resolve, Inspiration' }}.
    </p>
  </transition-fade>
</template>