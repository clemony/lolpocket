<script lang="ts" setup>
import type { ButtonProps, KbdProps } from "@nuxt/ui"
import { newPocket } from "~/domain/pocket/newPocket"

type KbdUi = KbdProps["ui"] & { wrapper?: HTMLAttributes["class"] }
type Kbd = KbdProps & { ui?: KbdUi }

const props = withDefaults(
  defineProps<
    ButtonProps & {
      kbd?: KbdProps | false
      collapsed?: boolean
      location?: FolderKey | string | undefined
    }
  >(),
  {
    collapsed: false,
    square: false,
    size: "md",
    kbd: false
  }
)

const delegated = reactiveOmit(props, "class", "location", "collapsed", "kbd")
</script>

<template>
  <Tooltip :disabled="!props.collapsed && !props.square" label="New Pocket">
    <UButton
      tabindex="-1"
      v-bind="delegated"
      :ui="{
        base: cn(
          'w-full py-0',
          { 'anchor p-0 ': props.square },
          props.ui?.base
        ),
        leadingIcon: cn(
          'scale-90 **:stroke-[2.5]',
          { 'absolute scale-110 place-self-center': props.square },
          props.ui?.leadingIcon
        ),
        label: cn(
          'grow pr-3 font-medium',
          { hidden: props.square },
          props.ui?.label
        )
      }"
      :label="props.label || 'New Pocket'"
      :icon="props.icon || 'i-add'"
      :size="props.size || 'md'"
      :variant="props.variant || 'solid'"
      :color="props.color || 'neutral'"
      @click="newPocket({ location: String(props.location) ?? undefined })">
      <template #trailing>
        <slot name="trailing">
          <div v-if="props.kbd" class="flex items-center gap-px">
            <UKbd
              v-for="k in ['meta', 'P']"
              :key="k"
              square
              :ui="props.kbd?.ui"
              :size="props.kbd?.size ?? 'md'"
              :value="k"
              :color="props.kbd?.color ?? 'neutral'" />
          </div>
        </slot>
      </template>
    </UButton>
  </Tooltip>
</template>
