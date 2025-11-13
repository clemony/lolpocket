<script lang="ts" setup>
import { getDeviceKey } from "~/utils/config/handleDevice";
</script>

<template>
  <button
    class="bgneutral/88! hover:ringneutral/50 group btn mx-3 flex h-8.5 cursor-pointer items-center gap-2 justify-self-end rounded-xl border-b3 bg-b1! px-3 py-0! inset-shadow-xs inset-shadow-black btn-sm btn-xs btn-neutral hover:ring-1"
    @click.stop="ui().commandOpen = true"
  >
    <icon
      name="search-bold"
      class="-mt-px size-4 text-nc group-hover:opacity-100"
    />

    <span class="text-3! font-light text-nc">{{ getDeviceKey() }} K</span>
  </button>
</template>
