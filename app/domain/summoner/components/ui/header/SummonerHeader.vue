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
  <div class="pointer-events-auto z-25 flex size-max h-21 items-center gap-10">
    <UUser
      :avatar="{ src: getSummonerIcon(safeSum.icon) }"
      :ui="{
        name: cn(
          'overflow-y-visible font-serif text-[2.8rem]! font-semibold! text-pc/94 drop-shadow-sm **:font-sans',
          { 'opacity-40': !summoner?.name }
        ),
        wrapper: 'flex h-full flex-col gap-2.5! self-center py-3',
        description:
          'inline-flex h-8 items-center gap-4 px-0.5 align-baseline font-medium text-pc',
        root: 'h-fullj flex gap-4',
        avatar: 'size-20'
      }"
      :description="`#${safeSum.tag} @${safeSum.region} lv. ${safeSum.level}`"
      :name="safeSum.name">
      <template #name>
        {{ safeSum.name }}
      </template>
      <template #description>
        <LazySummonerId :summoner="safeSum" type="tag" />
        <LazySummonerId :summoner="safeSum" type="region" />
        <LazySummonerId :summoner="safeSum" type="level" />
      </template>
    </UUser>
    <div class="flex h-full w-max items-center self-start">
      <UpdateSummoner>
        <UButton
          size="sm"
          :ui="{ base: 'px-6' }"
          color="neutral"
          label="Update" />
      </UpdateSummoner>
    </div>
  </div>
</template>
