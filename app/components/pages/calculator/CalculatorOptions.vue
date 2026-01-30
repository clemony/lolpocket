<script lang="ts" setup></script>

<template>
  <div class="grid h-fit w-70 grid-rows-4 gap-6">
    <div class="border-b3 h-14 w-full rounded-xl px-5">
      <input
        class="dst size-full placeholder:font-mono"
        type="text"
        aria-label="save item set as..."
        placeholder="Save set as..."
      >
    </div>

    <div class="">
      <button class="btn btn-square btn-xl">
        <icon name="add" />
      </button>
    </div>
  </div>
</template>
