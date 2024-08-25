<template>
  <KeepAlive>
    <div id="main-runes">
      <div
        class="rune-wrapper sm:px-6 sm:py-0 md:gap-12 lg:grid-cols-2 xl:grid-cols-2"
      >
        <div class="rune-panel md:gap-2.4 lg:col-span-1">
          <Tabs default-value="precision">
            <div class="flex items-center">
              <TabsList class="rune-tabs">
                <TabsTrigger
                  v-for="tab in tabs1"
                  :key="tab.value"
                  :value="tab.value"
                  @click="handleTabClick(tab.value)"
                >
                  <img class="i-rune" :src="tab.img" :alt="tab.name" />
                </TabsTrigger>
              </TabsList>
            </div>

            <div class="mt-4 rune-tab-content">
              <TabsContent
                v-for="tab in tabs1"
                :key="tab.value"
                :value="tab.value"
              >
                <Card>
                  <CardHeader>
                    <CardTitle class="ct-rune">
                      primary <span id="activeRune1"> / {{ tab.name }}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent class="rune-content">
                    <!-- RadioGroup for Keystone -->

                    <RadioGroup class="rune-grid">
                      <div
                        v-for="rune in filteredKeystoneRunes"
                        :key="rune.name"
                      >
                        <RadioGroupItem :id="rune.name" :value="rune.name" />
                        <Label :for="rune.name">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger as-child>
                                <img
                                  class="rune-key-img"
                                  :src="rune.img"
                                  :alt="rune.name"
                                  @click="handleRuneClick(rune.name)"
                                  :class="{
                                    'animate-bounce': activeRune === rune.name,
                                  }"
                                />
                              </TooltipTrigger>

                              <TooltipContent align="start" side="bottom">
                                <button
                                  @click="handleTipClick(rune)"
                                  class="flex align-middle sheet-trigger-btn"
                                >
                                  {{ rune.name }}
                                  <PanelRightClose
                                    stroke-width="2"
                                    :absolute-stroke-width="true"
                                    :size="13"
                                    class="ml-1 mt-0.5"
                                  />
                                </button>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                      </div>
                    </RadioGroup>

                    <!-- RadioGroup for Tier 1 -->

                    <RadioGroup class="-mt-3 rune-grid">
                      <div v-for="rune in filtered1Runes" :key="rune.name">
                        <RadioGroupItem :id="rune.name" :value="rune.name" />
                        <Label :for="rune.name">
                          <img
                            :src="rune.img"
                            :alt="rune.name"
                            class="rune-img"
                          />
                        </Label>
                      </div>
                    </RadioGroup>

                    <!-- RadioGroup for Tier 2 -->

                    <RadioGroup class="rune-grid">
                      <div v-for="rune in filtered2Runes" :key="rune.name">
                        <RadioGroupItem :id="rune.name" :value="rune.name" />
                        <Label :for="rune.name">
                          <img
                            :src="rune.img"
                            :alt="rune.name"
                            class="rune-img"
                          />
                        </Label>
                      </div>
                    </RadioGroup>

                    <!-- RadioGroup for Tier 3 -->

                    <RadioGroup class="rune-grid">
                      <div v-for="rune in filtered3Runes" :key="rune.name">
                        <RadioGroupItem :id="rune.name" :value="rune.name" />
                        <Label :for="rune.name">
                          <img
                            :src="rune.img"
                            :alt="rune.name"
                            class="rune-img"
                          />
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <div class="rune-panel md:gap-2.4 lg:col-span-1">
          <Tabs :default-value="defaultTab" v-model:modelValue="selectedTab">
            <div class="flex items-center">
              <TabsList class="rune-tabs">
                <TransitionGroup name="rt2" tag="button">
                  <TabsTrigger
                    v-for="tab in tabs2"
                    :key="tab.value"
                    :value="tab.value"
                    class="rune-2"
                  >
                    <img class="i-rune" :src="tab.img" :alt="tab.name" />
                  </TabsTrigger>
                </TransitionGroup>
              </TabsList>
            </div>

            <div class="mt-4 rune-tab-content">
              <TabsContent
                v-for="tab in tabs2"
                :key="tab.id"
                :value="tab.value"
              >
                <Card>
                  <CardHeader>
                    <CardTitle class="ct-rune">
                      secondary <span> / {{ tab.name }}</span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent class="pt-3 rune-content">
                    <RadioGroup class="rune-grid">
                      <div v-for="rune in filtereds1Runes" :key="rune.name">
                        <RadioGroupItem :id="rune.name" :value="rune.name" />
                        <Label :for="rune.name">
                          <img
                            :src="rune.img"
                            :alt="rune.name"
                            class="rune-img"
                          />
                        </Label>
                      </div>
                    </RadioGroup>

                    <RadioGroup class="rune-grid">
                      <div v-for="rune in filtereds2Runes" :key="rune.name">
                        <RadioGroupItem :id="rune.name" :value="rune.name" />
                        <Label :for="rune.name">
                          <img
                            :src="rune.img"
                            :alt="rune.name"
                            class="rune-img"
                          />
                        </Label>
                      </div>
                    </RadioGroup>

                    <RadioGroup class="rune-grid">
                      <div v-for="rune in filtereds3Runes" :key="rune.name">
                        <RadioGroupItem :id="rune.name" :value="rune.name" />
                        <Label :for="rune.name">
                          <img
                            :src="rune.img"
                            :alt="rune.name"
                            class="rune-img"
                          />
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
          <Card class="overflow-hidden">
            <CardContent class="p-6 text-sm">
              <div class="grid gap-3">
                <div class="font-semibold">Shards</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </KeepAlive>

  <Sheet
    :open="sheetOpen"
    @update:open="sheetOpen = $event"
    :rune="clickedRune"
  >
    <SheetContent>
      <SheetHeader>
        <SheetTitle>{{ clickedRune?.name }}</SheetTitle>
        <SheetDescription>
          <img :src="clickedRune?.img" :alt="clickedRune?.name" />
          <p>{{ clickedRune?.stats }}</p>
          <p>{{ clickedRune?.tier }}</p>
          <p>{{ clickedRune?.path }}</p>
          <p>{{ clickedRune?.wiki }}</p>
          <p>{{ clickedRune?.type }}</p>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { useDataStore } from "@/stores/dataStore";
