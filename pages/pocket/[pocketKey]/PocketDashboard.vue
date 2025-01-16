<script setup lang="ts">
  const ps = usePocketStore();
  const props = defineProps<{
    pocketKey: string;
  }>();

  const route = useRoute();

  const pocketKey = ref(route.params.pocketKey as string);
  const pocket = ref(getPocket(pocketKey.value));

  // Watch for changes to the route parameter and update pocket data accordingly
  watch(
    () => route.params.pocketKey,
    (newPocketKey) => {
      if (newPocketKey) {
        pocketKey.value = newPocketKey as string;
        pocket.value = getPocket(newPocketKey);
      }
    }
  );

  onActivated(() => {
    console.log('index');
  });

  const pTabs = defineModel({
    default: 'final',
  });

  const comps = [
    {
      cRef: 'overview',
      id: 'overview',
    },
  ];

  const overview = ref();
  const start = ref();
  const core = ref();
  const final = ref();
  const overviewVisible = useElementVisibility(overview);
  const startVisible = useElementVisibility(overview);
  const coreVisible = useElementVisibility(overview);
  const finalVisible = useElementVisibility(overview);
  const currentVisible = ref(null); // Will store the name of the visible element

  const els = [
    {
      ref: overview,
      isVisible: overviewVisible,
      name: 'Overview',
    },
    {
      ref: start,
      isVisible: startVisible,
      name: 'Start',
    },
    {
      ref: core,
      isVisible: coreVisible,
      name: 'Core Items',
    },
    {
      ref: final,
      isVisible: finalVisible,
      name: 'Final Build',
    },
  ];

  // Observer setup with custom threshold for each element
  els.forEach(({ ref, isVisible, name }) => {
    useIntersectionObserver(
      ref,
      ([{ isIntersecting }]) => {
        isVisible.value = isIntersecting;
        if (isIntersecting) {
          currentVisible.value = name;
        }
      },
      { threshold: 0.5 } // Adjust this value to control the visibility offset
    );
  });
</script>

<template>
  <Layout3
    :key="pocketKey"
    col2Class="px-6">
    <template #col1>
      <div class="grid grid-cols-[20px_auto] gap-y-5">
        <h3 class="h-sans col-start-2 mb-3">Build</h3>

        <div class="row-span-4 mt-0.5 justify-start">
          <icon
            name="radix-icons:caret-right"
            class="absolute size-5! transition-all duration-300"
            :class="{
              'translate-y-0': currentVisible == 'Overview',
              'translate-y-[33px]': currentVisible == 'Start',
              'translate-y-[66px]': currentVisible == 'Core Items',
              'translate-y-[99px]': currentVisible == 'Final Build',
            }" />
        </div>

        <label
          v-for="el in els"
          :key="el.name"
          class="relative col-start-2 flex items-center gap-1 text-start hover:underline"
          @click="scrollToSection(el.ref)">
          <input
            type="radio"
            :value="el.name"
            v-model="currentVisible"
            class="peer hidden" />

          <span class="opacity-50 transition-opacity duration-300 peer-checked:font-medium peer-checked:opacity-100">
            {{ el.name }}
          </span>
        </label>
      </div>
    </template>

    <template #col2>
      <a
        class="max-h-inherit carousel-item relative flex size-full flex-col"
        ref="overview"
        id="overview">
        <LayoutSpacer />

        <Overview :pocket="pocket" />
      </a>
      <a
        class="max-h-inherit carousel-item relative flex size-full flex-col"
        ref="start"
        id="start">
        <LayoutSpacer />
      </a>
      <a
        class="max-h-inherit carousel-item relative flex size-full flex-col"
        ref="core"
        id="core">
        <LayoutSpacer />
      </a>
      <a
        class="max-h-inherit carousel-item relative flex size-full flex-col"
        ref="final"
        id="final">
        <LayoutSpacer />
      </a>
    </template>

    <template #col3>
      <DashboardSidebar :pocket="pocket" />
    </template>
  </Layout3>
</template>

<style scoped></style>
