<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const select = useTemplateRef<HTMLElement>('select')
const selectedRegion = shallowRef<string>(as().account?.region || 'na1')

const name = ref<string>('')
const tag = ref<string>('')
const hash = ref<string | null>(null)
const queryName = useTemplateRef<HTMLElement>('queryName')
const { focused } = useFocus(queryName)
watch(
  () => name.value.length,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
  }
)
const tagText = computed(() =>
  !!name.value.length && focused.value ? 'tab to tag' : 'tag'
)
</script>

<template>
  <label
    for="query"
    class="input"
    :class="
      cn(
        'flex focus-within:ring-offset-1 focus-within:ring-offset-b2 focus-within:!border-transparent focus:!border-transparent relative w-full items-center pr-24 py-0 has-[&_input]:placeholder-shown:*:last:opacity-0 group',
        className,
      )
    ">
    <input
      ref="queryName"
      v-model="name"
      type="text"
      placeholder="Summoner name"
      class="field-sizing-content flex w-max min-w-32 grow" />
    <TransitionSlideLeft group>
      <span class="place-items-center grid relative -mr-1">
        <icon
          name="hash"
          class="size-3.5 opacity-60" />
      </span>

      <input
        v-model="tag"
        type="text"
        :placeholder="tagText"
        class="grow transition-all duration-200"
        @keydown.delete="!tag.length ? (focused = true) : null" />

      <!--    <Popover
        class=" "
        @close-auto-focus.prevent
        @click.stop>
        <PopoverTrigger
          no-arrow
          as-child
          class="items-center grid">
          <Button
            variant="ghost"
            size="sm"
            class="  lowercase items-center w-14  tracking-[0.5px] gap-0.25 text-bc/60 *:first:text-bc/60 !text-xs flex-nowrap  flex text-nowrap  right-2 absolute z-1">

            <icon
              name="at"
              class="!size-3.25" />
            {{ selectedRegion?.replace(/\d+/g, '') || '' }}
          </Button>
        </PopoverTrigger>
        <RegionPopoverContent @update:model-value="e => selectedRegion = e" />
      </Popover> -->
    </TransitionSlideLeft>
    <!--     <button
      v-bind="$attrs"
      class="btn btn-ghost btn-square btn-sm absolute  transition-all duration-200  right-2">
      <icon
        name="x-sm"
        class="" />
    </button> -->
  </label>
</template>
