<script setup lang="ts">
import { LinkTippy } from '#components'
import { mapToItem } from '~~/shared'

const { id, map } = defineProps<{
  id: number
  map?: number
}>()
console.log('🥸 - map?:', map)

const item = ref<Item>(null)

watchEffect(async () => {
  if (!id)
    return

  try {
    const module = await import(`#shared/records/items/${id}.ts`)
    item.value = module.default || null
  }
  catch (err) {
    console.error(`Failed to load champion for ${id}`, err)
    item.value = null
  }
})

const filteredFrom = computed (() =>
  item.value.buildsFrom.filter(i => map ? mapToItem[map].includes(i.id) : i)
)

const filteredInto = computed (() =>
  item.value.buildsInto.filter(i => map ? mapToItem[map].includes(i.id) : i)
)
const itemImgClass
  = 'hover:ring-nc/90   hover:ring-offset-neutral/80 size-8 rounded-md  transition-all  duration-200 *:rounded-md  *:pointer-events-none hover:ring-1 hover:ring-offset-2'
</script>

<template>
  <div
    v-if="item"
    class="
      flex max-h-[304px] w-[258px] flex-col justify-self-center
      overflow-hidden pt-4 pb-3 **:select-text
    ">
    <div class="flex h-fit w-full gap-4 px-4">
      <!-- IMG -->

      <Item
        v-if="item"
        :id="item.id"
        :alt="`${item.name} Image`"
        class="size-13" />

      <div class="flex w-full flex-col text-4">
        <div class="flex w-full items-center justify-between gap-1">
          <!-- NAME / LINK -->

          <h5 class="leading-4 font-semibold">
            {{ item.name }}
          </h5>

          <a
            v-if="item.name"
            v-tippy="{
              content: h(LinkTippy, {
                content: `Official LoL Wiki - ${item.name}`,
              }),
              theme: 'neutral',
              placement: 'top-end',
              offset: [12, 8],
            }"
            :href="getWikiLink(item.name)"
            target="_blank">
            <img
              src="/img/logos/wiki.webp"
              alt="wiki"
              class="size-5 shrink-0 rounded-sm" />
          </a>
        </div>

        <!-- TIER -->
        <div class="z-0 flex gap-1">
          <template v-if="item.rank">
            {{ item.rank }}
          </template>

          <Grow />

          <!-- PRICE -->
          <figure
            v-if="item && item.shop?.prices?.total"
            class="flex items-end gap-1 text-3 font-medium">
            <img
              src="/img/icons/gold-coin.webp"
              alt="coin"
              class="ml-1 size-4 self-center opacity-80" />
            <figcaption>
              {{ item.shop.prices.total }}
            </figcaption>
          </figure>
        </div>
      </div>

      <!-- REQ CHAMP -->
      <div
        v-if="item.requiredChampion"
        class="my-2 -mt-2">
        <i>Unique to <b>{{ item.requiredChampion }}.</b></i>
      </div>
    </div>

    <!-- separator -->
    <Separator
      v-if="item.stats && Object.entries(item.stats).length"
      :size="3"
      class="px-4"
      color="neutral" />
    <div class="relative grid auto-rows-auto overflow-y-auto px-4 pb-2">
      <!-- STATS -->
      <div
        v-if="item.stats && Object.entries(item.stats).length"
        class="pt-2 pb-1">
        <ItemStats :stats="item.stats" />
      </div>

      <!-- EFFECTS -->
      <template v-if="item.passives?.length && item.noEffects !== true">
        <Separator
          :size="2"
          color="neutral" />
        <ItemEffect
          v-for="(passive, i) in item.passives"
          :key="i"
          :data="passive"
          type="Passive" />
      </template>

      <!-- ACTIVES -->
      <template v-if="item.active?.[0] && item.noEffects !== true">
        <Separator
          :size="2"
          color="neutral" />
        <ItemEffect
          :data="item.active[0]"
          type="Active" />
      </template>

      <!-- RECIPE -->

      <template v-if="item.buildsFrom?.length">
        <Separator
          :size="4"
          label="RECIPE"
          color="neutral" />
        <div class="group flex items-center gap-3 p-1">
          <template
            v-for="(fromItem, i) in filteredFrom"
            :key="i">
            <Item
              :id="fromItem.id"
              :title="`${fromItem.name} ‑ ${fromItem.gold}g`"
              :class="itemImgClass" />

            <icon
              v-if="i !== item.buildsFrom.length - 1"
              name="dashicons:plus"
              class="size-3.5 opacity-80" />
          </template>

          <div
            v-if="item.shop?.prices?.combined"
            class="flex items-center">
            <icon
              name="dashicons:plus"
              class="size-3.5 opacity-80" />

            <img
              src="/img/icons/gold-coin.webp"
              alt="coin"
              class="mr-1 ml-3 size-4.25 opacity-80" />
            {{ item.shop?.prices?.combined }}
          </div>
        </div>
      </template>

      <!-- component OF -->

      <template v-if="item.buildsInto?.length">
        <Separator
          :size="4"
          label="BUILDS INTO"
          color="neutral" />

        <div
          :class="
            cn('group flex flex-wrap items-center gap-3 px-1', {
              'justify-start': item.buildsInto.length > 7,
            })
          ">
          <Item
            v-for="(buildItem, i) in filteredInto"
            :id="buildItem.id"
            :key="i"
            :title="`${buildItem.name} ‑ ${buildItem.gold}g`"
            :class="itemImgClass" />
        </div>
      </template>
    </div>
  </div>
</template>
