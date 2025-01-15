<script setup lang="ts">
  const ds = useDataStore();
  const ps = usePocketStore();
  const items = [...ds.items];
  // Define props for reusability
  const props = defineProps<{
    array: Array<{ id: string; img: string; name: string }>;
    quickSearch: string;
    returnData?: any;
    thisSet?: any;
    returned?: any;
    type?: string;
    pocketKey: string;
  }>();

  const emit = defineEmits(['update:quickSearch', 'update:returnData']);
  const pocket = ref(getPocket(props.pocketKey));

  const set = computed(() => {
    return pocket.value.items[0].itemSets.find((set) => set.key == props.thisSet);
  });

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

  function beforeLeave(el: HTMLElement) {
    el.style.position = 'relative'; // Make sure it's not absolute
    el.style.transition = 'all 0.3s ease';
  }

  function afterLeave(el: HTMLElement) {
    el.style.display = 'empty'; // Hide after the transition is complete
  }

  const open = ref(false);
  const value = ref('');
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="no-drag search-drop ghosty drag-label group/qs hover:after:text-bccent relative z-0 flex w-[200px] basis-16 cursor-pointer! justify-between p-0! after:absolute after:grid after:h-full after:w-full after:place-content-center after:opacity-50 after:content-['+'] hover:after:opacity-60"
        :class="{ 'basis-12!': type == 'alt' }">
        <div
          class="z-20 h-full w-full scale-105 cursor-pointer bg-[url('/i@frame.webp')] bg-contain bg-center bg-no-repeat opacity-0 brightness-0 transition-all duration-200 select-none group-hover/qs:scale-95 group-hover/qs:opacity-40"></div>
      </button>
    </PopoverTrigger>
    <PopoverContent class="w-[350px] p-0">
      <Command>
        <CommandInput
          class="h-9"
          placeholder="Search Items..." />
        <CommandEmpty>No Items found.</CommandEmpty>

        <CommandList>
          <CommandGroup
            v-auto-animate
            heading="Items in Set"
            class="flex flex-wrap">
            <template
              v-for="(item, index) in set.items"
              :key="item.id">
              <CommandItem
                v-if="index > 5"
                :key="item.id"
                :value="item.name">
                <img
                  :src="`/img/items/${item.id}.webp`"
                  class="size-10 rounded-md shadow-2xs"
                  :key="item.id"
                  :class="cn(value === item.name ? 'ring-1' : 'ring-0')" />
              </CommandItem>
            </template>
          </CommandGroup>

          <CommandGroup
            v-auto-animate
            heading="Items in Set"
            class="flex flex-wrap">
            <template
              v-for="(item, index) in set.items"
              :key="item.id">
              <CommandItem
                v-if="index > 5"
                :key="item.id"
                :value="item.name">
                <img
                  :src="`/img/items/${item.id}.webp`"
                  class="size-10 rounded-md shadow-2xs"
                  :key="item.id"
                  :class="cn(value === item.name ? 'ring-1' : 'ring-0')" />
              </CommandItem>
            </template>
          </CommandGroup>

          <CommandGroup
            v-auto-animate
            heading="Favorite Items"
            class="flex flex-wrap">
            <CommandItem
              v-for="item in items"
              :key="item.id"
              :value="item.name">
              <img
                :src="`/img/items/${item.id}.webp`"
                class="size-10 rounded-md shadow-2xs"
                :key="item.id"
                :class="cn(value === item.name ? 'ring-1' : 'ring-0')" />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>

  <!--    
   @select="(item) => {
                if (typeof item.detail.value[0].name === 'string') {
                  value = item.detail.value[0].name
                }
                open = false
              }"
  @select="(item) => {
                if (typeof item.detail.value[0].name === 'string') {
                  value = item.detail.value[0].name
                }
                open = false
              }"
              <VDropdown theme="default" alt="Quick Search" :distance="8"
       >
        <div
            class="group-hover/qs:opacity-40 group-hover/qs:scale-95 scale-105 z-20 opacity-0 select-none bg-[url('/i@frame.webp')] bg-center bg-contain transition-all bg-no-repeat duration-200 w-full h-full brightness-0 cursor-pointer">
        </div>

        <template #popper>
            <div class="relative pt-1.5 pb-0">
                <div class="relative flex justify-center w-full px-2 pb-1">
                    <Icon v-if="!quickSearch" name="teenyicons:search-outline"
                        class="pointer-events-none text-bc/50 size-3.5 right-3.5 top-[0.45rem] absolute" />

                    <button v-else
                        class="pointer-events-auto z-10 transition-all duration-300 text-bccent/40 hover:text-bccent/60 size-3.5 right-3.5 top-[7px] absolute"
                        @click="$emit('update:quickSearch', '')">
                        <Icon name="teenyicons:x-outline" />
                    </button>

                    <input placeholder="Quick search..." :value="quickSearch" @input="handleInput" spellcheck="false"
                        class="z-0 w-full  italic select-all focus:not-italic focus:bg-b2/50 placeholder: rounded-btn bg-transparent h-7 px-2 outline-hidden!"
                        autofocus />
                </div>

                 <transition name="list-transition" @enter="beforeEnter" @leave="afterLeave"> -->
  <!-- <div v-if="quickSearch"
                    class="grid w-full px-1 pt-2 overflow-y-scroll transition-all duration-500 border border-transparent border-t-b3 max-h-72">
                    <TransitionGroup name="fade" tag="div" @enter="imageIn" @leave="imageOut">
                        <button v-close-popper v-for="data in props.array" :key="data.id" @click="handleClick(data)"
                            class="flex w-full gap-2 px-1 my-1 btn btn-ghost btn-xs py-0.5 hover:bg-b2 cursor-pointer justify-start">
                            <img :src="`/img/${props.type}/${data.id || data.name}.webp`" class="rounded-md size-4.5" />
                            {{ data.name }}
                        </button>
                    </TransitionGroup>
                </div>
            </div>
        </template>
    </VDropdown> -->
</template>

<style scoped>
  .transition-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }

  .fade-list-enter-active,
  .fade-list-leave-active {
    transition:
      opacity 1s ease,
      transform 1s ease;
  }

  .fade-list-enter-from {
    opacity: 0;
    transform: translateY(-10px);
  }

  .fade-list-leave-to {
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
    /* Prevent interaction during animation */
  }

  .fade-list-move {
    transition: transform 1s;
  }
</style>
