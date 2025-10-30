<script setup lang="ts">
import { championResources } from '@appdata'

const { class: className, clear = false, hover = 'btn', size = ['sq-xs', '8'], variant = 'ghost' } = defineProps<{
  class?: HTMLAttributes['class']
  clear?: boolean
  size?: ButtonVariants['size'][]
  variant?: ButtonVariants['variant']
  hover?: ButtonVariants['hover']
}>()
</script>

<template>
  <Listbox
    v-model:model-value="cs().filters.resource"
    :multiple="false">
    <ListboxContent as-child>
      <TransitionSlideLeft
        group
        :class="cn('flex items-center w-full z-1 py-0 flex-wrap gap-x-7  relative flex-col flex-wrap gap-y-3 w-9/10 max-h-60 items-start', className)">
        <Button
          v-if="cs().filters.resource && clear"
          :variant
          :hover
          :size="size[0]"
          class="order-first hover:*:opacity-100"
          @click="cs().filters.resource = null">
          <icon
            name="x"
            class="size-4" />
        </Button>

        <BaseListboxItem
          v-for="resource in championResources"
          :key="resource.name"
          class="fx-0 bg-transparent"
          :value="resource.name"
          as-child>
          <ResourceBadge

            as="label"
            :variant
            :size="size[1]"
            :resource>
          </ResourceBadge>
        </BaseListboxItem>
      </TransitionSlideLeft>
    </ListboxContent>
  </Listbox>
</template>

<style scoped></style>
