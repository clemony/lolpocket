<script lang="ts" setup>
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
    class="p-i-c col-start-1 grid h-fit w-full grid-cols-6 gap-1 rounded-xl px-3 py-2 **:select-none">
    <template v-for="i in 6">
      <template v-if="set === null || set === undefined">
        <Placeholder :key="i" class="size-16 bg-p3/80" />
      </template>
    </template>

    <template v-if="set && set.items.length">
      <template v-for="(item, i) in set.items">
        <template v-if="i < 6">
          <div
            :key="i"
            class="btn btn-square size-16 rounded-lg border-0! shadow-sm inset-shadow-sm shadow-black/20 inset-shadow-black/40">
            <div class="size-full overflow-hidden rounded-lg">
              <div v-if="item === 0" class="aspect-square size-full bg-p3" />

              <img
                class="inset-shadow-rounded shadow-rounded aspect-square size-full bg-p3 shadow-black inset-shadow-black"
                :alt="itemNameById(item)"
                :src="`/img/item/${item}.webp`" />
            </div>
          </div>
        </template>
      </template>
    </template>
  </div>
</template>
