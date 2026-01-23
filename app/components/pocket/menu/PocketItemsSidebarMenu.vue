<script lang="ts" setup>
const { pocket } = defineProps<{
  pocket: Pocket
}>()
</script>

<template>
  <div class="flex w-full px-3">
    <div
      v-if="pocket?.items && pocket?.items?.length"
      class="flex w-full flex-wrap gap-3.5 py-3">
      <Placeholder
        v-for="set in pocket.items"
        :key="set.name"
        class="
          hover:ringneutral/40 items-between border-b3/50! pointer-events-auto flex
          size-20 cursor-pointer flex-wrap justify-between gap-0.75!
          border p-1.5 hover:ring-2
        "
        @click="navigateTo(`/pocket/${pocket.key}/items`)">
        <template v-if="set.items && set.items?.length">
          <template
            v-for="(item, i) in set.items"
            :key="item">
            <Item
              v-if="i < 4"
              :id="item"
              class="pointer-events-none size-7.5 rounded-lg"></Item>
          </template>
        </template>
      </Placeholder>
    </div>

    <!-- <button v-tippy="'Add Item Set'" class="h-full  grid cursor-pointer place-items-center   group  w-14 rounded-l-none rounded-r-xl p-0" @click="newItemSet(pocket.key)">
      <div class="group-hover:bg-b2/80 size-6 rounded-lg grid place-items-center border border-transparent group-hover:border-b3/60">
        <icon name="add" class="text-bc/60 group-hover:text-bc" />
      </div>
    </button> -->
  </div>
</template>
