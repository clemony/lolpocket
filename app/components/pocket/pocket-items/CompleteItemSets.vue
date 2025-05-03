<script lang="ts" setup>
const props = defineProps<{
  set?: ItemSet
  pocket?: pocket
}>()
</script>

<template>
  <div class="rounded-box p-i-c **:select-none h-auto pb-5 pt-4 shadow-smooth shadow-black/10 drop-shadow-md px-6 backdrop-blur-md w-fit  ">
    <div class="w-full justify-start">
      <span class="text-5 dst font-medium" :style="{ fontFamily: pocket.card.font[1] || 'Geist Mono' }"> {{ set.name }}</span>
    </div>
    <div class="flex gap-2 mt-2">
      <template v-if="set && set.items.length">
        <template v-for="(item, i) in set.items">
          <template v-if="i < 6">
            <div
              :key="i"
              class="size-20 rounded-xl *:rounded-xl">
              <div
                class="size-full overflow-hidden rounded-lg">
                <div v-if="item.id == 0" class="size-full bg-b3  aspect-square" />

                <img
                  :src="`/img/item/${item.id}.webp`"
                  class="size-full bg-b3  aspect-square inset-shadow-rounded shadow-rounded inset-shadow-black shadow-black " />
              </div>
            </div>
          </template>
        </template>
      </template>
    </div>
  </div>
  <!--     <div class="badge badge-neutral badge-xl absolute !py-5 px-7 rounded-2xl bg-neutral/80 backdrop-blur-md shadow-smooth drop-shadow-md -top-8 left-0 border border-neutral ring ring-1 ring-neutral ring-offset-1 ring-offset-neutral/60">
    </div> -->
</template>

<style scoped>

</style>