<script lang="ts" setup>
import type { ChipProps } from "@nuxt/ui"
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
import { getSummonerIcon } from "~/domain/utils/img"
const {
  class: className,
  summoner,
  variant = "default"
} = defineProps<{
  class?: HTMLAttributes["class"]
  puuid?: string
  summoner?: Summoner
  variant?: "default" | "user"
}>()

const matchStatus = shallowRef<boolean>(true)
function refreshMatchStatus() {}
</script>

<template>
  <!-- live -->

  <UUser
    v-if="summoner && variant === 'user'"
    :avatar="{
      src: getSummonerIcon(summoner?.icon) ?? null,
      size: '11',
      chip: {
        inset: true,
        size: 'md',
        color: (matchStatus
          ? summoner?.color
            ? summoner.color
            : 'insp'
          : 'p3') as ChipProps['color'],

        position: 'bottom-right'
      },
      icon: 'i-plug'
    }"
    trailing-icon="up-down"
    :description="matchStatus ? 'In Game' : 'afk'"
    :name="summoner?.name ?? 'Not Connected'" />

  <LazyUTooltip
    v-else-if="summoner?.puuid"
    :content="{ side: 'bottom', align: 'start', alignOffset: 14 }"
    :text="
      matchStatus ? 'Live match details &nbsp;🡭' : 'No in-progress match found.'
    ">
    <UButton
      :to="`${buildSummonerRootPath({ puuid: summoner.puuid })}/live`"
      size="sm"
      variant="ghost"
      :ui="{
        base: 'justify-center gap-3',
        label: cn('text-xs font-medium', matchStatus ? 'text-pc' : 'text-n4')
      }"
      :label="matchStatus ? 'In Game' : 'afk'">
      <template #leading>
        <div class="inline-grid *:[grid-area:1/1]">
          <div
            :class="
              cn(
                'status status-md animate-ping saturate-110',
                twBg[summoner?.color ?? 'diminuendo']
              )
            " />
          <div
            :class="
              cn(
                'status status-md saturate-110',
                twBg[summoner?.color ?? 'diminuendo']
              )
            " />
        </div>
      </template>
    </UButton>
  </LazyUTooltip>
</template>
