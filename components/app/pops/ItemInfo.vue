<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  item?: Item
  class?: HTMLAttributes['class']

}>()
const ds = useDataStore()
const as = useAccountStore()

const ts = useTempStore()

const item = computed (() => {
  if (props.item) {
    return props.item
  }
  else if (ts.selectedItem) {
    return ts.selectedItem
  }
  else {
    return ts.pocketItemSelect
  }
})
/* watch(
  () => item.value,
  (newVal) => {
    item.value = newVal
    console.log('💠 - newVal:', newVal)
  },
) */

const stats = ref(formatItemStats(item.value.stats))
const effects = ref(item.value.effects)

const recipe = ref(item.value.recipe)
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

  return a.buy
}

function handleTooltip(item) {
  const a = itemBuy(item)
  if (itemBuy) {
    return `${item} ・ ${a}g`
  }
  else if (!a) {
    return item
  }
}
</script>

<template>
  <div :class="cn('flex w-full gap-6 pb-5 ', props.class)">
    <img
      :key="item.name"
      :src="`/img/item/${item.id}.webp`"
      :alt="`${item.name} Image`"
      class="border-b3/90 shadow-warm pointer-events-none size-20 rounded-lg border"
    />

    <div class="flex flex-col w-full">
      <div class="flex items-center w-full">
        <h1 class="flex flex-wrap items-start pt-1 leading-none tracking-tighter drop-shadow-sm grow">
          {{ item.name }}
        </h1>

        <LittleTip
          content="Add Favorite"
          class="rating size-fit mr-2 group"
        >
          <input
            v-model="as.favoriteItems"
            type="checkbox"
            :value="item"
            name="favorite-item"
            :aria-label="`favorite ${item.name}`"
            class="mask mask-heart bg-[#dd5f61]"
            :class="{ 'group-hover:opacity-40 transition-all duration-300': !as.favoriteItems.includes(item) }"
          />
        </LittleTip>
      </div>

      <template v-if="item.nickname">
        <p class="text-1 ml-0.5 italic">
          a.k.a.

          {{ item.nickname.toString().replace(/\[(.*)\]/g, '$1') }}
        </p>
      </template>

      <template v-if="item.type">
        <p class="group ml-0.5 font-semibold opacity-50">
          {{ item.type }}
          <span class="group-last:hidden">,&nbsp;</span>
        </p>
      </template>
    </div>
  </div>

  <template v-if="stats">
    <Separator
      class="mt-4 mb-10"
      label="STATS"
    />
    <div class="stat-grid grid grid-cols-[1.5fr_2fr] gap-2 *:flex">
      <template v-for="stat in stats" :key="stat.key">
        <p class="col-start-1 items-end pt-[2px] font-medium tracking-tight">
          {{ stat.key }}
        </p>
        <p class="col-start-2 items-center">
          {{ stat.value }}
        </p>
      </template>
    </div>
  </template>

  <div v-if="effects && effects.pass">
    <Separator
      label="PASSIVES"
      class="mt-11 mb-9"
    />
    <p v-if="typeof effects.pass === 'string'"></p>
    <ItemEffect
      v-if="effects.pass"
      :data="effects.pass"
    />
    <ItemEffect
      v-if="effects.pass2"
      :data="effects.pass2"
      class="mt-5"
    />
    <ItemEffect
      v-if="effects.pass3"
      :data="effects.pass3"
    />
  </div>

  <div
    v-if="item.itemlimit"
    class="mt-10 items-end self-end"
  >
    <!-- <Separator class="mt-11 mb-3" /> -->

    Limited to one {{ item.itemlimit }} item.
  </div>

  <div v-if="effects && effects.act">
    <Separator
      v-if="effects && effects.act"
      label="ACTIVES"
      class="my-11"
    />

    <p v-if="typeof effects.act === 'string'"></p>
    <ItemEffect
      v-if="effects.act"
      :data="effects.act"
    />
  </div>

  <template v-if="recipe && recipeArray">
    <Separator
      label="RECIPE"
      class="my-11"
    />

    <div class="group flex items-center justify-center gap-4">
      <template v-if="recipeArray">
        <template
          v-for="(component, i) in item.recipe"
          :key="i"
        >
          <LittleTip :content="handleTooltip(component)">
            <button
              class="ring-neutral/80 ring-offset-b1 size-14 overflow-hidden rounded-lg shadow-sm hover:ring-1 hover:ring-offset-2"
            >
              <LoadImg
                v-if="itemId(component)"
                :url="`/img/component/${itemId(component)}.webp`"
                :alt="`${component}image`"
              />
            </button>
          </LittleTip>
          <icon
            name="teenyicons:add-outline"
            class="stroke-[1.5] last:hidden"
          />
        </template>
      </template>
      <LittleTip
        v-else
        :content="recipe[0] + item.buy ? `${item.buy}g` : ''"
      >
        <button
          class="ring-neutral/80 ring-offset-b1 size-14 overflow-hidden rounded-lg shadow-sm hover:ring-1 hover:ring-offset-2"
        >
          <LoadImg
            v-if="recipe"
            :url="`/img/item/${itemId(recipe[0])}.webp`"
            :alt="`${recipe}image`"
          />
        </button>
      </LittleTip>
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
        <LittleTip content="Official Wiki">
          <a
            class="hover:ring-neutral/70 hover:ring-offset-b1 flex items-center gap-1 rounded-sm hover:ring-1 hover:ring-offset-2"
            :href="getWikiLink(item.name)"
            target="_blank"
            alt="link to league wiki"
          >
            <img
              src="/img/logos/wikilogo.webp"
              class="size-6.5 rounded-sm"
            />
          </a>
        </LittleTip>
      </div>
      <p
        v-if="item.buy"
        class="flex items-center justify-end gap-2 self-end leading-none font-medium"
      >
        <img
          src="/img/icons/Gold.png"
          class="h-4.5"
        />
        {{ item.buy.toString().replace(':>', '-> ') }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
