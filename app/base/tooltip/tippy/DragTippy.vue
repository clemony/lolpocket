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
        class=" tippy-box w-64 px-1.5 py-1">
        <div
          class="flex w-full flex-nowrap items-center gap-1 p-0">
          <Element
            size="icon-sm"
            class="!w-3">
            <icon
              name="teenyicons:drag-vertical-outline"
              class=" absolute size-4 -translate-x-px opacity-40 mix-blend-hard-light contrast-160" />
          </Element>
          <template
            v-for="item, i in menu"
            :key="i">
            <Toggle
              v-if="!item.name"
              v-model:model-value="item.model"
              variant="outline"
              active="inset"
              size="sq-10"
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