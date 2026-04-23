<script lang="ts" setup>
import type { SwitchProps } from "@nuxt/ui"
import { communicationOptions } from "./data/communicationOptions"
import type { SwitchGroup } from "./data/settingsProps"

const { orientation = "horizontal" } = defineProps<{
  orientation?: "vertical" | "horizontal"
}>()

function asSwitch(item: SwitchProps) {
  return item as SwitchProps
}

function asSwitchGroup(item: SwitchGroup[]) {
  return item as SwitchGroup[]
}

function asSingleSwitch(item: SwitchGroup) {
  return item as SwitchGroup
}

const { settings, account } = storeToRefs(user())
const models = ref<Record<string, boolean>>({})
console.log("🥸 - models:", models)

watch(
  () => settings.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)
function toggleModel(modelValue: boolean) {
  useToggle(modelValue)
}
</script>

<template>
  <div class="space-y-9">
    <UFormField
      v-for="group in communicationOptions"
      :key="group.legend"
      size="lg"
      :label="group.legend">
      <template v-if="group.description" #hint>
        <HintTooltip :label="group.description" />
      </template>
      <template #label>
        <h4 class="inline-flex items-center gap-2.5">
          {{ group.legend }}
        </h4>
      </template>
      <div class="-mt-1 space-y-4">
        <USwitch
          v-for="[k, item] in Object.entries(group.items)"
          :key="item.label"
          v-bind="item"
          as="label"
          size="sm"
          true-value="true"
          false-value="false"
          color="card"
          @click="
            (settings as Record<string, any>)[k] = !(
              settings as Record<string, any>
            )[k]
          ">
          <template #label>
            {{ item.label }}
            <Icon
              :name="item.icon"
              :class="cn('size-4 **:stroke-[2.4]', item.ui?.leadingIcon)" />
          </template>
        </USwitch>
      </div>
    </UFormField>
  </div>
</template>
