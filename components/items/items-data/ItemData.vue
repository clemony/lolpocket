<script setup lang="ts">
const props = defineProps<{
  item?: Item
  class?: HTMLAttributes['class']
}>()

const ds = useDataStore()
const as = useAccountStore()
const item = computed (() => props.item)

const stats = computed (() => formatItemStats(item.value.stats))
const effects = computed (() => item.value.effects ? item.value.effects : null)
const recipe = computed (() => item.value.recipe ? item.value.recipe : null)
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

const hasNicknames = computed(() => {
  if (!item.value.nickname)
    return false
  return Array.isArray(item.value.nickname) ? item.value.nickname.length > 0 : item.value.nickname.length > 0
})

const nicknames = computed (() => Array.isArray(item.value.nickname) ? item.value.nickname : item.value.nickname ? [item.value.nickname] : [])
console.log('💠 - nicknames:', nicknames)
</script>

<template>
  <div class="**:text-nc max-h-151 overflow-hidden flex flex-col">
    <div class="flex gap-3 px-2.5 pt-1 ">
      <div class="!size-16 rounded-lgaspect-square shrink-0 shadow-sm drop-shadow-sm">
        <Image
          v-if="item"
          :key="item.name"
          :image="`/img/item/${item.id}.webp`"
          :alt="`${item.name} Image`"
          class="!size-full rounded-lg" />
      </div>
      <div class="flex flex-col w-full">
        {{ item.name || '' }}
        <template v-if="hasNicknames">
          <p class="text-1 ml-0.5 italic">
            a.k.a.
            <span v-for="(name, index) in nicknames" :key="index">{{ name }}</span>
          </p>
        </template>
      </div>
    </div>

    <div class=" !ml-0 pr-3 py-3 pl-3  ml-4  relative overflow-hidden   flex flex-col ">
      <div class="w-full flex items-center  gap-3">
        <div v-if="item.buy" class="">
          {{ `${item.buy.toString().replace(':>', '-> ')} G` }}
        </div>
        <Grow />

        <MotionDialog class="px-0">
          <template #trigger>
            <button v-tippy="'Pop Out'" class="btn btn-sm btn-ghost btn-square size-7 hover:bg-neutral hover:*:text-nc ">
              <icon name="radix-icons:open-in-new-window" class="size-5 dst" />
            </button>
          </template>
          <LazyItemInfoPane />
        </MotionDialog>
        <label
          v-tippy="'Add Favorite'"
          class="rating cursor-pointer !pointer-events-auto rating-xs  group" @click.stop>
          <input
            v-model="as.favoriteItems"
            type="checkbox"
            :value="item"
            name="favorite-item"
            :aria-label="`favorite ${item.name}`"
            class="mask mask-heart bg-nc"
            :class="{ 'group-hover:opacity-40 dst  transition-all duration-300': !as.favoriteItems.includes(item) }" />
        </label>
        <a
          v-tippy="'Official Wiki'"
          class="btn btn-sm btn-ghost btn-square size-7 hover:bg-neutral hover:*:text-nc "
          :href="getWikiLink(item.name)"
          target="_blank"
          alt="link to league wiki">
          <icon name="la:wikipedia-w" class="size-6 dst" />
        </a>
      </div>
      <template v-if="stats">
        <div class="divider divider-end  before:h-px my-4 before:bg-nc">
          STATS
        </div>

        <ItemStats :stats="stats" />

        <template v-if="effects && effects.pass">
          <div class="divider divider-end before:h-px my-4 before:bg-nc">
            PASSIVES
          </div>
        </template>

        <template v-if="effects && effects.act && !effects.pass">
          <div class="divider divider-end before:h-px my-4 before:bg-nc">
            ACTIVES
          </div>
        </template>
      </template>

      <div class="overflow-y-auto relative">
        <div v-if="effects && effects.pass">
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
          Limited to one {{ item.itemlimit }} item.
        </div>

        <div v-if="effects && effects.act && effects.pass">
          <div class="divider divider-end before:h-px my-4 before:bg-nc">
            ACTIVES
          </div>

          <p v-if="typeof effects.act === 'string'"></p>
          <ItemEffect
            v-if="effects.act"
            :data="effects.act" />
        </div>

        <template v-if="recipe && recipeArray">
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
        </template>

        <div class="items-end self-end">
          <div class="flex items-center px-2">
          <!--       <p
                    v-if="id"
                    class="flex grow items-end gap-3 pt-2 leading-none">
                    <span class="">Item ID:</span>
                    <span class="">{{ id }}</span>
                </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>