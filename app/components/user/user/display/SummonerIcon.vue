<script lang="ts" setup>
const { alt, class: className, iconId, size, summoner } = defineProps<{
  class?: HTMLAttributes['class']
  iconId?: number | string | null
  summoner?: Summoner | Partial<Summoner>
  alt?: string
  size?: ButtonVariants['size']
}
>()
</script>

<template>
  <Img
    :size

    variant="neutral"
    :src="getSummonerIcon(iconId || summoner?.icon || as().account.icon)"
    alt="summoner icon"
    :class="cn('pointer-events-none grid place-items-center p-0!', className)" />
</template>
