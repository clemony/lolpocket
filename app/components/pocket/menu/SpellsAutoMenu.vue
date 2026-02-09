<script setup lang="ts">
const route = useRoute()
const pocket = ref<Pocket | undefined>(
  ps().getPocket(String(route.params.pocket_key))
)
</script>

<template>
  <MenubarRadioGroup v-if="pocket" v-model:model-value="pocket._spells">
    <MenubarLabel
      class="sticky top-0 z-1 -mx-1 -translate-y-1 px-3 pt-2 pb-1 backdrop-blur-sm before:absolute before:top-0 before:left-0 before:z-1 before:bg-p0/30 before:mix-blend-lighten">
      <span class="isolate z-2">Default Spells</span>
    </MenubarLabel>

    <MenubarRadioItem
      v-for="(set, i) in pocket.spells"
      :key="i"
      class="z-0 gap-1 px-2.5 [&_#indicator]:order-last"
      :value="set.id">
      <IndexIcon
        class="size-6"
        :item="(spells[set.d] ?? spells[0]) as Index" />

      <IndexIcon
        class="size-6"
        :item="(spells[set.f] ?? spells[0]) as Index" />
      <Grow />
    </MenubarRadioItem>
  </MenubarRadioGroup>
</template>
