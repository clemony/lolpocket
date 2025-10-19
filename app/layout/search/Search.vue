<script lang="ts" setup>
import type { regionIndex } from '#shared/appdata'
import { useDebounceFn } from '@vueuse/core'
import { safeParse, string } from 'valibot'

defineOptions({
  inheritAttrs: false
})

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['update:search', 'update:focus'])

const query = ref('')
const tag = ref('')
const region = shallowRef<keyof typeof regionIndex>('na1')
const queryName = useTemplateRef<HTMLElement>('queryName')

const { focused } = useFocus(queryName)

function clear() {
  query.value = ''
  tag.value = ''
  emit('update:search', { search: { query, tag } })
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
  <Input
    ref="queryName"
    v-model:model-value="query"
    type="text"
    placeholder="Search..."
    :class="cn('field-sizing-content relative flex w-auto min-w-36 grow peer', className)"
    @update:model-value="e => query = e"
    @clear:input="clear()">
    <icon
      name="search"
      class="!size-4.5" />
    <template #2>
      <SearchTagInput
        :tag
        @focus:return="focused = true"
        @update:tag="e => tag = e" />
      <SearchRegion
        :present="tag.length > 0"
        :region
        @update:region="e => region = e" />
      <DeviceKey
        v-if="!query"
        class="mr-2">
        K
      </DeviceKey>
    </template>
  </Input>

  <TransitionScalePop>
    <slot
      :focused
      :query />
  </TransitionScalePop>
</template>
