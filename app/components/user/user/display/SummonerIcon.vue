<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const props = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes['class']
    iconId?: number | string | null
    summoner?: Summoner | Partial<Summoner>
    alt?: string
  }
>()

console.log('🥸 - iconId?:', as().account.icon)
const icon = computed(() => {
  if (props.iconId !== null && props.iconId !== undefined)
    return getSummonerIcon(props.iconId)
  else if (props.summoner?.icon)
    return getSummonerIcon(props.summoner?.icon)
  else if (as().account?.icon)
    return getSummonerIcon(as().account?.icon)
  else return null
})

const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <Primitive
    :class="
      cn('relative grid aspect-square size-12 shrink-0 place-items-center overflow-hidden bg-b2 shadow-sm shadow-black/15 drop-shadow-sm drop-shadow-black/15',
         props.class,
      )
    ">
    <Img
      v-bind="forwarded"
      :src="String(icon)"
      alt="summoner icon"
      class="pointer-events-none size-full [&_img]:scale-115" />

    <slot />
  </Primitive>
</template>

<style scoped></style>
