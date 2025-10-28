<script setup lang="ts">
const { save } = defineProps<{
  save?: boolean
}>()
</script>

<template>
  <Button
    variant="neutral"
    size="sm"
    class="pr-7 pl-6 font-semibold">
    <Element size="icon-sm">
      <icon
        :name="save ? 'tick' : 'send'"
        :class="cn('size-4', { 'size-5': save })" />
    </Element>
    {{ save ? 'Save' : 'Post' }}
  </Button>
</template>
