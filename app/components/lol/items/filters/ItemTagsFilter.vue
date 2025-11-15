<script setup lang="ts">
import type { itemTags } from '~~/shared/references'

const {
  class: className,
  clear = true,
  hover = 'btn',
  size = ['sq-12', '12'],
  variant = 'ghost',
} = defineProps<{
  class?: HTMLAttributes['class']
  size?: ButtonVariants['size'][]
  variant?: ButtonVariants['variant']
  hover?: ButtonVariants['hover']
  clear?: boolean
}>()

function handleReset() {
  is().itemGridApi?.refreshCells()
}
// @todo FIx this for ag grid rfresh
function handleChange() {
  is().itemGridApi?.refreshCells()
}
</script>

<template>
  <Listbox
    v-model:model-value="is().filters.tags"
    :multiple="true">
    <ListboxContent as-child>
      <TransitionSlideLeft
        group
        :class="
          cn(
            'relative z-1 flex w-full flex-wrap items-center gap-3 py-0',
            className,
          )
        ">
        <Button
          v-if="is().filters.tags.length && clear"
          :variant
          :hover
          :size="size[0]"
          class="
            order-first
            hover:*:opacity-100
          "
          @click="is().filters.tags.length = 0">
          <icon
            name="x"
            class="size-4" />
        </Button>

        <!--  <BaseListboxItem
          v-for="tag in itemTags"
          :key="tag.name"
          class="fx-0 bg-transparent"
          :value="tag.name"
          as-child>
          <ItemTagButton
            as="label"
            :variant
            :size="size[1]"
            :tag>
          </ItemTagButton>
        </BaseListboxItem> -->
      </TransitionSlideLeft>
    </ListboxContent>
  </Listbox>
</template>

<style scoped></style>
