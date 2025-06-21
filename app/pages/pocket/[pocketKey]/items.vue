<script setup lang="ts">
import { SplitterPanel as ResizablePanel } from 'reka-ui'

const props = defineProps<{
  pocket: Pocket
}>()

definePageMeta({
  name: 'pocket items',
  section: 'pocket',
  search: false,
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
  <div class="size-full overflow-hidden  ">
    <ResizablePanelGroup
      direction="horizontal"
      class="size-full">
      <ResizablePanel :default-size="50" :min-size="20" class="bg-b1   flex size-full relative overflow-y-auto">
        <ItemSets :pocket="pocket" />
      </ResizablePanel>

      <TabResizeBar class="">
        <RadioGroup v-model:model-value="tabs" class="tabs absolute top-8 flex  flex-row-reverse flex-nowrap tabs-lift tabs-xl w-full grow pb-13.25 ">
          <label class="aspect-square has-disabled:pointer-events-none has-disabled:opacity-60 size-13 grid place-items-center ">
            <input v-model="showFilter" type="checkbox" :disabled="tabs == 'calculator'" class="peer hidden" />

            <div class="rounded-full size-6 grid place-items-center peer-checked:shadow-sm peer-checked:drop-shadow-sm peer-checked:bg-neutral/90 peer-checked:stroke-[1.5] hover:stroke-[1.4] tldr-20  peer-checked:*:text-nc">
              <icon name="teenyicons:filter-outline" class="dst rotate-90 shrink-0 size-3.75 " />
            </div>
          </label>

          <TabResizeHandle v-for="tab in tabValues" :key="tab.name" :active="tabs == tab.value" class="group text-3">
            <RadioGroupItem :value="tab.value" class="peer hidden absolute pointer-events-none" />

            <icon :name="tab.icon" class="shrink-0 size-3.75 " />
            {{ tab.name }}
          </TabResizeHandle>
        </RadioGroup>
      </TabResizeBar>

      <ResizablePanel :min-size="35" class="shadow-warm-2 relative  overflow-hidden flex flex-col z-0 justify-end">
        <Field
          class="size-full  relative  transition-all duration-500 justify-center overflow-y-auto  max-h-screen " :style="{
            backgroundColor: 'color-mix(in oklch, var(--color-b2) 40%, white 60%)',
          }">
          <LazyDraggableItemList v-if="tabs != 'calculator'" :pocket="pocket" />

          <PocketItemFilters :visible="showFilter" />
        </Field>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>

<style></style>
