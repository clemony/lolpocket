<script lang="ts" setup>
const props = defineProps<{
  model: any
  value: any
  name: any
}>()

const emit = defineEmits(['update:model'])

const model = ref(props.model)
</script>

<template>
  <label
    v-tippy="'Add Favorite'"
    class="rating size-fit mr-2 group">
    <input
      v-model="model"
      type="checkbox"
      :value="props.value"
      name="favorite"
      :aria-label="`favorite ${props.name}`"
      class="mask mask-heart bg-[#dd5f61]"
      :class="{
        'group-hover:opacity-40 transition-all duration-300':
          !props.model.includes(value),
      }"
      @change="emit('update:model', model)" />
  </label>
</template>
