<script setup lang="ts">
const { class: className, variant, size } = defineProps<{
  class?: HTMLAttributes['class']
  variant?: any
  size?: any
}>()
</script>

<template>
  <Button
    :variant="variant"
    :size="size"
    :class="cn('', className)"
    @click="useSignIn('discord')">
    <div class="size-full relative grid place-items-center">
      <icon
        name="discord"
        :class="cn('size-5.5 ')" />
    </div>
    <span><slot /></span>
  </Button>
</template>