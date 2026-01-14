<script setup lang="ts">
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
    console.log('🥸 - mod:', mod)
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
  = 'hover:ring-nc/90   hover:ring-offset-neutral/80 size-6.5 rounded-md  transition-all  duration-200 *:rounded-md  *:pointer-events-none hover:ring-1 hover:ring-offset-2'

const has = computed (() => {
  const a = []
  if (item.value?.stats && Object.entries(item.value?.stats)?.length)
    a.push('stats')
  if (item.value?.requiredChampion)
    a.push('reqChamp')
  if (item.value?.passives)
    a.push('passives')
  if (item.value?.active?.[0])
    a.push('actives')
  if (item.value?.buildsFrom)
    a.push('buildsFrom')
  if (item.value?.buildsInto)
    a.push('buildsInto')
  return a
})

const el = useTemplateRef<HTMLDivElement>('el')

const { height } = useElementBounding(el)
</script>

<template>
  <div
    :class="cn('mt-12 max-h-80 min-h-12 w-74 cursor-default overflow-x-hidden')"
    class="">
    <div class="absolute top-0 z-1 grid h-12 w-full grid-cols-[20px_1fr_50px] items-center gap-3 p-3">
      <!-- IMG -->

      <Item
        v-if="id"
        :id="id"
        :tip="null"
        loading-type="spinner"
        :alt="`${name} Image`"
        :class="cn('size-7')">
      </Item>

      <!-- NAME / LINK -->

      <h5
        class="text-3! leading-4 font-medium! text-wrap"
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
      <!-- separator -->
      <Separator

        class="absolute bottom-0 opacity-80"
        color="neutral" />
    </div>

    <div
      ref="el"
      :class="cn('relative flex grow flex-col overflow-x-hidden overflow-y-scroll px-3 pt-2 pb-3', { 'mb-12': height > 272 })">
      <template v-if="has?.length">
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
            v-if="has[0] !== 'passives'"
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
            v-if="has[0] !== 'actives'"
            :size="2"
            color="neutral" />
          <LazyItemEffect
            :data="item.active[0]"
            type="Active" />
        </template>

        <!-- RECIPE -->

        <template v-if="item?.buildsFrom">
          <Separator
            class="my-3.5 h-px"
            label="RECIPE"

            color="neutral" />
          <div class="group flex items-center gap-3 p-1">
            <template
              v-for="(fromItem, i) in filteredFrom"
              :key="i">
              <LazyItem
                :id="fromItem.id"
                loading-type="spinner"
                :tip="null"
                :title="`${fromItem.name} ‑ ${fromItem.gold}g`"
                :class="itemImgClass" />

              <icon
                v-if="i !== item.buildsFrom.length - 1"
                name="dashicons:plus"
                class="size-3.5 opacity-80" />
            </template>

            <div
              v-if="item?.gold?.total"
              class="flex items-center">
              <icon
                name="dashicons:plus"
                class="size-3.5 opacity-80" />

              <img
                src="/img/icons/gold-coin.webp"
                alt="coin"
                class="mr-1 ml-3 size-4.25 opacity-80" />
              {{ item.gold?.total }}
            </div>
          </div>
        </template>

        <!-- component OF -->

        <template v-if="item && item?.buildsInto">
          <Separator
            class="my-3.5 h-px"
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
              :tip="null"
              loading-type="spinner"
              :title="`${buildItem.name} ‑ ${buildItem.gold}g`"
              :class="itemImgClass" />
          </div>
        </template>
      </template>
      <span
        v-else
        v-html="item?.description" />
    </div>
  </div>
</template>
