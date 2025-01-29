<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
  set: RuneSet
}>()

const pocket = ref(props.pocket)

const items = computed(() => {
  const s
  /*         pocket.value.items[0].final[0].items ?
            pocket.value.items[0].final[0].items
        : */ = pocket.value.items.sets[pocket.value.items.starred].items
  return s
})
</script>

<template>
  <div class="relative flex w-full justify-evenly rounded-full p-2 inset-shadow-sm backdrop-brightness-95 backdrop-saturate-130">
    <template
      v-for="(item, i) in items"
      :key="item.id"
    >
      <ItemPop :item="item">
        <div
          v-if="i < 6"
          :key="item.id"
          class="shadow-warm z-10 size-9 shrink-0 rounded-full p-0"
          :style="{
            zIndex: items.length + 1 - i, /*                    outlineStyle: 'double thick',
                    outlineColor: `var(--${set.primary})`,
                    outlineWidth: '1px', */
          }"
        >
          <img
            :url="`/img/items/${item.id}.webp`"
            class="z-0 size-full rounded-full outline-hidden"
          />
        </div>
      </ItemPop>
    </template>
    <ShadowedPlaceholder
      v-for="index in makeBox(items.length, 6)" :key="index"
      class="border-dark-1/15 bg-light-2 z-0 size-9 rounded-full"
      :style="{
        /*                 backgroundColor: `var(--${set.secondary}-light`,
         */
        zIndex: 6 + 1 - index,
      }"
    />
  </div>
</template>

<style scoped></style>
