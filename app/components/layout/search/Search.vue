<script lang="ts" setup>
import type { regionIndex } from '#shared/appdata'
import { summonerSearchSchema } from '#shared/types/schema.forms'
import { useDebounceFn } from '@vueuse/core'
import { safeParse, string } from 'valibot'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['update:search'])

const query = ref('')
const tag = ref('')
const region = shallowRef<keyof typeof regionIndex>('na1')
const queryName = useTemplateRef<HTMLElement>('queryName')

const { focused } = useFocus(queryName)
const { control, k, meta } = useMagicKeys()

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
    @keydown.meta.k="focused = true"
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

  <!--     <span :class="cn('flex gap-1 italic right-18 absolute !text-1 items-center peer-focus:opacity-60 opacity-0', { 'opacity-0': tag.length })">
      <icon
        name="hugeicons:arrow-right-03"
        class="**:stroke-[1.5]" />
      tab to add tag
    </span>
 -->
</template>
