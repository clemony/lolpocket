<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useUserSettings } from '@stores/userSettings';
import { storeToRefs } from 'pinia';


const settings = useUserSettings();
const { dataTheme } = storeToRefs(settings);


const schema = [
  {
    key: "light",
    name: 'light',
    themes: [
      "lofi",
      "light",
      "nordLight",
    ]
  },
  {
    key: "dark",
    name: 'dark',
    themes: [
      "wifi",
      "dark",
      "nordDark",
    ]
  },
  {
    key: "nord",
    name: 'dim',
    themes: [
      "nord",
    ]
  }]

interface schema {
  name: string;
  themes: string[];
}


function updateTheme(theme: string) {
  settings.dataTheme = theme;
}

</script>

<template>
  <div id="main" class="flex-1">
    <div class="grid-header">
      <h2 class="">Settings</h2>
    </div>
    <!-- THEME TAB -->

    <div role="tablist" class="tabs tabs-lifted *:w-1/2">
      <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Settings" checked="true" />
      <div role="tabpanel" class="tab-content ">

        <div class="mockup-browser bg-base-300 border shadow-lg">
          <div class="mockup-browser-toolbar ">
            <div class="input !bg-base-100 text-xs text content-center h-8 before:w-3 before:-mt-0.5 after:-mt-0.5 ">
              https://github.com/clemony/lolpocket
            </div>

          </div>
          <div class="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
        </div>


        <div class="grid place-items-stretch w-full grid-cols-3 mt-4">

          <template v-for="scheme in schema">
            <label :for="scheme.name" class="m-1 rounded-lg">
              <div class="w-full h-full" data-act-class="!outline-base-content" :data-set-theme="scheme.key">
                <div
                  class="w-full h-full !text-xs ring-base-300 ring-1 shadow-md bg-base-100 text-base-content cursor-pointer rounded-lg overflow-hidden"
                  :data-theme="scheme.key">
                  <div class="grid grid-cols-5 grid-rows-3 w-full h-10 rounded-btn">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div
                      class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex  gap-3 place-content-center items-center px-3">

                      <div class="font-semibold flex-grow">{{ scheme.name }}</div>
                      <input type="radio" :id="scheme.name" name="ui-scheme"
                        class="radio radio-[black] bg-white radio-sm shadow-inner" />
                    </div>
                  </div>
                </div>
              </div>

            </label>


          </template>

        </div>

        <div class="grid grid-cols-2 grid-flow-row">
          <div tabindex="0" role="button" class="dropdown  rounded  m-0 p-0 ">
            <div class="join join-horizontal items-center bg-base-200 border border-base-300">
              <div class="w-[137px] p-0 m-0  join-item overflow-hidden !text-xs " data-act-class="!outline-base-content"
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
                          <div class="text-primary-content text-sm font-semibold">A</div>
                        </div>
                        <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded">
                          <div class="text-secondary-content text-sm font-semibold">A</div>
                        </div>
                        <div class="bg-accent flex aspect-square items-center justify-center rounded w-5">
                          <div class="text-accent-content text-sm font-semibold">A</div>
                        </div>
                        <div class="bg-neutral flex aspect-square items-center justify-center rounded w-5">
                          <div class="text-neutral-content text-sm font-semibold">A</div>
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

            <!--  <ul tabindex="0"
              class="grid dropdown-content place-content-center  menu bg-base-100 rounded-md z-[1] w-[160px] px-1 border border-base-300 shadow-md h-64 overflow-y-scroll overflow-x-hidden">
            <li v-for="scheme in schema" :value="theme" class="my-1 first:pt-2 !text-xs"
                @click="updateTheme(theme)">
                <label class=" p-0 m-0 border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline
            outline-2 outline-offset-2 outline-transparent" data-act-class="!outline-base-content"
                  :data-set-theme="theme">
                  <div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" :data-theme="theme"
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                      <div class="bg-base-300 col-start-1 row-start-3"></div>
                      <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-semibold">{{ theme }}</div>
                        <div class="flex flex-wrap gap-1">
            <!-- Example color blocks -->
            <!-- <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded">
              <div class="text-primary-content text-sm font-semibold">A</div>
            </div>
            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded">
              <div class="text-secondary-content text-sm font-semibold">A</div>
            </div>
            <div class="bg-accent flex aspect-square items-center justify-center rounded w-5">
              <div class="text-accent-content text-sm font-semibold">A</div>
            </div>
            <div class="bg-neutral flex aspect-square items-center justify-center rounded w-5">
              <div class="text-neutral-content text-sm font-semibold">A</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <input type="radio" name="theme-dropdown" class="theme-controller hidden" :aria-label="theme" :value="theme" />
    </label>
    </li>
    </ul>>-->
          </div>
        </div>


      </div>


      <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Account" />
      <div role="tabpanel" class="tab-content ">
        Tab content 2
      </div>

      <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="About" />
      <div role="tabpanel" class="tab-content text-base-content !pt-0">


        <div class="card rounded-box grid h-20 place-items-end *:font-mono ">

          <div class="text-xs grid  items-center justify-items-end ">
            <p class="">thanks for trying the app </p>
            <p class="inline-flex gap-1 items-center">
              <Icon icon="typcn:heart-outline" class="size-3" />
              from
              <Icon icon="teenyicons:arrow-right-outline" class="size-3" />
              clem's human
            </p>
            <a href="https://github.com/clemony/lolpocket"
              class="inline-flex gap-1 hover:font-bold hover:italic transition-all duration-300 underline items-center mt-2">
              <Icon icon="ph:github-logo" />
              <Icon icon="ph:at" />
              clemony
            </a>

          </div>

        </div>

        <div class="divider divider-start text-xs">MADE WITH</div>

        <div
          class="card rounded-box grid h-20 grid-cols-6 gap-3 grid-flow-row place-items-center *:text-base-content/85  *:size-6">
          <Icon icon="fontisto:vuejs" />

          <Icon icon="tabler:brand-vite" />
          <Icon icon="devicon-plain:tauri" />
          <Icon icon="file-icons:typescript" />
          <Icon icon="codicon:vscode-insiders" />
          <Icon icon="simple-icons:nodedotjs" />
          <Icon icon="simple-icons:tailwindcss" />
          <img class="grayscale contrast-200 brightness-50" src="/img/ui/daisyui.svg" />
        </div>
      </div>

    </div>
  </div>

</template>


<style scoped></style>