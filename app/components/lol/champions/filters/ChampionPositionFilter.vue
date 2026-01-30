<script setup lang="ts">
const {
  class: className,
  clear = false,
  hover = 'btn',
  size = ['sq-8', '8'],
  variant = 'ghost',
} = defineProps<{
  class?: HTMLAttributes['class']
  clear?: boolean
  size?: ButtonVariants['size'][]
  variant?: ButtonVariants['variant']
  hover?: ButtonVariants['hover']
}>()
</script>

<template>
  <Listbox v-model:model-value="cs().filters.position" :multiple="false">
    <ListboxContent as-child>
      <TransitionSlideLeft
        group
        :class="
          cn(
            'relative z-1 flex max-h-60 w-9/10 w-full flex-col flex-wrap items-center items-start gap-3 gap-y-3 py-0',
            className,
          )
        "
      >
        <Button
          v-if="cs().filters.position && clear"
          class="order-first hover:*:opacity-100"
          :variant
          :hover
          :size="size[0]"
          @click="cs().filters.position = null"
        >
          <icon class="size-4" name="x" />
        </Button>

        <BaseListboxItem
          v-for="position in mapPositions.filter((p) => p.name !== 'All')"
          :key="position.name"
          class="bg-transparent fx-0"
          :value="position.name"
          as-child
        >
          <PositionBadge :variant :size="size[1]" :position />
        </BaseListboxItem>
      </TransitionSlideLeft>
    </ListboxContent>
  </Listbox>
</template>

<style scoped></style>
