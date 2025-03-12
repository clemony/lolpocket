<script lang="ts" setup>
const is = useItemStore()
</script>

<template>
  <Collapsible :default-open="true">
    <CollapsibleTrigger>
      <p class="font-semibold tracking-tight mb-2 mt-4 pl-4">
        Search by Item Stat
      </p>
    </CollapsibleTrigger>
    <CollapsibleContent class="CollapsibleContent">
      <div group class="flex flex-col  mb-2 px-1.5" :appear="false">
        <label v-for="stat in itemStats" :key="stat.id" class="w-full rounded-md flex hover:bg-b2/60 capitalize py-1.5 pl-8 pr-2.5">
          <input v-model="is.filterItemStats" type="checkbox" name="item-types" class="peer hidden" :value="stat" />
          <span class="grow">{{ stat.displayName }}</span>

          <div class="!text-1   tracking-wide" >
          <span class="dst text-bc/60">{{ stat.shortName }}</span>
          </div>
        </label>
      </div>
    </CollapsibleContent>
  </Collapsible>
</template>