<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    placeholder?: string
    inputClass?: HTMLAttributes['class']
    setFocus?: boolean
  }>(),
  {
    placeholder: 'Search Items...',
  }
)
const emit = defineEmits(['update:query'])

const searchQuery = ref('')
</script>

<template>
  <div
    :class="
      cn(
        'flex h-12 items-center gap-4 border border-p3 bg-p0! px-3 py-2 text-md',
        props.class,
      )
    ">
    <icon
      class="pointer-events-none size-5 opacity-70"
      name="search" />

    <input
      v-model="searchQuery"
      :placeholder="props.placeholder"
      :class="
        cn(
          'flex h-full grow border-0 text-start text-md ring-0 outline-0 hover:border-0 hover:ring-0 hover:outline-0',
          props.inputClass,
        )
      ">

    <slot />

    <button
      class="btn absolute right-2 btn-square btn-ghost btn-sm"
      @click="searchQuery = null">
      <icon
        class="shrink-0"
        name="x-sm" />
    </button>
  </div>
</template>
