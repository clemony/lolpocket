<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

const props = withDefaults(
  defineProps<
    ButtonProps & {
      pocket: Pocket
    }
  >(),
  {
    variant: "ghost",
    size: "sm_",
    square: true
  }
)

const delegated = reactiveOmit(props, "class", "pocket")
const { settings } = storeToRefs(user())
</script>

<template>
  <UButton
    v-if="settings"
    v-model="settings.pinned_pockets"
    :value="String(props.pocket?.key)"
    v-bind="delegated"
    as="label"
    :icon="
      settings.pinned_pockets.includes(String(props.pocket?.key))
        ? 'i-pin-solid'
        : 'i-pin'
    "
    :ui="{
      base: 'rounded-xl',
      leadingIcon: iconSets.pinned?.class
    }">
    <input
      v-model="settings.pinned_pockets"
      type="checkbox"
      class="peer hidden"
      :value="String(props.pocket?.key)" />
  </UButton>
</template>
