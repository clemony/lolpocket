<!-- eslint-disable unused-imports/no-unused-vars -->
<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()
const ts = useTempStore()

function handleAZ() {
  if (ts.AZmodel == 2) {
    ts.AZmodel = 0
  }
  else {
    ts.AZmodel++
  }
  console.log('💠 - handleAZ - ts.AZmodel:', ts.AZmodel)
}

function handlePrice() {
  if (ts.priceModel == 2) {
    ts.priceModel = 0
  }
  else {
    ts.priceModel++
  }
  console.log('💠 - handleAZ - ts.AZmodel:', ts.priceModel)
}
</script>

<template>
  <button class="btn btn-md !text-4 font-normal items-center" :class="{ 'opacity-60': ts.AZmodel == 0 }" @click="handleAZ()">
    <span class="dst"> abc</span>
    <transition-scale group>
      <icon v-if="ts.AZmodel != 0" name="arrow-up" class="shrink-0 size-6 transition-alldst  duration-300" :class="{ '-scale-y-100': ts.AZmodel == 1 }" />
      <icon v-if="ts.AZmodel == 0" name="carbon:asleep" class="shrink-0 dst size-6 py-0.5" />
    </transition-scale>
  </button>

  <button class="btn btn-md !text-4 font-normal items-center" :class="{ 'opacity-60': ts.priceModel == 0 }" @click="handlePrice()">
    <icon name="fluent:tag-20-regular" class="shrink-0 size-6 dst" />
    <transition-scale group>
      <icon v-if="ts.priceModel != 0" name="arrow-up" class="shrink-0 dst size-6 transition-all duration-300" :class="{ '-scale-y-100': ts.priceModel == 1 }" />
      <icon v-if="ts.priceModel == 0" name="carbon:asleep" class="dst shrink-0 size-6 py-0.5" />
    </transition-scale>
  </button>

  <Menubar class="flex  items-center gap-2 py-3 px-1.5 z-10  rounded-lg h-68 ">
    <DropdownHover icon="teenyicons:bar-chart-outline" title="Item Stats">
      <template #title>
        <Button v-tippy="'Reset all'" size="sm" variant="ghost" @click="ts.filterItemStats = []">
          <span class="opacity-60">{{ ts.filterItemStats.length }}</span>
          <icon name="reset" class="!size-4 shrink-0 ml-2 " />
        </Button>
      </template>
      <MenubarItem v-for="stat in itemStats" :key="stat.id" class="pointer-events-none">
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
        <MenubarRadioItem v-for="type in itemTypes" :key="type" :value="type">
          {{ type }}
        </MenubarRadioItem>
      </MenubarRadioGroup>
    </DropdownHover>

    <ItemSearch
      placeholder="Search Items"
      input-class=" text-bc  "
      class=" shadow-none h-11 [&_svg]:size-4  rounded-lg "
    />
  </Menubar>
</template>

<style>
</style>
