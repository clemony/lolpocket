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
const is = useItemStore()

const searchQuery = ref('')
</script>

<template>
  <div
    :class="
      cn(
        'border-b3 text-sm items-center gap-4 !bg-b1 flex h-12 border py-2 px-3',
        props.class,
      )
    ">
    <icon
      name="search"
      class="pointer-events-none size-5 opacity-70" />

    <input
      v-model="searchQuery"
      :placeholder="props.placeholder"
      :class="
        cn(
          'text-sm  outline-0 ring-0 border-0 flex h-full grow text-start  hover:outline-0 hover:ring-0 hover:border-0',
          props.inputClass,
        )
      " />

    <slot />

    <button
      class="btn btn-ghost btn-square btn-sm absolute right-2"
      @click="searchQuery = null">
      <icon
        name="x-sm"
        class="shrink-0" />
    </button>
  </div>
</template>

<style></style>
