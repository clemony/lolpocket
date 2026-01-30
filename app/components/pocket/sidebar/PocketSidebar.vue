<script lang="ts" setup>
const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value
// pocket._= { champion: '', items: '', runes: '', role: 'All', spells: [] }
// pocket.spells = [newSpellSet()]

const hoverClass = 'hover:bg-b2/60 inset-shadow-black/2 hover:inset-shadow-xs'
</script>

<template>
  <aside
    class="scrollbar-none relative sticky top-0 flex h-full max-h-[86vh] max-w-85 min-w-85 flex-col gap-8 overflow-y-auto px-1 pt-15 pb-20"
  >
    <div class="flex size-full flex-col gap-8 *:shrink-0">
      <Textarea
        class=""
        placeholder="Pocket description, tips, tricks, explanations."
      />
    </div>
  </aside>
</template>
