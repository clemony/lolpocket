<script setup lang="ts">
const { id, base } = defineProps<{
  id: ItemId
  base?: boolean
}>()

const item = ref(null)
async function fetchItem(id) {
  const data = await $fetch<Item>(`/api/items/${id}.json`)
  item.value = data
}

watchEffect(() => {
  if (id)
    fetchItem(id)
})
/* const itemPrice = computed (() => {
  if (!item.cost)
  return

  return typeof item.cost === 'number' ? `${ item.cost} G` : typeof  item.cost === 'string' ? `<span>${ item.cost.toString().replace('=>', '')}</span>` : null
}) */
</script>

<template>
  <div v-if="item" class="px-3 py-2  max-h-151 overflow-hidden flex flex-col **:select-text" :class="{ '**:text-bc': base, '**:text-nc': !base }">
    <div class="flex gap-4 ">
      <div class="!size-14 rounded-lg aspect-square shrink-0 shadow-sm drop-shadow-sm ">
        <Img
          v-if="item"
          :key="item.name"
          :img="`/img/item/${item.id}.webp`"
          :alt="`${item.name} Image`"
          class="!size-full rounded-lg" />
      </div>

      <div class="flex flex-col  text-4 w-full">
        <div class=" flex items-center  gap-1">
          <a
            v-tippy="'Official Wiki'"
            :href="getWikiLink(item.name)"
            target="_blank"
            alt="link to league wiki"
            class=" flex items-center  w-full gap-1">
            {{ item.name || '' }}
            <icon name="link-lg" class="size-4 dst" />
            <Grow />
          </a>
        </div>
        <div class="flex gap-1 ">
          <ItemTier :ranks="item.rank" />
          <Grow />
          <div v-if="item && item.shop?.prices?.total" class="flex items-end gap-0.5 text-2" :class="{ '*:!text-nc ': !base, '*:!text-bc ': base }">
            <icon v-if="typeof item.shop.prices.total != 'number'" name="lets-icons:up" class="shrink-0 size-4.25 " :class="{ '!text-nc ': !base, 'text-bc': base }" />
            <!--      <span v-html="itemPrice"></span> -->
            {{ `${item.shop.prices.total} G` }}
          </div>
        </div>
      </div>
    </div>
    <div class="  pt-3    relative overflow-y-auto    flex flex-col ">
      <div v-if="item.simpleDescription" class="my-2">
        {{ item.simpleDescription }}
      </div>
      <div v-if="item.stats && Object.entries(item.stats).length" class="pb-1">
        <ItemStats :stats="item.stats" :base="base" />
      </div>

      <Separator v-if="item.passives.length || item.active.name" class=" mt-3 mb-2" :class="{ 'bg-nc/10 ': !base, 'bg-b3/40': base }" />

      <div v-if="item.passives.length && item.noEffects != true">
        <ItemEffect
          v-for="(passive, i) in item.passives" :key="i"
          :data="passive" type="Passive" />
      </div>

      <div v-if="item.active.name && item.noEffects != true">
        <LazyItemEffect
          :data="item.active" type="Active" />
      </div>

      <LazyItemFrom v-if="item.buildsFrom.length" :from="item.buildsFrom" :base="base" />
      <LazyItemTo v-if="item.buildsInto.length" :to="item.buildsInto" :base="base" />
      <!--      <div v-if="item.itemlimit || item.req">
          <div class="divider divider-end before:h-px mb-2 mt-6 before:bg-nc/30">
            LIMITS / REQS
          </div>

          <p v-if="item.itemlimit" class="w-full flex flex-wrap text-wrap leading-normal">
            Limited to one {{ item.itemlimit }} item.
          </p>
          <ItemRequirements :item="item" />
        </div> -->

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
</template>

<style scoped>
</style>