<script setup lang="ts">
import { motion } from 'motion-v'

const { menu } = defineProps<{
  menu: Array<any>
}>()

const emit = defineEmits(['update:shown'])
</script>

<template>
  <motion.div
    drag
    :while-dragging="{ scale: 1.2 }"
    class="tippy-box !size-px !bg-transparent ">
    <div class="tippy-content">
      <div
        data-theme="base"
        class=" w-64 tippy-box px-1.5 py-1">
        <div
          class="flex w-full items-center gap-1 flex-nowrap p-0">
          <Element
            size="icon-sm"
            class="!w-3">
            <icon
              name="teenyicons:drag-vertical-outline"
              class=" size-4 absolute opacity-40 -translate-x-px contrast-160 mix-blend-hard-light" />
          </Element>
          <template
            v-for="item, i in menu"
            :key="i">
            <Toggle
              v-if="!item.name"
              v-model:model-value="item.model"
              variant="outline"
              active="inset"
              size="sq-md"
              @click="item.action()">
              <icon :name="item.icon" />
            </Toggle>
            <ButtonGroupSeparator
              v-if="item.name === 'separator'"
              class="h-[11px] max-h-[11px]"
              orientation="vertical" />
          </template>
        </div>
      </div>
    </div>
  </motion.div>
</template>