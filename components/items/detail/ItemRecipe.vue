<script lang="ts" setup>
const props = defineProps<{
  recipeArray: any
  item: Item
  recipe: any

}>()

const ds = useDataStore()
const recipeArray = computed (() => {
  return props.recipeArray
})

const item = omputed(() => {
  return props.item
})

const recipe = computed(() => {
  return props.recipe
})

function itemId(itemName) {
  const a = ds.SRitems.find(item => item.name == itemName)
  if (a) {
    return a.id
  }
}

function itemBuy(itemName) {
  const a = ds.SRitems.find(item => item.name == itemName)

  return a ? a.buy : 0
}

function handleTooltip(item) {
  const a = itemBuy(item)
  if (itemBuy) {
    return `${item} ‑ ${a}g`
  }

  else if (!a) {
    return item
  }
}
</script>

<template>
  <div class="group flex items-center justify-center gap-4">
    <template v-if="recipeArray">
      <template
        v-for="(component, i) in item.recipe"
        :key="i">
        <button
          v-tippy="handleTooltip(component)"
          class="ring-neutral/80 ring-offset-b1 size-14 overflow-hidden rounded-lg shadow-sm hover:ring-1 hover:ring-offset-2">
          <img
            v-if="itemId(component)"
            :src="`/img/item/${itemId(component)}.webp`"
            :alt="`${component}image`" />
        </button>

        <icon
          name="teenyicons:add-outline"
          class="stroke-[1.5] last:hidden" />
      </template>
    </template>

    <button
      v-tippy="recipe[0] + item.buy ? `${item.buy}g` : ''"
      class="ring-neutral/80 ring-offset-b1 size-14 overflow-hidden rounded-lg shadow-sm hover:ring-1 hover:ring-offset-2">
      <img
        v-if="recipe"
        :src="`/img/item/${itemId(recipe[0])}.webp`"
        :alt="`${recipe} image`" />
    </button>
  </div>
</template>