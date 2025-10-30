<script setup lang="ts">
const { cancellable, change, save } = defineProps<{
  save?: boolean
  change?: boolean
  cancellable?: boolean
}>()
</script>

<template>
  <Button
    variant="neutral"
    size="sm"
    hover="opacity"
    class="pr-7 pl-6 font-semibold">
    <Element size="icon-sm">
      <icon
        :name="
          !change && (cancellable || save) ? 'x'
          : save && change ? 'tick' : 'send'"
        :class="cn('size-4', { 'size-5': save })" />
    </Element>
    {{
      !change && (cancellable || save) ? 'Cancel'
      : save && change ? 'Save' : 'Post'
    }}
  </Button>
</template>
