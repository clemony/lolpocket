<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()
definePageMeta({
  name: 'complete',
})

const pocket = ref(props.pocket)

const championsLength = computed (() => {
  return pocket.value.champions.children.length
})

const rolesLength = computed (() => {
  return pocket.value.roles.length
})

const spellsLength = computed (() => {
  return pocket.value.spells.length
})

const itemsLength = computed (() => {
  if (pocket.value.items.sets.length == 1 && !pocket.value.items.sets[0].items.length) {
    return 0
  }
  else {
    return pocket.value.items.sets.length
  }
})
const runeSetsLength = computed (() => {
  if (pocket.value.runes.sets.length == 1) {
    const set = ref(pocket.value.runes.sets[0])
    const primaryRunes = computed (() => {
      const a = Object.values(set.value.primary.runes)
      const b = () => {
        if (a) {
          const b1 = a.filter(r => r.name != 'empty')
          return b1
        }
      }
      return b.length ? b.length : 0
    })

    const secondaryRunes = computed (() => {
      const a = Object.values(set.value.secondary.runes)
      const b = () => {
        if (a) {
          const b1 = a.filter(r => r.name != 'empty')
          return b1
        }
      }
      return b.length ? b.length : 0
    })

    const setLength = primaryRunes.value + secondaryRunes.value
    return setLength > 0 ? 1 : 0
  }
  else {
    return pocket.value.runes.sets.length
  }
})
</script>

<template>
  <div class="h-full w-full grid grid-cols-[1fr_3fr] pl-10 gap-12 pt-8  overflow-hidden relative">
    <div class="flex flex-col gap-7">
      <div class="flex gap-7 justify-evenly -ml-1">
        <div class="flex gap-1.5 items-center">
          <i-no-champ class=" size-8.5 dst opacity-80" />
          <span class="dst font-medium">{{ championsLength }}</span>
        </div>

        <div class="flex gap-3 items-center">
          <i-roles-all class="size-5 opacity-80 dst" />
          <span class="dst font-medium">{{ rolesLength }}</span>
        </div>

        <div class="flex gap-2 items-center">
          <icon name="game-icons:fire-spell-cast" class="size-6 dst opacity-70" />
          <span class="dst font-medium">{{ spellsLength }}</span>
        </div>

        <div class="flex gap-2 items-center">
          <i-rune-icon class="size-7 dst" />
          <span class="dst  font-medium">{{ runeSetsLength }}</span>
        </div>

        <div class="flex gap-2.5 items-center">
          <icon name="bow" class="size-6 dst" />
          <span class="dst font-medium">{{ itemsLength }}</span>
        </div>
      </div>
      <LazySelectedChampions v-if="pocket.champions.children.length" :pocket="pocket" :title="pocket.champions.children.length == 1 ? 'Champion' : 'Champions'" />

      <LazySpellField :pocket="pocket" />
    </div>

    <div class="size-full border-b3/70 rounded-xl">
    </div>
  </div>
</template>

<style scoped>
</style>