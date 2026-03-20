<script setup lang="ts">
import { itemPrice } from "#shared/constants/items/itemPrice"
import { itemRank } from "#shared/constants/items/itemRank"
import { itemRankColor } from "#shared/constants/items/itemRankColor"
import { mapToItem } from "#shared/constants/items/mapToItem"
import { mapIndex } from "~~/shared/constants/misc/map-index"

const { id, map, layout } = defineProps<{
  id: number
  map?: number
  layout?: string
}>()

const emit = defineEmits(["update:selected"])
const idRef = ref<number>(id)
const name = computed(() => itemNameById(idRef.value))
const rank = computed(
  () => itemRank[idRef.value] as keyof typeof itemRankColor | undefined
)

const {
  data: item,
  status,
  execute
} = useFetch<Item>(() => `/cdn/items/${idRef.value}.json`, {
  server: false,
  lazy: true,
  immediate: false,
  key: () => `item-${idRef.value}`,
  watch: [idRef]
})
watch(
  () => item.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)
watch(
  () => status.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
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

function updateItem(newId: number) {
  idRef.value = newId
  execute()
}

onMounted(() => {
  idRef.value = id
  execute()
})
</script>

<template>
  <div class="grid h-max w-full pt-1">
    <template v-if="status === 'success'">
      <div class="grid h-max w-full grid-cols-[1fr_1.5fr] gap-4">
        <div class="flex w-full flex-col">
          <UCard
            variant="outline"
            :ui="{
              root: 'w-full divide-y divide-p3 bg-p0/50',
              header:
                'flex w-full shrink-0 flex-col items-center justify-center gap-3 overflow-hidden py-3!',
              body: 'p-3!',
              footer:
                'inline-flex w-full justify-between gap-1.5 px-3! py-1! align-baseline text-sm font-medium'
            }">
            <template #header>
              <!-- IMG -->

              <LazyAvatar
                v-if="idRef"
                size="12"
                :src="`/img/items/${idRef}.webp`"
                :alt="`${name} Image`" />
              <!-- NAME / LINK -->

              <div class="text-center">
                <h4 class="text-xl leading-none font-bold text-nowrap">
                  {{ name }}
                </h4>

                <!-- RANK -->
                <span
                  class="text-sm font-semibold text-n5 italic opacity-90"
                  :style="{
                    color: rank ? itemRankColor[rank] : undefined
                  }">
                  {{ itemRank[idRef] }}
                </span>
              </div>
            </template>

            <!-- STATS -->
            <template
              v-if="item?.stats && Object.entries(item?.stats).length"
              #default>
              <LazyItemStats layout="command" :stats="item.stats" />
            </template>

            <template #footer>
              <div class="flex items-center gap-1 overflow-hidden">
                <Tooltip
                  v-for="m in item?.maps"
                  :key="m"
                  side="bottom"
                  class="group/tt"
                  :label="mapIndex.find((i) => i.id === m)?.name">
                  <Icon
                    :name="`i-lp-${m}`"
                    class="size-3.5 opacity-30 group-hover/tt:opacity-100" />
                </Tooltip>
              </div>
              <!-- PRICE -->
              <span class="align-center inline-flex gap-1.5 font-medium">
                <Icon
                  class="dst inline size-3.5 self-center stroke-pc/30 stroke-4 text-vanguard/90"
                  name="i-lp-gold"
                  alt="item price" />
                {{ itemPrice[idRef] }}
              </span>
            </template>
          </UCard>
        </div>

        <!--
        <a
          v-if="name"
          :title="`Official LoL Wiki - ${name}`"
          :href="wikiLink(name)"
          class="size-5 transition-all duration-200 hover:scale-120"
          target="_blank"
          @click.stop>
          <Icon name="la:wikipedia-w" class="" />
        </a> -->
        <div
          v-if="has?.length"
          class="relative col-start-2 flex h-max w-full shrink-0 flex-col gap-y-4 overflow-x-hidden px-2 pb-0 text-sm *:last:mb-3">
          <span
            v-if="!item?.stats"
            class="whitespace-pre-line"
            v-html="item?.description" />
          <!-- REQ CHAMP -->
          <div v-if="item?.requiredChampion">
            <i
              >Unique to <b>{{ item.requiredChampion }}.</b></i
            >
          </div>

          <!-- EFFECTS -->
          <template v-if="item?.passives?.length && !item?.noEffects">
            <Separator
              class="my-0 opacity-0 **:bg-transparent! first:hidden"
              color="p3" />
            <LazyItemEffect
              v-for="(passive, i) in item.passives"
              :key="i"
              layout="command"
              :class="cn('font-medium **:text-sm')"
              unique="text-vanguard font-semibold"
              :data="passive"
              type="Passive" />
          </template>

          <!-- ACTIVES -->
          <template v-if="item?.active?.[0] && item?.noEffects !== true">
            <Separator class="first:hidden" color="p3" />
            <LazyItemEffect
              layout="command"
              :class="cn('font-medium **:text-sm')"
              :data="item.active[0]"
              unique="text-vanguard font-semibold"
              type="Active"
              class="**:text-sm" />
          </template>

          <!-- RECIPE -->

          <template v-if="item?.buildsFrom">
            <Separator
              :ui="{
                root: 'mt-3 h-0',
                label: 'font-semibold!'
              }"
              size="xs"
              label="RECIPE"
              color="p3" />
            <div class="flex items-center gap-1 px-0.5 pt-px pb-1 font-medium">
              <template v-for="(fromItem, i) in filteredFrom" :key="i">
                <button @click="updateItem(fromItem.id)">
                  <LazyAvatar
                    :src="`/img/items/${fromItem.id}.webp`"
                    :alt="fromItem.name"
                    size="lg"
                    as="button"
                    :debug-delay-ms="2500"
                    :ui="{
                      root: 'hover:ring-1 hover:ring-pc/60 hover:ring-offset-2 hover:ring-offset-p0'
                    }"
                    :label="`${fromItem.name}  ${fromItem.gold}g`" />
                </button>
                <Icon
                  v-if="i !== item.buildsFrom.length - 1"
                  class="mx-1 size-3.5"
                  name="i-add" />
              </template>
              <Icon class="mx-1 size-3.5 **:stroke-[2.7]" name="i-add" />
              <Icon
                class="dst size-3.5 stroke-pc/30 stroke-4 text-vanguard/90"
                name="i-lp-gold"
                alt="coin" />
              {{ item.gold?.base }}
            </div>
          </template>

          <!-- component OF -->

          <template v-if="item && item?.buildsInto">
            <Separator
              :ui="{
                root: 'mt-3 h-0',
                label: 'font-semibold!'
              }"
              size="xs"
              label="BUILDS INTO"
              color="p3" />

            <div
              class="group grid w-full max-w-full grid-cols-[repeat(auto-fill,minmax(32px,1fr))] grid-rows-[repeat(auto-fill,minmax(32px,1fr))] items-center justify-start gap-1 overflow-hidden px-1 pt-px pb-1">
              <button
                v-for="(buildItem, i) in filteredInto"
                :key="i"
                @click="updateItem(buildItem.id)">
                <LazyAvatar
                  :id="buildItem.id"
                  as="button"
                  size="lg"
                  :label="`${buildItem.name} ‑ ${buildItem.gold}g`"
                  :src="`/img/items/${buildItem.id}.webp`"
                  :alt="buildItem.name"
                  :ui="{
                    root: 'hover:ring-1 hover:ring-pc/60 hover:ring-offset-2 hover:ring-offset-p0'
                  }" />
              </button>
            </div>
          </template>
          <ItemExternalLinks v-if="item" :item />
        </div>
      </div>
    </template>
    <div v-else-if="status === 'pending'"></div>

    <!-- i-streamline-ultimate-work-from-home-user-pet-cat
     i-arcticons-emoji-cat -->
    <LazyUEmpty
      v-if="status === 'error'"
      variant="naked"
      icon="i-streamline-freehand-work-from-home-user-pet-cat"
      size="xs"
      title="Item not found.">
      <template #description>
        It seems
        <ULink class="inline" underline> clem </ULink>
        may have moved this from it's previous location. Try refreshing to see
        if we've found it.
      </template>
    </LazyUEmpty>
  </div>
</template>
