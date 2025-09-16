<script lang="ts" setup>
const {
  championKey,
  splash,
  class: className,
} = defineProps<{
  championKey: string
  splash?: string
  class?: HTMLAttributes['class']
}>()
const isOpen = ref(false)
</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger
      class="size-full"
      @click.right.prevent>
      <LibraryChampionCard
        v-if="championKey"
        bg-size="200%"
        :champ-key="championKey"
        type="centered"
        :class="cn('min-h-64', className)"
        object-position="50% -1.5rem" />
    </DialogTrigger>

    <LazyChampionPopoverContent
      v-if="isOpen"
      :champion-key="championKey"
      class="champion w-full" />
  </Dialog>
</template>
