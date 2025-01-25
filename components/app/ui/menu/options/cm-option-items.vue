<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

const pocket = props.pocket
</script>

<template>
  <ContextMenuSub>
    <ContextMenuSubTrigger
      :disabled="pocket.items[0].itemSets.length <= 1"
      :class="{
        '[&_svg]:last:hidden': pocket.items[0].itemSets.length <= 1,
        'opacity-50': pocket.items[0].itemSets.length == 0,
      }"
    >
      <icon
        v-if="pocket.items[0].itemSets"
        name="iconoir:star"
        class="size-3.5"
      />
      <icon
        v-else
        name="iconoir:star-dashed"
        class="size-3.5"
      />
      Set
    </ContextMenuSubTrigger>

    <ContextMenuSubContent>
      <ContextMenuItem v-for="(set, index) in pocket.items[0].itemSets">
        <label class="flex items-center gap-0.5">
          <icon
            v-if="pocket.items[0].starred == index"
            name="teenyicons:tick-outline"
            class="mr-2"
          />
          <span
            v-else
            class="w-5"
          ></span>
          <input
            v-model="pocket.items[0].starred"
            type="radio"
            class="hidden"
            :value="set"
          />
          <div v-for="(item, index) in set.items">
            <img
              :src="`/img/items/${item.id}.webp`"
              class="size-5 rounded-xs"
            />
          </div>
        </label>
      </ContextMenuItem>
    </ContextMenuSubContent>
  </ContextMenuSub>
  <ContextMenuSeparator />
</template>

<style scoped></style>
