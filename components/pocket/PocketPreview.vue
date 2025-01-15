<script setup lang="ts">
  const props = defineProps<{
    pocket?: pocket;
  }>();

  const slotIndex = [1, 2, 3, 4, 5, 6];

  function clean(thing) {
    return thing.replace(/\s/g, '').replace(/\'/g, '').replace(/\./g, '');
  }

  const pocket = props.pocket;
</script>

<template>
  <div
    v-if="props.pocket"
    class="grid grid-cols-[1fr_3fr] gap-2 p-2">
    <div class="grid items-center justify-around gap-1.5">
      <!-------------------⟢ champ ⟣-------------------->

      <div class="">
        <div
          v-if="pocket.champions[0].starred"
          class="ring-neutral/25 grid size-[40px] shrink-0 place-items-center overflow-hidden rounded-lg ring-0 shadow-xs">
          <img
            :src="`/img/champions/${clean(pocket.champions[0].starred)}.webp`"
            class="size-[40px] scale-[115%]" />
        </div>

        <Placeholder
          v-else
          :size="40" />
      </div>

      <!-------------------⟢ rune ⟣-------------------->

      <div>
        <!--      <div
          v-if="pocket.runes[0].runeSets[pocket.runes[0].starred].keystone && pocket.runes[0].runeSets[pocket.runes[0].starred].keystone.name != 'empty'"
          class="flex aspect-square! size-[40px] justify-center rounded-lg drop-shadow-sm">
          <img
            :src="pocket.runes[0].runeSets[pocket.runes[0].starred].keystone.img"
            class="h-full w-auto shrink-0 object-contain" />
        </div> -->

        <Placeholder
          :size="40"
          class="rounded-lg" />

        <!--   <div v-if="pocket.runes[0].runeSets[pocket.runes[0].starred].secondary && pocket.runes[0].runeSets[pocket.runes[0].starred].secondary != 'empty'"
                                        class=' rounded-sm aspect-square! size-5 flex justify-center p-px shadow-xs'>
                                        <img :src="`/img/runes/${pocket.runes[0].runeSets[pocket.runes[0].starred].secondary}.webp`"
                                            class='h-full w-auto  shrink-0  object-contain'>
                                    </div> -->
      </div>
    </div>

    <!-------------------⟢ items ⟣-------------------->

    <div class="grid w-full grid-cols-3 items-center justify-around gap-1.5">
      <template v-if="pocket.items[0].itemSets[pocket.items[0].starred]">
        <template v-for="(item, index) in pocket.items[0].itemSets[pocket.items[0].starred].items">
          <img
            v-if="index <= 5"
            :key="item.id"
            :src="`/img/items/${item.id}.webp`"
            class="r size-[40px] shrink-0 rounded-lg shadow-xs" />
        </template>
      </template>

      <template v-for="(slot, index) in slotIndex">
        <template v-if="index >= pocket.items[0].itemSets[pocket.items[0].starred].items.length">
          <Placeholder
            :size="40"
            class="rounded-lg" />
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
