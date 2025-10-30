<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'

const { editor } = defineProps<{
  editor: Editor | null
}>()

const data = computed (() => ix().champions.concat(ix().items))
const query = shallowRef<string>('')
const { results: r } = useSimpleSearch(data, query, { keys: ['name', 'key'] })

const results = computed (() => [...r.value].splice(0, 20))
const selectedIndex = ref(0)
const selectedItem = computed(() => data.value[selectedIndex.value])

const tab = shallowRef<number>(1)

/* const filter = computed (() => {
  const emoji = ref<EmojiItem[]>([])
}) */
watch(() => query.value.length, (newVal) => {
  if (newVal > 0 && tab.value !== 0)
    tab.value = 0
})

watch(() => query.value, (newVal) => {
  if (newVal === '' && tab.value !== 0)
    tab.value = 1
})

const invert = shallowRef<boolean>(false)

watch(() => tab.value, (newVal, oldVal) => {
  if (newVal < oldVal)
    invert.value = true
  else invert.value = false
})
</script>

<template>
  <Popover>
    <PopoverTrigger
      ref="triggerEl"
      size="sq"
      class="size-7"
      variant="ghost"
      active="inset"
      hover="inset"
      @click.stop>
      <icon
        name="hash"
        class="!size-4 opacity-60 transition-all duration-100 group-focus-within/text:opacity-90 group-hover/text:opacity-90" />
    </PopoverTrigger>

    <LazyPopoverContent
      ref="target"
      data-theme="base"
      align="start"
      class="tippy-box  relative h-90 max-h-90 w-78 -translate-x-2 overflow-hidden rounded-xl px-0 py-px inset-shadow-xs">
      <div class="from-b1 absolute top-0 z-1 w-full overflow-hidden bg-linear-to-b from-4% to-transparent to-80% px-2 pt-2 pb-1.5">
        <InputGroup
          class="!bg-b1/74 bg-brightness-104 border-b3/80 h-11 w-full rounded-xl  border-[groove] bg-blend-screen    shadow-xs shadow-black/4 backdrop-blur">
          <InputGroupSearch />
          <InputGroupInput v-model:model-value="query" />
          <InputGroupClear
            @clear:input="() => {
              query = ''
              tab = 1
            }" />
        </InputGroup>
      </div>
      <TransitionSlideLeft
        :invert
        class="size-full overflow-auto ">
        <div
          :key="tab"
          class=" grid  w-full  grid-cols-[repeat(auto-fill,minmax(28px,1fr))] justify-between gap-1.5 overflow-auto  px-2  pt-15 pb-18">
          <template v-if="query.length && results.length && tab === 0">
            <template
              v-for="item, i in results"
              :key="i">
              <Item
                v-if="item.id.toString() === item.key"
                :id="item.id"
                :key="item.id"
                class="size-full" />

              <ChampionIcon
                v-else
                :id="item.id"
                :key="item.key"
                class="size-full" />
            </template>
          </template>
          <template v-else-if="tab === 2">
            <Item
              v-for="item in ix().items"
              :id="item.id"
              :key="item.id"
              class="size-full" />
          </template>
          <template v-else>
            <ChampionIcon
              v-for="c in ix().champions"
              :id="c.id"
              :key="c.id"
              class="size-full" />
          </template>
        </div>
      </TransitionSlideLeft>
      <div class="from-b1 absolute bottom-0 w-full bg-linear-to-t  from-4% to-transparent to-80% px-2 pb-2 ">
        <Tabs
          v-model:model-value="tab"
          as="div"
          class="border-b3/80 bg-brightness-104 bg-b1/70  flex   !h-9 w-full items-center  rounded-xl border border-[groove] px-1 bg-blend-screen shadow-md shadow-black/4 backdrop-blur ">
          <TabsList
            variant="none"
            size="sm"
            class="w-full justify-stretch ">
            <TabsTrigger
              :disabled="!query.length"
              class="group/btn on:*:opacity-100 on:**:text-nc h-7 *:opacity-60   hover:*:opacity-100 "
              :value="0">
              <icon
                name="search"
                class="size-4" />
            </TabsTrigger>
            <TabsTrigger
              v-for="group, i in ['Champions', 'Items']"
              :key="i"
              class="group/btn  on:!text-nc on:*:opacity-100 h-7 *:opacity-60   hover:*:opacity-100 "
              :value="i + 1">
              {{ group }}
            </TabsTrigger>
            <TabIndicator
              variant="neutral"
              class="!bg-b2" />
          </TabsList>
        </Tabs>
      </div>
    </LazyPopoverContent>
  </Popover>
</template>