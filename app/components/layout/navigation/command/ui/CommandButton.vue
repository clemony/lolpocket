<script lang="ts" setup>
import type { BaseItem } from "#shared/types"
import type { ButtonProps } from "@nuxt/ui"
import { asCommandItem } from "../build/helpers"
import type { CommandItem } from "../build/useCommandGroups"
const { item, ui } = defineProps<
  CommandItem & {
    item?: CommandItem
    ui?: CommandItem["ui"]
  }
>()

const emit = defineEmits<{
  "update:open": [item: BaseItem]
}>()

const safeItem = computed(() => {
  const a = safeObject(item)
  return asCommandItem(a)
})
</script>

<template>
  <UButton
    data-command-menu-item="true"
    block
    :external="safeItem.external || undefined"
    :variant="safeItem.variant ?? 'ghost'"
    :color="safeItem.color ?? 'secondary'"
    :icon="safeItem.icon"
    :value="safeItem.value ?? safeItem.label"
    :target="safeItem.target"
    :avatar="safeItem.avatar"
    :label="!safeItem.prefix && !safeItem.suffix ? safeItem.label : undefined"
    :to="safeItem.to ?? undefined"
    :trailing-icon="safeItem.trailingIcon"
    :ui="{
      ...safeItem.ui,
      base: cn(
        'flex grow items-center justify-start gap-2 rounded-lg px-2 text-left',
        safeItem.ui?.base
      ),
      label: cn(
        'truncate text-md font-medium capitalize',
        safeItem.ui?.itemLabelBase
      ),
      leadingIcon: cn('size-4.5 shrink-0', safeItem.ui?.leadingIcon),

      trailingIcon: cn(
        'size-4 shrink-0 opacity-60 group-hover/btn:opacity-100',
        safeItem.ui?.trailingIcon
      )
    }"
    no-prefetch
    @click="emit('update:open', safeItem)">
    <!-- <slot>
      <div
        v-if="safeItem.prefix || safeItem.suffix"
        :class="cn('min-w-0 grow', safeItem.ui?.label)">
        <div class="inline-flex min-w-0 items-center gap-1.5">
          <span
            v-if="safeItem.prefix"
            :class="cn('text-xs text-n5', safeItem.ui?.prefix)">
            {{ safeItem.prefix }}
          </span>
          <span
            :class="
              cn(
                'truncate text-sm font-medium capitalize',
                safeItem.ui?.itemLabelBase
              )
            ">
            {{ safeItem.label }}
          </span>
        </div>

        <p
          v-if="safeItem.suffix"
          :class="
            cn(
              'mt-0.5 line-clamp-2 text-xs text-n4',
              safeItem.ui?.suffix,
              safeItem.ui?.itemLabelSuffix
            )
          ">
          {{ itemSuffix(safeItem) }}
        </p>
      </div>
    </slot> -->
  </UButton>
</template>
