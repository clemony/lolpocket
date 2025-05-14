<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed (() => {
  return props.pocket
})

/* const spell = computed (() => {
  const s = pocket.value.spells.default
  if (!s)
    return null
  return s[0] && s[0].name ? s[0] : null
}) */
</script>

<template>
  <Collapsible>
    <!--  <CollapsibleTrigger class="w-full group/state">
      <NavBtn field>
        <span>
          <i-tft-attach v-if="!spell" class="size-4.75 opacity-60" />
          <img v-else :src="`/img/spells/${spell.name}.webp`" class="size-full rounded-full" />
        </span>
        <span class="capitalize">
          {{ pocket.spells.default && pocket.spells.default[0] ? pocket.spells.default[0].name : 'Spells' }} {{ pocket.spells.default && pocket.spells.default[1] ? `/ ${pocket.spells.default[1].name}` : null }}
        </span>
        <Grow />
        <SpellsCounter :pocket="pocket" />&nbsp;
        <StateCaret />
      </NavBtn>
    </CollapsibleTrigger>
    <FieldCollapsibleContent class="!pb-3">
      <div class="flex flex-col gap-2">
        <SpellSet v-for="(set, i) in pocket.spells.sets" :key="i" :set="set" :pocket="pocket" :set-index="i" />
      </div>

      <Separator class="bg-b3/60 mt-4" />
      <NavBtn @click="newSpellSet(pocket.key)">
        <icon name="add-sm" />New Spell Set
      </NavBtn>
    </FieldCollapsibleContent> -->
  </Collapsible>
</template>