<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
  class?: HTMLAttributes['class']
}>()

const pocket = ref(props.pocket)

/* const runeSetsLength = computed (() => {
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
}) */
</script>

<template>
<!--   <span v-tippy="`${runeSetsLength ? runeSetsLength : 'no'} rune sets`"  :class="cn('flex gap-1.5 items-center', props.class)">
    <span class="dst font-mono text-1 ">{{ runeSetsLength }}</span>
  </span> -->d
</template>