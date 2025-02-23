<script setup lang="ts">
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from 'components/base/resizable'

const props = defineProps<{
  pocket: pocket
}>()

definePageMeta({
  name: 'items',
})

const ts = useTempStore()
const pocket = ref(props.pocket)

</script>

<template>
  <div class="size-full overflow-hidden  ">

    <ItemDataDrag v-if="ts.selectedItem" />


      <ResizablePanelGroup
        direction="horizontal"
        class="size-ful"
      >
        <ResizablePanel :default-size="48" :min-size="20" class="bg-b1  inset-shadow-xxs flex justify-centerl relative">
          <ItemSets :pocket="pocket" />
        </ResizablePanel>
    <ResizableHandle
      class="bg-b2 w-0.5 !ml-0 "
    />
        <ResizablePanel :min-size="10" class="bg-b1  inset-shadow-xxs">
              <PocketItemFilter :pocket="pocket" />


              <div class="h-full w-full relative flex justify-center  rounded-2xl overflow-hidden">
                <PocketItemList :pocket="pocket" />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>

    </div>


</template>

<style></style>
