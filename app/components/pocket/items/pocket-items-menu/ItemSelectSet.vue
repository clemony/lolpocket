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
    class="rounded-box p-i-c col-start-1 grid h-fit w-full grid-cols-6 gap-1 px-3 py-2 **:select-none">
    <template v-for="i in 6">
      <template v-if="set === null || set === undefined">
        <Placeholder
          :key="i"
          class="bg-b3/80 size-16" />
      </template>
    </template>

    <template v-if="set && set.items.length">
      <template v-for="(item, i) in set.items">
        <template v-if="i < 6">
          <div
            :key="i"
            class="btn btn-square size-16 rounded-lg !border-0 inset-shadow-sm shadow-sm shadow-black/20 inset-shadow-black/40">
            <div class="size-full overflow-hidden rounded-lg">
              <div
                v-if="item === 0"
                class="bg-b3 aspect-square size-full" />

              <img
                :alt="ix().itemNameById(item)"
                :src="`/img/items/${item}.webp`"
                class="bg-b3 inset-shadow-rounded shadow-rounded aspect-square size-full shadow-black inset-shadow-black" />
            </div>
          </div>
        </template>
      </template>
    </template>
  </div>
</template>

<style scoped></style>
