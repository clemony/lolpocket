<script lang="ts" setup>
const { pocket } = defineProps<{
  pocket: Pocket
}>()
const paths = ['Precision', 'Domination', 'Sorcery', 'Resolve', 'Inspiration']

const rs = useRuneStore()

const set = computed(() => pocket.runes[rs.selectedRuneSet])
</script>

<template>
  <!-- secondary trigger start  -->
  <!--   <Tabs v-model:model-value="set[1].path">
    <IndicatorTabsList class=" h-18 justify-evenly grid-cols-5 w-full field-box relative">
      <PathTabTrigger
        v-for="path in paths"
        :key="`${path}2`"
        v-tippy="path"
        :class="{ 'pointer-events-none [&_img]:opacity-30': set[0].path == path }"
        :disabled="set[0].path == path"
        :value="path">
      </PathTabTrigger> -->

  <!-- primary indicator  -->
  <!-- <Tabs v-model:model-value="set[0].path">
        <IndicatorTabsList class="absolute top-0 left-0 pointer-events-none h-19 justify-evenly grid-cols-5 w-full  bg-transparent shadow-none inset-shadow-none border-none">
          <TabsTrigger
            v-for="path in paths"
            :key="`${path}-tabs`"
            v-tippy="path"
            class=" rounded-full relative group aspect-square size-15 place-self-center invisible opacity-0"
            :value="path" />

          <TabIndicator round-disabled />
        </IndicatorTabsList>
      </Tabs> -->

  <!--       <TabIndicator round />
    </IndicatorTabsList>
  </Tabs> -->
  d
  <!-- primary end -->
</template>