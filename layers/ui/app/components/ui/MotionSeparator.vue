<script lang="ts" setup>
const {
  labelOn,
  labelOff,
  labelSuffix,
  modelValue,
  class: className,
} = defineProps<{
  labelOn?: string
  labelOff?: string
  labelSuffix?: string
  modelValue: ComputedRef<boolean>
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    v-motion="{ layout: 'size' }"
    :class="cn('flex w-full flex-nowrap items-center', className)">
    <div
      v-motion="{ layout: 'size' }"
      class="inline-flex shrink-0 items-center gap-1 align-baseline text-2xs font-semibold text-nc/60">
      <AnimatePresence>
        <span
          v-if="labelOn && modelValue?.value"
          v-motion="{
            layout: 'size',
            initial: {
              maxWidth: 0,
              width: 0,
              opacity: 0,
            },
            animate: {
              maxWidth: '100%',
              width: '100%',
              opacity: 1,
            },
            exit: {
              maxWidth: 0,
              width: 0,
              opacity: 0,
            },
            transition: {
              duration: 0.4,
              ease: 'easeOut',
            },
          }"
          class="origin-left"
          >{{ labelOn }}</span
        ><span v-else>{{ labelOff || "" }}</span> </AnimatePresence
      ><span v-if="labelSuffix" class="mr-1">{{ labelSuffix }}</span>
    </div>

    <div
      v-motion="{
        layout: 'size',
        transition: {
          duration: 0.4,
          ease: 'easeOut',
        },
      }"
      class="ml-2 flex h-px grow bg-nc/10" />
    <div class="flex items-center gap-2">
      <slot name="trailing" />
    </div>
  </div>
</template>
