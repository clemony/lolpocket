<script lang="ts" setup>
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
    <IndicatorTabsList
      class="items-center h-19 justify-evenly pt-2 grid-cols-5 w-full field-box">
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
        <IndicatorTabsList
          class="absolute top-0 left-0 pointer-events-none h-19 justify-evenly grid-cols-5 w-full bg-transparent shadow-none inset-shadow-none border-none">
          <TabsTrigger
            v-for="item in paths"
            :key="`${item}-tabs`"
            :title="item"
            class="rounded-full relative group aspect-square size-15 place-self-center invisible opacity-0"
            :value="item" />

          <TabIndicator
            round-disabled
            class="-mt-0.25 -ml-1.25 !size-17 brightness-90" />
        </IndicatorTabsList>
      </Tabs>

      <TabIndicator
        v-if="path"
        class="-ml-[2px] !size-16"
        round />
    </IndicatorTabsList>
  </Tabs>
</template>