import { ExternalLink } from "lucide-vue-next";

// Define the Rune interface
interface Rune {
  name: string;
  wiki: string;
  tier: number;
  type: string;
  img: string;
  stats: string;
  path: string;
}

// Use the data store
const dataStore = useDataStore();
console.log("dataStore");

type tabName = string;
var tabName = ref("precision");

type Tab = {
  id: number;
  name: string;
  value: string;
  img: string;
};

const tabs1: Tab[] = [
  {
    id: 1,
    name: "precision",
    value: "precision",
    img: new URL("/img/runes/precision.webp", import.meta.url).href,
  },
  {
    id: 2,
    name: "domination",
    value: "domination",
    img: new URL("/img/runes/domination.webp", import.meta.url).href,
  },
  {
    id: 3,
    name: "sorcery",
    value: "sorcery",
    img: new URL("/img/runes/sorcery.webp", import.meta.url).href,
  },
  {
    id: 4,
    name: "resolve",
    value: "resolve",
    img: new URL("/img/runes/resolve.webp", import.meta.url).href,
  },
  {
    id: 5,
    name: "inspiration",
    value: "inspiration",
    img: new URL("/img/runes/inspiration.webp", import.meta.url).href,
  },
];

const tabs2 = computed(() => {
  return tabs1.filter((tab) => tab.value !== tabName.value);
});

const handleTabClick = (value: string) => {
  tabName.value = value;
  console.log("first one:", value);
  return { tabName };
};

const selectedTab = ref("inspiration");
const defaultTab = computed(() => determineDefaultTab());

const determineDefaultTab = () => {
  const hasInspiration = tabs2.value.some((tab) => tab.value === "inspiration");
  const hasResolve = tabs2.value.some((tab) => tab.value === "resolve");

  if (!hasInspiration && hasResolve) {
    return "resolve";
  } else if (!hasResolve && hasInspiration) {
    return "inspiration";
  } else {
    return "precision"; // Default fallback if neither "resolve" nor "inspiration" is available
  }
};

