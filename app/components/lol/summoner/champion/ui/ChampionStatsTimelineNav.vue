<script lang="ts" setup>
import { useRouteHash } from "@vueuse/router"
import type { ShallowRef } from "vue"
import { summonerSections } from "~/components/lol/summoner/champion/summonerSections"

const section = useRouteHash()
const { activeId, activeIndex } = useScrollSectionsInject()
watch(
  () => activeIndex.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)

/* const next = computed(() => {
  if (activeIndex.value === map.length - 1) return `#${map[0]}`
  return `#${map[activeIndex.value + 1]}`
})

const prev = computed(() => {
  if (activeIndex.value === 0) return `#${map[map.length - 1]}`
  return `#${map[activeIndex.value - 1]}`
}) */
</script>

<template>
  <menu class="relative flex flex-col justify-center py-3">
    <!--
     <MasteryProgress
      :mastery
      progress
      :current="progressOverall" /> -->

    <!--   <button
      v-for="(item, i) in summonerSections"
      :key="i"
      as="a"
      :class="
        cn(
          'flex items-center hover:underline justify-start px-0 text-pc/50 duration-0 hover:text-pc',
          { 'text-pc': item.id === activeId },
        )
      "
      size="12"
      @click="section = `#${item.id}`"
    >
      <Icons
        name="right"
        :class="
          cn('size-4 opacity-0 transition-opacity duration-150', {
            'opacity-100': item.id === activeId,
          })
        "
      />
      <span
        :class="
          cn('text-md font-light! capitalize group-hover/btn:font-medium!', {
            'text-xl font-bold! group-hover/btn:font-bold! group-hover/btn:decoration-1! group-hover/btn:opacity-70':
              item.id === activeId,
          })
        "
      >
        {{ item.name }}
      </span>
    </button> -->
  </menu>
</template>
