<script lang="ts" setup>
import type { SwitchProps } from "@nuxt/ui"
import { accountUpdate } from "~/domain/user/composables/accountUpdate"
import { settingsUpdate } from "~/domain/user/composables/settingsUpdate"
import { communicationOptions } from "../../utils/settings/communicationOptions"
import type { Switch, SwitchGroup } from "../../utils/settings/settingsProps"

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
  ref<Partial<Settings>>(safeObject(settings.value)),
  { deep: true }
)

const communicationSettingKeys = [
  "ping_new_friend",
  "ping_new_message",
  "ping_new_pocket",
  "ping_delete_pocket"
] as const satisfies readonly (keyof Settings)[]

const lastSavedSettings = ref("")

function getSettingsPatch(): Partial<Settings> {
  return Object.fromEntries(
    communicationSettingKeys.map((key) => [
      key,
      settingsModels.source.value[key]
    ])
  ) as Partial<Settings>
}

function serializeSettingsPatch(settings: Partial<Settings>) {
  return JSON.stringify(settings)
}

function updateAccount() {
  if (accountModels.history.value.at(0) !== accountModels.history.value.at(-1))
    accountUpdate(accountModels.last.value.snapshot, { silent: true })
}

async function updateSettings() {
  const patch = getSettingsPatch()
  const serializedPatch = serializeSettingsPatch(patch)
  if (serializedPatch === lastSavedSettings.value) return

  let updatedSettings: Settings
  try {
    updatedSettings = await settingsUpdate(patch, { silent: true })
  } catch {
    return
  }

  lastSavedSettings.value = serializeSettingsPatch(
    Object.fromEntries(
      communicationSettingKeys.map((key) => [key, updatedSettings[key]])
    ) as Partial<Settings>
  )
}

const debounceSettings = useDebounceFn(() => {
  void updateSettings()
}, 10000)

const debounceAccount = useDebounceFn(() => {
  updateAccount()
}, 10000)

onBeforeUnmount(() => {
  void updateSettings()
  updateAccount()
})

onMounted(() => {
  accountModels.source.value = safeObject(account.value)
  settingsModels.source.value = safeObject(settings.value)
  lastSavedSettings.value = serializeSettingsPatch(getSettingsPatch())
})

const switchProps: SwitchProps = {
  as: "label",
  size: "sm",
  ui: {
    container: "self-start"
  },
  trueValue: true,
  falseValue: false
}
</script>

<template>
  <FormWrapper save>
    <template v-for="(set, i) in communicationOptions">
      <UFormField
        v-for="group in set"
        :key="group.legend"
        size="lg"
        :label="group.legend">
        <template v-if="group.description" #hint>
          <HintTooltip :text="group.description" />
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
                settingsModels.source.value[
                  asSwitch(item).id as keyof Settings
                ]
              "
              :description="item.description"
              :label="asSwitch(item).label"
              @change="debounceSettings()" />
          </template>
        </div>
      </UFormField>
    </template>
  </FormWrapper>
</template>