// Watch for changes in tabs2 and update selectedTab if needed
watch(
  tabs2,
  (newTabs2) => {
    const hasInspiration = newTabs2.some((tab) => tab.value === "inspiration");
    const hasResolve = newTabs2.some((tab) => tab.value === "resolve");

    if (!hasInspiration && selectedTab.value === "inspiration") {
      selectedTab.value = "resolve";
    } else if (!hasResolve && selectedTab.value === "resolve") {
      selectedTab.value = "inspiration";
    }
  },
  { immediate: true },
);

//console.log("selected tab: ", selectedTab);
//console.log("default tab: ", defaultTab);

const Runes = ref<Rune[]>(dataStore.runes);

const filterRunes = (path: string, tier: number): Rune[] => {
  return Runes.value.filter(
    (rune: Rune) =>
      rune.path.toLowerCase() === path.toLowerCase() && rune.tier === tier,
  );
};

// Create computed properties for filtered runes

const filteredKeystoneRunes = computed(() => filterRunes(tabName.value, 0));
const filtered1Runes = computed(() => filterRunes(tabName.value, 1));
const filtered2Runes = computed(() => filterRunes(tabName.value, 2));
const filtered3Runes = computed(() => filterRunes(tabName.value, 3));

const filtereds1Runes = computed(() => filterRunes(selectedTab.value, 1));
const filtereds2Runes = computed(() => filterRunes(selectedTab.value, 2));
const filtereds3Runes = computed(() => filterRunes(selectedTab.value, 3));

const activeRune = ref<string | null>(null);

function handleRuneClick(runeName: string) {
  activeRune.value = runeName;

  // Remove the class after animation ends
  setTimeout(() => {
    activeRune.value = null;
  }, 500); // Duration of the animation
}

onMounted(async () => {
  handleTabClick;
  defaultTab;
});

const clickedRune = ref<Rune | null>(null);
const sheetOpen = ref(false);

const handleTipClick = (rune: Rune) => {
  clickedRune.value = rune;
  sheetOpen.value = true;
};
</script>

<style>
#main-runes {
  @apply w-full grid justify-items-center overflow-y-auto;

  .rune-wrapper {
    @apply w-2/3 grid flex-1 flex-grow justify-items-center gap-8 p-4;

    .rune-panel {
      @apply grid auto-rows-max items-center gap-2 w-full;
    }
  }
}

.rune-tabs {
  height: 3rem;
}

.hide-this-thing-very-much-ty {
  display: none;
}

.rune-tabs img {
  filter: grayscale(1) brightness(0) contrast(0.4);
}

.rune-tabs [data-state="active"] img {
  filter: grayscale(0) brightness(1) contrast(1);
}

.list-move,
.rt2-enter-active,
.rt2-leave-active {
  transition: all 0.5s ease;
}

.rt2-enter-from,
.rt2-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.rt2-leave-active {
  position: absolute;
}

.ct-rune {
  @apply align-middle tracking-normal text-base;
}

.ct-rune span {
  @apply tracking-wider font-serif italic font-light text-sm;
}

.i-rune {
  @apply h-7;
}

.rune-content {
  @apply grid gap-x-4 place-items-center grid-cols-1 gap-y-11 pb-10 align-middle;

  .rune-grid {
    @apply grid grid-cols-3 place-items-center w-full;

    button {
      display: none;
    }

    .rune-key-img {
      @apply w-16;
    }

    .rune-img {
      box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.75);
      @apply w-10 rounded-full;
    }

    .rune-key-img,
    .rune-img {
      @apply transition-all duration-300 ease-in grayscale-[0.8] opacity-90 scale-100;
    }

    .rune-key-img:hover,
    .rune-img:hover,
    [data-state="checked"] + label .rune-img,
    [data-state="checked"] + label .rune-key-img {
      @apply grayscale-0 opacity-100 scale-110;
    }
  }
}

.sheet-content {
  transition: transform 0.3s ease-out;
  transform: translateY(100%);
}

.sheet-content.is-open {
  transform: translateY(0);
}

.mouse-area {
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>
