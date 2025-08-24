<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  iconId?: number | string | null
  alt?: string
}>()

const icon = computed (() => {
  if (props.iconId != null && props.iconId != undefined)
    return getSummonerIcon(props.iconId)

  else if (as().account.icon)
    return getSummonerIcon(as().account.icon)

  else return 'iconoir:plug-type-a'
})

/*  */
</script>

<template>
  <div :class="cn('size-12 shrink-0 bg-neutral aspect-square overflow-hidden grid place-items-center relative  shadow-sm drop-shadow-sm **:!text-nc shadow-black/15 drop-shadow-black/15', props.class) ">
    <hicon
      v-if="icon"
      :name="String(icon)"
      alt="summoner icon"
      :class="cn('size-full [&_img]:scale-115', { '!size-6 place-self-center **:stroke-[1.7]': icon == 'iconoir:plug-type-a' })" />

    <slot />
  </div>
</template>

<style scoped>

</style>