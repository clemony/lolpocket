<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';

  // Define props for reusability
  const props = defineProps<{
    array: Array<{ id: string; img: string; name: string }>;
    quickSearch: string;
    returnData?: any;
    thisSet?: any;
    returned?: any;
    type?: string;
    class?: HTMLAttributes['class'];
  }>();

  const emit = defineEmits(['update:quickSearch', 'update:returnData']);

  function handleClick(data) {
    if (data) {
      const set = props.thisSet;
      const returned = [data, set];
      console.log(returned);
      emit('update:returnData', returned);
    }
  }

  const getData = (data) => {
    return data.id;
  };
  // Function to handle input change
  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement | null; // Cast to HTMLInputElement
    if (target) {
      emit('update:quickSearch', target.value); // Emit only if target is not null
    }
  }

  function beforeEnter(el: Element) {
    const element = el as HTMLElement; // Cast Element to HTMLElement
    element.style.maxHeight = '0';
    element.style.opacity = '0';
  }
  function afterLeave(el: Element) {
    const element = el as HTMLElement; // Cast Element to HTMLElement
    element.style.maxHeight = '0';
    element.style.opacity = '0';
  }
</script>

<template>
  <Popover
    :class="
      cn(
        'no-drag search-drop ghosty drag-label group/qs border-box after:content-[ after:text-4 hover:after:text-bccent relative z-0 flex cursor-pointer! p-0! after:absolute after:grid after:h-full after:w-full after:place-content-center after:opacity-50 after:content-[\'+\'] hover:after:opacity-60',
        props.class
      )
    ">
    <PopoverTrigger>
      <icon
        name="ph:corners-out-thin"
        class="z-20 h-full w-full scale-105 cursor-pointer opacity-0 brightness-0 transition-all duration-200 select-none group-hover/qs:scale-95 group-hover/qs:opacity-40" />
    </PopoverTrigger>

    <PopoverContent>
      <div class="relative pt-1.5 pb-0">
        <div class="relative flex w-full justify-center px-2 pb-1">
          <Icon
            v-if="!quickSearch"
            name="teenyicons:search-outline"
            class="text-bc/50 pointer-events-none absolute top-[0.45rem] right-3.5 size-3.5" />

          <button
            v-else
            class="text-bccent/40 hover:text-bccent/60 pointer-events-auto absolute top-[7px] right-3.5 z-10 size-3.5 transition-all duration-300"
            @click="$emit('update:quickSearch', '')">
            <Icon name="teenyicons:x-outline" />
          </button>

          <input
            placeholder="Quick search..."
            :value="quickSearch"
            @input="handleInput"
            spellcheck="false"
            class="placeholder: rounded-btn focus:bg-b2/50 z-0 h-7 w-full bg-transparent px-2 italic outline-hidden! select-all focus:not-italic"
            autofocus />
        </div>

        <!--    <transition name="list-transition" @enter="beforeEnter" @leave="afterLeave"> -->
        <div
          v-if="quickSearch"
          class="border-t-b3 grid max-h-72 w-full overflow-y-scroll border border-transparent px-1 pt-2 transition-all duration-500">
          <TransitionGroup
            name="fade"
            tag="div">
            <button
              v-for="data in props.array"
              :key="data.id"
              @click="handleClick(data)"
              class="btn btn-ghost btn-xs hover:bg-b2 my-1 flex w-full cursor-pointer justify-start gap-2 px-1 py-0.5">
              <img
                :src="`/img/${props.type}/${data.id || data.name}.webp`"
                class="size-4.5 rounded-md" />
              {{ data.name }}
            </button>
          </TransitionGroup>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>

<style scoped>
  .list-transition-enter-active,
  .list-transition-leave-active {
    transition:
      max-height 0.5s ease,
      opacity 0.5s ease;
  }

  .list-transition-enter-from,
  .list-transition-leave-to {
    max-height: 200px;
    opacity: 0;
  }

  .list-transition-enter-to,
  .list-transition-leave-from {
    max-height: 1000px;
    /* Set to a large enough value for your list */
    opacity: 1;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
</style>
