<script setup lang="ts">
const { class: className, set } = defineProps<{
  class?: HTMLAttributes['class']
  set: SpellSet
}>()

const spellIndex = (id: number | undefined): Index | null => {
  if (!id) return null
  const spell = spells[id]
  if (!spell) return null
  return { id: spell.id, name: spell.name }
}

const spellD = computed(() => spellIndex(set.d))
const spellF = computed(() => spellIndex(set.f))
</script>

<template>
  <div
    :class="
      cn(
        'avatar-group translate-x-px items-center justify-end -space-x-3',
        className,
      )
    ">
    <div class="avatar size-7.5 border-3! group-open/trig:border-p2">
      <IndexIcon
        v-if="spellD"
        class="-mt-px -ml-px size-6.5"
        :item="spellD" />
    </div>
    <div class="avatar size-7.5 border-3! group-open/trig:border-p2">
      <IndexIcon
        v-if="spellF"
        class="-mt-px -ml-px aspect-square size-6.5 shrink-0"
        :item="spellF" />
    </div>
  </div>
</template>
