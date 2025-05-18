<script lang="ts" setup>
const { pocket, itemData } = defineProps<{
  itemData: ItemRecord
  pocket: Pocket
}>()
</script>

<template>
  <Field class="pl-3 w-full flex">
    <div v-if="pocket?.items && pocket?.items?.length" class="w-full flex-wrap  py-3  flex gap-6.5">
      <Placeholder v-for="set in pocket.items" :key="set.name" class="size-20 p-1.5 flex flex-wrap hover:ring hover:ring-neutral/40 cursor-pointer items-between pointer-events-auto justify-between !gap-0.75 !border-b3/50 border" @click="navigateTo(`/pocket/${pocket.key}/items`)">
        <template v-if="set.items && set.items?.length">
          <template v-for="(item, i) in set.items" :key="item">
            <Item
              v-if="i < 4" :id="item" class="pointer-events-none rounded-lg size-7.5">
            </Item>
          </template>
        </template>
      </Placeholder>
    </div>

    <button v-tippy="'Add Item Set'" class="h-full  grid cursor-pointer place-items-center   group  w-14 rounded-l-none rounded-r-xl p-0" @click="newItemSet(pocket.key)">
      <div class="group-hover:bg-b2/80 size-6 rounded-lg grid place-items-center border border-transparent group-hover:border-b3/60">
        <icon name="add-sm" class="text-bc/60 group-hover:text-bc" />
      </div>
    </button>
  </Field>
</template>