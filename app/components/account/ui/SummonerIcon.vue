<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  iconId?: number | string
  alt?: string
}>()

const icon = computed (() => {
  const i = ref(null)
  if (props.iconId) {
    i.value = props.iconId ?? null
  }
  else {
    const as = useAccountStore()
    i.value = as.userSummoner?.profileIcon
  }
  return getSummonerIcon(i.value) ?? null
})

/*  */
</script>

<template>
  <div :class="cn('size-12 shrink-0  aspect-square overflow-hidden relative  shadow-sm drop-shadow-sm shadow-black/15 drop-shadow-black/15', props.class) ">
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