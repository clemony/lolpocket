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
    key: "dim",
    name: "dim",
    themes: ["nord"],
  },
];

interface schema {
  name: string;
  themes: string[];
}

const uiScheme = ref(0);
function handleUIScheme() {
  const currentTheme = uiScheme.value;
  settings.dataTheme = currentTheme;
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
  <div class="grid grid-cols-3 w-full p-6">
    <div class="grid grid-cols-1">
      <h1 class="prose-lg font-semibold">Interface</h1>

      <form v-for="scheme in schema" class="flex gap-2 my-2 items-center" @change="handleUIScheme()">
        <input type="radio" v-model="uiScheme" :value="scheme.name" :id="scheme.name" name="ui-scheme"
          class="radio  radio-xs shadow-inner" />

        <label :for="scheme.name" class="m-1 w-32 rounded-lg">
          <div class="w-full h-full" data-act-class="!outline-base-content">
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
      </form>
    </div>


    <div class="mockup-browser bg-base-300 border shadow-lg">
      <div class="mockup-browser-toolbar">
        <div class="input !bg-base-100 text-xs text content-center h-8 before:w-3 before:-mt-0.5 after:-mt-0.5">
          https://github.com/clemony/lolpocket
        </div>
      </div>
      <div class="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
    </div>


    <h1 class="prose-lg font-semibold mt-6 col-start-1">Accents</h1>


    <div class="grid grid-cols-[1fr_3fr] col-start-1">
      hihi
    </div>

    <div class="grid grid-cols-7 gap-2 col-start-2">
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
