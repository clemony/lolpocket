<script setup lang="ts">
const route = useRoute()
const pocket = ref<Pocket>(ps().getPocket(String(route.params.pocket_key)))
</script>

<template>
  <MenubarRadioGroup v-model:model-value="pocket.main.spells">
    <MenubarLabel class="pt-2 pb-1 sticky top-0 before:bg-b1/30 z-1 before:absolute before:top-0 before:left-0 before:mix-blend-lighten  before:z-1  -mx-1 px-3 -translate-y-1 backdrop-blur">
      <span class="z-2 isolate">
        Default Spells
      </span>
    </MenubarLabel>

    <MenubarRadioItem
      v-for="set, i in pocket.spells"
      :key="i"
      class="[&_#indicator]:order-last z-0 gap-1 px-2.5"
      :value="set.id">
      <Spell
        :name="set.d"
        class="size-6" />

      <Spell
        :name="set.f"
        class="size-6" />
      <Grow />
    </MenubarRadioItem>
  </MenubarRadioGroup>
</template>