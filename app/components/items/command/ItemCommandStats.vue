<script lang="ts" setup>
const is = useItemStore()
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
          v-for="stat in itemStats"
          :key="stat.id"
          as="div">
          <label
            v-if="!is.pItemFilter.stats.includes(stat.id)"
            class="w-full rounded-md flex hover:bg-accent capitalize py-1.5 pl-8 pr-2.5">
            <input
              v-model="is.pItemFilter.stats"
              type="checkbox"
              name="item-types"
              class="peer hidden"
              :value="stat" />

            <span class="grow">{{ stat.displayName }}</span>

            <div class="!text-1 badge bg-b1/90 border-accent rounded-field tracking-wide">
              <span class="dst text-bc">{{ stat.shortName }}</span>
            </div>
          </label>
        </Motion>
      </AnimatePresence>
    </CollapsibleContent>
  </Collapsible>
</template>