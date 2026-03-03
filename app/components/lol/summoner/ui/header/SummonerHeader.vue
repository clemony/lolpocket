<script lang="ts" setup>
import { getSummonerIcon } from "~/domain/utils/img"

defineOptions({
  inheritAttrs: false,
})

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()
const { summoner } = storeToRefs(sSession())

const safeSum = computed(() => safeObject(summoner.value))
</script>

<template>
  <UUser
    size="header"
    :avatar="{ src: getSummonerIcon(safeSum.icon) }"
    :ui="{
      name: cn({ 'opacity-40': !summoner?.name }),
    }"
    :description="`#${safeSum.tag} @${safeSum.region} lv. ${safeSum.level}`"
    :name="safeSum.name">
    <template #description>
      <SummonerId :summoner="safeSum" type="tag" />
      <SummonerId :summoner="safeSum" type="region" />
      <SummonerId :summoner="safeSum" type="level" />
    </template>
  </UUser>
</template>
