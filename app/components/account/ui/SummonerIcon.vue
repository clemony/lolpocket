<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  iconId?: number | string
  alt?: string
}>()

const icon = computed (() => {
  const i = ref(null)
  if (props.iconId) {
    i.value = props.iconId
  }
  else {
    const as = useAccountStore()
    const { summoner } = useSummoner(as.userAccount?.riot.puuid)
    console.log('💠 - summoner:', summoner)
    i.value = summoner?.value.profileIcon
  }
  return getSummonerIcon(i.value)
})

/*  */
</script>

<template>
  <div :class="cn('size-12  aspect-square overflow-hidden  shadow-sm drop-shadow-sm', props.class) ">
    <NuxtImg
      v-if="icon"
      :src="icon as string"
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