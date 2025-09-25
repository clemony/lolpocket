<script lang="ts" setup>
import type { regionIndex } from '#shared/appdata'
import { summonerSearchSchema } from '#shared/types/schema.forms'
import { useDebounceFn } from '@vueuse/core'
import { Presence } from 'reka-ui'
import { safeParse, string } from 'valibot'
import { getDeviceKey } from '~/utils/config/handleDevice'

const { class: className, kbd } = defineProps<{
  class?: HTMLAttributes['class']
  kbd?: boolean
}>()

const emit = defineEmits(['update:search'])

const query = ref('')
const tag = ref('')
const selectedRegion = shallowRef<keyof typeof regionIndex>('na1')
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
  <Combobox
    position="popper">
    <ComboboxAnchor as-child>
      <ComboboxTrigger
        class="input"
        :class="
          cn(
            'flex size-full focus-within:ring-offset-1 items-center focus-within:ring-offset-b2 focus-within:!border-transparent focus:!border-transparent relative w-full items-center py-0 has-[&_input]:placeholder-shown:*:last:opacity-0 group',
            className,
          )
        ">
        <ComboboxInput
          ref="queryName"
          v-model:model-value="query"
          type="text"
          placeholder="Search..."
          class="field-sizing-content flex w-auto min-w-36 grow peer" />

        <!--     <span :class="cn('flex gap-1 italic right-18 absolute !text-xxs items-center peer-focus:opacity-60 opacity-0', { 'opacity-0': tag.length })">
      <icon
        name="hugeicons:arrow-right-03"
        class="**:stroke-[1.5]" />
      tab to add tag
    </span>
 -->
        <div
          :class="cn('flex shrink items-center gap-1.5 min-w-20 not-focus-within:opacity-0 transition-all duration-200', { '!opacity-100': tag.length })">
          <span class="place-items-center grid relative -mr-1">
            <icon
              name="hash"
              class="size-3.5 opacity-60" />
          </span>

          <input
            v-model="tag"
            type="text"
            placeholder="tag"
            :maxlength="5"
            class="shrink field-sizing-content"
            @keydown.delete="!tag.length ? (focused = true) : null" />
        </div>

        <Presence
          :present="tag.length > 0"
          class="data-[present=true]:opacity-100 opacity-0">
          <LazyPopover

            @close-auto-focus.prevent
            @click.stop>
            <PopoverTrigger
              no-arrow
              as-child
              class="items-center grid">
              <Button
                variant="ghost"
                size="sm"
                class="  lowercase items-center w-14  tracking-[0.5px]  text-bc/60 *:first:text-bc/60 !text-xs flex-nowrap  flex text-nowrap   z-1">
                <span class="place-items-center grid relative -mr-1">
                  <icon
                    name="at"
                    class="!size-3.25 mt-px" />
                </span>
                {{ selectedRegion || '' }}
              </Button>
            </PopoverTrigger>
            <LazyRegionPopoverContent @update:model-value="e => selectedRegion = e" />
          </LazyPopover>
        </Presence>
        <Button
          v-if="query.length || tag.length "
          variant="ghost"
          size="xs"
          :class="cn('btn-square btn-sm justify-self-end opacity-0 ', { 'opacity-100 ': query.length || tag.length })"
          @click="clear()">
          <icon
            name="x"
            class="size-3.75" />
        </Button>
        <span
          v-if="kbd && !query"
          class="opacity-50">{{ `${getDeviceKey()}K` }}</span>
      </ComboboxTrigger>
    </ComboboxAnchor>
    <LazySearchContent
      class="w-[var(--reka-combobox-trigger-width)]"
      :query />
  </Combobox>
</template>
