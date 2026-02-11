<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { items } = storeToRefs(sChampion())
</script>

<template>
  <UPageSection
    v-if="items"
    title="Items"
    :class="cn('grid auto-rows-fr gap-4', className)">
    <ChampionItemRow title="Early" type="item" :data="items?.early" />

    <div class="grid w-full grid-cols-2 justify-start gap-16">
      <ChampionItemRow
        class=""
        title="Boots"
        type="item"
        :data="items?.boots" />

      <ChampionItemRow title="Trinket" type="item" :data="items?.trinket" />
    </div>

    <ChampionItemRow
      v-if="items?.support?.length"
      :data="items.support"
      type="item"
      title="Support" />

    <template v-if="items?.legendary">
      <ChampionItemRow
        v-for="index in 6"
        :key="index"
        type="item"
        :data="items?.legendary[index - 1]"
        :title="index" />
    </template>

    <ChampionItemRow
      v-if="items?.best?.byWinrate"
      type="item"
      :data="items.best.byWinrate"
      :title="['By', 'Winrate']" />
  </UPageSection>
</template>
