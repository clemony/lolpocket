import { feedCategories } from "~/domain/user/utils/settings/feedOptions"

export const useFeedSettings = () => {
  const { settings } = storeToRefs(user())

  const safeSettings = computed(() => safeObject(settings.value))

  const categoryKeys = shallowRef<string[]>(
    safeSettings.value.feed_categories ?? feedKeys
  )

  const categoryModel = useRefHistory(categoryKeys, { deep: true })

  //hide spoilers?
  const preview = useRefHistory(ref<boolean>(safeSettings.value?.feed_spoilers))
  const safeguard = useRefHistory(
    ref<boolean>(safeSettings.value?.feed_spoiler_safeguard)
  )

  const spoilerOptions = computed(() => [
    {
      label: "Hide Spoilers",
      modelValue: preview.source.value,
      descriptionTrue:
        "The preview of spoiler containing posts will be marked and the content hidden from view.",
      descriptionFalse: "Spoilers will be visible in news feed previews.",

      labelTrue: "Spoilers marked",
      labelFalse: "Spoilers visible"
    },
    {
      label: "Anti-Spoiler Safeguard",
      modelValue: safeguard.source.value,
      descriptionTrue:
        "No posts containing spoilers will be displayed in your feed at all.",
      descriptionFalse:
        "Posts containing spoilers will be included in your feed.",

      labelTrue: "Spoiler posts hidden",
      labelFalse: "Spoiler posts visible"
    }
  ])

  onMounted(() => {
    categoryKeys.value = safeSettings.value.feed_categories ?? feedKeys
    preview.source.value = safeSettings.value.feed_spoilers ?? true
    safeguard.source.value = safeSettings.value.feed_spoiler_safeguard ?? false
  })
  return computed(() => ({
    spoilerOptions,
    categories: feedCategories
  }))
}
