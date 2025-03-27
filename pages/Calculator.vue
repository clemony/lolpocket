<script setup lang="ts">
import { useScroll } from '@vueuse/core'

definePageMeta({

})

const is = useItemStore()

const set1Ref = ref()
const set1IsVisible = useElementVisibility(set1Ref)

const set2Ref = ref()
const set2IsVisible = useElementVisibility(set2Ref)

const visibleSet = computed (() => {
  return set1IsVisible.value ? is.calculatorSet1 : is.calculatorSet2
})

watch(
  () => visibleSet.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)
const target = ref()

function getBounding(el) {
  const { x } = useElementBounding(el)
  console.log('💠 - getBounding - x:', x)
  return x.value
}

const { x } = useScroll(target, { behavior: 'smooth' })

const split = ref(false)
const toggleSplit = useToggle(split)
</script>

<template>
  <NuxtLayout
    name="header-layout"
    class="  pt-[6vh]  overflow-y-auto">
    <template #header>
      <CalculatorMenu />
    </template>
    <div class="size-full relative py-16">
      <LayoutGroup>
        <Motion
          :layout="true" class="grid grid-cols-1  justify-center"
          :class="{ ' grid-rows-[1fr_2fr]': split, ' grid-rows-[0.9fr_2fr]': !split }"
          :transition="{
            type: 'ease',
            stiffness: 500,
            damping: 30,
          }">
          <div class="w-full flex flex-col h-full pb-14 mt-4">
            <Motion
              ref="target" class=" h-full w-full" :layout="true" :class="{ ' carousel carousel-center  mb-18': !split, 'flex  mb-6 flex-col': split }"
              :transition="{
                type: 'ease',
                stiffness: 500,
                damping: 30,
              }">
              <Motion :layout="true" class=" flex py-2 h-fit  justify-center relative  w-full" :class="{ ' carousel-item': !split, '': split }">
                <CalculatorSet :num="1" :split="split" :set="is.calculatorSet1" />

                <span ref="set1Ref" class="absolute size-px" />
              </Motion>

              <Motion :layout="true" class=" flex py-2 h-fit  justify-center  w-full relative " :class="{ ' carousel-item ': !split, '': split }">
                <CalculatorSet :num="2" :split="split" :set="is.calculatorSet2" />
                <span ref="set2Ref" class="absolute size-px" />
              </Motion>
            </Motion>
            <div class=" flex items-center justify-center w-full gap-3">
              <button :disabled="split" class="btn btn-sm rounded-md" @click="x = getBounding(set1Ref)">
                1
              </button>
              <button v-tippy="'Compare'" class="btn btn-sm  rounded-md" @click="toggleSplit()">
                <icon name="material-symbols-light:compare-arrows" class="size-6.5 opacity-80" />
              </button>

              <button :disabled="split" class=" btn btn-sm rounded-md" @click="x = getBounding(set2Ref)">
                2
              </button>
            </div>
          </div>

          <Motion
            :layout="true" class=" justify-center self-start mt-7" :transition="{
              type: 'ease',
              stiffness: 500,
              damping: 30,
            }">
            <div class="mx-auto  h-180 w-1/2">
              <div class="tabs tabs-lift  tabs-lg size-full drop-shadow-[1px_1px_2px_rgba(0,0,0,0.08)]">
                <input type="radio" name="calculator-tabs" class="tab   w-32 text-3 px-6" aria-label="Stats" checked="true" />
                <div class="tab-content bg-b1 border-b3   size-full">
                  <div class="size-full overflow-hidden  rounded-box">
                    <div class="relative overflow-y-auto h-[99%] w-full">
                      <LazyCalculatorStatTotals :split="split" :set="visibleSet" />
                    </div>
                  </div>
                </div>

                <input type="radio" name="calculator-tabs" class=" w-32  text-3 tab" aria-label="Item Effects" />
                <div class="tab-content p-0 bg-b1 border-b3 size-full">
                  <div class=" overflow-hidden rounded-box size-full">
                    <div class=" relative overflow-y-auto size-full">
                      hgullb
                    </div>
                  </div>
                </div>

                <input type="radio" name="calculator-tabs" class="tab   w-32 text-3 px-6" aria-label="Options" />
                <div class="tab-content bg-b1 border-b3 pb-0  size-full">
                  <div class="size-full overflow-hidden  rounded-box">
                    <div class="relative overflow-y-auto h-[99%] w-full">
                      <LazyCalculatorOptions />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Motion>
        </Motion>
      </LayoutGroup>
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>
