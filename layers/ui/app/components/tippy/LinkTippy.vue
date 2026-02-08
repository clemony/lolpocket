<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const {
  variant = 'link',
  class: className,
  content,
  hover,
  size = 'md',
  to,
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
      v-bind="$attrs"
      :size
      :hover
      :class="cn('gap-1!', className)"
      :variant
      @click="navigateTo(to)">
      {{ content }}

      <icon
        class="size-4.5 **:stroke-2"
        name="link-2" />
    </Button>
  </div>
</template>
