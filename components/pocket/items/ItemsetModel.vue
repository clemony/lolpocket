<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
  model?: any
}>()

const model = ref({ items: [] })

watch(
  () => props.model,
  (newVal) => {
    model.value = newVal
  },
)
onMounted(() => {
  if (props.model) {
    model.value = props.model
  }
})
</script>

<template>
  <div class="flex justify-start gap-4">
    <template v-if="model.items.length">
      <template
        v-for="(item, index) in model.items"
        :key="item.id"
      >
        <img
          v-if="index < 6"
          :src="`/img/items/${item.id}.webp`"
          class="border-b3 size-[55px] overflow-hidden rounded-lg border shadow-xs"
        />
      </template>
      <Placeholder
        v-for="index in makeBox(model.items.length, 6)"
        :key="index"
        class="size-[55px] rounded-lg"
        no-hover
      />
    </template>
    <template v-else>
      <div class="flex gap-4">
        <Placeholder
          v-for="index in 6"
          :key="index"
          class="size-[55px] rounded-lg"
          no-hover
        />
      </div>
    </template>

    <slot />
  </div>
</template>

<style scoped></style>
