<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui"

const {
  variant = "ghost",
  class: className,
  clear = false,
} = defineProps<{
  class?: HTMLAttributes["class"]
  clear?: boolean
  variant?: ButtonProps["variant"]
}>()
</script>

<template>
  <Listbox
    v-model:model-value="champFilter().filters.position"
    :multiple="false">
    <ListboxContent as-child>
      <TransitionSlide
        group
        :class="
          cn(
            'relative z-1 flex max-h-60 w-9/10 flex-col flex-wrap items-center gap-3 gap-y-3 py-0',
            className
          )
        ">
        <UButton
          v-if="champFilter().filters.position && clear"
          class="order-first hover:*:opacity-100"
          :variant
          square
          size="sm"
          @click="champFilter().filters.position = ''">
          <icon class="size-4" name="x" />
        </UButton>

        <BaseListboxItem
          v-for="position in mapPositions.filter((p) => p.label !== 'All')"
          :key="position.label"
          class="fx-0 bg-transparent"
          :value="position.label"
          as-child>
          <PositionBadge :variant size="sm" :position />
        </BaseListboxItem>
      </TransitionSlide>
    </ListboxContent>
  </Listbox>
</template>
