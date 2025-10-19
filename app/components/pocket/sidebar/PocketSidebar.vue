<script lang="ts" setup>
const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value
// pocket.main = { champion: '', items: '', runes: '', role: 'All', spells: [] }
// pocket.spells = [newSpellSet()]

const hoverClass = 'hover:bg-b2/60 inset-shadow-black/2 hover:inset-shadow-xs'
</script>

<template>
  <aside
    class="h-full max-h-[86vh] gap-8 sticky top-0 pt-15 pb-20 px-1 flex flex-col overflow-y-auto scrollbar-none relative min-w-85 max-w-85">
    <div class="size-full *:shrink-0 flex flex-col gap-8">
      <Textarea
        v-model:model-value="pocket.notes[0]"
        placeholder="Pocket description, tips, tricks, explanations."
        class="" />
    </div>
  </aside>
</template>
