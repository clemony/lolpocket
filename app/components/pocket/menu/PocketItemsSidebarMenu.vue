<script lang="ts" setup>
const { pocket, itemData } = defineProps<{
  itemData: ItemRecord
  pocket: Pocket
}>()
</script>

<template>
  <Field class="px-3  py-3 w-full">
    <div v-if="pocket?.items && pocket?.items?.length" class="w-full flex gap-3.5">
      <Placeholder v-for="set in pocket.items" :key="set.name" class="size-20 p-1.5 flex flex-wrap items-between justify-between !gap-0.75 !border-b3/50 border">
        <template v-if="set.items && set.items?.length">
          <template v-for="(item, i) in set.items" :key="item">
            <Item
              v-if="i < 4" :id="item" class="rounded-lg size-7.5">
            </Item>
          </template>
        </template>
      </Placeholder>
    </div>

    <NavBtn class="mt-4 w-full justify-start !font-medium px-3.5 !text-2" @click="newItemSet(pocket.key)">
      <icon name="add-sm" />
      Add Item Set
    </NavBtn>
  </Field>
</template>