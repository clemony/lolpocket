<script setup lang="ts">
import 'assets/css/components/mastery-progress.css'

import { motion } from 'motion-v'
import { ProgressIndicator, ProgressRoot } from 'reka-ui'

const { params } = defineProps<{
  params: any
}>()

const root = ref(null)
const progress = computed (() => Math.round(((params.data.points / params.totalPoints) * 100) * 100) / 100)
</script>

<template>
  <div class="grid size-full items-center">
    <ProgressRoot
      v-if="params.data.points"
      :model-value="params.data.points"
      :max="params.totalPoints"
      class="w-full  grid items-center  self-center">
      <div
        ref="root"
        class="bg-linear-to-r from-neutral/80  to-neutral/70 hover-ring !ring-offset-3 hover:ring-neutral/60 hover:!ring-offset-b1 border border-neutral/20 relative inset-shadow-sm rounded-xl shadow-xs w-full h-3 top-0 left-0 overflow-hidden z-0 border border-b4/60 ">
        <ProgressIndicator as-child>
          <motion.div
            :style="{
              width: `${progress}%`,
            }"
            :initial="{
              transform: 'scaleX(0)',
            }"
            :animate="{
              transform: 'scaleX(1.1)',
            }"

            class="overflow-hidden inset-shadow-sm rounded-r-[2px] min-w-2 origin-left duration-600 absolute left-0 h-full">
            <div
              id="mastery-gradient-progress"
              :data-level="params.data.level >= 10 ? 10 : params.data.level <= 5 ? 0 : params.data.level"
              class="absolute  -scale-x-100 size-full">
              <Sparkles class="absolute size-full  scale-200 opacity-50 sparkles  saturate-80" />
            </div>
            <tippy
              theme="mastery"
              tag="span"
              class="absolute right-5.5 w-px h-full top-0"
              :trigger-target="root"
              :placement="progress < 50 ? 'top-start' : 'top-end'">
              <template #content>
                <div
                  class="flex gap-3 tracking-tight px-0 py-1 text-2 font-normal leading-none text-nc items-center">
                  <i-lol-mastery
                    class="opacity-80 size-4 dst -ml-1" />

                  {{ params.data.points.toLocaleString() }} &nbsp;  [ {{ progress }}%]
                </div>
              </template>
            </tippy>
          </motion.div>
        </ProgressIndicator>
      </div>
    </ProgressRoot>
  </div>

<!--
            :style="{
              transform: `translateX(${progress}%)`,
            }" -->
</template>
