<script lang="ts" setup>
import type { ObjectDataReturn } from "~/domain/app/composables/useObjectData"
import { mapToItem } from "~~/shared/constants/items/mapToItem"

const { objectData, map } = defineProps<{
  objectData: ObjectDataReturn
  map?: MaybeRefOrGetter<number | undefined>
}>()

const { data, typeRef, updateObject } = objectData

const mapRef = computed(() => toValue(map))
const item = computed(() =>
  typeRef.value === "item" ? (data.value as Item | null | undefined) : null
)

const filteredFrom = computed<ItemComponent[]>(() => {
  if (!item.value?.buildsFrom) return []

  return item.value.buildsFrom.filter((i) =>
    mapRef.value ? mapToItem[mapRef.value]?.includes(i.id) : true
  )
})

const filteredInto = computed<ItemComponent[]>(() => {
  if (!item.value?.buildsInto) return []

  return item.value.buildsInto.filter((i) =>
    mapRef.value ? mapToItem[mapRef.value]?.includes(i.id) : true
  )
})

const has = computed(() => {
  const flags: string[] = []
  if (item.value?.requiredChampion) flags.push("reqChamp")
  if (item.value?.description) flags.push("description")
  if (item.value?.passives) flags.push("passives")
  if (item.value?.active?.[0]) flags.push("actives")
  if (item.value?.buildsFrom) flags.push("buildsFrom")
  if (item.value?.buildsInto) flags.push("buildsInto")
  return flags
})
</script>

<template>
  <div
    class="relative col-start-2 flex h-max w-full shrink-0 flex-col gap-y-4 overflow-x-hidden px-2 pb-0 text-sm *:last:mb-3">
    <slot name="toolbar" />
    <template v-if="has.length">
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
          color="tertiary" />
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
        <Separator class="first:hidden" color="tertiary" />
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
            label: 'font-semibold!',
          }"
          size="xs"
          label="RECIPE"
          color="tertiary" />
        <div class="datas-center flex gap-1 px-0.5 pt-px pb-1 font-medium">
          <template v-for="(fromItem, i) in filteredFrom" :key="i">
            <button @click="updateObject(fromItem.id)">
              <LazyAvatar
                :src="`/img/item/${fromItem.id}.webp`"
                :alt="fromItem.name"
                size="lg"
                as="button"
                :debug-delay-ms="2500"
                :ui="{
                  root: 'hover:ring-1 hover:ring-pc/60 hover:ring-offset-2 hover:ring-offset-p0',
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

      <template v-if="data && item?.buildsInto">
        <Separator
          :ui="{
            root: 'mt-3 h-0',
            label: 'font-semibold!',
          }"
          size="xs"
          label="BUILDS INTO"
          color="tertiary" />

        <div
          class="group grid w-full max-w-full grid-cols-[repeat(auto-fill,minmax(32px,1fr))] grid-rows-[repeat(auto-fill,minmax(32px,1fr))] items-center justify-start gap-1 overflow-hidden px-1 pt-px pb-1">
          <button
            v-for="(buildItem, i) in filteredInto"
            :key="i"
            @click="updateObject(buildItem.id)">
            <LazyAvatar
              :id="buildItem.id"
              as="button"
              size="lg"
              :label="`${buildItem.name} ‑ ${buildItem.gold}g`"
              :src="`/img/item/${buildItem.id}.webp`"
              :alt="buildItem.name"
              :ui="{
                root: 'hover:ring-1 hover:ring-pc/60 hover:ring-offset-2 hover:ring-offset-p0',
              }" />
          </button>
        </div>
      </template>
      <ItemExternalLinks v-if="item" :item="item" />
    </template>
  </div>
</template>
