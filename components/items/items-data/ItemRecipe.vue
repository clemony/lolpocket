<script lang="ts" setup>
const props = defineProps<{
  item: Item

}>()

const ds = useDataStore()

const recipe = computed (() => item.value.recipe ? item.value.recipe : null)
const recipeArray = asyncComputed(() => {
  return !!Array.isArray(recipe.value)
})


const item = computed(() => {
  return props.item
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
        <div v-if="recipe && recipeArray">
          <div class="divider divider-end before:h-px my-4 before:bg-nc">
            RECIPE
          </div>
          <div class="group flex items-center justify-center gap-4">
            <template v-if="recipeArray">
              <template
                v-for="(component, i) in item.recipe"
                :key="i">
                <button
                  v-tippy="handleTooltip(component)"
                  class="ring-accent  size-10 overflow-hidden rounded-full shadow-sm hover:ring-2  hover:ring-offset-2 hover:ring-offset-b1/30 tldr-20">
                  <img
                    v-if="itemId(component)"
                    :src="`/img/item/${itemId(component)}.webp`"
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