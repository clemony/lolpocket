<script lang="ts" setup>
const props = defineProps<{
  item: Item

}>()

const ds = useDataStore()

const item = computed (() => props.item)

const into = computed (() => item.value.into ? item.value.into : null)
const intoArray = asyncComputed(() => {
  return !!Array.isArray(into.value)
})
function itemBuy(id) {
  const a = ds.items.find(item => item.id == id)
  if (!a)
    return
  return {
    name: a.name,
    price: a.buy,
  }
}

function handleTooltip(id) {
  if (!id)
    return
  const a = itemBuy(id)
  if (!a)
    return

  if (itemBuy) {
    return `${a.name} ‑ ${a.price}g`
  }

  else if (!a.price) {
    return a.name
  }
}
</script>

<template>
  <div v-if="into && intoArray">
    <div class="divider divider-end before:h-px my-4 before:bg-nc">
      COMPONENT OF
    </div>
    <div class="group flex items-center flex-wrap justify-center gap-4">
      <template v-if="intoArray">
        <template
          v-for="(component, i) in item.into"
          :key="i">
          <button
            v-tippy="handleTooltip(component)"
            class="ring-accent  size-10 overflow-hidden rounded-lg shadow-sm hover:ring-2  hover:ring-offset-2 hover:ring-offset-b1/30 tldr-20">
            <img
              v-if="component"
              :src="`/img/item/${component}.webp`"
              :alt="`${component}image`" class="shrink-0" />
          </button>
        </template>
      </template>
    </div>
  </div>
</template>