<script lang="ts" setup>
const { activeItem: mv, item } = defineProps<{
  item: ItemIndex
  activeItem: number | null
}>()

const emit = defineEmits(['update:modelValue'])
const modelValue = ref(mv)
onMounted(() => {
  modelValue.value = mv
})
</script>

<template>
  <CommandResult>
    <input
      v-model="modelValue"
      type="radio"
      class="peer hidden"
      name="item-popover"
      :value="item.id"
      @change="emit('update:modelValue', modelValue)" />

    <Item
      :id="item.id"
      :item="item"
      :alt="item.id"
      class="size-7 rounded-full" />
    {{ item.name }}
  </CommandResult>
</template>
