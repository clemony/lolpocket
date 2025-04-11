<script setup lang="ts">
import { ListboxContent, ListboxFilter, ListboxGroup, ListboxGroupLabel, ListboxItem, ListboxItemIndicator, ListboxRoot, ListboxVirtualizer } from 'reka-ui'

import { animate, AnimatePresence, motion } from 'motion-v'

definePageMeta({
  section: 'calculator',
})

const is = useItemStore()

const target = ref()

onMounted (() => {
  if (!is.calculatorSets.length) {
    createCalculatorSet()
  }
})
console.log('💠 - is.calculatorSets:', is.calculatorSets)
</script>

<template>
  <NuxtLayout

    name="header-layout"
    class="  pt-8  overflow-y-auto">
    <ListboxRoot v-model="is.setsToCompare" multiple>
      <ListboxFilter />

      <ListboxContent class="pt-14 px-14">
        <ListboxGroup>
          <ListboxGroupLabel>Sets</ListboxGroupLabel>
          <transition-slide group :offset="{ enter: [0, 16], leave: [0, 16] }" class=" grid gap-y-8">
            <ListboxItem v-for="(set, i) in is.calculatorSets" :key="i" :value="set[i]">
              <Field class="!flex flex-row gap-3 items-center items-center pl-6 gap-4 w-fit bg-b2/30  drop-shadow-xs ">
                <template #title>
                  <transition-slide :offset="{ enter: [0, 6], leave: [0, 6] }">
                    <span v-if="is.setsToCompare[0] == set || is.setsToCompare[1] == set ">
                      {{ is.setsToCompare[0] == set ? `Comparing as Set 1` : is.setsToCompare[1] == set ? `Comparing as Set 2` : null }}
                    </span>
                  </transition-slide>
                </template>

                <CalculatorSet :num="i" :set="set" />
                <div class="size-6.5">
                  <div class="size-6 grid justify-start items-center shadow-sm dst inset-shadow-sm rounded-tiny border-neutral/50 bg-b1/50 border">
                    <ListboxItemIndicator :key="i" as-child>
                      <motion.div
                        class="overflow-hidden"
                        :animate="{ width: [0, 20] }"
                        :exit="{
                          width: [20, 0],
                          opacity: [1, 0],
                        }">
                        <icon name="tick-sm" class="!size-6 !shrink-0 overflow-hidden" />
                      </motion.div>
                    </ListboxItemIndicator>
                  </div>
                </div>
              </Field>
            </ListboxItem>
          </transition-slide>
        </ListboxGroup>
      </ListboxContent>
    </ListboxRoot>
  </NuxtLayout>
</template>

<style scoped>

</style>
