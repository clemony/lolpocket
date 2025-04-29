<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const route = useRoute()
const pocket = computed (() => {
  return props.pocket
})

const cs = useChampStore()

const filteredChampions = ref(null)

onMounted (() => {
  filteredChampions.value = pocket.value.champions.children.filter(c => c.id != pocket.value.champions.default.id)
})
</script>

<template>
  <div class="px-2 py-2">
    <SidebarLabel class="mb-3">
      Main Champion
    </SidebarLabel>
    <transition-slide as="div" :offset="[0, 16]" class="grid h-fit  gap-4 self-start">
      <StarChampion v-if="pocket.champions.default" :pocket="pocket" :champion="pocket.champions.default" class="bg-b2/60 border-b3/50 ">
      </StarChampion>
    </transition-slide>
  </div>
  <Separator class="mt-3 mb-2" />
  <transition-slide as="div" group :offset="[0, -16]" class="grid h-fit  px-2 py-2 gap-4 self-start">
    <StarChampion v-for="champion in filteredChampions" :key="champion.name" :pocket="pocket" :champion="champion" />
  </transition-slide>
</template>