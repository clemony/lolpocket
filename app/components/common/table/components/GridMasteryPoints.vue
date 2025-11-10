<script setup lang="ts">
import 'assets/css/components/mastery-progress.css'
import { motion } from 'motion-v'
import { ProgressIndicator, ProgressRoot } from 'reka-ui'

const { params } = defineProps<{
  params: any
}>()

const root = useTemplateRef<HTMLElement>('root')
const progress = computed(
  () => Math.round((params.data.points / params.totalPoints) * 100 * 100) / 100
)
</script>

<template>
  <div class="grid size-full items-center">
    <ProgressRoot
      v-if="params.data.points"
      :model-value="params.data.points"
      :max="params.totalPoints"
      class="grid w-full items-center self-center">
      <div
        ref="root"
        class="
          relative top-0 left-0 z-0 h-3 w-full hover-ring overflow-hidden
          rounded-xl border border-b4/40 border-neutral/20 bg-linear-to-r
          from-b3/80 to-b3/70 shadow-xs inset-shadow-xs !ring-offset-3
          hover:ring-neutral/60 hover:!ring-offset-b1
        ">
        <ProgressIndicator
          as-child
          class="
            relative drop-shadow-sm drop-shadow-black/12
            after:absolute after:right-0 after:z-3 after:size-full
            after:rounded-r-[2px] after:border after:border-b4
            after:inset-shadow-sm
          ">
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
            class="
              absolute left-0 h-full min-w-2 origin-left overflow-hidden
              rounded-r-[2px] inset-shadow-sm duration-600
            ">
            <div
              id="mastery-gradient-progress"
              :data-level="
                params.data.level >= 10 ? 10
                : params.data.level <= 5 ? 0
                  : params.data.level
              "
              class="absolute size-full -scale-x-100">
              <Sparkles
                class="
                  sparkles absolute size-full scale-200 opacity-50 saturate-80
                " />
            </div>
            <tippy
              theme="mastery"
              tag="span"
              class="absolute top-0 right-5.5 h-full w-px"
              :trigger-target="root"
              :placement="progress < 50 ? 'top-start' : 'top-end'">
              <template #content>
                <div
                  class="
                    flex items-center gap-3 px-0 py-1 text-2 leading-none
                    font-normal tracking-tight text-nc
                  ">
                  <i-lol-mastery class="-ml-1 size-4 opacity-80 dst" />

                  {{ params.data.points.toLocaleString() }} &nbsp; [
                  {{ progress }}%]
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
