<script setup lang="ts">
import { useScroll } from '@vueuse/core'

definePageMeta({

})

const ans = useAnalysisStore()
const is = useItemStore()

const target = ref()

onMounted (() => {
  if (!ans.calculatorSets.length) {
    ans.calculatorSets.push(createCalculatorSet())
  }
})
</script>

<template>
  <NuxtLayout name="resizable-right-bar-layout">
    <template #page>
      <NuxtLayout
        name="header-layout"
        class="  pt-8  overflow-y-auto">
        <template #crumb>
          <CalculatorTitleBar />
        </template>
        <LayoutGroup>
          <AnimatePresence multiple as="div" class="size-full relative py-16">
            <Motion
              ref="target"
              as-child class=" h-full w-full flex  mb-6 " :layout="true"
              :transition="{
                type: 'ease',
                stiffness: 500,
                damping: 30,
              }">
              <CalculatorSet v-for="(set, i) in ans.calculatorSets" :key="i" :num="i" :set="set" />
            </Motion>
          </AnimatePresence>
        </LayoutGroup>
      </NuxtLayout>
    </template>
    <div class="size-full pt-12">
      <h1 class="px-6 dst">
        Calculator
      </h1>
      <CalculatorTabs />
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>
