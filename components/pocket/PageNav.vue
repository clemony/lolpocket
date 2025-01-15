<script setup lang="ts">
  const props = defineProps<{
    storeValue: any;
    currentVisible: string;
    pocket?: pocket;
  }>();
  //const els = [props.els]

  const dashboard = ref();
  const champions = ref();
  const items = ref();
  const runes = ref();

  const dashboardIsVisible = useElementVisibility(dashboard);
  const championsIsVisible = useElementVisibility(champions);
  const itemsIsVisible = useElementVisibility(items);
  const runesIsVisible = useElementVisibility(runes);

  const currentVisible = ref('');
  const els = [
    {
      ref: dashboard,
      isVisible: dashboardIsVisible,
      name: 'dashboard',
    },
    {
      ref: champions,
      isVisible: championsIsVisible,
      name: 'champions',
      type: 'champion',
      trigger: true,
      data: props.pocket.champions[0].champions,
    },
    {
      ref: items,
      isVisible: itemsIsVisible,
      name: 'items',
      trigger: true,
      type: 'item',
      data: props.pocket.items[0].itemSets,
    },
    {
      ref: runes,
      isVisible: runesIsVisible,
      name: 'runes',
      trigger: true,
      type: 'rune',
      data: props.pocket.runes[0].runeSets,
    },
  ];

  //const currentVisible = ref(null)
  const emit = defineEmits(['update:currentVisible']);

  console.log('els', els);

  // Observer setup with custom threshold for each element
  els.forEach(({ ref, isVisible, name }) => {
    useIntersectionObserver(
      ref,
      ([{ isIntersecting }]) => {
        isVisible.value = isIntersecting;
        if (isIntersecting) {
          currentVisible.value = name;
          emit('update:currentVisible', currentVisible.value);
          props.storeValue.value = name;
        }
      },
      { threshold: 0.5 } // Adjust this value to control the visibility offset
    );
  });
</script>

<template>
  <div class="mt-0.5 ml-4 grid h-full w-full items-center">
    <div class="flex gap-8">
      <div
        v-for="el in els"
        :key="el.name">
        <span v-if="!el.trigger">
          <label
            @click="scrollToSection(el.ref)"
            class="group mb-px flex gap-1 font-medium opacity-50 transition-all duration-300 hover:cursor-pointer hover:opacity-100"
            :class="{
              'text-bc opacity-100!': el.name == props.storeValue,
            }">
            <input
              type="radio"
              :value="el.ref"
              v-model="currentVisible"
              class="peer hidden" />
            <span class="w-max min-w-max px-1.5 capitalize">
              {{ el.name }}
            </span>
          </label>
        </span>

        <VDropdown
          v-else
          theme="hover"
          :delay="{ show: 300, hide: 100 }"
          placement="bottom-start"
          class="">
          <label
            @click="scrollToSection(el.ref)"
            class="group mb-px flex items-center gap-1 font-medium opacity-50 transition-all duration-300 hover:cursor-pointer hover:opacity-100"
            :class="{
              'text-bc opacity-100!': el.name == props.storeValue,
            }">
            <input
              type="radio"
              :value="el.ref"
              v-model="currentVisible"
              class="peer hidden" />

            <span class="w-max min-w-max px-1 capitalize">
              {{ el.name }}
            </span>

            <ToggleButton class="pointer-events-none self-center" />
          </label>

          <template #popper>
            <HvPocket
              v-if="props.pocket"
              :type="el.type"
              :data="el.data"
              :pocket="props.pocket" />
          </template>
        </VDropdown>
      </div>
    </div>
    <div class="h-7 w-full"></div>
  </div>
</template>

<style scoped></style>
