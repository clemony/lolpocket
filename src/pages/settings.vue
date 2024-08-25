<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useUserSettings } from "@stores/userSettings";
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";

const settings = useUserSettings();
const { dataTheme, dataTabSize } = storeToRefs(settings);

interface palettes {
  name: string;
  colors: {
    primary: colors;
    secondary: colors;
    accent: colors;
    info: colors;
    success: colors;
    warning: colors;
    error: colors;
  };
}

interface colors {
  primary: string;
  secondary: string;
  accent: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

const themes = ["light", "rainbow", "dark", "nord"];

const schema = [
  {
    key: "light",
    name: "light",
    themes: ["lofi", "light", "nordLight"],
  },
  {
    key: "dark",
    name: "dark",
    themes: ["wifi", "dark", "nordDark"],
  },
  {
    key: "nord",
    name: "dim",
    themes: ["nord"],
  },
];

interface schema {
  name: string;
  themes: string[];
}

const tabSizes: Record<number, { size: string; displayName: string }> = {
  1: { size: "tabs-xs", displayName: "tiny" },
  2: { size: "tabs-sm", displayName: "small" },
  3: { size: "tabs-normal", displayName: "normal" },
  4: { size: "tabs-lg", displayName: "large" },
};

// Current selected tab size and display name
const tabSize = ref(tabSizes[1].size);
const tabDisplayName = ref(tabSizes[1].displayName);
// Create a ref for the range value
const tabSizeValue = ref(1);

// Function to handle tab size change
const handleTabChange = (value: number) => {
  if (tabSizes[value]) {
    tabSize.value = tabSizes[value].size; // Update the size
    tabDisplayName.value = tabSizes[value].displayName; // Update the display name
    settings.dataTabSize = tabSizes[tabSize.value];
    return settings.dataTabSize;
  }
};

function updateTheme(theme: string) {
  settings.dataTheme = theme;
}
</script>

<template>
  <div class="grid grid-cols-2 w-full">
    <div class="grid grid-cols-1 mt-4">
      <h1 class="prose-lg font-semibold mt-6">Interface</h1>

      <div v-for="scheme in schema" class="flex gap-2 my-2 items-center">
        <input type="radio" :id="scheme.name" name="ui-scheme" class="radio  radio-xs shadow-inner" />

        <label :for="scheme.name" class="m-1 w-32 rounded-lg">
          <div class="w-full h-full" data-act-class="!outline-base-content" :data-set-theme="scheme.key">
            <div
              class="w-full h-full !text-xs ring-base-300 ring-1 shadow-md bg-base-100 text-base-content cursor-pointer rounded-lg overflow-hidden has-[:checked]:ring-2 has-[:checked]:ring-neutral-content"
              :data-theme="scheme.key">
              <div class="grid grid-cols-5 grid-rows-3 w-full h-10 rounded-btn">
                <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                <div class="bg-base-300 col-start-1 row-start-3"></div>
                <div
                  class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex gap-3 place-content-center items-center px-3">
                  <div class="font-semibold flex-grow">{{ scheme.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
    <div class="mockup-browser bg-base-300 border shadow-lg">
      <div class="mockup-browser-toolbar">
        <div class="input !bg-base-100 text-xs text content-center h-8 before:w-3 before:-mt-0.5 after:-mt-0.5">
          https://github.com/clemony/lolpocket
        </div>
      </div>
      <div class="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
    </div>
  </div>

  <h1 class="prose-lg font-semibold mt-6">Accents</h1>
  <div class="grid grid-cols-2">
    <div class="col-start-1 flex gap-4">
      <input type="radio" name="radio-1" class="radio" />
    </div>
    <div class="col-start-2"></div>

    <div class="grid grid-cols-2 grid-flow-row">
      <div tabindex="0" role="button" class="dropdown rounded m-0 p-0">
        <div class="join join-horizontal items-center bg-base-200 border border-base-300">
          <div class="w-[137px] p-0 m-0 join-item overflow-hidden !text-xs" data-act-class="!outline-base-content"
            :data-set-theme="dataTheme">
            <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" :data-theme="dataTheme">
              <div class="grid grid-cols-5 grid-rows-3">
                <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                <div class="bg-base-300 col-start-1 row-start-3"></div>
                <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                  <div class="font-semibold">{{ dataTheme }}</div>
                  <div class="flex flex-wrap gap-1">
                    <!-- Example color blocks -->
                    <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded">
                      <div class="text-primary-content text-sm font-semibold">
                        A
                      </div>
                    </div>
                    <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded">
                      <div class="text-secondary-content text-sm font-semibold">
                        A
                      </div>
                    </div>
                    <div class="bg-accent flex aspect-square items-center justify-center rounded w-5">
                      <div class="text-accent-content text-sm font-semibold">
                        A
                      </div>
                    </div>
                    <div class="bg-neutral flex aspect-square items-center justify-center rounded w-5">
                      <div class="text-neutral-content text-sm font-semibold">
                        A
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="join-item bg-base-200 w-5 flex place-content-center">
            <Icon icon="ph:caret-down" class="" />
          </div>
        </div>

        <ul tabindex="0"
          class="grid dropdown-content place-content-center menu bg-base-100 rounded-md z-[1] w-[160px] px-1 border border-base-300 shadow-md h-64 overflow-y-scroll overflow-x-hidden">
          <li v-for="theme in themes" :value="theme" class="my-1 first:pt-2 !text-xs" @click="updateTheme(theme)">
            <label
              class="p-0 m-0 border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
              data-act-class="!outline-base-content" :data-set-theme="theme">
              <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" :data-theme="theme">
                <div class="grid grid-cols-5 grid-rows-3">
                  <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                  <div class="bg-base-300 col-start-1 row-start-3"></div>
                  <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                    <div class="font-semibold">{{ theme }}</div>
                    <div class="flex flex-wrap gap-1">
                      <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded">
                        <div class="text-primary-content text-sm font-semibold">
                          A
                        </div>
                      </div>
                      <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded">
                        <div class="text-secondary-content text-sm font-semibold">
                          A
                        </div>
                      </div>
                      <div class="bg-accent flex aspect-square items-center justify-center rounded w-5">
                        <div class="text-accent-content text-sm font-semibold">
                          A
                        </div>
                      </div>
                      <div class="bg-neutral flex aspect-square items-center justify-center rounded w-5">
                        <div class="text-neutral-content text-sm font-semibold">
                          A
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <input type="radio" name="theme-dropdown" class="theme-controller hidden" :aria-label="theme"
                :value="theme" />
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <h1 class="prose-lg font-semibold mt-10">Tabs</h1>
  <div class="grid grid-cols-2 mt-6 gap-6 items-center">
    <div class="grid grid-cols-1 gap-2 place-items-center px-6">
      {{ tabDisplayName }}
      <input v-model="tabSizeValue" type="range" min="1" max="4" @input="handleTabChange(tabSizeValue)"
        class="range range-xs" />
    </div>
    <div :class="tabSize" role="tablist" class="tabs tabs-lifted">
      <a role="tab" class="tab">omg</a>
      <a role="tab" class="tab tab-active">so</a>
      <a role="tab" class="tab">{{ tabDisplayName }}</a>
    </div>
  </div>
</template>

<style scoped></style>
