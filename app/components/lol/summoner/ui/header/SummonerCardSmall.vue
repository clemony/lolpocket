<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const {
  fullWidth,
  variant = 'none',

  class: className,

} = defineProps<
  PrimitiveProps & {

    class?: HTMLAttributes['class']

    size?: ButtonVariants['size']
    variant?: ButtonVariants['variant']
    fullWidth?: boolean
  }
>()
const s = await ss().resolveByPuuid(as().account?.puuid)
const summoner = computed(() => s)
</script>

<template>
  <Primitive
    v-if="summoner"
    :class="
      cn(
        'flex w-full items-center gap-3.5',

        className,
      )
    "
  >
    <SummonerIcon class="size-11.5 rounded-full" />

    <div class="flex size-full flex-col justify-center gap-0.5">
      <div class="flex items-center justify-between">
        <SummonerName
          class="text-xxl text-bc/94 font-serif leading-none font-bold drop-shadow-sm"
          as="h1"
        />
        <slot />
      </div>
      <div
        :class="
          cn(
            'inline-flex w-full items-center gap-4 leading-none font-normal lowercase *:align-bottom',
            { 'justify-between': fullWidth },
          )
        "
      >
        <SummonerTag :summoner />

        <SummonerRegion :region-id="summoner.region" />

        <SummonerLevel :summoner />
      </div>
    </div>
  </Primitive>
</template>
