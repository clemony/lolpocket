<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const emit = defineEmits(["update:search", "update:focus"])

const query = ref("")
const tag = ref("")
const region = shallowRef<keyof typeof regionIndex>("na1")
const queryName = useTemplateRef<HTMLElement>("queryName")

const { focused } = useFocus(queryName)

function clear() {
  query.value = ""
  tag.value = ""
  emit("update:search", { search: { query, tag } })
}

const errors = ref<Record<string, string | null>>({
  query: null,
  region: null,
  tag: null,
})

/* function validate() {
  const result = safeParse(summonerSearchSchema, {
    query: query.value,
    region: selectedRegion.value || undefined,
    tag: tag.value || undefined,
  })
  if (!result.success) {
    errors.value = Object.fromEntries(
      result.issues.map(issue => [issue.path.join('.'), issue.message])
    )
    return null
  }
  errors.value = { query: null, region: null, tag: null }
  return result.output
}

const runSearch = useDebounceFn(() => {
  const valid = validate()
  if (!valid)
    return

  if (valid.query && !valid.tag && !valid.region) {
    emit('update:search', { query: valid.query, type: 'site' })
  }
  else if (valid.query && valid.tag && valid.region) {
    emit('update:search', { type: 'riot', ...valid })
  }
}, 300)

watch([query, tag, selectedRegion], runSearch) */
</script>

<template>
  <UInput
    ref="queryName"
    v-model:model-value="query"
    type="text"
    icon="i-search"
    placeholder="Search..."
    :class="
      cn(
        'peer relative flex field-sizing-content w-auto min-w-36 grow',
        className
      )
    "
    @update:model-value="(e) => (query = e)">
    <template #trailing>
      <InputClear @clear-input="clear()" />
      <SearchTagInput
        :tag
        @focus-return="focused = true"
        @update:tag="(e) => (tag = e)" />
      <SearchRegion
        :present="tag.length > 0"
        :region
        @update:region="(e) => (region = e)" />
      <UKbd v-if="!query" value="meta" />
      <UKbd v-if="!query" value="K" class="mr-2" />
    </template>
  </UInput>

  <div v-auto-animate>
    <slot :focused :query />
  </div>
</template>
