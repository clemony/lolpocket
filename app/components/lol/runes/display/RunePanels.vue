<script lang="ts" setup>
import { useRunes } from "~/domain/summoner/match/useRunes"
import { pathIndex } from "~~/shared/constants/runes/pathIndex"

const props = defineProps<{
  pocket?: Pocket
}>()

const selectedPath = ref<number>(8400)

const tabListClass =
  "bg-p0/45  shadow-smooth h-18 w-120 justify-evenly gap-5  overflow-hidden rounded-xl border border-p0/20 py-3  z-20 absolute flex items-center "
</script>

<template>
  <div class="flex gap-16 px-12">
    <div class="flex flex-col gap-8" :data-path="selectedPath">
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
            v-for="[k, v] in Object.entries(pathIndex)"
            :key="k"
            label="path"
            class="grid aspect-square size-14 place-items-center rounded-full"
            :class="{
              'bg-p0/70 shadow-sm shadow-black/5 backdrop-blur-sm duration-500':
                v.id === selectedPath
            }">
            <input
              v-model="selectedPath"
              class="hidden"
              type="radio"
              :value="v.id"
              name="selected-primary" />

            <Img
              class="z-10 h-9 w-auto brightness-90 grayscale transition-all duration-300 [&_img]:drop-shadow-sm"
              :src="`/img/rune/${v.id}.webp`"
              :alt="`${v.id} icon`"
              :class="{
                'brightness-100 grayscale-0': v.id === selectedPath
              }" />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
