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

const resolvedIcon = computed(() => iconId ?? summoner?.icon ?? null)
</script>

<template>
  <Img
    v-if="resolvedIcon"
    src="/img/art/prestige-requiem-sona-icon.jpeg"
    alt="summoner icon"
    :class="cn('pointer-events-none', className)" />
  <!-- "getSummonerIcon(resolvedIcon)" -->
  <div v-else class="size-full bg-p1">
    <Icon name="" class="" />
  </div>
</template>
