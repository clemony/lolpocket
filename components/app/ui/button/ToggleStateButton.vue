<script setup lang="ts">
  import type { HTMLAttributes } from 'vue'

  const props = defineProps<{
    model: number
    icon1?: string
    icon2?: string
    text0?: string
    text1?: string
    text2?: string
    iconClass?: string
    class?: HTMLAttributes['class']
  }>()

  const modelValue = ref(props.model)
  const emit = defineEmits(['update:model'])

  function onClick() {
    modelValue.value++
    modelValue.value == 3 ? (modelValue.value = 0) : ''
    console.log(modelValue.value)
    emit('update:model', modelValue)
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
    @click="onClick"
    :class="cn('**:font-normal hover:bg-b2/60 hover:border-b2 **:text-3 px-3 btn relative [&_input]:hidden', props.class)">
    <icon
      v-if="modelValue == 2 && props.icon2"
      :name="props.icon2"
      class="absolute"
      :class="cn('size-5.5 shrink-0', iconClass)" />
    <icon
      v-else-if="props.icon1 && props.icon1"
      :name="props.icon1"
      class="absolute"
      :class="cn('size-5.5 shrink-0', { 'opacity-60': !modelValue }, iconClass)" />

    <div class="flex **:flex **:items-center *:gap-1.5 items-center **:[&_svg]:shrink-0">
      <span>
        <slot />
        <icon
          name="prime:moon"
          v-if="modelValue == 0"
          class="pt-0.25 size-4.5" />

        <icon
          name="down-sm"
          v-if="modelValue == 1"
          class="pt-0.25 size-4.5" />

        <icon
          name="up-sm"
          v-if="modelValue == 2"
          class="pt-0.25 size-4.5" />
      </span>
    </div>

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
