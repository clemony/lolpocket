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

  <div class="flex  items-center gap-2 py-3 px-1.5 z-10   ">
  <button class="btn btn-md !text-4 font-normal items-center bg-b1"  @click="handleAZ()">
    <span class="dst"> abc</span>
    <transition-scale group class="size-6 grid place-items-center">
      <icon v-if="ts.AZmodel != 0" name="arrow-up" class="shrink-0 size-6 transition-alld st  duration-300" :class="{ '-scale-y-100': ts.AZmodel == 1 }" />
      <icon v-if="ts.AZmodel == 0" name="carbon:asleep" class="shrink-0 dst size-5 py-0.5 " />
    </transition-scale>
  </button>

  <button class="btn btn-md !text-4 font-normal items-center bg-b1"  @click="handlePrice()">
    <icon name="fluent:tag-20-regular" class="shrink-0 size-6 dst" />
    <transition-scale group class="size-6 grid place-items-center">
      <icon v-if="ts.priceModel != 0" name="arrow-up" class="shrink-0 dst size-6 transition-all duration-300" :class="{ '-scale-y-100': ts.priceModel == 1 }" />
      <icon v-if="ts.priceModel == 0" name="carbon:asleep" class="shrink-0 dst size-5 py-0.5 " />
    </transition-scale>
  </button>
    <DropdownMenu>
      <DropdownMenuTrigger class="btn btn-md bg-b1">
        <icon name="teenyicons:bar-chart-outline" class="size-5" />
      </DropdownMenuTrigger>
  <DropdownMenuContent>

        <Button v-tippy="'Reset all'" size="sm" variant="ghost" @click="ts.filterItemStats = []">
          <span class="opacity-60">{{ ts.filterItemStats.length }}</span>
          <icon name="reset" class="!size-4 shrink-0 ml-2 " />
        </Button>
      <DropdownMenuCheckboxItem v-for="stat in itemStats" :key="stat.id" class="pointer-events-none">
        <label class="flex gap-3 pointer-events-auto" @click.stop>
          <input v-model="ts.filterItemStats" type="checkbox" :value="stat.id" class="hidden  peer" />
          <div class="size-4 relative">
            <icon v-if="ts.filterItemStats.includes(stat.id)" name="tick-sm" class="absolute !size-6 shrink-0" />
          </div>
          {{ stat.displayName }}
        </label>
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>

    </DropdownMenu>

    <DropdownMenu>
      <DropdownMenuTrigger class="btn btn-md bg-b1">

    <icon name="teenyicons:filter-outline" class="size-5" />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
        <button v-tippy="'Reset all'" size="sm" variant="ghost" @click="ts.filterItemTypes = ''">
          <icon name="reset" class="!size-4 shrink-0 ml-2 " />
        </button>
  
      <DropdownMenuRadioGroup v-model:model-value="ts.filterItemTypes">
        <MenubarRadioItem v-for="type in itemTypes" :key="type" :value="type">
          {{ type }}
        </MenubarRadioItem>
      </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>

    <ItemSearch
      placeholder="Search Items"
      input-class=" text-bc  "
      class=" shadow-none h-11 [&_svg]:size-4  rounded-lg "
    />
  </div>
</template>

<style>
</style>
