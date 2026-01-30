<script setup lang="ts">
import { motion } from 'motion-v'

const { menu } = defineProps<{
  menu: Array<any>
}>()

const emit = defineEmits(['update:shown'])
</script>

<template>
  <motion.div
    class="tippy-box size-px! bg-transparent!"
    drag
    :while-dragging="{ scale: 1.2 }"
  >
    <div class="tippy-content">
      <div class="tippy-box w-64 px-1.5 py-1" data-theme="base">
        <div class="flex w-full flex-nowrap items-center gap-1 p-0">
          <Element class="w-3!" size="icon-sm">
            <icon
              class="absolute size-4 -translate-x-px opacity-40 mix-blend-hard-light contrast-160"
              name="teenyicons:drag-vertical-outline"
            />
          </Element>
          <template v-for="(item, i) in menu" :key="i">
            <Toggle
              v-if="!item.name"
              v-model:model-value="item.model"
              variant="outline"
              on="inset"
              size="sq-10"
              @click="item.action()"
            >
              <icon :name="item.icon" />
            </Toggle>
            <ButtonGroupSeparator
              v-if="item.name === 'separator'"
              class="h-[11px] max-h-[11px]"
              orientation="vertical"
            />
          </template>
        </div>
      </div>
    </div>
  </motion.div>
</template>
