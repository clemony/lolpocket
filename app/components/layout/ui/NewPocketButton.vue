<script lang="ts" setup>
import type { ButtonProps, KbdProps } from "@nuxt/ui"
import { addPocket } from "~/domain/pocket/addPocket"

type KbdUi = KbdProps["ui"] & { wrapper?: HTMLAttributes["class"] }
type Kbd = KbdProps & { ui?: KbdUi }

const {
  size = "md",
  ui,
  as = "button",
  kbd = { color: "neutral", size: "sm", ui: {} }
} = defineProps<{
  ui?: Record<string, HTMLAttributes["class"]>
  size?: ButtonProps["size"]
  kbd?: Kbd
  as?: ButtonProps["as"]
}>()
</script>

<template>
  <UButton
    :as
    :ui="{
      base: cn('mb-1 w-full py-0', ui?.base),
      leadingIcon: cn(
        'translate-y-px scale-90 **:stroke-[2.5] **:text-nc!',
        ui?.leadingIcon
      ),
      label: cn('grow translate-y-px font-semibold text-nc', ui?.label)
    }"
    :size
    label="New Pocket"
    icon="add"
    color="neutral"
    @click="addPocket()">
    <template #trailing>
      <div class="flex items-center gap-2" :class="kbd?.ui?.wrapper">
        <UKbd
          v-for="k in ['meta', 'P']"
          :key="k"
          square
          :ui="kbd?.ui"
          :size="kbd?.size"
          :value="k"
          :color="kbd?.color" />
      </div>
    </template>
  </UButton>
</template>
