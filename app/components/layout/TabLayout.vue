<script lang="ts" setup>
const {
  title,
  class: className,
  description,
  icon = false,
  size = 'default',
} = defineProps<{
  title?: string
  description?: string
  class?: HTMLAttributes['class']
  size?: 'default' | 'lg' | 'xl'
  icon?: boolean
}>()
/* ? alsdjlsajd */
</script>

<template>
  <div class="overflow-hidden flex flex-col size-full absolute inset-0 top-0">
    <div
      :class="
        cn(' grid grid-cols-2 z-0 size-full  sticky top-0 bg-b1 z-1 ', {
          ' max-h-74 h-74 ': size === 'xl',
          ' h-64': size === 'lg',
          ' max-h-58 h-58': size === 'default',
        })
      ">
      <slot name="background" />
      <Separator class="absolute z-0 bottom-0" />
      <div :class="cn('flex flex-col z-1  *:z-1 size-full gap-6')">
        <div class="flex items-center gap-8  grow pl-32">
          <slot name="icon" />
          <slot name="header" />
        </div>
        <div
          :class="
            cn('flex gap-4  *:first:justify-self-end pl-32', { 'pl-58': icon })
          ">
          <slot name="before-tabs" />
          <slot name="tabs" />
          <slot name="after-tabs" />
        </div>
      </div>
      <div class="size-full overflow-hidden border-b border-b-b3">
        <slot name="header-right" />
      </div>
    </div>
    <div class="size-full overflow-hidden relative">
      <slot />
    </div>
  </div>
</template>
