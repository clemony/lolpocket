<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
const route = useRoute()
const pocket = ref<Pocket>(ps().getPocket(String(route.params.pocket_key)))
</script>

<template>
  <MenubarRadioGroup
    v-model:model-value="pocket.main.runes"
    :class="cn('', className)">
    <MenubarLabel class="pt-2 pb-1 sticky top-0 before:bg-b1/30 z-1 before:absolute before:top-0 before:left-0 before:mix-blend-lighten  before:z-1  -mx-1 px-3 -translate-y-1 backdrop-blur">
      <span class="z-2 isolate">
        Core Runes
      </span>
    </MenubarLabel>

    <MenubarRadioItem
      v-for="set, i in pocket.runes"
      :key="i"
      class="[&_#indicator]:order-last z-0 gap-1 px-2.5"
      :value="set.id">
      <Rune
        :id="Number(set.keystone)"
        class="!size-6 *:scale-130" />
      <template
        v-for="ix in 4"
        :key="ix">
        <Rune
          :id="Number(set.primary.runes[ix - 1])"
          class="!size-6" />
      </template>
      <template
        v-for="ix in 3"
        :key="ix">
        <Rune
          :id="Number(set.secondary.runes[ix - 1])"
          class="!size-6" />
      </template>
      <Grow />
    </MenubarRadioItem>
  </MenubarRadioGroup>
</template>