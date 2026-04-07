<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
import { asCommandItem } from "../build/helpers"
import type { CommandItem } from "../build/useCommandGroups"
import {
  isActive,
  isExternal,
  itemKey,
  itemSuffix,
  itemTarget,
  itemTrailingIcon
} from "../build/useCommandGroups"

const props = defineProps<
  ButtonProps & {
    item?: Partial<CommandItem | ButtonProps>
    ui?: CommandItem["ui"]
  }
>()

const emit = defineEmits<{
  "update:open": [item: CommandItem]
}>()

const safeItem = computed(() => safeObject(asCommandItem(props.item ?? props)))

const ui = computed<NonNullable<ButtonProps["ui"]>>(
  () =>
    mergeUi<NonNullable<ButtonProps["ui"]>>(
      {
        base: "btn-custom flex h-9! grow items-center justify-start gap-2 rounded-lg px-2 text-left",

        leadingIcon: "size-4.5 shrink-0",

        trailingIcon: "size-4 shrink-0 opacity-60 group-hover/btn:opacity-100"
      },
      props?.ui,
      props?.item?.ui
    ) as NonNullable<ButtonProps["ui"]>
)
</script>

<template>
  <UButton
    data-command-menu-item="true"
    :icon="safeItem.icon"
    :target="itemTarget(safeItem)"
    :avatar="safeItem.avatar"
    block
    :external="isExternal(safeItem) || undefined"
    :variant="safeItem.variant ?? 'ghost'"
    :color="safeItem.color ?? 'primary'"
    :label="
      !safeItem.prefix && !safeItem.suffix
        ? safeItem.label || safeItem.itemLabelBase
        : undefined
    "
    :to="safeItem.to ?? undefined"
    :trailing-icon="itemTrailingIcon(safeItem)"
    :ui
    @click="emit('update:open', safeItem)">
    <slot>
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
    </slot>
  </UButton>
</template>
