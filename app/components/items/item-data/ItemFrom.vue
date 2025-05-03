<script lang="ts" setup>
const props = defineProps<{
  item: Item

}>()

const ds = useDataStore()

const item = computed (() => props.item)

const from = computed (() => item.value.from ? item.value.from : null)
const fromArray = asyncComputed(() => {
  return !!Array.isArray(from.value)
})
function itemBuy(id) {
  const a = ds.items.find(item => item.id == id)

  return {
    name: a.name,
    price: a.buy,
  }
}

function handleTooltip(id) {
  const a = itemBuy(id)
  if (itemBuy) {
    return `${a.name} ‑ ${a.price}g`
  }

  else if (!a) {
    return a.name
  }
}
</script>

<template>
  <div v-if="from && fromArray">
    <div class="divider divider-end before:h-px my-4 before:bg-nc">
      RECIPE
    </div>
    <div class="group flex items-center justify-center gap-4">
      <template v-if="fromArray">
        <template
          v-for="(component, i) in item.from"
          :key="i">
          <button
            v-tippy="handleTooltip(component)"
            class="ring-accent  size-10 overflow-hidden rounded-lg shadow-sm hover:ring-2  hover:ring-offset-2 hover:ring-offset-b1/30 tldr-20">
            <img
              v-if="component"
              :src="`/img/item/${component}.webp`"
              :alt="`${component}image`" />
          </button>

          <icon
            name="add-sm"
            class=" last:hidden" />
        </template>
      </template>
    </div>
  </div>
</template>