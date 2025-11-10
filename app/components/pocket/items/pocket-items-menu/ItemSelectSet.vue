<script lang="ts" setup>
import type { ItemSet } from '~~/shared/schema'

const props = defineProps<{
  set?: ItemSet
  modelValue?: ItemSet
}>()

const set = computed(() => {
  return props.set ? props.set : props.modelValue
})
</script>

<template>
  <div
    class="
      p-i-c col-start-1 grid h-fit w-full grid-cols-6 gap-1 rounded-box px-3
      py-2
      **:select-none
    ">
    <template v-for="i in 6">
      <template v-if="set === null || set === undefined">
        <Placeholder
          :key="i"
          class="size-16 bg-b3/80" />
      </template>
    </template>

    <template v-if="set && set.items.length">
      <template v-for="(item, i) in set.items">
        <template v-if="i < 6">
          <div
            :key="i"
            class="
              btn btn-square size-16 rounded-lg !border-0 shadow-sm
              inset-shadow-sm shadow-black/20 inset-shadow-black/40
            ">
            <div class="size-full overflow-hidden rounded-lg">
              <div
                v-if="item === 0"
                class="aspect-square size-full bg-b3" />

              <img
                :alt="ix().itemNameById(item)"
                :src="`/img/items/${item}.webp`"
                class="
                  inset-shadow-rounded shadow-rounded aspect-square size-full
                  bg-b3 shadow-black inset-shadow-black
                " />
            </div>
          </div>
        </template>
      </template>
    </template>
  </div>
</template>

<style scoped></style>
