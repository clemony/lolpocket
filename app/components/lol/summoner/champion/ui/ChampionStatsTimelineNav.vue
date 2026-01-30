<script lang="ts" setup>
import type { ShallowRef } from 'vue'
import { useRouteHash } from '@vueuse/router'
import { summonerSections } from '~/components/lol/summoner/champion/summonerSections'

const section = useRouteHash()
const { activeId, activeIndex } = useScrollSectionsInject()
watch(
  () => activeIndex.value,
  (v) => {
    console.log('💠 - watch - newVal:', v)
  }
)

const map = computedOnce(() => {
  return summonerSections.map(s => s.id)
}).value
console.log('🥸 - map:', map)
const next = computed(() => {
  if (activeIndex.value === map.length - 1) return `#${map[0]}`
  return `#${map[activeIndex.value + 1]}`
})

const prev = computed(() => {
  if (activeIndex.value === 0) return `#${map[map.length - 1]}`
  return `#${map[activeIndex.value - 1]}`
})
</script>

<template>
  <menu class="relative flex flex-col justify-center py-3">
    <!--
     <MasteryProgress
      :mastery
      progress
      :current="progressOverall" /> -->

    <Button
      v-for="(item, i) in summonerSections"
      :key="i"
      variant="link"
      as="a"
      :class="
        cn(
          'flex items-center justify-start px-0 text-bc/50 duration-0 hover:text-bc',
          { 'text-bc': item.id === activeId },
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
    </Button>
  </menu>
</template>
