<script lang="ts" setup>
import type { Pocket } from "~~/shared/schema";

defineOptions({
  meta: {
    name: "Pockets",
    class: "**:stroke-[2.21]",
    icon: "folder",
  },
});

const pinned = computed(() => {
  const p = ps().pockets.filter((p) => ps().pinned.includes(p.key));
  const result: Pocket[][] = [];

  for (let i = 0; i < p.length; i += 3) result.push(p.slice(i, i + 3));

  return result;
});
console.log("🌱 - pinned:", pinned);
</script>

<template>
  <Collapsible v-model:open="ui().collapseStates.panel.pocket">
    <!-- pockets -->

    <div class="grid auto-rows-min gap-2 py-1 pb-0">
      <div
        v-for="(row, i) in pinned?.slice(0, 2)"
        :key="i"
        class="group/wrap flex w-full gap-2"
      >
        <PocketFlexRow :row />
      </div>
    </div>
    <CollapsibleContent>
      <div class="grid auto-rows-min gap-2 py-1 pb-0">
        <div
          v-for="(row, i) in pinned?.slice(2)"
          :key="i"
          class="group/wrap flex w-full gap-2"
        >
          <LazyPocketFlexRow :row />
        </div>
      </div>
    </CollapsibleContent>

    <!-- trigger -->
    <CollapsibleTrigger
      :disabled="!pinned?.slice(2).length"
      class="group/tgr relative mt-0 flex h-8 w-full items-center justify-center disabled:pointer-events-none"
    >
      <DropdownMenuSeparator
        class="absolute inset-x-0! -mx-4 mt-0 mb-px transition-colors duration-200 group-hover/tgr:bg-shade-b3/6!"
      />
      <icon
        name="down"
        class="mt-px size-4 self-end text-bc/0 transition-all duration-200 group-hover/tgr:text-bc/50 group-hover-open/tgr:-scale-y-100"
      />
    </CollapsibleTrigger>
  </Collapsible>
</template>
