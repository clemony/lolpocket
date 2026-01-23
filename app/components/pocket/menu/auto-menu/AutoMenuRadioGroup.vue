<script setup lang="ts">
const { item } = defineProps<{ item: MenubarRadioGroup }>()

const modelProxy = computed({
  get: () => item.model?.valueOf(),
  set: v => item.model?.set(v),
})
</script>

<template>
  <MenubarRadioGroup>
    <MenubarLabel
      class="before:bg-b1/30 sticky top-0 z-1 -mx-1 -translate-y-1 px-3 pt-2 pb-1 backdrop-blur-sm before:absolute before:top-0 before:left-0 before:z-1 before:mix-blend-lighten">
      <span class="isolate z-2">
        {{ item.name }}
      </span>
    </MenubarLabel>

    <MenubarRadioItem
      v-for="option in item.options"
      :key="option"
      class="z-0 [&_#indicator]:order-last"
      :value="option">
      <Element size="icon">
        <component
          :is="item.optionIcon(option)"
          v-if="item.optionIcon"
          class="absolute" />
      </Element>
      <span class="grow">
        {{ item.optionName ? item.optionName(option) : option }}
      </span>
    </MenubarRadioItem>
  </MenubarRadioGroup>
</template>
