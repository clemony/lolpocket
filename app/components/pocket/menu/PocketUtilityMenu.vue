<script lang="ts" setup>
import type { Pocket } from "~~/shared/schema";

const props = defineProps<{
  pocket: Pocket;
}>();

const pocket = ref(props.pocket);
</script>

<template>
  <div
    class="flex flex-col gap-2 *:w-full *:cursor-pointer *:justify-start *:py-3 *:text-left *:text-3 **:pointer-events-auto"
  >
    <button class="group btn btn-ghost btn-lg" @click="duplicatePocket(pocket)">
      <span>Duplicate</span>
    </button>

    <button class="group btn btn-ghost btn-lg">
      <span>Export to League Client</span>
    </button>

    <button class="group btn btn-ghost btn-lg">
      <span>Share Pocket Card</span>
    </button>

    <button
      class="group btn cursor-pointer btn-ghost btn-lg"
      @click="deletePocket(pocket)"
    >
      Send Pocket to Trash
    </button>
  </div>
</template>

<style scoped></style>
