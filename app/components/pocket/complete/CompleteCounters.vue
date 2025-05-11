<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = ref(props.pocket)

const championsLength = computed (() => {
  return pocket.value.champions.length
})

const rolesLength = computed (() => {
  return pocket.value.roles.length ?? 0
})

const spellsLength = computed (() => {
  return pocket.value.spells.sets.length
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
  <div class="flex gap-7 w-full items-center justify-evenly -ml-1.5 **:select-none">
    <slot />
    <div v-tippy="`${championsLength ? championsLength : 'no'} pocket pick${pocket.champions.length == 1 ? '' : 's'}`" class="flex gap-1.5 items-center">
      <i-no-champ class=" size-8.5 dst opacity-80" />
      <span class="dst font-medium">{{ championsLength }}</span>
    </div>

    <div v-tippy="`${rolesLength ? rolesLength : 'no'} selected roles`" class="flex gap-3 items-center">
      <i-roles-all class="size-5 opacity-80 dst" />
      <span class="dst font-medium">{{ rolesLength }}</span>
    </div>

    <div v-tippy="`${spellsLength ? spellsLength : 'no'} spells`" class="flex gap-2 items-center">
      <icon name="game-icons:fire-spell-cast" class="size-6 dst opacity-70" />
      <span class="dst font-medium">{{ spellsLength }}</span>
    </div>

    <div v-tippy="`${runeSetsLength ? runeSetsLength : 'no'} rune sets`" class="flex gap-2 items-center">
      <i-rune-icon class="size-7 dst" />
      <span class="dst  font-medium">{{ runeSetsLength }}</span>
    </div>

    <div v-tippy="`${itemsLength ? itemsLength : 'no'} item sets`" class="flex gap-2.5 items-center">
      <icon name="bow" class="size-6 dst" />
      <span class="dst font-medium">{{ itemsLength }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>