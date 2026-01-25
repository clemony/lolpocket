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
    const mod = await import(`records/items/${id}.ts`)
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
  = 'hover:ring-nc/90   hover:ring-offset-neutral/80 size-6 rounded-md  transition-all  duration-200 *:rounded-md  *:pointer-events-none hover:ring-1 hover:ring-offset-2'

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
    class="grid h-max w-full grid-cols-[0.8fr_1fr] gap-2">
    <div class="col-start-1 flex max-h-74 w-full flex-col gap-1 overflow-x-hidden pt-5 pb-2 pl-3">
      <div class="flex max-h-full shrink-0 flex-col items-center justify-center overflow-hidden">
        <!-- IMG -->

        <Img
          v-if="id"
          :src="`/img/items/${id}.webp`"
          :tip="false"
          loading-type="spinner"
          :alt="`${name} Image`"
          class="size-14" />
        <!-- NAME / LINK -->

        <h5
          class="mt-2 inline-flex justify-center self-center text-center! text-md! leading-5 font-semibold! text-wrap">
          {{ name }}
        </h5>

        <!-- RANK -->
        <span
          class="text-xxs font-normal text-nc italic opacity-90"
          :style="{
            color: itemRankColor?.[rank],
          }">
          {{ itemRank[id] }}
        </span>
      </div>
      <div class="flex size-full shrink flex-col">
        <!-- separator -->
        <Separator
          v-if="item?.stats && Object.entries(item?.stats).length"
          color="neutral"
          class="mb-2 w-full" />
        <!-- STATS -->

        <LazyItemStats
          v-if="item?.stats && Object.entries(item?.stats).length"
          :stats="item?.stats" />
      </div>

      <div class="flex w-full flex-col">
        <!-- separator -->
        <Separator
          color="neutral"
          class="my-1 w-full" />
        <!-- PRICE -->
        <span
          class="inline-flex w-full shrink-0 justify-between text-sm">
          Buy
          <figure class="inline-flex gap-1.5 text-xs font-medium">
            <Icon
              name="lol:gold"
              alt="item price"
              class="inline size-3.5 self-center opacity-80 **:text-g!" />
            <figcaption>
              {{ itemPrice[id] }}
            </figcaption>
          </figure>
        </span>
      </div>
      <!--
        <a
          v-if="name"
          :title="`Official LoL Wiki - ${name}`"
          :href="wikiLink(name)"
          class="size-5 transition-all duration-200 hover:scale-120"
          target="_blank"
          @click.stop>
          <Icon
            name="la:wikipedia-w"
            class="" />
        </a> -->
    </div>
    <div class="max-h-74 w-full overflow-y-auto text-xs">
      <div class="relative col-start-2 flex w-full flex-col overflow-x-hidden overflow-y-scroll p-3">
        <span
          v-if="!has.length"
          class="whitespace-pre-line"
          v-html="item?.description" />
        <!-- REQ CHAMP -->
        <div
          v-if="item?.requiredChampion">
          <i>Unique to <b>{{ item.requiredChampion }}.</b></i>
        </div>

        <!-- EFFECTS -->
        <template v-if="item?.passives?.length && !item?.noEffects">
          <Separator
            class="my-2 first:hidden"
            color="neutral" />
          <LazyItemEffect
            v-for="(passive, i) in item.passives"
            :key="i"
            :class="{ 'mt-2': i !== 0 }"
            :data="passive"
            type="Passive" />
        </template>

        <!-- ACTIVES -->
        <template v-if="item?.active?.[0] && item?.noEffects !== true">
          <Separator
            class="my-2 first:hidden"
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
              <Img
                :src="`/img/items/${fromItem.id}.webp`"
                :alt="fromItem.name"
                loading-type="spinner"
                :title="`${fromItem.name} ‑ ${fromItem.gold}g`"
                :class="itemImgClass" />

              <icon
                v-if="i !== item.buildsFrom.length - 1"
                name="dasIcons:plus"
                class="size-3.5 opacity-80" />
            </template>

            <div
              v-if="item?.gold?.total"
              class="flex items-center">
              <icon
                name="dasIcons:plus"
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
            class="mt-3.5 mb-3.75 h-px"
            label="BUILDS INTO"
            color="neutral" />

          <div
            :class="
              cn('group flex flex-wrap items-center gap-3', {
                'justify-start': item.buildsInto.length > 7,
              })
            ">
            <Img
              v-for="(buildItem, i) in filteredInto"
              :id="buildItem.id"
              :key="i"
              :src="`/img/items/${buildItem.id}.webp`"
              :alt="buildItem.name"
              loading-type="spinner"
              :title="`${buildItem.name} ‑ ${buildItem.gold}g`"
              :class="itemImgClass" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
