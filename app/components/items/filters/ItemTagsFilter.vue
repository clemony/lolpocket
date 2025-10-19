<script setup lang="ts">
import { itemTags } from '@appdata'

const { class: className, hover = 'base', size = ['sq-lg', 'lg'], variant = 'btn' } = defineProps<{
  class?: HTMLAttributes['class']
  size?: ButtonVariants['size'][]
  variant?: ButtonVariants['variant']
  hover?: ButtonVariants['hover']
}>()

function handleReset() {
  is().itemGridApi?.refreshCells()
}
// TODO FIx this for ag grid rfresh
function handleChange() {
  is().itemGridApi?.refreshCells()
}

watch(() => is().filters.tags, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <Listbox
    v-model:model-value="is().filters.tags"
    :multiple="true">
    <ListboxContent as-child>
      <TransitionSlideLeft
        group
        :class="cn('flex items-center w-full z-1  flex-wrap gap-3  relative', className)">
        <h6 class="opacity-100 w-22 order-first font-semibold text-bc/90">
          Shop Tags
        </h6>
        <Button
          v-if="is().filters.tags.length"
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
          :value="tag.name"
          as-child>
          <ItemTagButton
            as="label"
            :size="size[1]"
            :active="is().filters.tags.includes(tag.name)"
            :tag>
          </ItemTagButton>
        </BaseListboxItem>
      </TransitionSlideLeft>
    </ListboxContent>
  </Listbox>
</template>

<style scoped></style>
