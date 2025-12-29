<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const itemRef = useTemplateRef('itemRef')

const { isActive, progressBetween } = useScrollSection(
  'items',
  itemRef
)
const { items } = usePlayerStatsInject()
</script>

<template>
  <div
    v-if="items"
    id="items"
    ref="itemRef"
    :class="cn('', className)">
    <div class="grid w-full auto-rows-fr gap-3 overflow-hidden">
      <ChampionItemRow
        title="Early"
        type="item"
        :data="items?.early" />

      <div class="grid w-full grid-cols-2 justify-start">
        <ChampionItemRow
          title="Boots"
          type="item"
          class=""
          :data="items?.boots" />

        <ChampionItemRow
          title="Trinket"
          type="item"
          :data="items?.trinket"
          class="pl-20" />
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
    </div>
  </div>
</template>