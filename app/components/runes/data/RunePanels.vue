<script lang="ts" setup>
const props = defineProps<{
  pocket?: Pocket
}>()

const selectedPath = ref('Resolve')

const { pathList } = await useRunes()

const tabListClass = 'bg-b1/45  shadow-smooth h-18 w-120 justify-evenly gap-5  overflow-hidden rounded-xl border border-b1/20 py-3  z-20 absolute flex items-center '
</script>

<template>
  <div class="flex gap-16 px-12">
    <div
      class="flex flex-col gap-8"
      :data-path="selectedPath">
      <Transition
        enter-active-class="transition-all duration-500"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-500"
        leave-from-class="opacity-100 "
        leave-to-class="opacity-0 -translate-y-2"
        mode="out-in">
        <RunesBlurb :current-path="selectedPath" layout-id="path1" />
      </Transition>
      <div class="shadow-smooth relative h-18 w-120 rounded-xl">
        <div
          class="gradient absolute z-0 size-full rounded-xl"
          :data-path="selectedPath" />

        <div :class="tabListClass">
          <label
            v-for="path in pathList"
            :key="path"
            v-tippy="path"
            class="grid aspect-square size-14 place-items-center rounded-full"
            :class="{
              'bg-b1/70 shadow-sm shadow-black/5 backdrop-blur-sm duration-500': path == selectedPath,
            }">
            <input
              v-model="selectedPath"
              type="radio"
              :value="path"
              class="hidden"
              name="selected-primary" />
            <Img
              :img="`/img/runes/${path}.webp`"
              :alt="`${path} icon`"
              class="z-10 h-9 w-auto brightness-90 grayscale transition-all duration-300 [&_img]:drop-shadow-sm"
              :class="{
                'brightness-100 grayscale-0': path == selectedPath,
              }" />
          </label>
        </div>
      </div>


    </div>
  </div>
</template>

<style scoped>

</style>