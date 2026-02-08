<script setup lang="ts">
const {
  variant = 'neutral',
  cancellable,
  change,

  icon: i,
  save,
} = defineProps<{
  save?: boolean
  change?: boolean
  cancellable?: boolean
  variant?: ButtonVariants['variant']

  icon?: string
}>()

const iconic = computed(() => {
  if (i) return i

  return (
    !change && (cancellable || save)
      ? 'x'
      : save && change
        ? 'tick'
        : 'send'
  )
})
</script>

<template>
  <Button
    class="pr-6 pl-5 font-semibold"
    size="sm">
    <Element size="sm">
      <Icon
        :name="iconic"
        :class="
          cn('size-full', { 'size-5': save, 'size-4': cancellable || icon })
        " />
    </Element>
    <slot>
      {{
        !change && (cancellable || save) ? "Cancel"
        : save && change ? "Save"
          : "Post"
      }}
    </slot>
  </Button>
</template>
