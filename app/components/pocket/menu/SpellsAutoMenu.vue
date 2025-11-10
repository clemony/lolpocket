<script setup lang="ts">
import type { Pocket } from '~~/shared/schema'

const route = useRoute()
const pocket = ref<Pocket>(ps().getPocket(String(route.params.pocket_key)))
</script>

<template>
  <MenubarRadioGroup v-model:model-value="pocket.main.spells">
    <MenubarLabel class="before:bg-b1/30 sticky top-0 z-1 -mx-1 -translate-y-1 px-3 pt-2 pb-1 backdrop-blur  before:absolute  before:top-0 before:left-0 before:z-1 before:mix-blend-lighten">
      <span class="isolate z-2">
        Default Spells
      </span>
    </MenubarLabel>

    <MenubarRadioItem
      v-for="set, i in pocket.spells"
      :key="i"
      class="z-0 gap-1 px-2.5 [&_#indicator]:order-last"
      :value="set.id">
    <IndexIcon
            :item="spellbook[set.d]"
        class="size-6" />

     <IndexIcon
            :item="spellbook[set.f]"
        class="size-6" />
      <Grow />
    </MenubarRadioItem>
  </MenubarRadioGroup>
</template>