<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const {
  variant = "ghost",
  class: className,
  clear = false,
  size = ["sq-8", "8"],
} = defineProps<{
  class?: HTMLAttributes["class"]
  clear?: boolean
  size?: ButtonProps["size"][]
  variant?: ButtonProps["variant"]
}>()
</script>

<template>
  <Listbox v-model:model-value="cs().filters.resource" :multiple="false">
    <ListboxContent as-child>
      <TransitionSlide
        group
        :class="
          cn(
            'relative z-1 flex max-h-60 w-full flex-col flex-wrap items-start gap-x-7 gap-y-3 py-0',
            className
          )
        ">
        <UButton
          v-if="cs().filters.resource && clear"
          class="order-first hover:*:opacity-100"
          :variant
          square
          size="sm"
          @click="cs().filters.resource = null">
          <icon class="size-4" name="x" />
        </UButton>

        <BaseListboxItem
          v-for="resource in abilityResources"
          :key="resource.name"
          class="bg-transparent fx-0"
          :value="resource.name"
          as-child>
          <ResourceBadge as="label" :variant size="sm" :resource />
        </BaseListboxItem>
      </TransitionSlide>
    </ListboxContent>
  </Listbox>
</template>
