<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  modelValue?: boolean
  icon?: string
  text?: string
  title?: string
}>()
</script>

<template>
  <MenubarMenu>
    <MenubarTrigger
      v-bind="$attrs"
      :class="cn('rounded-lg  btn bg-b1 w-12.5  hover:!bg-b2 cursor-pointer text-4 font-light',
                 props.class)"
    >
      <LittleIcon v-if="props.icon" :icon="props.icon" class="size-5" />
      <span v-if="props.text">{{ props.text }}</span>
    </MenubarTrigger>

    <MenubarContent side="left" :side-offset="12" v-bind="$attrs" class="isolate !shadow-sm !z-40 w-64 max-h-100 overflow-y-auto relative pt-0 pb-2 ">
      <div v-if="props.title" class="bg-b1/20 backdrop-contrast-95  backdrop-blur-sm sticky z-10 h-12 w-[104%] flex items-center pl-6 !pr-3 left-0 top-0 -mr-2 justify-between">
        {{ title }}
        <slot name="title" />
      </div>

      <slot />
    </MenubarContent>
  </MenubarMenu>
</template>

<style scoped>

</style>
