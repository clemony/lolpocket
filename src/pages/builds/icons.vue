<script setup lang="ts">
import { ref } from 'vue';
const icons = [
  "teenyicons:folder-outline",
  "teenyicons:attach-outline",
  "teenyicons:deno-outline",
  "teenyicons:plant-outline",
  "teenyicons:desklamp-outline",
  "teenyicons:cup-outline",
  "teenyicons:bulb-on-outline",
  "teenyicons:heart-outline",
  "teenyicons:github-outline",
  "teenyicons:gitlab-outline",
  "teenyicons:drop-outline",
  "teenyicons:gift-outline",
  "teenyicons:envelope-outline",
  "teenyicons:compass-outline",
  "teenyicons:game-controller-retro-outline",
  "teenyicons:ethereum-outline",
  "teenyicons:garage-outline",
  "teenyicons:gbc-outline",
  "teenyicons:headset-outline",
  "teenyicons:hospital-outline",
  "teenyicons:house-outline",
  "teenyicons:globe-americas-outline",
  "teenyicons:hdmi-cable-outline",
  "teenyicons:lego-outline",
  "teenyicons:loader-outline",
  "teenyicons:money-outline",
  "teenyicons:keyboard-outline",
  "teenyicons:key-outline",
  "teenyicons:in-ear-headphones-outline",
  "teenyicons:money-stack-outline",
  "teenyicons:paw-outline",
  "teenyicons:paws-outline",
  "teenyicons:phone-outline",
  "teenyicons:moon-outline",
  "teenyicons:mood-flat-outline",
  "teenyicons:mood-frown-outline",
  "teenyicons:mood-laugh-outline",
  "teenyicons:mood-sad-outline",
  "teenyicons:mood-smile-outline",
  "teenyicons:mood-surprised-outline",
  "teenyicons:mood-tongue-outline",
  "teenyicons:react-outline",
  "teenyicons:ruby-outline",
  "teenyicons:shield-outline",
  "teenyicons:star-outline",
  "teenyicons:sun-outline",
  "teenyicons:trophy-outline",
  "teenyicons:wallet-outline",
];

const buildIcon = defineModel({
  default: "teenyicons:folder-outline",
});

</script>

<template>

  <div class="dropdown dropdown-right !bg-transparent">
    <div tabindex="0" role="button"
      class="btn rounded-btn btn-sm btn-outline border-none px-1.5 pb-1.5 pt-1 size-12 mx-1">
      <Icon :icon="buildIcon" class="size-5 " />
    </div>
    <div tabindex="0"
      class="dropdown-content  -ml-[3.45rem] border border-base-300 backdrop-blur-md rounded-box z-10 w-[80vh]  h-[3.1rem] shadow-warm flex bg-base-100/70 gap-4">

      <div class="flex items-center self-center px-3 mr-1  absolute left-0">
        <Icon :icon="buildIcon" class="size-5 " />
        <div class="h-8 w-1 ml-2 border-r border-base-300 opacity-80"></div>
      </div>
      <div class=" scrollbar-hide overflow-x-scroll ml-11 content-center flex">
        <button v-for='icon in icons'
          class="btn  m-0 px-3 py-0 btn-outline  border-none rounded-none transition-colors duration-300">
          <label>
            <icon :icon='icon' class="size-5 opacity-80 " />

            <input type="radio" name="iconPicker" v-model="buildIcon" :value="icon" class="hidden" />
          </label>
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped></style>