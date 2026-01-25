<script setup lang="ts">
const {
  cancellable,
  change,
  hover = 'opacity',
  icon: i,
  save,
  variant = 'neutral',
} = defineProps<{
  save?: boolean
  change?: boolean
  cancellable?: boolean
  variant?: ButtonVariants['variant']
  hover?: ButtonVariants['hover']
  icon?: string
}>()

const iconic = computed(() => {
  if (i)
    return i

  return !change && (cancellable || save)
    ? 'x'
    : save && change
      ? 'tick'
      : 'send'
})
</script>

<template>
  <Button
    :variant
    size="sm"
    :hover
    class="pr-6 pl-5 font-semibold">
    <Element size="icon-sm">
      <Icon
        :name="iconic"
        :class="
          cn('size-full', { 'size-5': save, 'size-4': cancellable || icon })
        " />
    </Element>
    <slot>
      {{
        !change && (cancellable || save)
          ? "Cancel"
          : save && change
            ? "Save"
            : "Post"
      }}
    </slot>
  </Button>
</template>
