<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const {
  class: className,
  content,
  hover,
  size = 'md',
  to,
  variant = 'link',
} = defineProps<{
  class?: HTMLAttributes['class']
  to?: string
  hover?: any
  content?: string
  variant?: any
  size?: any
}>()
</script>

<template>
  <div class="w-max">
    <Button
      :size
      :hover
      v-bind="$attrs"
      :class="cn('gap-1!', className)"
      :variant
      @click="navigateTo(to)">
      {{ content }}

      <icon
        name="link-2"
        class="size-4.5 **:stroke-[2]" />
    </Button>
  </div>
</template>
