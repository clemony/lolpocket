<script lang="ts" setup>
const props = defineProps<{
  set?: RuneSet
  pocket?: pocket
}>()
const ds = useDataStore()

const runePaths = ref(ds.paths)
console.log('💠 - runePaths:', runePaths)

const selectedPrimary = ref('Resolve')
// console.log('💠 - selectedPrimary:', selectedPrimary)

const secondaryPaths = computed(() => {
  return runePaths.value.filter(path => path.name != selectedPrimary.value)
})

const selectedSecondary = ref('Inspiration')
watch(
  () => selectedPrimary.value,
  (newVal) => {
    if (newVal == selectedSecondary.value) {
      const index = runePaths.value.findIndex(path => path.name == selectedPrimary.value)

      selectedSecondary.value = runePaths.value[index == 4 ? 0 : index + 1].name
    }
  },
)

const tabListClass = 'bg-b1/45  shadow-smooth h-18 w-120 justify-evenly gap-5  overflow-hidden rounded-xl border border-b1/20 py-3  z-20 absolute flex items-center '

const a = computed(() => {
  return pathDescriptions.find(path => path.name == selectedPrimary.value)
})

const b = computed(() => {
  return pathDescriptions.find(path => path.name == selectedSecondary.value)
})
</script>

<template>
  <div class="flex gap-16 px-12">
    <div
      class="flex flex-col gap-8"
      :data-path="selectedPrimary">
      <Transition
        enter-active-class="transition-all duration-500"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-500"
        leave-from-class="opacity-100 "
        leave-to-class="opacity-0 -translate-y-2"
        mode="out-in">
        <div :key="selectedPrimary">
          <div class="flex items-center gap-8 leading-none">
            <h1 class="tracking-tight transition-all duration-300">
              {{ selectedPrimary }}
            </h1>
            <span class="pt-0.5 lowercase">{{ a.tag }}</span>
          </div>
          <p class="text-4 mt-2.5 font-serif">
            {{ a.description }}.
          </p>
        </div>
      </Transition>
      <div class="shadow-smooth relative h-18 w-120 rounded-xl">
        <div
          class="gradient absolute z-0 size-full rounded-xl"
          :data-path="selectedPrimary" />

        <div :class="tabListClass">
          <label
            v-for="path in runePaths"
            :key="path.name"
            v-tippy="path.name.replace(/^([a-z])/, '\U$1')"
            class="grid aspect-square size-14 place-items-center rounded-full"
            :class="{
              'bg-b1/70 shadow-sm shadow-black/5 backdrop-blur-sm duration-500': path.name == selectedPrimary,
            }">
            <input
              v-model="selectedPrimary"
              type="radio"
              :value="path.name"
              class="hidden"
              name="selected-primary" />
            <LoadImg
              :url="`/img/runes/${path.name}.webp`"
              :alt="`${path.name} icon`"
              class="z-10 h-9 w-auto brightness-90 grayscale transition-all duration-300 [&_img]:drop-shadow-sm"
              :class="{
                'brightness-100 grayscale-0': path.name == selectedPrimary,
              }" />
          </label>
        </div>
      </div>

      <RuneSelect v-model:model-value="selectedPrimary" />
    </div>

    <div class="flex flex-col gap-8">
      <Transition
        enter-active-class="transition-all duration-500"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-500"
        leave-from-class="opacity-100 "
        leave-to-class="opacity-0 -translate-y-2"
        mode="out-in">
        <div :key="selectedSecondary">
          <div class="flex items-center gap-8 leading-none">
            <h1 class="tracking-tight transition-all duration-300">
              {{ selectedSecondary }}
            </h1>
            <span class="pt-0.5 lowercase">{{ b.tag }}</span>
          </div>
          <p class="text-4 mt-2.5 font-serif">
            {{ b.description }}.
          </p>
        </div>
      </Transition>
      <div class="shadow-smooth relative h-18 w-120 rounded-xl">
        <div
          class="gradient absolute z-0 size-full rounded-xl"
          :data-path="selectedSecondary" />

        <div :class="tabListClass">
          <label
            v-for="path in secondaryPaths"
            :key="path.name"
            class="grid aspect-square size-14 place-items-center rounded-full"
            :class="{
              'bg-b1/70 shadow-sm shadow-black/5 backdrop-blur-sm duration-500': path.name == selectedSecondary,
            }">
            <input
              v-model="selectedSecondary"
              type="radio"
              :value="path.name"
              class="hidden"
              name="selected-secondary" />
            <img
              :src="`/img/runes/${path.name}.webp`"
              :alt="`${path.name} icon`"
              class="z-10 h-9 w-auto brightness-90 grayscale transition-all duration-300 [&_img]:drop-shadow-sm"
              :class="{
                'brightness-100 grayscale-0': path.name == selectedSecondary,
              }" />
          </label>
        </div>
      </div>
      <RuneSelect
        v-model:model-value="selectedSecondary"
        :path-set="2" />
    </div>
  </div>
</template>

<style scoped>

</style>