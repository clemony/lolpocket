<script lang="ts" setup>
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from 'components/base/resizable'

const props = defineProps<{
label?: string
}>()
</script>

<template>

 <ResizableHandle
        class="handle-bg "
        custom-handle
      >

      <div class="tabs tabs-lift !tabs-md absolute absolute group-[&[data-orientation=vertical]]:!rotate-0 group-[&[data-orientation=vertical]]:left-0 [&[data-orientation=vertical]]:-scale-y-100 [&[data-orientation=vertical]]:
      !rotate-180 group-[&[data-orientation=vertical]]:-top-10">
        <label role="tab"  class="tab  text-nc tab-active !text-3 [--tab-bg:var(--neutral)] !border-b-transparent font-semibold [--tab-border-color:var(--neutral)] hover:text-nc flex gap-6 group">


             <input type="checkbox" name="my_tabs_3" checked="true" class="hidden" />

             {{props.label}}

             <icon name="up-sm" class="size-6 text-nc stroke-[1.5] group-hover:stroke-2" />
        </label>
    </div>
         </ResizableHandle>
            <ResizablePanel collapsible :defaultSize="6" :minSize="6" :collapsedSize="6" class="relative" >


    <div class="text-nc size-full border-neutral rounded-tr-box  bg-neutral p-6  ">hihih
        </div>
            
            </ResizablePanel>

  
</template>

<style>

</style>