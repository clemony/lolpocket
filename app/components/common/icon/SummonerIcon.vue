<script lang="ts" setup>
import { getSummonerIcon } from "~/domain/utils/img"

const {
  class: className,
  iconId,
  summoner,
} = defineProps<{
  class?: HTMLAttributes["class"]
  iconId?: number | string | null
  summoner?: Summoner | Partial<Summoner>
  alt?: string
}>()

const resolvedIcon = computed(
  () => iconId ?? summoner?.icon ?? user().account?.icon ?? 0
)
</script>

<template>
  <Img
    :src="getSummonerIcon(resolvedIcon)"
    alt="summoner icon"
    :class="cn('pointer-events-none', className)" />
</template>
