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

const icon = computed(() => {
  if (props.iconId !== null && props.iconId !== undefined)
    return getSummonerIcon(props.iconId)
  else if (props.summoner?.icon)
    return getSummonerIcon(props.summoner?.icon)
  else if (as().account?.icon)
    return getSummonerIcon(as().account?.icon)
  else return 'iconoir:plug-type-a'
})

const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <Primitive
    v-bind="forwarded"
    :class="
      cn(
        `
          relative grid aspect-square size-12 shrink-0 place-items-center
          overflow-hidden bg-neutral shadow-sm shadow-black/15 drop-shadow-sm
          drop-shadow-black/15
        `,
        props.class,
      )
    ">
    <hicon
      :name="String(icon)"
      alt="summoner icon"
      :class="
        cn(
          `
            pointer-events-none size-full
            [&_img]:scale-115
          `,
          {
            '!size-6 place-self-center **:text-nc **:stroke-[1.7]':
              icon === 'iconoir:plug-type-a',
          },
        )
      " />

    <slot />
  </Primitive>
</template>

<style scoped></style>
