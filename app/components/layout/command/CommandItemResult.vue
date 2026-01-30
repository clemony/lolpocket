<script lang="ts" setup>
const { activeItem: mv, item } = defineProps<{
  item: Index
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
      class="peer hidden"
      type="radio"
      name="item-popover"
      :value="item.id"
      @change="emit('update:modelValue', modelValue)"
    >

    <Item
      :id="item.id"
      class="size-7 rounded-full"
      :item="item"
      :alt="item.id"
    />
    {{ item.name }}
  </CommandResult>
</template>
