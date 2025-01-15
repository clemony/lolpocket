<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';

  const props = defineProps<{
    model: number;
    icon1?: string;
    icon2?: string;
    iconSize?: number;
    class?: HTMLAttributes['class'];
  }>();
  const iconSize = 'size-' + props.iconSize;
  const modelValue = ref(props.model);
  const emit = defineEmits(['update:model']);

  function onClick() {
    modelValue.value++;
    modelValue.value == 3 ? (modelValue.value = 0) : '';
    console.log(modelValue.value);
    emit('update:model', modelValue);
  }
</script>

<template>
  <!--     <Button
        :variant="modelValue ? 'neutral' : 'outline'"
        size="icon"
        class="relative [&_input]:hidden"
        @click="onClick"
        :class="cn('join-item px-6', props.class)"> -->

  <button
    class="btn relative [&_input]:hidden"
    @click="onClick"
    :class="cn('join-item px-6', props.class)">
    <icon
      v-if="modelValue == 2 && props.icon2"
      :name="props.icon2"
      class="absolute size-6"
      :class="cn('size-6 shrink-0', iconSize)" />
    <icon
      v-else-if="props.icon1"
      :name="props.icon1"
      class="absolute"
      :class="cn('size-6 shrink-0', { 'opacity-60': !modelValue }, iconSize)" />

    <input
      type="radio"
      v-model="modelValue"
      :value="0" />
    <input
      type="radio"
      v-model="modelValue"
      :value="1" />
    <input
      type="radio"
      v-model="modelValue"
      :value="2" />
  </button>
</template>

<style scoped></style>
