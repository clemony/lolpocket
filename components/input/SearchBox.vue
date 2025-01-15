<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';

  const props = withDefaults(
    defineProps<{
      search?: string;
      placeholder?: string;
      class?: HTMLAttributes['class'];
      iconClass?: HTMLAttributes['class'];
      inputClass?: HTMLAttributes['class'];
    }>(),
    {
      placeholder: 'Search',
    }
  );

  const emit = defineEmits(['update:search']);

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      emit('update:search', target.value);
    }
  }
</script>

<template>
  <div :class="cn('relative m-0 p-0', props.class)">
    <Icon
      name="teenyicons:search-outline"
      :class="cn('pointer-events-none absolute left-2 aspect-square h-full w-auto p-2 opacity-40 ring-0 ring-offset-0 outline-hidden', props.iconClass)" />

    <input
      :placeholder="placeholder"
      :value="search"
      id="search"
      @input="handleInput"
      spellcheck="false"
      @keydown.enter.prevent
      :class="
        cn(
          'border-b2 text-3 placeholder:text-3 placeholder:text-bc/70 inset-0 mx-0 flex h-full w-full gap-2 self-center overflow-hidden border bg-transparent px-0 pt-1 pb-0 font-normal tracking-normal ring-0 ring-offset-0 outline-hidden transition-opacity duration-300 placeholder:pt-1 placeholder:tracking-normal hover:ring-0 focus:ring-0 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
          props.inputClass
        )
      " />

    <Button
      variant="ghost"
      v-if="search"
      class="text-bc/60 hover:text-bc/70 pointer-events-auto absolute right-2 z-10 aspect-square h-full! opacity-0 transition-all duration-300 peer-focus:opacity-100"
      @click="$emit('update:search', '')">
      <Icon
        name="teenyicons:x-circle-solid"
        class="h-full! w-auto shrink-0" />
    </Button>
  </div>
</template>
