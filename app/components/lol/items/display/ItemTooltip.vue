<script setup lang="ts">
import { itemPrice, itemRank } from '@constants'
import { itemRankColor } from '@references'
import { useScroll } from '@vueuse/core'

const { id, map } = defineProps<{
  id: number
  map?: number
}>()

const name = computed (() => itemNameById(id))
const rank = computed (() => itemRank[id])

const item = shallowRef<Item | null>(null)
const status = shallowRef<'idle' | 'loading' | 'success' | 'error'>('idle')

watchEffect(async () => {
  if (!id)
    return

  status.value = 'loading'
  try {
    const mod = await import(`#shared/records/items/${id}.ts`)
    item.value = mod.default
    status.value = 'success'
  }
  catch (e) {
    status.value = 'error'
    console.error(e)
  }
})
const filteredFrom = computed (() => {
  if (!item.value || !item.value?.buildsFrom)
    return null
  return item.value?.buildsFrom?.filter(i => map ? mapToItem[map].includes(i.id) : i)
})

const filteredInto = computed (() => {
  if (!item.value || !item.value?.buildsInto)
    return null
  return item.value?.buildsInto?.filter(i => map ? mapToItem[map].includes(i.id) : i)
})
const itemImgClass
  = 'hover:ring-nc/90   hover:ring-offset-neutral/80 size-8 rounded-md  transition-all  duration-200 *:rounded-md  *:pointer-events-none hover:ring-1 hover:ring-offset-2'

const hasThings = computed (() => {
  if ((item.value?.stats && Object.entries(item.value?.stats)?.length) || item.value?.requiredChampion || item.value?.passives || item.value?.active?.[0] || item.value?.buildsFrom || item.value?.buildsInto)
    return true
  else return false
})

const el = useTemplateRef<HTMLDivElement>('el')
</script>

<template>
  <div
    :class="cn('h-fit max-h-80 w-74 overflow-hidden transition-all duration-150')"
    class="">
    <div class="grid w-full grid-cols-[20px_1fr_50px] items-center gap-3 p-3">
      <!-- IMG -->

      <Item
        v-if="id"
        :id="id"
        loading-style="spinner"
        :alt="`${name} Image`"
        :class="cn('size-7')">
      </Item>

      <!-- NAME / LINK -->

      <h5
        class="text-3! leading-3 font-medium!"
        :style="{
          color: itemRankColor?.[rank],
        }">
        {{ name }}
      </h5>

      <!--           <a
            v-if="name"
            :title="`Official LoL Wiki - ${name}`"
            :href="getWikiLink(name)"
            class="size-5 transition-all duration-200 hover:scale-120"
            target="_blank"
            @click.stop>
            <Icon
              name="la:wikipedia-w"
              class="" />
          </a> -->

      <!-- PRICE -->
      <figure
        class="inline-flex items-end justify-end gap-1 text-2 font-medium">
        <img
          src="/img/icons/gold-coin.webp"
          alt="item price"
          class="ml-1 inline size-4 self-center opacity-80" />
        <figcaption>
          {{ itemPrice[id] }}
        </figcaption>
      </figure>
    </div>

    <div
      v-if="hasThings "
      ref="el"
      :class="cn('relative grid size-full grow auto-rows-auto overflow-x-hidden overflow-y-scroll px-3 pb-3 transition-all duration-150 *:first:-mt-2')">
      <!-- separator -->
      <Separator
        v-if="item?.stats && Object.entries(item?.stats).length"
        :size="2"
        color="neutral" />

      <!-- REQ CHAMP -->
      <div
        v-if="item?.requiredChampion">
        <i>Unique to <b>{{ item.requiredChampion }}.</b></i>
      </div>
      <!-- STATS -->

      <LazyItemStats
        v-if="item?.stats && Object.entries(item?.stats).length"
        :stats="item?.stats" />

      <!-- EFFECTS -->
      <template v-if="item?.passives?.length && item?.noEffects !== true">
        <Separator
          :size="2"
          color="neutral" />
        <LazyItemEffect
          v-for="(passive, i) in item.passives"
          :key="i"
          :data="passive"
          type="Passive" />
      </template>

      <!-- ACTIVES -->
      <template v-if="item?.active?.[0] && item?.noEffects !== true">
        <Separator
          :size="2"
          color="neutral" />
        <LazyItemEffect
          :data="item.active[0]"
          type="Active" />
      </template>

      <!-- RECIPE -->

      <template v-if="item?.buildsFrom">
        <Separator
          :size="4"
          label="RECIPE"
          color="neutral" />
        <div class="group flex items-center gap-3 p-1">
          <template
            v-for="(fromItem, i) in filteredFrom"
            :key="i">
            <LazyItem
              :id="fromItem.id"
              loading-style="spinner"
              :title="`${fromItem.name} ‑ ${fromItem.gold}g`"
              :class="itemImgClass" />

            <icon
              v-if="i !== item.buildsFrom.length - 1"
              name="dashicons:plus"
              class="size-3.5 opacity-80" />
          </template>

          <div
            v-if="item?.shop?.prices?.combined"
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

      <template v-if="item && item?.buildsInto">
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
          <LazyItem
            v-for="(buildItem, i) in filteredInto"
            :id="buildItem.id"
            :key="i"
            loading-style="spinner"
            :title="`${buildItem.name} ‑ ${buildItem.gold}g`"
            :class="itemImgClass" />
        </div>
      </template>
    </div>
  </div>
</template>
