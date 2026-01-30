<script setup lang="ts">
const {
  class: className,
  size = 'md',
  summoner,
  variant = 'shadow',
} = defineProps<{
  class?: HTMLAttributes['class']
  summoner: MaybeRef<Summoner>
  variant?: any
  size?: any
}>()
</script>

<template>
  <Button
    :class="cn('', className)"
    :variant="variant"
    :size="size"
    @click="ui().blockDialog = true"
  >
    <icon class="" name="lucide:ban" />
    <span>
      <slot />
    </span>
  </Button>
</template>
