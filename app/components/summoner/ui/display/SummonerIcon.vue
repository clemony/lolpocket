<script lang="ts" setup>
<<<<<<< HEAD
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const props = defineProps<PrimitiveProps & {
=======
const props = defineProps<{
>>>>>>> refs/remotes/origin/main
  class?: HTMLAttributes['class']
  iconId?: number | string | null
  alt?: string
}>()

const icon = computed(() => {
  if (props.iconId !== null && props.iconId !== undefined)
    return getSummonerIcon(props.iconId)
  else if (as().account?.icon)
    return getSummonerIcon(as().account?.icon)
  else return 'iconoir:plug-type-a'
})

<<<<<<< HEAD
const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <Primitive
    v-bind="forwarded"
=======
/*  */
</script>

<template>
  <div
>>>>>>> refs/remotes/origin/main
    :class="
      cn(
        'size-12 shrink-0 bg-neutral aspect-square overflow-hidden grid place-items-center relative  shadow-sm drop-shadow-sm  shadow-black/15 drop-shadow-black/15',
        props.class,
      )
    ">
    <hicon
      :name="String(icon)"
      alt="summoner icon"
      :class="
        cn('size-full pointer-events-none [&_img]:scale-115', {
          '!size-6 place-self-center **:text-nc **:stroke-[1.7]':
            icon === 'iconoir:plug-type-a',
        })
      " />

    <slot />
<<<<<<< HEAD
  </Primitive>
=======
  </div>
>>>>>>> refs/remotes/origin/main
</template>

<style scoped></style>
