<script lang="ts" setup>
const { filtered, filters, setFilter } = useItemFilter()
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
        multiple
        as="div"
        unwrap-element
        class="z-0 mb-2 flex flex-col px-1.5"
        :appear="false">
        <Motion
          v-for="stat in statIndex"
          :key="stat.id"
          as="div">
          <label
            v-if="!filters.stats.includes(stat.id)"
            class="
              hover:bg-accent flex w-full rounded-md py-1.5 pr-2.5 pl-8
              capitalize
            ">
            <input
              v-model="filters.stats"
              type="checkbox"
              name="item-types"
              class="peer hidden"
              :value="stat" />

            <span class="grow">{{ stat.name }}</span>

            <div
              class="
                badge rounded-field border-accent bg-b1/90 text-xs! tracking-wide
              ">
              <span class="text-bc dst">{{ stat.abbr[0] }}</span>
            </div>
          </label>
        </Motion>
      </AnimatePresence>
    </CollapsibleContent>
  </Collapsible>
</template>
