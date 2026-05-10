<script lang="ts" setup>
const { title, currentPath } = defineProps<{
  currentPath: number | null
  title?: string
}>()
interface RuneBlurb {
  name: string
  description: string
  tag: string
}
const pathDescriptions: Record<PathKey, RuneBlurb> = [
  {
    name: "Precision",
    description: "Improved attacks and sustained damage",
    tag: "Become a Legend"
  },
  {
    name: "Domination",
    description: "Burst damage and target access",
    tag: "Hunt and Eliminate Prey"
  },
  {
    name: "Sorcery",
    description: "Empowered abilities and resource manipulation",
    tag: "Unleash Destruction"
  },
  {
    name: "Resolve",
    description: "Durability and crowd control",
    tag: "Live Forever"
  },
  {
    name: "Inspiration",
    description: "Creative tools and rule bending",
    tag: "Outwit Mere Mortals"
  },

  {
    name: "",
    description: "Precision, Domination, Sorcery, Resolve, Inspiration",
    tag: "Select a Path"
  }
]

const a = computed(() => {
  if (!currentPath) return null
  return pathDescriptions[currentPath as PathKey]
})
</script>

<template>
  <transition-fade group>
    <div class="flex items-center gap-6 leading-none">
      <h1 class="text-4xl ds-2xs transition-all duration-300">
        {{ !currentPath ? "Runes" : (currentPath ?? title) }}
      </h1>

      <span class="pt-1 text-sm lowercase">
        {{ a?.tag ?? "select a path" }}
      </span>
    </div>

    <p class="mt-2.5 font-serif text-lg">
      {{
        a?.description ||
        "Precision, Domination, Sorcery, Resolve, Inspiration"
      }}.
    </p>
  </transition-fade>
</template>
