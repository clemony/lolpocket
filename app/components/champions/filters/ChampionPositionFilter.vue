<script setup lang="ts">
import { championPositions } from '#shared/appdata'

const { class: className, clear = false, hover = 'btn', size = ['sq-xs', 'xs'], variant = 'ghost' } = defineProps<{
  class?: HTMLAttributes['class']
  clear?: boolean
  size?: ButtonVariants['size'][]
  variant?: ButtonVariants['variant']
  hover?: ButtonVariants['hover']
}>()
</script>

<template>
  <Listbox
    v-model:model-value="cs().filters.position"
    :multiple="false">
    <ListboxContent as-child>
      <TransitionSlideLeft
        group
        :class="cn('flex items-center w-full z-1 py-0 flex-wrap gap-3  relative flex-col flex-wrap gap-y-3 w-9/10 max-h-60 items-start', className)">
        <Button
          v-if="cs().filters.position && clear"
          :variant
          :hover
          :size="size[0]"
          class="order-first hover:*:opacity-100"
          @click="cs().filters.position = null">
          <icon
            name="x"
            class="size-4" />
        </Button>

        <BaseListboxItem
          v-for="position in championPositions.filter(p => p.name !== 'All')"
          :key="position.name"
          class="bg-transparent fx-0"
          :value="position.name"
          as-child>
          <PositionBadge

            :variant
            :size="size[1]"
            :position>
          </PositionBadge>
        </BaseListboxItem>
      </TransitionSlideLeft>
    </ListboxContent>
  </Listbox>
</template>

<style scoped></style>
