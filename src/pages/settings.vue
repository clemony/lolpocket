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
import { useGeneralStore } from "../stores/generalStore";
import { storeToRefs } from "pinia";
import { ref, computed, onMounted } from "vue";
const gs = useGeneralStore();


// Access user settings from the store
const settings = useGeneralStore();

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
  }
}

function handleFrameworkChoice() {
  const currentFramework = frameworks.find(f => f.key === frameworkChoice.value);

  // Update the theme and mode in the store
  if (currentFramework) {
    const theme = settings.dataAccent;
    settings.dataTheme = currentFramework.mode + theme;
    settings.dataMode = currentFramework.mode;
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


    <label class="cursor-pointer label">
      <span class="label-text">Reduce Motion</span>
      <input type="checkbox" v-model="gs.reducedMotion" class="toggle toggle-sm !rounded-md" />
      <span class="label-text">{{ gs.reducedMotion }}</span>
    </label>


    <div class="grid grid-cols-1">
      <h1 class="font-semibold prose-lg divider divider-start">Interface</h1>

      <form v-for="framework in frameworks" :key="framework.key" class="flex items-center gap-2 my-2">
        <input type="radio" v-model="frameworkChoice" :value="framework.key" :id="framework.name" name="ui-framework"
          class="shadow-inner radio radio-xs" @change="handleFrameworkChoice" />
        <label :for="framework.name" class="w-24 m-1 rounded-lg">

          <div class="w-full h-full" data-act-class="!outline-base-content">
            <div
              class="w-full h-full !text-xs ring-base-300 ring-1 shadow-warm bg-base-100 text-base-content cursor-pointer rounded-lg overflow-hidden has-[:checked]:ring-2 has-[:checked]:ring-neutral-content"
              :data-theme="framework.key + 'minimalist'">
              <div class="grid w-full h-10 grid-cols-5 grid-rows-3 rounded-btn">
                <div class="col-start-1 row-span-2 row-start-1 bg-base-200"></div>
                <div class="col-start-1 row-start-3 bg-base-300"></div>
                <div
                  class="flex items-center col-span-4 col-start-2 row-span-3 row-start-1 gap-3 px-3 bg-base-100 place-content-center">
                  <div class="flex-grow font-semibold">{{ framework.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </form>
    </div>

    <div
      class="col-start-2 m-6 border mockup-browser align-self-start max-w-96 bg-base-300 border-neutral/5 shadow-warm">
      <div class="mockup-browser-toolbar -ml-1.5">
        <div class="input !bg-base-100 text-xs text content-center  before:w-3 before:-mt-0.5 after:-mt-0.5 !ml-2">
          https://github.com/clemony/lolpocket
        </div>
      </div>
      <div class="flex justify-center px-4 py-20 bg-base-200">Hello!</div>
    </div>


    <h1 class="col-start-1 mt-6 font-semibold prose-lg">Accents</h1>


    <div class="grid grid-cols-1 col-start-1 gap-y-4">
      <form v-for="theme in themes" class="items-center " @change="handleThemeChoice()">
        <div class="  content-center grid grid-cols-[1fr_5fr] justify-start col-start-1 ">

          <input type="radio" v-model="themeChoice" :value="theme.key" :id="theme.name" name="ui-theme"
            class="self-center col-start-1 shadow-inner radio radio-xs justify-self-start" />
          <label :for="theme.name">
            <div
              class="grid grid-cols-1 col-start-2 gap-1 px-2 py-2 border justify-content-start rounded-btn border-base-300 max-w-36 shadow-warm">
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
