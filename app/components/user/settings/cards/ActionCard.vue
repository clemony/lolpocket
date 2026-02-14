<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const {
  title,
  as = "label",
  button,
  class: className,
  hover,
  text,
} = defineProps<{
  title?: string
  text?: string
  button?: string
  class?: HTMLAttributes["class"]
  hover?: boolean
  as?: string
}>()
</script>

<template>
  <UCard
    class=""
    :as="as"
    :title
    :class="
      cn(
        'grid h-50 w-110 max-w-110 justify-start justify-items-start gap-2 rounded-xl pt-8 pb-6 *:px-7 **:text-start',
        { 'hover-ring hover:bg-p2/60!': hover },
        className
      )
    ">
    <template #header>
      <div class="dst self-start text-xl">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <divn
        class="inline self-start align-baseline leading-6 text-pretty opacity-70">
        <slot name="text">
          {{ text }}
        </slot>
      </divn>
    </template>
    <p v-if="button" class="flex w-full items-center justify-end px-6.75">
      <UButton class="hover-ring" color="neutral">
        {{ button }}
      </UButton>
    </p>
    <p v-else class="mt-2 flex items-center gap-4 font-medium italic">
      <USwitch
        v-bind="$attrs"
        :id="title"
        class="hover-ring pointer-events-auto!" />
      <slot />
    </p>
  </UCard>
</template>
