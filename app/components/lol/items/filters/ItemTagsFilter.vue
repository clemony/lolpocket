<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const {
  variant = "ghost",
  class: className,
  clear = true,

  size = ["sq-12", "12"],
} = defineProps<{
  class?: HTMLAttributes["class"]
  size?: ButtonProps["size"][]
  variant?: ButtonProps["variant"]

  clear?: boolean
}>()

function handleReset() {
  is().itemGridApi?.refreshCells()
}
// todo FIx this for ag grid rfresh
function handleChange() {
  is().itemGridApi?.refreshCells()
}
</script>

<template>
  <Listbox v-model:model-value="is().filters.tags" :multiple="true">
    <ListboxContent as-child>
      <TransitionSlide
        group
        :class="
          cn(
            'relative z-1 flex w-full flex-wrap items-center gap-3 py-0',
            className
          )
        ">
       <UButton
          v-if="is().filters.tags.length && clear"
          class="order-first hover:*:opacity-100"
          :variant
          size="sm"
          @click="is().filters.tags.length = 0">
          <icon class="size-4" name="x" />
        </UButton>

        <!--  <BaseListboxItem
          v-for="tag in itemTags"
          :key="tag.name"
          class="fx-0 bg-transparent"
          :value="tag.name"
          as-child>
          <ItemTagButton
            as="label"
            :variant
            size="sm"
            :tag>
          </ItemTagButton>
        </BaseListboxItem> -->
      </TransitionSlide>
    </ListboxContent>
  </Listbox>
</template>
