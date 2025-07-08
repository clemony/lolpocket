<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const as = useAccountStore()
const summoner = computed (() => as.userAccount.riot)
console.log('💠 - summoner:', summoner.value.profileIcon)
</script>

<template>
  <div :class="cn('size-12  aspect-square rounded-full  shadow-md', props.class) ">
    <NuxtImg
      v-if="summoner.profileIcon"
      :src="summoner.profileIcon"
      alt="summoner icon"
      class="size-full [&_img]:scale-115 rounded-full  inset-shadow-sm inset-shadow-black/90 avatar" />

    <div
      v-else
      class="rounded-full avatar bg-n1 grid place-items-center text-nc text-2 pl-px pt-px size-full font-semibold">
      LP
    </div>

    <slot />
  </div>
</template>