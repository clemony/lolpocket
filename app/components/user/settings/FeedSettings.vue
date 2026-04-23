<script setup lang="ts">
import { feedCategories } from "./data/feedTabs"

const { orientation } = defineProps<{
  orientation?: "vertical" | "horizontal"
}>()

const { settings } = storeToRefs(user())

const safeSettings = computed(() => safeObject(settings.value))

const categories = shallowRef<string[]>(
  safeSettings.value.feed_categories ?? feedKeys
)
const { history: categoryHistory } = useRefHistory(categories)

//hide spoilers?
const spoilers = shallowRef<boolean>(safeSettings.value?.feed_spoilers)
const { history: spoilerHistory } = useRefHistory(spoilers)

onMounted(() => {
  categories.value = safeSettings.value.feed_categories ?? feedKeys
  spoilers.value = safeSettings.value.feed_spoilers ?? true
})

const spoilerDescriptions: Record<string, string> = {
  true: "The preview of spoiler containing posts will be marked and the content hidden from view.",
  false: "Spoilers will be visible in news feed previews."
}

const categoryRegistry = computed(() =>
  feedKeys.map((f) => ({ value: f, label: f }))
)
</script>

<template>
  <!-- username -->
  <UFormField
    size="lg"
    label="Categories"
    description="Show only the types of news you want to see.">
    <UCheckboxGroup
      v-model:model-value="categories"
      :items="Object.values(feedCategories)"
      variant="card"
      :ui="{
        fieldset: 'gap-1.5',
        item: 'flex h-12 items-center',
        base: 'rounded-full',
        label: 'flex! items-center justify-between'
      }"
      size="lg"
      @update:model-value="validateField(usernameSchema)">
      <template #label="{ item }">
        {{ item.label }}

        <Icon
          :name="item.trailingIcon"
          :class="cn('size-4.5', item.ui?.leadingIcon)" />
      </template>
    </UCheckboxGroup>
  </UFormField>

  <!-- email -->

  <UFormField
    size="lg"
    label="Hide Spoilers"
    :ui="{
      description: ''
    }">
    <template #description>
      <div class="relative min-h-10 w-full">
        <Transition
          appear
          enter-active-class="transition duration-150 ease-out"
          enter-from-class="-translate-x-1 opacity-0"
          enter-to-class="translate-x-0 opacity-100"
          leave-active-class="absolute inset-0 transition duration-100 ease-in"
          leave-from-class="translate-x-0 opacity-100"
          leave-to-class="-translate-x-1 opacity-0">
          <p
            v-show="spoilers"
            class="block w-full text-pretty whitespace-pre-wrap">
            {{ spoilerDescriptions.true }}
          </p>
        </Transition>
        <Transition
          appear
          enter-active-class="transition duration-150 ease-out"
          enter-from-class="translate-x-1 opacity-0"
          enter-to-class="translate-x-0 opacity-100"
          leave-active-class="absolute inset-0 transition duration-100 ease-in"
          leave-from-class="translate-x-0 opacity-100"
          leave-to-class="translate-x-1 opacity-0">
          <p
            v-show="!spoilers"
            class="block w-full text-pretty whitespace-pre-wrap">
            {{ spoilerDescriptions.false }}
          </p>
        </Transition>
      </div>
    </template>
    <USwitch v-model:model-value="spoilers" size="lg" />
  </UFormField>
</template>
