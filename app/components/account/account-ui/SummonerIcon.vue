<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  iconId: number | string
  alt?: string
}>()
</script>

<template>
  <div :class="cn('size-12  aspect-square rounded-full  shadow-md', props.class) ">
    <NuxtImg
      v-if="props.iconId"
      :src="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${props.iconId}.jpg`"
      :alt="props.alt"
      class="size-full [&_img]:scale-115 rounded-full  inset-shadow-sm inset-shadow-black/90 avatar" />
    <div
      v-else
      class="rounded-full avatar bg-neutral grid place-items-center text-nc text-2 size-full font-semibold">
      LP
    </div>

    <slot />
  </div>
</template>

<style scoped>

</style>