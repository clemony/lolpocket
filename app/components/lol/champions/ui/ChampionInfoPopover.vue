<script lang="ts" setup>
const {
  championKey,
  class: className,
  splash,
} = defineProps<{
  championKey: string
  splash?: string
  class?: HTMLAttributes["class"]
}>()
const isOpen = ref(false)
</script>

<template>
  <UModal v-model:open="isOpen">
    <UButton class="size-full" @click.right.prevent>
      <LibraryChampionCard
        v-if="championKey"
        bg-size="200%"
        :champ-key="championKey"
        type="centered"
        :class="cn('min-h-64', className)"
        object-position="50% -1.5rem" />
    </UButton>
  </UModal>
</template>
