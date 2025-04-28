<script lang="ts" setup>
const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()

// wtf

const loaded = ref(false)
</script>

<template>
  <div        :class="cn({'inset-shadow-sm inset-shadow-black/90 avatar': loaded}, className)">
  <NuxtImg
      v-if="summoner.name && summoner.profileIcon"
      :src="summoner.profileIcon"
      :alt="summoner.name + summoner.tag"
       :class="{'inset-shadow-sm inset-shadow-black/90 avatar': loaded}"
       @load="loaded = true"
      class="size-full  rounded-full  " />

    <div
      v-else
      class="rounded-full avatar bg-neutral grid place-items-center text-nc text-2 size-full font-semibold">
      LP
    </div>
</div>
</template>