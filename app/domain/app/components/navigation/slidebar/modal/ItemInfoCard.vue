<script lang="ts" setup>
import type {
  ObjectDataReturn,
  ObjectDataType,
} from "~/domain/app/composables/useObjectData"
import { asItem } from "~/domain/app/types/typeAssert"
import { itemPrice } from "~~/shared/constants/items/itemPrice"
import { itemRank } from "~~/shared/constants/items/itemRank"
import { itemRankColor } from "~~/shared/constants/items/itemRankColor"
import { mapIndex } from "~~/shared/constants/misc/map-index"

const { objectData, map } = defineProps<{
  objectData: ObjectDataReturn
  map?: MaybeRefOrGetter<number | undefined>
}>()

const { idRef, data, typeRef } = objectData
const rank = computed(() => {
  if (typeRef.value !== "item") return undefined

  return itemRank[Number(idRef.value)] as keyof typeof itemRankColor | undefined
})

const color = computed(() => {
  if (typeRef.value !== "item") return undefined
  return rank.value ? itemRankColor[rank.value] : undefined
})
</script>

<template>
  <UCard
    v-if="data"
    variant="outline"
    :ui="{
      root: 'w-full divide-y divide-p3 bg-p0/50',
      header:
        'flex w-full shrink-0 flex-col items-center justify-center gap-3 overflow-hidden py-3!',
      body: 'p-3!',
      footer:
        'inline-flex w-full justify-between gap-1.5 px-3! py-1! align-baseline text-sm font-medium',
    }">
    <template #header>
      <!-- IMG -->

      <LazyAvatar
        v-if="idRef"
        size="3xl"
        :src="`/img/item/${idRef}.webp`"
        :alt="`${data.name} Image`" />
      <!-- NAME / LINK -->

      <div class="text-center">
        <h4 class="text-xl leading-none font-bold text-nowrap">
          {{ data.name }}
        </h4>

        <!-- SUBTITLE -->
        <span
          class="text-sm font-semibold text-n5 italic opacity-90"
          :style="{
            color,
          }">
          {{ itemRank[Number(idRef)] }}
        </span>
      </div>
    </template>

    <!-- DESCRIPION -->
    <template v-if="asItem(data)?.stats" #default>
      <LazyItemStats
        v-if="asItem(data).stats?.length"
        :item="asItem(data)"
        :stats="asItem(data).stats" />
    </template>

    <template #footer>
      <div class="flex items-center gap-1 overflow-hidden">
        <Tooltip
          v-for="m in asItem(data)?.maps"
          :key="m"
          side="bottom"
          class="group/tt"
          :label="mapIndex.find((i) => i.id === m)?.name">
          <Icon
            :name="`i-lp-${m}`"
            class="size-3.5 opacity-30 group-hover/tt:opacity-100" />
        </Tooltip>
      </div>

      <span class="align-center inline-flex gap-1.5 font-medium">
        <Icon
          class="dst inline size-3.5 self-center stroke-pc/30 stroke-4 text-vanguard/90"
          name="i-lp-gold"
          alt="item price" />
        {{ itemPrice[Number(idRef)] }}
      </span>
    </template>
  </UCard>
</template>
