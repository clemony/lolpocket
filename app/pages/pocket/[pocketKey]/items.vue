<script setup lang="ts">
import { SplitterPanel as ResizablePanel } from 'reka-ui'

const props = defineProps<{
  pocket: Pocket
}>()

definePageMeta({
  name: 'pocket items',

  meta: {
    section: 'pocket',
    search: false,
  },
})

const is = useItemStore()
const pocket = ref(props.pocket)

const tabs = ref('items')

const tabValues = [

  {
    name: 'items',
    value: 'items',
    icon: 'bow',
  },

  {
    name: 'calculator',
    value: 'calculator',
    icon: 'calc',
  },
]

const showFilter = ref(false)

watchEffect(() => {
  if (tabs.value == 'calculator')
    showFilter.value = false
})
</script>

<template>
  <div class="w-full h-[90vh] relative overflow-hidden">
    <ResizablePanelGroup
      direction="horizontal"
      class="inset-0 absolute">
      <ResizablePanel
        :default-size="50"
        :min-size="20"
        class="bg-b1   flex size-full relative overflow-y-auto">
        <ItemSets :pocket="pocket" />
      </ResizablePanel>

      <ResizableHandle />

      <ResizablePanel
        :min-size="35"
        class=" relative  overflow-hidden flex flex-col z-0 justify-end">
        <RadioGroup
          v-model:model-value="tabs"
          class=" ">
          <label class="aspect-square has-disabled:pointer-events-none has-disabled:opacity-60 size-13 grid place-items-center ">
            <input
              v-model="showFilter"
              type="checkbox"
              :disabled="tabs == 'calculator'"
              class="peer hidden" />

            <div class="rounded-full size-6 grid place-items-center peer-checked:shadow-sm peer-checked:drop-shadow-sm peer-checked:bg-n1/90 peer-checked:stroke-[1.5] hover:stroke-[1.4] tldr-20  peer-checked:*:text-nc">
              <icon
                name="teenyicons:filter-outline"
                class="dst shrink-0 size-3.75 " />
            </div>
          </label>
        </RadioGroup>
        <section
          class="size-full  relative justify-center overflow-y-auto ">
          <LazyDraggableItemList
            v-if="tabs != 'calculator'"
            :pocket="pocket" />

          <PocketItemFilters :visible="showFilter" />
        </section>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>
