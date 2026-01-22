<script lang="ts" setup>
import type { Pocket, RuneSet } from '@types'

const { pocket, set: s } = defineProps<{
  pocket: Pocket
  path: string | undefined
  set: RuneSet
}>()
const paths = ['Precision', 'Domination', 'Sorcery', 'Resolve', 'Inspiration']
const set = computed(() => s)
</script>

<template>
  <!-- secondary trigger start  -->
  <Tabs>
    <TabsList

      class="field-box h-19 w-full grid-cols-5 items-center justify-evenly pt-2">
      <PathTabTrigger
        v-for="item in paths"
        :key="`${item}2`"
        :item="item"
        :class="{
          'pointer-events-none [&_img]:opacity-20': set.primary.path === item,
        }"
        :disabled="set.primary.path === path"
        :value="item"></PathTabTrigger>

      <!-- primary indicator  -->
      <Tabs v-model:model-value="set.primary.path">
        <TabsList

          class="
            pointer-events-none absolute top-0 left-0 h-19 w-full grid-cols-5
            justify-evenly border-none bg-transparent shadow-none
            inset-shadow-none
          ">
          <TabsTrigger
            v-for="item in paths"
            :key="`${item}-tabs`"
            :title="item"
            class="
              group invisible relative aspect-square size-15 place-self-center
              rounded-full opacity-0
            "
            :value="item" />

          <TabIndicator
            round-disabled
            class="-mt-0.25 -ml-1.25 size-17! brightness-90" />
        </TabsList>
      </Tabs>

      <TabIndicator
        v-if="path"
        class="-ml-[2px] size-16!"
        round />
    </TabsList>
  </Tabs>
</template>
