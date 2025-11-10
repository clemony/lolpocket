<script lang="ts" setup></script>

<template>
  <div class="grid h-fit w-70 grid-rows-4 gap-6">
    <div class="h-14 w-full rounded-xl border-b3 px-5">
      <input
        type="text"
        aria-label="save item set as..."
        placeholder="Save set as..."
        class="
          size-full dst
          placeholder:font-mono
        " />
    </div>

    <div class="">
      <button class="btn btn-square btn-xl">
        <icon name="add" />
      </button>
    </div>
  </div>
</template>
