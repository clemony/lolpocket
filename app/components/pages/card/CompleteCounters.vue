<script lang="ts" setup>
import type { Pocket } from '~~/shared/schema'

const props = defineProps<{
  pocket: Pocket
}>()

const pocket = ref(props.pocket)

const championsLength = computed(() => {
  return pocket.value.champions.length
})

const rolesLength = computed(() => {
  return pocket.value.roles.length ?? 0
})

const spellsLength = computed(() => {
  return pocket.value.spells.length
})

const itemsLength = computed(() => {
  if (pocket.value.items.length === 1 && !pocket.value.items[0].items.length) {
    return 0
  }
  else {
    return pocket.value.items.length
  }
})
/* const runeSetsLength = computed (() => {
  if (pocket.value.runes.length === 1) {
    const set = ref(pocket.value.runes[0])
    const primaryRunes = computed (() => {
      const a = Object.values(set.value[0].runes)
      const b = () => {
        if (a) {
          const b1 = a.filter(r => r !== 'empty')
          return b1
        }
      }
      return b.length ? b.length : 0
    })

    const secondaryRunes = computed (() => {
      const a = Object.values(set.value.secondary.runes)
      const b = () => {
        if (a) {
          const b1 = a.filter(r => r.name !== 'empty')
          return b1
        }
      }
      return b.length ? b.length : 0
    })

    const setLength = primaryRunes.value + secondaryRunes.value
    return setLength > 0 ? 1 : 0
  }
  else {
    return pocket.value.runes.length
  }
}) */
</script>

<template>
  <div
    class="
      -ml-1.5 flex w-full items-center justify-evenly gap-7
      **:select-none
    ">
    <slot />

    <div
      v-tippy="
        `${championsLength ? championsLength : 'no'} pocket pick${pocket.champions.length === 1 ? '' : 's'}`
      "
      class="flex items-center gap-1.5">
      <i-no-champ class="size-8.5 opacity-80 dst" />

      <span class="font-medium dst">{{ championsLength }}</span>
    </div>

    <div
      v-tippy="`${rolesLength ? rolesLength : 'no'} selected roles`"
      class="flex items-center gap-3">
      <i-roles-all class="size-5 opacity-80 dst" />

      <span class="font-medium dst">{{ rolesLength }}</span>
    </div>

    <div
      v-tippy="`${spellsLength ? spellsLength : 'no'} spells`"
      class="flex items-center gap-2">
      <icon
        name="game-icons:fire-spell-cast"
        class="size-6 opacity-70 dst" />

      <span class="font-medium dst">{{ spellsLength }}</span>
    </div>
    <!--
    <div v-tippy="`${runeSetsLength ? runeSetsLength : 'no'} rune sets`" class="flex gap-2 items-center">
      <i-rune-icon class="size-7 dst" />
      <span class="dst  font-medium">{{ runeSetsLength }}</span>
    </div> -->

    <div
      v-tippy="`${itemsLength ? itemsLength : 'no'} item sets`"
      class="flex items-center gap-2.5">
      <icon
        name="bow"
        class="size-6 dst" />

      <span class="font-medium dst">{{ itemsLength }}</span>
    </div>
  </div>
</template>

<style scoped></style>
