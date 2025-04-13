<script lang="ts" setup>

const route = useRoute()


const as = useAccountStore()
const us = useUiStore()

const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})

const rightbarExpanded = ref(true)
const toggleRightbar = useToggle(rightbarExpanded)


</script>

<template>
  <ResizablePanelGroup direction="horizontal" class="h-screen  w-full grid overflow-hidden  ">
  <ResizablePanel>
    <slot name="page"/>

</ResizablePanel>
<ResizableHandle class="bg-transparent" />
  <ResizablePanel
    :data-state="rightbarExpanded == true ? 'expanded' : 'collapsed'"
    class=" bg-b2/40 w-full h-full py-4  gap-2.5 border-l shadow-warm shadow-black/5 z-3   flex-nowrap  flex  flex-col  border-l-b3/40  overflow-x-hidden  group relative" :style="{ '--bg-noise': 1 }">

    <div class="h-full relative overflow-y-scroll   overflow-x-hidden" :class="{ 'pt-18': !rightbarExpanded }">
        <slot  />
    </div>


</ResizablePanel>
  </ResizablePanelGroup>
</template>