<script lang="ts" setup>
import type { ObjectDataReturn } from "~/domain/app/composables/useObjectData"
import { asItem } from "~/types/typeAssert"
import { mapIndex } from "~~/shared/constants/misc/map-index"

const props = defineProps<{
  objectData: ObjectDataReturn
}>()

const emit = defineEmits(["update:open"])
const map = shallowRef<number>(11)

const { data, idRef, typeRef, updateObject } = props.objectData
const item = computed(() =>
  typeRef.value === "item" ? (data.value as Item | null | undefined) : null
)

const maps = computed(() =>
  item?.value?.maps
    ?.map((map) => ({
      value: map,
      label: mapIndex.find((i) => i.id === map)?.name,
    }))
    .filter(Boolean)
)

const hasStats = computed<boolean | undefined>(() => {
  if (!item.value || item.value.stats === undefined) return undefined
  return !!Object.keys(item.value.stats).filter(Boolean).length
})

const text = "font-normal text-nc **:text-sm  "
</script>

<template>
  <InfoCardWrapper :object-data="props.objectData">
    <!-- DESCRIPION -->
    <template #default>
      <!-- REQ CHAMP -->
      <div
        v-if="item?.requiredChampion"
        class="w-full border-b border-b-n3/80 pb-2 text-nc">
        <i
          >Unique to <b>{{ item.requiredChampion }}.</b></i
        >
      </div>

      <LazyItemCardStats
        v-if="hasStats"
        :abbbreviate="false"
        class="**:text-nc"
        :item="asItem(data)" />

      <span
        v-if="!item?.stats"
        class="whitespace-pre-line text-nc"
        v-html="item?.description" />

      <!-- RECIPE -->

      <ItemBuildsFrom v-if="item?.buildsFrom" :map :item />

      <!-- EFFECTS -->
      <template v-if="item?.passives?.length && !item?.noEffects">
        <Separator class="my-0! not-first:hidden" color="neutral" />
        <LazyItemEffect
          v-for="(passive, i) in item.passives"
          :key="i"
          layout="command"
          :class="text"
          unique="text-vanguard font-semibold"
          :data="passive"
          type="Passive" />
      </template>

      <!-- ACTIVES -->
      <template v-if="item?.active?.[0] && item?.noEffects !== true">
        <Separator class="first:hidden" color="neutral" />
        <LazyItemEffect
          layout="command"
          :class="text"
          :data="item.active[0]"
          unique="text-vanguard font-semibold"
          type="Active" />
      </template>

      <!-- component OF -->

      <ItemBuildsInto v-if="data && item?.buildsInto" :map :item />
    </template>

    <template #footer>
      <!--      <ItemExternalLinks v-if="item" :item="item" /> -->

      <div
        class="flex h-8.5 w-full items-center justify-between gap-2 overflow-hidden px-2">
        <ul class="flex items-center gap-1.5">
          <GlassTooltip
            v-for="mp in maps"
            :key="mp.value"
            :content="{ side: 'bottom', sideOffset: 10 }">
            <li class="inline-flex size-5 items-center align-baseline">
              <Icon
                :name="`i-lp-${mp.value}`"
                class="inline size-4 text-nc/60" />
            </li>
            <template #content>
              <div class="align-center inline-flex items-center gap-1">
                {{ mp.label }}
                <Icon name="check" class="inline size-4 align-icon text-nc" />
              </div>
            </template>
          </GlassTooltip>
        </ul>

        <div class="align-center inline-flex justify-end gap-1.5 font-medium">
          <Icon
            class="dst inline size-3.5 self-center stroke-pc/30 stroke-4 text-vanguard/90"
            name="i-lp-gold"
            alt="item price" />
          {{ item?.gold?.total }}
        </div>
      </div>
    </template>
  </InfoCardWrapper>
</template>
