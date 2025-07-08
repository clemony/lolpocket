<script lang="ts" setup>
const { class: className } = defineProps<{

  class?: HTMLAttributes['class']
}>()

const as = useAccountStore()
const loaded = ref(false)
</script>

<template>
  <div :class="cn({ 'inset-shadow-sm shrink-0  size-full bg-transparent': loaded }, className)">
    <NuxtImg
      v-if="as.userAccount.riot.puuid && as.userAccount.riot.profileIcon"
      :src="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${as.userAccount.riot.profileIcon}.jpg`"
      :alt="`${as.userAccount.riot.name}'s icon`"
      :class="{ 'inset-shadow-sm inset-shadow-black/90 avatar': loaded }"
      class="size-full  rounded-full  "
      @load="loaded = true" />

    <div
      v-else
      class="rounded-full p-0 overflow-visible relative  bg-n1/90 grid place-items-center text-nc  size-full ">
      <icon name="streamline:electric-cord-1-remix" class="size-4.25  absolute shrink-0 text-nc/90" />
    </div>
  </div>
</template>