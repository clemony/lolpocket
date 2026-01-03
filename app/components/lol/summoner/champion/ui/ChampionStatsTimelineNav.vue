<script lang="ts" setup>
import type { ShallowRef } from 'vue'
import { useRouteHash } from '@vueuse/router'
import { summonerSections } from '~/components/lol/summoner/champion/summonerSections'

const { summoner } = defineProps<{
  summoner: ShallowRef<Summoner>
}>()

const section = useRouteHash()
const { activeId } = useScrollSectionsInject()
watch(() => activeId.value, (v) => {
  console.log('💠 - watch - newVal:', v)
})
</script>

<template>
  <menu class="relative flex flex-col justify-center py-3">
    <!--    <Separator
      class="absolute inset-y-0 top-0 left-9 z-0 *:w-1"
      orientation="vertical">
      <div
        class="rounded-full bg-neutral transition-all"
        :style="{
          height: `${progressOverall}%`,
        }" />
    </Separator>
     <MasteryProgress
      :mastery
      progress
      :current="progressOverall" /> -->
    <Button
      v-for="item, i in summonerSections"
      :key="i"
      variant="link"
      as="a"
      :class="cn('flex items-center justify-start px-0 text-bc/50 duration-0 hover:text-bc', { 'text-bc': item.id === activeId })"
      size="12"
      @click="section = `#${item.id}`">
      <Icon
        name="right"
        :class="cn('size-4 opacity-0 transition-opacity duration-150', { 'opacity-100': item.id === activeId })" />
      <span :class="cn('text-3 font-light! capitalize group-hover/btn:font-medium!', { 'text-5 font-bold! ': item.id === activeId })">
        {{ item.name }}
      </span>
    </Button>
  </menu>
</template>