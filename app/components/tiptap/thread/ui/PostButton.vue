<script setup lang="ts">
const { cancellable, change, save, variant = 'neutral' } = defineProps<{
  save?: boolean
  change?: boolean
  cancellable?: boolean
  variant?: ButtonVariants['variant']
}>()
</script>

<template>
  <Button
    :variant
    size="sm"
    hover="opacity"
    class="pr-6 pl-5 font-semibold">
    <Element size="icon-sm">
      <icon
        :name="
          !change && (cancellable || save) ? 'x'
          : save && change ? 'tick' : 'send'"
        :class="cn('size-4', { 'size-5': save, 'size-3.5': cancellable })" />
    </Element>
    <slot>
      {{
        !change && (cancellable || save) ? 'Cancel'
        : save && change ? 'Save' : 'Post'
      }}
    </slot>
  </Button>
</template>
