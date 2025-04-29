<script lang="ts" setup>
const { theme } = defineProps<{
  theme: any
}>()
</script>

<template>
  <label
    :class="`theme-${theme.name}`"
    class="cursor-pointer  select-none  w-full group/theme  rounded-box px-6 py-3 flex flex-col">
    <div
      class="bg-b1 text-bc shadow-sm border-b3  w-full overflow-hidden rounded-xl border"
      :data-theme="theme.name">
      <div class="grid h-full w-full grid-cols-[1fr_3fr]">
        <div class="bg-b2 grid items-end size-full justify-center px-2  py-3">
        </div>

        <div class=" px-4 h-full  py-3 grid">
          <span class="text-4 text-bc font-semibold capitalize">{{ theme.name }}
          </span>
          <div class="flex items-center gap-2 self-end justify-self-end">

            <div class="color-chip bg-b2 text-bc"></div>
            <div class="color-chip text-bc bg-b3"></div>
            <div class="color-chip !bg-neutral !text-nc"></div>
          </div>
        </div>

      </div>
    </div>

  </label>
</template>