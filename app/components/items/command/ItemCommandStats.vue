<script lang="ts" setup>
import { statIndex } from '#shared/appdata'

const { filtered, filters, setFilter } = useItemFilter()
</script>

<template>
  <Collapsible :default-open="true">
    <CollapsibleTrigger>
      <p class="font-semibold tracking-tight z-0 mb-2 mt-4 pl-4">
        Search by Item Stat
      </p>
    </CollapsibleTrigger>

    <CollapsibleContent class="CollapsibleContent">
      <AnimatePresence
        multiple
        as="div"
        unwrap-element
        class="flex flex-col z-0 mb-2 px-1.5"
        :appear="false">
        <Motion
          v-for="stat in statIndex"
          :key="stat.id"
          as="div">
          <label
            v-if="!filters.stats.includes(stat.id)"
            class="w-full rounded-md flex hover:bg-accent capitalize py-1.5 pl-8 pr-2.5">
            <input
              v-model="filters.stats"
              type="checkbox"
              name="item-types"
              class="peer hidden"
              :value="stat" />

            <span class="grow">{{ stat.name }}</span>

            <div
              class="!text-1 badge bg-b1/90 border-accent rounded-field tracking-wide">
              <span class="dst text-bc">{{ stat.abbr }}</span>
            </div>
          </label>
        </Motion>
      </AnimatePresence>
    </CollapsibleContent>
  </Collapsible>
</template>
