<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()
const view = shallowRef<"enemy" | "team">("team")
const { duos } = storeToRefs(sChampion())

const items = [{ label: "Synergy" }, { label: "Counter" }]
</script>

<template>
  <UPageSection
    title="Synergy & Counters"
    :class="cn('flex flex-col gap-3', className)">
    <UTabs v-model:model-value="view" class="w-44" :items />
    <template v-if="duos?.[view]">
      <ChampStatRow v-for="(role, i) in duos[view]" :key="i">
        <ChampStatLabel
          separator
          type="synergy"
          :icon="[`role:${roleKey[i]}`, 'size-8 dst']" />
        <ChampStatRowWrapper
          v-if="role && role?.length"
          :class="cn('', className)">
          <ChampStatObjectWrapper
            v-for="c in role"
            :id="c.championId"
            :key="c.championId"
            type="synergy"
            :stat="c">
            <Champion :id="c.championId" class="size-15" />
          </ChampStatObjectWrapper>
        </ChampStatRowWrapper>

        <NoItemData v-else />
      </ChampStatRow>
    </template>
  </UPageSection>
</template>
