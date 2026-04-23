<script lang="ts" setup>
import { getSummonerIcon } from "~/domain/utils/img"

defineOptions({
  inheritAttrs: false
})

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()
const { summoner } = storeToRefs(sSession())

const safeSum = computed(() => safeObject(summoner.value))
</script>

<template>
  <UUser
    :avatar="{ src: getSummonerIcon(safeSum.icon) }"
    :ui="{
      name: cn(
        'h-12 overflow-y-visible font-serif text-8xl! font-semibold! text-pc/94 drop-shadow-sm',
        { 'opacity-40': !summoner?.name }
      ),
      description:
        'inline-flex h-8 items-center gap-4 px-0.5 align-baseline leading-8 font-medium text-pc',
      root: 'gap-4',
      avatar: 'size-20 translate-y-1'
    }"
    :description="`#${safeSum.tag} @${safeSum.region} lv. ${safeSum.level}`"
    :name="safeSum.name">
    <template #description>
      <LazySummonerId :summoner="safeSum" type="tag" />
      <LazySummonerId :summoner="safeSum" type="region" />
      <LazySummonerId :summoner="safeSum" type="level" />
    </template>
  </UUser>
</template>
