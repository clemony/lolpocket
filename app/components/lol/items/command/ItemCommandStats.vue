<script lang="ts" setup>
import { statIndex } from "#shared/constants/common/stat-index";

const { filtered, filters } = is() as any
</script>

<template>
  <Collapsible :default-open="true">
    <CollapsibleTrigger>
      <p class="z-0 mt-4 mb-2 pl-4 font-semibold tracking-tight">
        Search by Item Stat
      </p>
    </CollapsibleTrigger>

    <CollapsibleContent class="CollapsibleContent">
      <AnimatePresence
        class="z-0 mb-2 flex flex-col px-1.5"
        multiple
        as="div"
        unwrap-element
        :appear="false">
        <Motion v-for="stat in statIndex" :key="stat.id" as="div">
          <label
            v-if="!filters.stats.includes(stat.id)"
            class="flex w-full rounded-md py-1.5 pr-2.5 pl-8 capitalize hover:bg-accent">
            <input
              v-model="filters.stats"
              class="peer hidden"
              type="checkbox"
              name="item-types"
              :value="stat.id" />

            <span class="grow">{{ stat.name }}</span>

            <div
              class="badge rounded-lg border-accent bg-p0/90 text-xs! tracking-wide">
              <span class="dst text-pc">{{ stat.abbr?.[0] ?? "" }}</span>
            </div>
          </label>
        </Motion>
      </AnimatePresence>
    </CollapsibleContent>
  </Collapsible>
</template>
