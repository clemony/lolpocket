<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = toRef(props, "pocket")

const championsLength = computed(() => {
  return pocket.value.champions?.length ?? 0
})

const rolesLength = computed(() => {
  return pocket.value.roles?.length ?? 0
})

const spellsLength = computed(() => {
  return pocket.value.spells?.length ?? 0
})

const itemsLength = computed(() => {
  const items = pocket.value.items ?? []
  if (items.length === 1 && !items[0]?.items?.length) return 0
  return items.length
})
/* const runeSetsLength = computed (() => {
  if (pocket.value.runes.length === 1) {
    const set = ref(pocket.value.runes[0])
    const primaryRunes = computed (() => {
      const a = Object.values(set.value[0].runes)
      const b = () => {
        if (a) {
          const p0 = a.filter(r => r !== 'empty')
          return p0
        }
      }
      return b.length ? b.length : 0
    })

    const secondaryRunes = computed (() => {
      const a = Object.values(set.value.secondary.runes)
      const b = () => {
        if (a) {
          const p0 = a.filter(r => r.name !== 'empty')
          return p0
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
    class="-ml-1.5 flex w-full items-center justify-evenly gap-7 **:select-none">
    <slot />

    <div
      label="
        `${championsLength ? championsLength : 'no'} pocket pick${championsLength === 1 ? '' : 's'}`
      "
      class="flex items-center gap-1.5">
      <i-no-champ class="size-8.5 opacity-80 drop-shadow-2xs" />

      <span class="font-medium drop-shadow-2xs">{{ championsLength }}</span>
    </div>

    <div
      label="`${rolesLength ? rolesLength : 'no'} selected roles`"
      class="flex items-center gap-3">
      <i-roles-all class="size-5 opacity-80 drop-shadow-2xs" />

      <span class="font-medium drop-shadow-2xs">{{ rolesLength }}</span>
    </div>

    <div
      label="`${spellsLength ? spellsLength : 'no'} spells`"
      class="flex items-center gap-2">
      <icon
        class="size-6 opacity-70 drop-shadow-2xs"
        name="game-icons:fire-spell-cast" />

      <span class="font-medium drop-shadow-2xs">{{ spellsLength }}</span>
    </div>
    <!--
    <div label="`${runeSetsLength ? runeSetsLength : 'no'} rune sets`" class="flex gap-2 items-center">
      <i-rune-icon class="size-7 drop-shadow-2xs" />
      <span class="ds-2xs  font-medium">{{ runeSetsLength }}</span>
    </div> -->

    <div
      label="`${itemsLength ? itemsLength : 'no'} item sets`"
      class="flex items-center gap-2.5">
      <icon class="size-6 drop-shadow-2xs" name="bow" />

      <span class="font-medium drop-shadow-2xs">{{ itemsLength }}</span>
    </div>
  </div>
</template>
