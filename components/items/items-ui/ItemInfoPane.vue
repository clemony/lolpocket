<script setup lang="ts">
const props = defineProps<{
  item?: Item
  class?: HTMLAttributes['class']
  isOpen?: boolean
}>()

const ds = useDataStore()
const as = useAccountStore()
const is = useItemStore()
const item = ref(is.selectedItem || getRandom(ds.SRitems))
const stats = ref(null)
const effects = ref(null)
const recipe = ref(null)
watch(
  () => is.selectedItem,
  (newVal) => {
    item.value = newVal
    effects.value = item.value.effects ? item.value.effects : null
    stats.value = formatItemStats(item.value.stats)
    recipe.value = item.value.recipe ? item.value.recipe : null
  },
)
const recipeArray = asyncComputed(() => {
  return !!Array.isArray(recipe.value)
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

onMounted (() => {
  effects.value = item.value.effects ? item.value.effects : null
  stats.value = formatItemStats(item.value.stats)
  recipe.value = item.value.recipe ? item.value.recipe : null
})
</script>

<template>
  <div

    class="w-full  h-full relative">
    <div class="w-full flex gap-6  mb-6 items-center px-12">
      <img
        :key="item.name"
        :src="`/img/item/${item.id}.webp`"
        :alt="`${item.name} Image`"
        class="border-b3/90 shadow-warm pointer-events-none size-18 rounded-lg border" />
      <div class="flex flex-col w-full">
        <div class="flex items-center w-full relative">
          <h1 class="flex flex-wrap items-start pt-1 leading-none text-6 tracking-tighter drop-shadow-sm grow">
            {{ item.name }}
          </h1>
        </div>

        <template v-if="item.nickname">
          <p class="text-1 ml-0.5 italic">
            a.k.a.

            {{ item.nickname.toString().replace(/\[(.*)\]/g, '$1').replace(/,/g, ', ') }}
          </p>
        </template>

        <p class="group ml-0.5 font-semibold opacity-50">
          {{ item.type }}
          <span class="group-last:hidden">,&nbsp;</span>
        </p>
      </div>
    </div>

    <div class="w-full h-160 overflow-y-auto relative">
      <div class=" overflow-y-auto   inset-0 top-0 left-0 absolute px-12">
        <template v-if="stats">
          <Separator
            class="mb-10 mt-6"
            label="STATS" />

          <ItemStats :stats="stats" />
        </template>

        <div v-if="effects && effects.pass">
          <Separator
            label="PASSIVES"
            class="my-9" />
          <p v-if="typeof effects.pass === 'string'"></p>
          <ItemEffect
            v-if="effects.pass"
            :data="effects.pass" />
          <ItemEffect
            v-if="effects.pass2"
            :data="effects.pass2"
            class="mt-5" />
          <ItemEffect
            v-if="effects.pass3"
            :data="effects.pass3" />
        </div>

        <div
          v-if="item.itemlimit"
          class="mt-10 items-end self-end">
          <!-- <Separator class="mt-11 mb-3" /> -->

          Limited to one {{ item.itemlimit }} item.
        </div>

        <div v-if="effects && effects.act">
          <Separator
            v-if="effects && effects.act"
            label="ACTIVES"
            class="my-11" />

          <p v-if="typeof effects.act === 'string'"></p>
          <ItemEffect
            v-if="effects.act"
            :data="effects.act" />
        </div>

        <template v-if="recipe && recipeArray">
          <Separator
            label="RECIPE"
            class="my-11" />

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

            <!--    <button
                  v-tippy="recipe[0] + item.buy ? `${item.buy}g` : ''"
                  class="ring-neutral/80 ring-offset-b1 size-14 overflow-hidden rounded-lg shadow-sm hover:ring-1 hover:ring-offset-2">
                  <img
                    v-if="recipe"
                    :src="`/img/item/${itemId(recipe[0])}.webp`"
                    :alt="`${recipe} image`" />
                </button> -->
          </div>
        </template>

        <div class="items-end self-end">
          <Separator class="mt-11 mb-3" />
          <div class="flex items-center px-2">
            <!--       <p
                    v-if="id"
                    class="flex grow items-end gap-3 pt-2 leading-none">
                    <span class="">Item ID:</span>
                    <span class="">{{ id }}</span>
                </p> -->

            <div class="flex grow items-center gap-3">
              <slot />

              <a
                v-tippy="'Official Wiki'"
                class="btn btn-sm btn-ghost btn-square size-7 hover:bg-neutral hover:*:text-nc "
                :href="getWikiLink(item.name)"
                target="_blank"
                alt="link to league wiki">
                <icon name="la:wikipedia-w" class="size-6 dst" />
              </a>

              <label
                v-tippy="'Add Favorite'"
                class="rating cursor-pointer rating-xs !pointer-events-auto size-fit  group" @click.stop>
                <input
                  v-model="as.favoriteItems"
                  type="checkbox"
                  :value="item"
                  name="favorite-item"
                  :aria-label="`favorite ${item.name}`"
                  class="mask mask-heart bg-[#dd5f61]"
                  :class="{ 'group-hover:opacity-40 dst ! transition-all duration-300': !as.favoriteItems.includes(item) }" />
              </label>
            </div>
            <p
              v-if="item.buy"
              class="flex items-center justify-end gap-2 self-end leading-none font-medium">
              <img
                src="/img/icons/Gold.png"
                class="h-4.5" />
              {{ item.buy.toString().replace(':>', '-> ') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>