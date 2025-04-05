<script setup lang="ts">
const props = defineProps<{
  item?: Item
  class?: HTMLAttributes['class']
  isOpen?: boolean
}>()

const ds = useDataStore()
const as = useAccountStore()
const is = useItemStore()
const item = ref(is.selectedItem || getRandom(ds.items))
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
  const a = ds.items.find(item => item.name == itemName)
  if (a) {
    return a.id
  }
}

function itemBuy(itemName) {
  const a = ds.items.find(item => item.name == itemName)

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
const isOpen = ref(false)
watchEffect(() => {
  if (isOpen.value) {
    effects.value = item.value.effects ? item.value.effects : null
    stats.value = formatItemStats(item.value.stats)
    recipe.value = item.value.recipe ? item.value.recipe : null
  }
})
</script>

<template>
  <Collapsible v-if="is.selectedItem" v-model:open="isOpen">
    <SidebarCollapsibleTrigger class="btn-lg pl-5.5 data-[state=open]:bg-b2/70 data-[state=open]:border-b3/50 data-[state=open]:[&_img]:grayscale-0">
      <RightbarIconWrapper :active="is.selectedItem != null">
        <img
          v-if="is.selectedItem"
          :key="item.name"
          :src="`/img/item/${item.id}.webp`"
          :alt="`${item.name} Image`"
          class="size-full rounded-full" />
      </RightbarIconWrapper>
      {{ item.name || '' }}
    </SidebarCollapsibleTrigger>

    <SidebarCollapsibleContent class="before:hidden !ml-0 pr-3 py-3">
      <div class="w-full flex items-center  ">
        <div class="flex flex-col w-full">
          <template v-if="item.nickname">
            <p class="text-1 ml-0.5 italic">
              a.k.a.

              {{ item.nickname.toString().replace(/\[(.*)\]/g, '$1').replace(/,/g, ', ') }}
            </p>
          </template>

          <p class="group ml-0.5  opacity-50">
            {{ item.type }}
            <span class="group-last:hidden">,&nbsp;</span>
          </p>
        </div>

        <div class="flex grow items-center gap-3">
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
              class="mask mask-heart "
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
      </div>
      <template v-if="stats">
        <div class="divider divider-end  before:h-px my-4">
          STATS
        </div>

        <ItemStats :stats="stats" />
      </template>

      <div v-if="effects && effects.pass">
        <div class="divider divider-end before:h-px my-4">
          PASSIVES
        </div>
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

      <div v-if="effects && effects.act">
        <div class="divider divider-end before:h-px my-4">
          ACTIVES
        </div>

        <p v-if="typeof effects.act === 'string'"></p>
        <ItemEffect
          v-if="effects.act"
          :data="effects.act" />
      </div>

      <template v-if="recipe && recipeArray">
        <div v-if="item.buy" class="divider divider-end before:h-px my-4">
          {{ `${item.buy.toString().replace(':>', '-> ')} G` }}
        </div>

        <div class="group flex items-center justify-center gap-4">
          <template v-if="recipeArray">
            <template
              v-for="(component, i) in item.recipe"
              :key="i">
              <button
                v-tippy="handleTooltip(component)"
                class="ring-neutral/80 ring-offset-b1 size-10 overflow-hidden rounded-full shadow-sm hover:ring-1 hover:ring-offset-2">
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
    </SidebarCollapsibleContent>
  </Collapsible>
</template>

<style scoped>
</style>