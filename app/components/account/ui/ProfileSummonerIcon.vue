<script lang="ts" setup>
const { class: className, summoner } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()

const loaded = ref(false)
</script>

<template>
  <div :class="cn({ 'inset-shadow-sm shrink-0 inset-shadow-black/90 avatar': loaded }, className)">
    <NuxtImg
      v-if="summoner.profileIcon"
      :src="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${summoner.profileIcon}.jpg`"
      :alt="`${summoner.name}'s icon`"
      :class="{ 'inset-shadow-sm inset-shadow-black/90 avatar': loaded }"
      class="size-full  rounded-full  "
      @load="loaded = true" />

    <div
      v-else
      class="rounded-full bg-n1 grid place-items-center text-nc text-2 size-full font-semibold">
      LP
    </div>
  </div>
</template>