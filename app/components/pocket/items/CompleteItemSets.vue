<script lang="ts" setup>
const props = defineProps<{
  set?: ItemSet
  pocket?: Pocket
}>()
</script>

<template>
  <div
    class="p-i-c shadow-smooth h-auto w-fit rounded-xl px-6 pt-4 pb-5 shadow-black/10 drop-shadow-md backdrop-blur-md **:select-none">
    <div class="w-full justify-start">
      <!--  <span
        class="text-xlds-2xs font-medium"
        :style="{ fontFamily: pocket.card.font[1] || 'Geist Mono' }"> {{ set.name }}</span> -->
    </div>

    <div class="mt-2 flex gap-2">
      <template v-if="set && set.items.length">
        <template v-for="(item, i) in set.items">
          <template v-if="i < 6">
            <div :key="i" class="size-20 rounded-xl *:rounded-xl">
              <div class="size-full overflow-hidden rounded-lg">
                <div v-if="item === 0" class="aspect-square size-full bg-p3" />

                <img
                  class="inset-shadow-rounded shadow-rounded aspect-square size-full bg-p3 shadow-black inset-shadow-black"
                  :alt="itemNameById(item)"
                  :src="`/img/items/${item}.webp`" />
              </div>
            </div>
          </template>
        </template>
      </template>
    </div>
  </div>
  <!--     <div class="badge badgeneutral badge-xl absolute !py-5 px-7 rounded-2xl bgneutral/80 backdrop-blur-md shadow-smooth drop-shadow-md -top-8 left-0 border borderneutral ring ring-1 ringneutral ring-offset-1 ring-offsetneutral/60">
    </div> -->
</template>
