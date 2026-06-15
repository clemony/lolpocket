<script lang="ts" setup>
import type { ObjectDataReturn } from "~/domain/app/composables/useObjectData"
import { asItem } from "~/domain/app/types/typeAssert"

const props = defineProps<{
  objectData: ObjectDataReturn
}>()

const emit = defineEmits(["update:open"])
const expanded = defineModel<boolean>("expanded", { default: false })
const toggleExpanded = useToggle(expanded)
const map = shallowRef<number>(11)

const { data, idRef, typeRef, updateObject } = props.objectData
const item = computed(() =>
  typeRef.value === "item" ? (data.value as Item | null | undefined) : null
)

const has = computed(() => {
  const flags: string[] = []
  if (item.value?.buildsInto) flags.push("buildsInto")
  if (item.value?.passives) flags.push("passives")
  if (item.value?.active?.[0]) flags.push("actives")
  if (item.value?.buildsFrom) flags.push("buildsFrom")
  return flags
})
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
        :abbbreviate="false"
        class="**:text-nc"
        :item="asItem(data)" />

      <span
        v-if="!item?.stats"
        class="whitespace-pre-line text-nc"
        v-html="item?.description" />
      <UCollapsible
        v-if="has.length"
        v-model:open="expanded"
        :ui="{
          root: 'inset-y-0 flex grow flex-col-reverse',
          content: 'flex w-full flex-col gap-y-3 text-sm *:last:mb-3',
        }">
        <template #content>
          <!-- RECIPE -->

          <ItemBuildsFrom v-if="item?.buildsFrom" :map :item />

          <!-- EFFECTS -->
          <template v-if="item?.passives?.length && !item?.noEffects">
            <Separator class="my-0! not-first:hidden" color="neutral" />
            <LazyItemEffect
              v-for="(passive, i) in item.passives"
              :key="i"
              layout="command"
              class="font-medium text-nc **:text-sm"
              unique="text-vanguard font-semibold"
              :data="passive"
              type="Passive" />
          </template>

          <!-- ACTIVES -->
          <template v-if="item?.active?.[0] && item?.noEffects !== true">
            <Separator class="first:hidden" color="neutral" />
            <LazyItemEffect
              layout="command"
              class="font-medium text-nc **:text-sm"
              :data="item.active[0]"
              unique="text-vanguard font-semibold"
              type="Active" />
          </template>

          <!-- component OF -->

          <ItemBuildsInto v-if="data && item?.buildsInto" :map :item />
        </template>
        <template #default> </template>
      </UCollapsible>
    </template>

    <template #footer>
      <!--      <ItemExternalLinks v-if="item" :item="item" /> -->

      <ItemInfoCardFooter
        v-if="item"
        :item
        :expanded
        :has="computed(() => !!has.length)"
        @toggle-expanded="toggleExpanded()" />
    </template>
  </InfoCardWrapper>
</template>
