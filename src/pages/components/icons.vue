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

const pocketIcon = defineModel({
  default: "teenyicons:folder-outline",
});

</script>

<template>
  <Icon :icon="pocketIcon" class="size-5 " />


  <div class="grid content-center grid-cols-6 gap-2 overflow-y-scroll auto-cols-auto auto-rows-auto scrollbar-hide ">
    <button v-for='icon in icons' class="btn-xs btn-ghost btn btn-square">
      <label>
        <icon :icon='icon' class="size-5 text-base-content" />

        <input type="radio" name="iconPicker" v-model="pocketIcon" :value="icon" class="hidden" />
      </label>
    </button>
  </div>



</template>

<style scoped></style>