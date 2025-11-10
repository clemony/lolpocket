<script lang="ts" setup>

</script>

<template>
  <div class="flex h-20 w-full items-center gap-4 overflow-hidden pr-2">
    <button class="group/up btn overflow-hidden pr-4 btn-ghost !btn-lg">
      <NuxtLink
        to="/"
        class="flex w-full items-center justify-start pt-px">
        <h4 class="!tracking-normal dst select-none">
          LP
        </h4>

        <span
          class="
            dr-30 expand-hide pointer-events-none mt-0.5 flex translate-y-3
            items-center gap-1 pl-3 opacity-0 transition-[translate_opacity]
            ease-in-out
            group-hover/up:translate-y-0 group-hover/up:opacity-100
          ">
          up
          <icon
            name="arrow-up"
            class="size-5" />
        </span>
      </NuxtLink>
    </button>
  </div>
</template>
