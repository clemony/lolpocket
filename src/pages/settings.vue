<route lang="json">{
  "name": "Settings",
  "alias": "/settings",
  "meta": {
    "title": "Settings",
    "icon": "teenyicons:cog-outline"
  }
}</route>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useUserSettings } from "../stores/userSettings";
import { storeToRefs } from "pinia";
import { ref, computed, onMounted } from "vue";
const myStore = storeToRefs(useUserSettings());


// Access user settings from the store
const settings = useUserSettings();

// Use ref to track the selected framework
const frameworkChoice = ref("light");
const themeChoice = ref("minimalist");



// Framework options
const frameworks = [
  {
    key: "light",
    name: "light",
    mode: "light",
  },
  {
    key: "dark",
    name: "dark",
    mode: "dark",
  },
  {
    key: "neutral",
    name: "neutral",
    mode: "neutral",
  },
  {
    key: "dim",
    name: "dim",
    mode: "dim",
  },

];

const themes = [
  {
    key: "minimalist",
    name: "minimalist",
  },
  {
    key: "aesthetic",
    name: "aesthetic",
  },
  {
    key: "nord",
    name: "nord"
  },
  {
    key: "latte",
    name: "latte"
  }
];


function handleThemeChoice() {
  const currenttheme = themes.find(f => f.key === themeChoice.value);
  const mode = settings.dataMode;
  // Update the theme and mode in the store
  if (currenttheme) {
    settings.dataTheme = mode + currenttheme.key;
    settings.dataAccent = currenttheme.key;
    console.log();
  }
}

function handleFrameworkChoice() {
  const currentFramework = frameworks.find(f => f.key === frameworkChoice.value);

  // Update the theme and mode in the store
  if (currentFramework) {
    const theme = settings.dataAccent;
    settings.dataTheme = currentFramework.mode + theme;
    settings.dataMode = currentFramework.mode;
    console.log("currentframework:", currentFramework.mode);
    console.log("settings.dataMode:", settings.dataMode);
    console.log(" settings.dataTheme:", settings.dataTheme);
  }
}




// Initialize frameworkChoice when store data is ready
onMounted(() => {
  frameworkChoice.value = settings.dataMode || "light"; // Set from store or default to "light"
  themeChoice.value = settings.dataAccent || "minimalist"; // Set from store or default to "light"
});
</script>

<template>
  <div class="grid grid-cols-[1fr_3fr] w-full gap-6 p-6 pl-10">
    <div class="grid grid-cols-1">
      <h1 class="prose-lg font-semibold divider divider-start">Interface</h1>

      <form v-for="framework in frameworks" :key="framework.key" class="flex gap-2 my-2 items-center">
        <input type="radio" v-model="frameworkChoice" :value="framework.key" :id="framework.name" name="ui-framework"
          class="radio radio-xs shadow-inner" @change="handleFrameworkChoice" />
        <label :for="framework.name" class="m-1 w-24 rounded-lg">

          <div class="w-full h-full" data-act-class="!outline-base-content">
            <div
              class="w-full h-full !text-xs ring-base-300 ring-1 shadow-warm bg-base-100 text-base-content cursor-pointer rounded-lg overflow-hidden has-[:checked]:ring-2 has-[:checked]:ring-neutral-content"
              :data-theme="framework.key + 'minimalist'">
              <div class="grid grid-cols-5 grid-rows-3 w-full h-10 rounded-btn">
                <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                <div class="bg-base-300 col-start-1 row-start-3"></div>
                <div
                  class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex gap-3 place-content-center items-center px-3">
                  <div class="font-semibold flex-grow">{{ framework.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </form>
    </div>

    <div
      class="mockup-browser align-self-start max-w-96 col-start-2 m-6 bg-base-300 border border-neutral/5 shadow-warm">
      <div class="mockup-browser-toolbar -ml-1.5">
        <div class="input !bg-base-100 text-xs text content-center  before:w-3 before:-mt-0.5 after:-mt-0.5 !ml-2">
          https://github.com/clemony/lolpocket
        </div>
      </div>
      <div class="bg-base-200 flex justify-center px-4 py-20">Hello!</div>
    </div>


    <h1 class="prose-lg font-semibold mt-6 col-start-1">Accents</h1>


    <div class=" col-start-1 grid grid-cols-1 gap-y-4">
      <form v-for="theme in themes" class="items-center  " @change="handleThemeChoice()">
        <div class="  content-center grid grid-cols-[1fr_5fr] justify-start col-start-1 ">

          <input type="radio" v-model="themeChoice" :value="theme.key" :id="theme.name" name="ui-theme"
            class="radio col-start-1 radio-xs shadow-inner self-center justify-self-start" />
          <label :for="theme.name">
            <div
              class="grid grid-cols-1 col-start-2 justify-content-start rounded-btn border border-base-300 max-w-36 py-2 gap-1 px-2 shadow-warm">
              <div class="content-center text-xs font-semibold">
                {{ theme.name }}
              </div>


              <div :data-theme="settings.dataMode + theme.key"
                class="grid grid-cols-4 gap-1  *:size-6 *:rounded-md *:shadow-warm  *:ring-offset-1 *:ring-base-300/80 bg-transparent justify-items-center">
                <div class=" bg-primary ring-offset-primary/60"></div>
                <div class="bg-secondary ring-offset-secondary/60"></div>
                <div class="bg-accent ring-offset-accent/60"></div>
                <div class="bg-neutral ring-offset-neutral/60"></div>
                <!-- <div class="bg-info"></div>
            <div class="bg-success"></div>
            <div class="bg-warning"></div>
            <div class="bg-error"></div>
            <div class="bg-error-content"></div>-->
              </div>
            </div>
          </label>
        </div>
      </form>
    </div>



  </div>







</template>

<style scoped></style>
