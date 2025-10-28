<script setup lang="ts">
import { itemTags } from '@appdata'

const { class: className, clear = true, hover = 'btn', size = ['sq-lg', 'lg'], variant = 'ghost', } = defineProps<{
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
        :class="cn('flex items-center w-full z-1 py-0 flex-wrap gap-3  relative', className)">
        <Button
          v-if="is().filters.tags.length && clear"
          :variant
          :hover
          :size="size[0]"
          class="order-first hover:*:opacity-100"
          @click="is().filters.tags.length = 0">
          <icon
            name="x"
            class="size-4" />
        </Button>

        <BaseListboxItem
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
        </BaseListboxItem>
      </TransitionSlideLeft>
    </ListboxContent>
  </Listbox>
</template>

<style scoped></style>
