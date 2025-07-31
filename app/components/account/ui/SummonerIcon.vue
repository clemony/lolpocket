<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  iconId?: number | string
  alt?: string
}>()

const icon = computed (() => {
  if (props.iconId)
    return props.iconId

    const as = useAccountStore()
    const {summoner} = useSummoner(as.userAccount?.riot.puuid)
  return getSummonerIcon(summoner?.value.profileIcon)
})

/*  */
</script>

<template>
  <div :class="cn('size-12  aspect-square overflow-hidden  shadow-sm drop-shadow-sm', props.class) ">
    <NuxtImg
      v-if="icon"
      src="/img/art/sona.jpg"
      alt="summoner icon"
      class="size-full [&_img]:scale-115" />

    <div
      v-else
      class="rounded-none avatar bg-n1 grid place-items-center text-nc text-2 size-full font-semibold">
     <icon name="plug" />
    </div>

    <slot />
  </div>
</template>

<style scoped>

</style>