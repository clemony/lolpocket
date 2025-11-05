<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const { fullWidth, active = 'none', base = 'none', class: className, hover = 'none', variant = 'none' } = defineProps<PrimitiveProps & {
  active?: ButtonVariants['active']
  base?: ButtonVariants['base']
  class?: HTMLAttributes['class']
  hover?: ButtonVariants['hover']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
  fullWidth?: boolean
}>()
const summoner = computed(() => ss().getSummoner(as().account?.puuid))
</script>

<template>
  <Primitive
    v-if="summoner"
    :class="cn('flex w-full items-center gap-3.5', buttonVariants({ base, variant, size, hover, active }), className)">
    <SummonerIcon class="size-11.5 rounded-full" />

    <div class="flex size-full flex-col justify-center gap-0.5">
      <div class="flex items-center justify-between">
        <SummonerName
          as="h1"
          class="text-6 text-bc/94 font-serif leading-none font-bold drop-shadow-sm" />
        <slot />
      </div>
      <div :class="cn('inline-flex w-full items-center gap-4  leading-none font-normal  lowercase *:align-bottom', { 'justify-between': fullWidth })">
        <SummonerTag :summoner />

        <SummonerRegion :region-id="summoner.region" />

        <SummonerLevel :summoner />
      </div>
    </div>
  </Primitive>
</template>
