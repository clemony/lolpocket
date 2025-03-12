<script lang="ts" setup>
const props = defineProps<{
  set?: ItemSet
  modelValue?: ItemSet
}>()

const set = computed (() => {
  return props.set ? props.set : props.modelValue
})
</script>

<template>
  <div class="col-start-1 h-fit  gap-1 px-3  py-2 grid w-full grid-cols-6 rounded-box p-i-c **:select-none">
    <template v-for="i in 6">
      <template v-if="set == null || set == undefined">
        <Placeholder :key="i" class="size-16 bg-b3/80" />
      </template>
    </template>

    <template v-if="set && set.items.length">
      <template v-for="(item, i) in set.items">
        <template v-if="i < 6">
          <div
            :key="i"
            class="shadow-sm inset-shadow-black/40 shadow-black/20 inset-shadow-sm btn btn-square size-16 rounded-lg !border-0">
            <div
              class="size-full overflow-hidden rounded-lg">
              <div v-if="item.id == 0" class="size-full bg-b3  aspect-square" />

              <img
                :src="`/img/item/${item.id}.webp`"
                class="size-full bg-b3  aspect-square inset-shadow-rounded shadow-rounded inset-shadow-black shadow-black" />
            </div>
          </div>
        </template>
      </template>
    </template>
  </div>
</template>

<style scoped>

</style>