<script setup lang="ts">
const {
  variant = 'shadow',
  class: className,
  size = 'md',
  summoner,
} = defineProps<{
  class?: HTMLAttributes['class']
  summoner: MaybeRef<Summoner>
  variant?: any
  size?: any
}>()
</script>

<template>
 <UButton
    :class="cn('', className)"
    :variant="variant"
    :size="size"
    @click="ui().blockDialog = true">
    <icon
      class=""
      name="lucide:ban" />
    <span>
      <slot />
    </span>
  </UButton>
</template>
