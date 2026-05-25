<script lang="ts" setup>
import type { SwitchProps } from "@nuxt/ui"
import { accountUpdate } from "~/composables/account/accountUpdate"
import { settingsUpdate } from "~/composables/account/settingsUpdate"
import { communicationOptions } from "./data/communicationOptions"
import type { Switch, SwitchGroup } from "./data/settingsProps"

const { orientation = "horizontal" } = defineProps<{
  orientation?: "vertical" | "horizontal"
}>()

function asSwitch(item: SwitchProps) {
  return item as Switch
}

const { settings, account } = storeToRefs(user())

const accountModels = useRefHistory(
  ref<Record<OptionKey<string>, OptionValue>>(safeObject(account.value)),
  { deep: true }
)

const settingsModels = useRefHistory(
  ref<Record<OptionKey<string>, OptionValue>>(safeObject(settings.value)),
  { deep: true }
)

watch(
  () => accountModels.history?.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  },
  { deep: true }
)

function updateAccount() {
  if (accountModels.history.value.at(0) !== accountModels.history.value.at(-1))
    accountUpdate(accountModels.last.value.snapshot, { silent: true })
}

function updateSettings() {
  if (
    settingsModels.history.value.at(0) !== settingsModels.history.value.at(-1)
  )
    settingsUpdate(settingsModels.last.value.snapshot, { silent: true })
}

const debounceSettings = useDebounceFn(() => {
  updateSettings()
}, 10000)

const debounceAccount = useDebounceFn(() => {
  console.log("🥸 - OK:", user().account)
  updateAccount()
}, 10000)

onBeforeUnmount(() => {
  updateSettings()
  updateAccount()
})

onMounted(() => {
  accountModels.source.value = safeObject(account.value)
  settingsModels.source.value = safeObject(settings.value)
})

const switchProps: SwitchProps = {
  as: "label",
  size: "sm",
  ui: {
    root: "gap-2.5 pr-4 pb-4 pl-4",
    label: "mb-0.5 justifyStart gap-1.5",
    container: "orderLast mb-1 selfEnd"
  },
  trueValue: true,
  falseValue: false,
  color: "card"
}
</script>

<template>
  <div class="space-y-9">
    <template v-for="(set, i) in communicationOptions">
      <UFormField
        v-for="group in set"
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
          <template v-if="accountModels.source.value && i === 0">
            <USwitch
              v-for="item in group?.items"
              v-bind="switchProps"
              :key="asSwitch(item).label"
              v-model:model-value="
                accountModels.source.value[
                  asSwitch(item).id as OptionKey<string>
                ]
              "
              :description="item.description"
              :for="asSwitch(item).id"
              :label="asSwitch(item).label"
              @change="debounceAccount()" />
          </template>
          <template v-if="settingsModels && i === 1">
            <USwitch
              v-for="item in group?.items"
              v-bind="switchProps"
              :key="asSwitch(item).label"
              v-model:model-value="
                settingsModels[asSwitch(item).id as OptionKey<string>]
              "
              :description="item.description"
              :label="asSwitch(item).label"
              @change="debounceSettings()" />
          </template>
        </div>
      </UFormField>
    </template>
  </div>
</template>
