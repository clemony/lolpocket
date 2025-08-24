<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const {
  title,
  text,
  button,
  hover,
  as = 'label',
  class: className,
} = defineProps<{
  title?: string
  text?: string
  button?: string
  class?: HTMLAttributes['class']
  hover?: boolean
  as?: string
}>()
</script>

<template>
  <Card
    :as="as"
    :for="title"
    class=""
    :class="
      cn(
        'pt-8 pb-6 *:px-7 gap-2 grid shadow-black/4 shadow-sm rounded-xl  inset-shadow-sm-reverse inset-shadow-black/3 btn !bg-b2/15 justify-start **:text-start justify-items-start !border-b3 h-50 max-w-110 w-110 w-110 ',
        { 'hover:!bg-b2/60 hover-ring': hover },
        className,
      )
    ">
    <CardTitle class="dst text-5 self-start">
      <slot name="title">
        {{ title }}
      </slot>
    </CardTitle>
    <CardDescription class="leading-6 opacity-70  text-pretty self-start inline align-baseline">
      <slot name="text">
        {{ text }}
      </slot>
    </CardDescription>
    <p
      v-if="button"
      class="w-full flex items-center justify-end px-6.75">
      <Button
        variant="neutral"
        class="hover-ring ">
        {{ button }}
      </Button>
    </p>
    <p
      v-else
      class="flex gap-4 mt-2 items-center font-medium italic">
      <Switch
        :id="title"
        v-bind="$attrs"
        class="!pointer-events-auto hover-ring" />
      <slot />
    </p>
  </Card>
</template>
