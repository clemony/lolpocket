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
  <main class="z-auto min-h-screen w-full">
    <div :class="cn('z-auto w-full grow space-y-6 px-22 pb-16', className)">
      <div
        class="sticky top-0 z-3 -ml-[5px] h-max w-[calc(100%+10px)] space-y-0.5 bg-p0 pt-12">
        <slot name="header">
          <h1 class="text-5xl font-bold dst">
            {{ title || route.meta?.title || route.name }}
          </h1>
        </slot>
        <div class="flex justify-between">
          <slot name="description">
            <p class="leading-8 text-pc/60">
              {{ description || route.meta?.description }}
            </p>
          </slot>
          <div class="relative grid size-px self-end">
            <div class="absolute bottom-2 size-max place-self-end">
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
