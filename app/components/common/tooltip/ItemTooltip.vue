<script setup lang="ts">
const { id, map } = defineProps<{
  id: number
  map?: number
}>()

const name = computed(() => itemNameById(id))
const rank = computed(
  () => itemRank[id] as keyof typeof itemRankColor | undefined
)

const idRef = computed(() => id ?? 0)

const { data: item, status } = useFetch<Item>(
  () => `/cdn/items/${idRef.value}.json`,
  {
    server: false,
    lazy: true,
    immediate: false,
    key: () => `item-${idRef.value}`,
    watch: [idRef],
  }
)
const filteredFrom = computed(() => {
  if (!item.value || !item.value?.buildsFrom) return null
  return item.value?.buildsFrom?.filter((i) =>
    map ? mapToItem[map]?.includes(i.id) : i
  )
})

const filteredInto = computed(() => {
  if (!item.value || !item.value?.buildsInto) return null
  return item.value?.buildsInto?.filter((i) =>
    map ? mapToItem[map]?.includes(i.id) : i
  )
})

const has = computed(() => {
  const a = []
  if (item.value?.requiredChampion) a.push("reqChamp")
  if (item.value?.description) a.push("description")
  if (item.value?.passives) a.push("passives")
  if (item.value?.active?.[0]) a.push("actives")
  if (item.value?.buildsFrom) a.push("buildsFrom")
  if (item.value?.buildsInto) a.push("buildsInto")
  return a
})
</script>

<template>
  <div class="grid h-max w-full">
    <template v-if="status === 'success'">
      <div
        class="flex max-h-88 w-full flex-col gap-4 overflow-hidden pt-5 pb-1.5 pl-3">
        <div class="flex shrink-0 items-center gap-4 overflow-hidden">
          <!-- IMG -->

          <Img
            v-if="id"
            class="size-12 rounded-lg"
            :src="`/img/items/${id}.webp`"
            :tip="false"
            loading-type="spinner"
            :alt="`${name} Image`" />
          <!-- NAME / LINK -->

          <div class="grow pr-12">
            <h4 class="mt-2 text-lg! leading-5 font-semibold! text-nowrap">
              {{ name }}
            </h4>

            <span class="inline-flex w-full shrink-0 justify-between text-sm">
              <!-- RANK -->
              <span
                class="text-2xs font-medium text-n5 italic opacity-90"
                :style="{
                  color: rank ? itemRankColor[rank] : undefined,
                }">
                {{ itemRank[id] }}
              </span>
              <!-- PRICE -->
              <figure class="inline-flex gap-1.5 text-xs font-medium">
                <Icon
                  class="inline size-3.5 self-center opacity-80 **:text-g!"
                  name="lol:gold"
                  alt="item price" />
                <figcaption>
                  {{ itemPrice[id] }}
                </figcaption>
              </figure>
            </span>
          </div>
        </div>

        <div class="flex size-full shrink flex-col">
          <!-- separator -->
          <Separator
            v-if="item?.stats && Object.entries(item?.stats).length"
            class="mb-2 w-full"
            color="neutral" />
          <!-- STATS -->

          <LazyItemStats
            v-if="item?.stats && Object.entries(item?.stats).length"
            :stats="item?.stats" />
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
      <div v-if="has?.length" class="max-h-64 w-full overflow-y-auto text-xs">
        <div
          class="relative col-start-2 flex w-full flex-col overflow-x-hidden overflow-y-scroll p-3">
          <span
            v-if="!item?.stats"
            class="whitespace-pre-line"
            v-html="item?.description" />
          <!-- REQ CHAMP -->
          <div v-if="item?.requiredChampion">
            <i>
              Unique to
              <b>{{ item.requiredChampion }}.</b>
            </i>
          </div>

          <!-- EFFECTS -->
          <template v-if="item?.passives?.length && !item?.noEffects">
            <Separator class="my-2 first:hidden" color="neutral" />
            <LazyItemEffect
              v-for="(passive, i) in item.passives"
              :key="i"
              :class="{ 'mt-2': i !== 0 }"
              :data="passive"
              type="Passive" />
          </template>

          <!-- ACTIVES -->
          <template v-if="item?.active?.[0] && item?.noEffects !== true">
            <Separator class="my-2 first:hidden" color="neutral" />
            <LazyItemEffect :data="item.active[0]" type="Active" />
          </template>

          <!-- RECIPE -->

          <template v-if="item?.buildsFrom">
            <Separator class="my-3.5 h-px" label="RECIPE" color="neutral" />
            <div
              :class="
                cn('flex gap-1', {
                  'flex-col gap-3': item.buildsFrom.length > 2,
                })
              ">
              <div class="flex items-center gap-1">
                <template v-for="(fromItem, i) in filteredFrom" :key="i">
                  <Img
                    :src="`/img/items/${fromItem.id}.webp`"
                    :alt="fromItem.name"
                    loading-type="spinner"
                    :title="`${fromItem.name} ‑ ${fromItem.gold}g`"
                    class="size-8 rounded-md hover:ring-1 hover:ring-nc/60 hover:ring-offset-2 hover:ring-offset-neutral/80" />

                  <Icon
                    v-if="i !== item.buildsFrom.length - 1"
                    class="size-3.5"
                    name="add" />
                </template>
              </div>
              <div v-if="item?.gold?.total" class="flex items-center gap-1">
                <Icon class="size-3.5" name="add" />
                <Icon class="size-3.5 text-g/90" name="lol:gold" alt="coin" />
                {{ item.gold?.base }}
              </div>
            </div>
          </template>

          <!-- component OF -->

          <template v-if="item && item?.buildsInto">
            <Separator
              class="mt-3.5 mb-3.75 h-px"
              label="BUILDS INTO"
              color="n5" />

            <div
              :class="
                cn('group grid w-full grid-cols-7 place-items-center gap-2', {
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
                class="size-full rounded-md hover:ring-1 hover:ring-nc/60 hover:ring-offset-2 hover:ring-offset-neutral/80" />
            </div>
          </template>
        </div>
      </div>
    </template>
    <div v-else-if="status === 'pending'"></div>

    <!-- i-streamline-ultimate-work-from-home-user-pet-cat
     i-arcticons-emoji-cat -->
    <UEmpty
      v-else
      variant="naked"
      icon="i-streamline-freehand-work-from-home-user-pet-cat"
      size="xs"
      title="Item not found.">
      <template #description>
        It seems <Ulink class="inline" unerline> clem </Ulink> may have moved
        this from it's previous location. Try refreshing to see if we've found
        it.
      </template>
    </UEmpty>
  </div>
</template>
