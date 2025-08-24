<script lang="ts" setup>
import { SelectArrow } from 'reka-ui'
import { regionIndex } from '~/appdata/index/region-index'

defineOptions({
  inheritAttrs: false,
})

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()

const as = useAccountStore()
const select = shallowRef(null)

onMounted (() => {
  !select.value ? as.account?.region ? select.value = as.account.region : select.value = 'na' : select.value = 'na'
  console.log('💠 - select.value :', select.value)
})

const name = ref('')
const tag = ref('')
const hash = ref(null)
const queryName = shallowRef(null)
const { focused } = useFocus(queryName)
watch(() => name.value.length, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
const tagText = computed (() => !!name.value.length && focused.value ? 'tab to tag' : 'tag')
</script>

<template>
  <label
    for="query"
    class="input"
    :class="cn('flex focus-within:ring-offset-1 focus-within:ring-offset-b2 focus-within:!border-transparent focus:!border-transparent relative w-full items-center pr-24 py-0 has-[&_input]:placeholder-shown:*:last:opacity-0 group', className)">

    <input
      ref="queryName"
      v-model="name"
      type="text"
      placeholder="Summoner name"
      class=" field-sizing-content flex w-max min-w-32 grow" />

    <div
      class=" place-items-center grid relative">
      <icon
        name="hash"
        class="size-3.5 opacity-70" />
    </div>

    <input
      v-model="tag"
      type="text"
      :placeholder="tagText"
      class="grow transition-all duration-200"
      @keydown.delete="!tag.length ? focused = true : null" />

    <!--     <button
      v-bind="$attrs"
      class="btn btn-ghost btn-square btn-sm absolute  transition-all duration-200  right-2">
      <icon
        name="x-sm"
        class="" />
    </button> -->
    <Select
      v-model:model-value="select"
      @close-auto-focus.prevent>
      <SelectTrigger
        no-arrow
        as-child
        class="w-19 h-full right-0 inset-shadow-none  flex gap-0 !border-transparent !ring-0 !shadow-none absolute  overflow-hidden pl-3 pr-2 py-1  ">
        <Button
          variant="ghost"
          class="-translate-x-3"
          size="sm">
          <icon
            name="at"
            class="size-3.25" />
          {{ select }}
        </Button>
      </SelectTrigger>

      <LazySelectContent
        align="end"
        class="w-64 rounded-lg -translate-y-0.5 p-0  h-100">
        <!--  <SelectArrow /> -->

        <SelectLabel class="px-4 opacity-50">
          Select Region
        </SelectLabel>
        <SelectSeparator class="mb-3 mt-1" />

        <SelectGroup class="">
          <SelectItem
            v-for="region in Object.keys(regionIndex)"
            :key="region"
            :value="region"
            class="flex items-center gap-3 py-1.5 text-nowrap ">
            <SelectItemText class="truncate text-3 ">
              <span class="italic">
                {{ regionIndex[region] }}
              </span>
              <span class="uppercase  opacity-50">
                ({{ region }})
              </span>
            </SelectItemText>
          </SelectItem>
        </SelectGroup>
      </LazySelectContent>
    </Select>
  </label>
</template>