<script lang="ts" setup>
import type { CommandItem } from "../build/useCommandGroups"
import {
  isActive,
  isExternal,
  itemSuffix,
  itemTarget,
  itemTrailingIcon
} from "../build/useCommandGroups"

const { item } = defineProps<{
  item: CommandItem
}>()

const emit = defineEmits<{
  "update:open": [item: CommandItem]
}>()
</script>

<template>
  <UButton
    data-command-menu-item="true"
    :to="item.to ?? undefined"
    size="custom"
    :target="itemTarget(item)"
    :avatar="item.avatar"
    :external="isExternal(item) || undefined"
    variant="ghost"
    :icon="item.icon"
    :trailing-icon="itemTrailingIcon(item)"
    :ui="{
      ...item.ui,
      base: cn(
        'flex h-9 w-full items-center justify-start gap-2 rounded-lg px-2 text-left',
        item.ui?.base,
        item.ui?.item
      ),
      leadingIcon: cn(
        'size-4.5 shrink-0',
        item.ui?.leadingIcon,
        item.ui?.itemLeadingIcon
      ),
      label: 'hidden',
      trailingIcon: cn(
        'size-4 shrink-0 opacity-60 group-hover/btn:opacity-100',
        item.ui?.trailingIcon,
        item.ui?.itemTrailingIcon
      )
    }"
    @click="emit('update:open', item)">
    <div class="min-w-0 grow">
      <div class="inline-flex min-w-0 items-center gap-1.5">
        <span
          v-if="item.prefix"
          :class="cn('text-xs text-n5', item.ui?.prefix)">
          {{ item.prefix }}
        </span>
        <span
          :class="
            cn(
              'truncate text-sm font-medium capitalize',
              item.ui?.label,
              item.ui?.itemLabelBase
            )
          ">
          {{ item.label }}
        </span>
      </div>

      <p
        v-if="item.suffix"
        :class="
          cn(
            'mt-0.5 line-clamp-2 text-xs text-n4',
            item.ui?.suffix,
            item.ui?.itemLabelSuffix
          )
        ">
        {{ itemSuffix(item) }}
      </p>
    </div>
  </UButton>
</template>
