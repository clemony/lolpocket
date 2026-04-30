<script setup lang="ts">
import { feedCategories } from "./data/feedOptions"

const { orientation } = defineProps<{
  orientation?: "vertical" | "horizontal"
}>()

const { settings } = storeToRefs(user())

const safeSettings = computed(() => safeObject(settings.value))

const categoryKeys = shallowRef<string[]>(
  safeSettings.value.feed_categories ?? feedKeys
)
const categories = useRefHistory(categoryKeys, { deep: true })

//hide spoilers?
const preview = useRefHistory(ref<boolean>(safeSettings.value?.feed_spoilers))
const safeguard = useRefHistory(
  ref<boolean>(safeSettings.value?.feed_spoiler_safeguard)
)

onMounted(() => {
  categoryKeys.value = safeSettings.value.feed_categories ?? feedKeys
  preview.source.value = safeSettings.value.feed_spoilers ?? true
  safeguard.source.value = safeSettings.value.feed_spoiler_safeguard ?? false
})

const spoilerDescriptions: Record<string, string> = {
  true: "The preview of spoiler containing posts will be marked and the content hidden from view.",
  false: "Spoilers will be visible in news feed previews."
}

const spoilerSafeguard: Record<string, string> = {
  true: "No posts containing spoilers will be displayed in your feed at all.",
  false: "Posts containing spoilers will be included in your feed."
}
</script>

<template>
  <!-- username -->
  <UFormField
    size="lg"
    label="Categories"
    description="Show only the types of news you want to see.">
    <USwitch
      v-for="item in feedCategories"
      :key="item.label"
      as="label"
      v-bind="item"
      :default-value="true"
      size="sm"
      color="card"
      :ui="{
        root: 'py-4!',
        container: 'mt-0 self-center',
        label: 'pr-2'
      }">
      <template #label>
        {{ item.label }}

        <Icon
          :name="item.trailingIcon"
          :class="cn('size-4.5', item.ui?.trailingIcon)" />
      </template>
    </USwitch>
  </UFormField>

  <!-- spiolers -->

  <UCard as-child>
    <UFormField
      size="lg"
      label="Hide Spoilers"
      :ui="{
        root: 'px-4 py-4.5'
      }">
      <template #description>
        <div class="relative min-h-10 w-full">
          <TransitionSlideText
            :model-value="preview.source.value"
            :label-true="spoilerDescriptions.true"
            :label-false="spoilerDescriptions.false" />
        </div>
      </template>
      <USwitch
        v-model:model-value="preview.source.value"
        :ui="{
          root: 'w-full items-center justify-between pl-0',
          label: '-translate-x-1 italic',
          container: 'order-last'
        }"
        size="md">
        <template #label>
          <TransitionSlideText
            label-true="Spoilers marked"
            label-false="Spoilers visible"
            class="italic"
            :model-value="preview.source.value" />
        </template>
      </USwitch>
    </UFormField>
  </UCard>

  <UCard as-child>
    <UFormField
      size="lg"
      label="Anti-Spoiler Safeguard"
      :ui="{
        root: 'px-4 py-4.5'
      }">
      <template #description>
        <div class="relative min-h-10 w-full">
          <TransitionSlideText
            :model-value="safeguard.source.value"
            :label-true="spoilerSafeguard.true"
            :label-false="spoilerSafeguard.false" />
        </div>
      </template>
      <USwitch
        v-model:model-value="safeguard.source.value"
        :ui="{
          root: 'w-full items-center justify-between pl-0',
          label: '-translate-x-1 italic',
          container: 'order-last'
        }"
        size="md">
        <template #label>
          <TransitionSlideText
            label-true="Spoilers posts hidden"
            label-false="Spoiler posts visible"
            class="italic"
            :model-value="safeguard.source.value" />
        </template>
      </USwitch>
    </UFormField>
  </UCard>
</template>
