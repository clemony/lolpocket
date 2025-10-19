<script lang="ts" setup>
const {
  title,
  class: className,
  description,
} = defineProps<{
  title?: string
  description?: string
  class?: HTMLAttributes['class']
}>()
/* ? alsdjlsajd */
const route = useRoute()
</script>

<template>
  <main class="w-full z-auto">
    <div :class="cn('space-y-6 px-22 pb-16 w-full z-auto ', className)">
      <div class="w-[calc(100%+10px)] -ml-[5px] h-max space-y-0.5 sticky top-0 bg-b1 z-3 pt-12">
        <slot name="header">
          <h1 class="text-9 font-bold dst">
            {{ title || route.meta?.title || route.name }}
          </h1>
        </slot>
        <div class="flex justify-between">
          <slot name="description">
            <p class="text-bc/60 leading-8">
              {{ description || route.meta?.description }}
            </p>
          </slot>
          <div class="relative size-px grid self-end">
            <div class="absolute w-max h-max justify-self-end self-end bottom-2">
              <slot name="right" />
            </div>
          </div>
        </div>
        <Separator class="mt-6 mb-0" />
      </div>
      <slot />
    </div>
    <SiteFooter />
  </main>
</template>
