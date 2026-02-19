<script lang="ts" setup>
import type { ButtonProps, CardProps } from "@nuxt/ui"

const {
  class: className,
  icon,
  items,
  label,
  ui,
  component,
} = defineProps<{
  class?: HTMLAttributes["class"]
  icon?: string
  items?: NavButtonProps[]
  label?: string
  ui?: ButtonProps
  component?: Component
}>()
const emit = defineEmits<{
  "update:open": [open: boolean]
}>()
</script>

<template>
  <UPopover
    mode="hover"
    :close-delay="100"
    :open-delay="80"
    :ui="{ content: cn('w-54 p-1', className) }"
    :content="{
      side: 'right',
      sideOffset: -2,
      sideFlip: true,
      align: 'start',
    }"
    @update:open="(e) => emit('update:open', e)">
    <UButton
      variant="highlight"
      :ui
      :icon
      size="sm"
      trailing-icon="right"
      :label>
      <slot />
      <template #trailing>
        <slot name="trailing" />
        <Icon name="right" class="size-4" />
      </template>
    </UButton>

    <template #content>
      <component :is="component" v-if="component" />

      <template v-else>
        <div class="flex w-54 flex-col gap-0.5 overflow-hidden p-1">
          <UButton
            v-for="item in items"
            :key="item?.label || item.id"
            variant="highlight"
            v-bind="item"
            size="sm">
            <template #trailing>
              <Icon
                v-if="item?.external"
                name="chain"
                class="size-2.75 align-top text-n5 **:stroke-[2.6]" />
            </template>
          </UButton>
        </div>
      </template>
    </template>
  </UPopover>
</template>
