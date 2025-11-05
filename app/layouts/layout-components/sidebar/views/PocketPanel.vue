<script lang="ts" setup>
defineOptions({
  meta: {
    name: 'Pockets',
    class: '**:stroke-[2.21]',
    icon: 'folder'

  },
})

const pinned = computed(() => {
  const p = ps().pockets.filter(p => p.location.pinned)
  const result: Pocket[][] = []

  for (let i = 0; i < p.length; i += 3)
    result.push(p.slice(i, i + 3))

  return result
})
console.log('🌱 - pinned:', pinned)
</script>

<template>
  <Collapsible
    v-model:open="ui().collapseStates.panel.pocket">
    <!-- pockets -->

    <div
      class="  py-1 pb-0 gap-2 grid auto-rows-min">
      <div
        v-for="row, i in pinned?.slice(0, 2)"
        :key="i"
        class="w-full flex w-full group/wrap gap-2">
        <PocketFlexRow :row />
      </div>
    </div>
    <CollapsibleContent>
      <div
        class="  py-1 pb-0 gap-2 grid auto-rows-min">
        <div
          v-for="row, i in pinned?.slice(2)"
          :key="i"
          class="w-full flex w-full group/wrap gap-2">
          <LazyPocketFlexRow
            :row />
        </div>
      </div>
    </CollapsibleContent>

    <!-- trigger -->
    <CollapsibleTrigger
      :disabled="!pinned?.slice(2).length"
      class="disabled:pointer-events-none w-full relative group/tgr h-8 mt-0 flex items-center justify-center ">
      <DropdownMenuSeparator class="-mx-4 transition-colors group-hover/tgr:!bg-shade-b3/6 absolute !inset-x-0 duration-200  mb-px mt-0" />
      <icon
        name="down"
        class="self-end size-4 duration-200 mt-px transition-all text-bc/0   group-hover-open/tgr:-scale-y-100 group-hover/tgr:text-bc/50" />
    </CollapsibleTrigger>
  </Collapsible>
</template>
