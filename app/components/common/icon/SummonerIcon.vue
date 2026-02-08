<script lang="ts" setup>
const {
  class: className,
  iconId,
  summoner,
} = defineProps<{
  class?: HTMLAttributes["class"]
  iconId?: number | string | null
  summoner?: Summoner | Partial<Summoner>
  alt?: string
  size?: ButtonVariants["size"]
}>()
</script>

<template>
  <Img
    :src="getSummonerIcon(iconId || summoner?.icon || as().account.icon)"
    alt="summoner icon"
    :class="cn('pointer-events-none', className)" />
</template>
