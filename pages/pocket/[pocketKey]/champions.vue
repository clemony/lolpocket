<script setup lang="ts">
import { ResizablePanel } from 'components/base/resizable/index'

const props = defineProps<{
  pocket: pocket
}>()

definePageMeta({
  name: 'champions',
  path: '/pocket/:pocketKey',
  alias: '/:pocketKey',
})
const ds = useDataStore()
const pocket = ref(props.pocket)

const quote = getQuote().replace(/<\/p>/g, ' ').replace(/<p>/g, ' ').replace(/<i>/g, ' ').replace(/<\/i>/g, ' ')
</script>

<template>
  <ResizablePanelGroup direction="horizontal" class="h-full w-full  overflow-hidden relative">
    <ResizablePanel  :default-size="25" :min-size="6">
   <ResizablePanelGroup direction="vertical">
      <ResizablePanel :default-size="50" :min-size="6" class="flex flex-wrap gap-3 p-5 w-fit">
        <div class="bg-neutral rounded-xl px-4 grid grid-cols-3 grid-flow-row ">
          <template v-for="champion in pocket.champions.children" :key="champion.apiname">
            <Champion v-if="champion" :champion="champion" class=" size-16 z-0 group cursor-pointer" @click="removeChamp(champion, pocket)">
              <icon name="x-solid" class="absolute -top-0.5 -right-0.5 bg-b1 opacity-0 group-hover:opacity-100 transition-all duration-300 size-5 ring ring-b1 z-10" />
            </Champion>
          </template>
    </div>
      </ResizablePanel>
      <ResizableHandle
        class="bg-b2 w-0.5 !ml-0 "
      />
      <ResizablePanel :default-size="50">
        hih
      </ResizablePanel>
    </ResizablePanelGroup>
</ResizablePanel>
    <ResizableHandle
      class="bg-b2 w-0.5 !ml-0 "
    />
    <ResizablePanel :min-size="10"  class="h-full w-full relative overflow-y-auto ">
      <div class="grid absolute top-0 left-0   px-12  inset-0 grid-flow-row auto-cols-auto  h-fit  grid-cols-[repeat(auto-fill,minmax(70px,1fr))] justify-center gap-4   pt-10 pb-7">
        <LazyChampion
          v-for="champion in ds.champions"
          :key="champion.apiname"
          :champion="champion" class="has-checked:hidden  brightness-110 has-checked:scale-85  contrast-90 has-checked:rounded-xl  transition-all duration-300"
        >
          <input
            v-model="pocket.champions.children" type="checkbox" :value="champion" class="hidden"
          />
        </LazyChampion>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>

<style scoped></style>
