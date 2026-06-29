<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
import type { PrimitiveProps } from "reka-ui"
import { Primitive } from "reka-ui"

const {
  fullWidth,
  variant = "none",

  class: className,
} = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes["class"]

    size?: ButtonProps["size"]
    variant?: ButtonProps["variant"]
    fullWidth?: boolean
  }
>()
const s = await summonerStore().resolveByPuuid(user().account?.puuid)
const summoner = computed(() => s)
</script>

<template>
  <Primitive
    v-if="summoner"
    :class="
      cn(
        'flex w-full items-center gap-3.5',

        className
      )
    ">
    <SummonerIcon class="size-11.5 rounded-full" />

    <div class="flex size-full flex-col justify-center gap-0.5">
      <div class="flex items-center justify-between">
        <h1
          class="font-display text-2xl leading-none font-bold text-pc/94 drop-shadow-sm">
          {{ summoner?.name }}
        </h1>
        <slot />
      </div>
      <div
        :class="
          cn(
            'inline-flex w-full items-center gap-4 leading-none font-normal lowercase *:align-bottom',
            { 'justify-between': fullWidth }
          )
        ">
        <SummonerId :summoner="summoner ?? undefined" type="tag" />
        <SummonerId :summoner="summoner ?? undefined" type="region" />
        <SummonerId :summoner="summoner ?? undefined" type="level" />
      </div>
    </div>
  </Primitive>
</template>
