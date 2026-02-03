<script lang="ts" setup>
const {
  alt,
  class: className,
  iconId,
  summoner,
} = defineProps<{
  class?: HTMLAttributes['class']
  iconId?: number | string | null
  summoner?: Summoner | Partial<Summoner>
  alt?: string
  size?: ButtonVariants['size']
}>()
</script>

<template>
  <Img
    color="neutral"
    :src="getSummonerIcon(iconId || summoner?.icon || as().account.icon)"
    alt="summoner icon"
    :class="
      cn('', className)
    "
  />
</template>
