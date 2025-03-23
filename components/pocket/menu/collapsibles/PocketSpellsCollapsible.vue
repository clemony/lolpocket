<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = computed (() => {
  return props.pocket
})

const spell = computed (() => {
  const s = pocket.value.spells.default
  return s[0] && s[0] != 'Flash' && s[0] != 'Ghost' ? s[0] : s[1] && s[1] != 'Flash' && s[1] != 'Ghost' ? s[1] : s[0] ? s[0] : null
})
</script>

<template>
  <Collapsible>
    <RightbarDropdownTrigger>
      <RightbarIconWrapper :active="spell != null">
        <i-tft-attach v-if="spell == null" class="size-4.5 opacity-65" />
        <img v-else :src="`/img/spells/${spell.name}.webp`" class="size-full rounded-full" />
      </RightbarIconWrapper>
      Spells

      <template #counter>
        <SpellsCounter :pocket="pocket" />
      </template>
    </RightbarDropdownTrigger>
    <FieldCollapsibleContent class="!pb-3">
      <div class="flex flex-col-reverse gap-2">
        <SpellSet v-for="(set, i) in pocket.spells.sets" :key="i" :set="set" :pocket="pocket" :set-index="i" />
      </div>

      <Separator class="bg-b3/60 mt-4" />
      <RightbarButton @click="newSpellSet(pocket.key)">
        <icon name="add-sm" />New Spell Set
      </RightbarButton>
    </FieldCollapsibleContent>
  </Collapsible>
</template>