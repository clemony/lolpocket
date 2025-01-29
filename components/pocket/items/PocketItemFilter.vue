<!-- eslint-disable unused-imports/no-unused-vars -->
<script setup lang="ts">
import { stats, types } from 'shared/data/item';

const props = defineProps<{
  pocket: pocket
}>()
const ts = useTempStore()
</script>

<template>
  <Menubar class="flex flex-col items-center gap-2 py-3 px-1.5 z-10  rounded-lg h-68 ">
    <DropdownHover text="abc" title="Alphabetical Sort">
      <MenubarRadioGroup v-model:model-value="ts.AZmodel">
        <MenubarRadioItem value="1" class="flex gap-2">
          A <icon name="teenyicons:arrow-right-outline" class="size-5" /> Z
        </MenubarRadioItem>
        <MenubarRadioItem value="2" class="flex gap-2 overflow-hidden">
          A <icon name="teenyicons:arrow-left-outline" class="size-5" /> Z
        </MenubarRadioItem>
        <MenubarSeparator />
        <MenubarRadioItem value="0">
          Off
        </MenubarRadioItem>
      </MenubarRadioGroup>
    </DropdownHover>

    <DropdownHover icon="fluent:tag-20-regular" title="Sort Price">
      <MenubarRadioGroup v-model:model-value="ts.priceModel">
        <MenubarRadioItem value="1" class="flex gap-2">
          Low <icon name="teenyicons:arrow-right-outline" class="size-5" /> High
        </MenubarRadioItem>
        <MenubarRadioItem value="2" class="flex gap-2 overflow-hidden">
          Low <icon name="teenyicons:arrow-left-outline" class="size-5" /> High
        </MenubarRadioItem>
        <MenubarSeparator />
        <MenubarRadioItem value="0">
          Off
        </MenubarRadioItem>
      </MenubarRadioGroup>
    </DropdownHover>

    <DropdownHover icon="teenyicons:bar-chart-outline" title="Item Stats">
      <template #title>
        <Button v-tippy="'Reset all'" size="sm" variant="ghost" @click="ts.filterItemStats = []">
          <span class="opacity-60">{{ ts.filterItemStats.length }}</span>
          <icon name="reset" class="!size-4 shrink-0 ml-2 " />
        </Button>
      </template>
      <MenubarItem v-for="stat in stats" :key="stat.id" class="pointer-events-none">
        <label class="flex gap-3 pointer-events-auto" @click.stop>
          <input v-model="ts.filterItemStats" type="checkbox" :value="stat.id" class="hidden  peer" />
          <div class="size-4 relative">
            <icon v-if="ts.filterItemStats.includes(stat.id)" name="tick-sm" class="absolute !size-6 shrink-0" />
          </div>
          {{ stat.displayName }}
        </label>
      </MenubarItem>
    </DropdownHover>

    <DropdownHover icon="teenyicons:filter-outline" title="Category">
      <template #title>
        <button v-tippy="'Reset all'" size="sm" variant="ghost" @click="ts.filterItemTypes = ''">
          <icon name="reset" class="!size-4 shrink-0 ml-2 " />
        </button>
      </template>
      <MenubarRadioGroup v-model:model-value="ts.filterItemTypes">
        <MenubarRadioItem v-for="type in types" :key="type" :value="type">
          {{ type }}
        </MenubarRadioItem>
      </MenubarRadioGroup>
    </DropdownHover>

    <DropdownHover icon="teenyicons:search-outline">
      <ItemSearch
        placeholder="Search Items"
        input-class=" text-bc  "
        class=" shadow-none h-9 [&_svg]:size-4  rounded-lg "
      />
    </DropdownHover>
  </Menubar>
</template>

<style>
</style>
