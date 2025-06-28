<script lang="ts" setup>
const { account, class: className, url, summonerName } = defineProps<{
  account?: UserAccount
  summonerName?: string
  url?: string
  class?: HTMLAttributes['class']
}>()

// wtf
const icon = computedAsync (() => account.riot.profileIcon)
const name = computedAsync (() => account.riot.name || summonerName)
const loaded = ref(false)
</script>

<template>
  <div :class="cn({ 'inset-shadow-sm shrink-0 inset-shadow-black/90 avatar': loaded }, className)">
    <NuxtImg
      v-if="name && icon"
      :src="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${icon}.jpg`"
      :alt="`${name}'s icon`"
      :class="{ 'inset-shadow-sm inset-shadow-black/90 avatar': loaded }"
      class="size-full  rounded-full  "
      @load="loaded = true" />

    <NuxtImg
      v-else-if="summonerName && url"
      :src="url"
      :alt="`${name}'s icon`"
      :class="{ 'inset-shadow-sm inset-shadow-black/90 avatar': loaded }"
      class="size-full  rounded-full  "
      @load="loaded = true" />

    <div
      v-else
      class="rounded-full bg-neutral grid place-items-center text-nc text-2 size-full font-semibold">
         <icon name="add" class="size-5 absolute shrink-0 text-nc *:text-nc **:text-nc"/>
    </div>
  </div>
</template>