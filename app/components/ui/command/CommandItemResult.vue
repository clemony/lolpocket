<script lang="ts" setup>
const { item, activeItem: mv } = defineProps<{
item: ItemIndex
activeItem: number | null
}>()

const modelValue = ref(mv)
onMounted (() => {
modelValue.value = mv
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
<CommandResult>
<input type="radio"  class="peer hidden" name="item-popover" :value="item.id" v-model="modelValue" @change="emit('update:modelValue', modelValue)" />
            <Item :item="item" :id="item.id" :alt="item.id" class="size-7 rounded-full" />
              {{ item.name }}
</CommandResult>
</template>