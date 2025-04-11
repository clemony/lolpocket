<script lang="ts" setup>
const props = defineProps<{
  theme: any
}>()

const as = useAccountStore()

function handleChange(theme) {
  as.dataTheme = theme
  as.themeClass = theme
  document.documentElement.setAttribute('data-theme', theme)
}
</script>

<template>
  <label
    v-tippy="{ content: theme.description, offset: [2, -16], delay: [1500, 0] }"
    :class="`theme-${theme.name}`"
    class="cursor-pointer  select-none  w-full group/theme  rounded-box px-8 pb-6 flex flex-col">
    <input
      v-model="as.dataTheme"
      type="radio"
      class="peer hidden absolute pointer-events-none"
      name="theme-changer"
      :value="theme.name"
      @change="handleChange(theme.name)" />

    <div class="w-full px-1 mb-2">
      <div class="flex justify-between items-center mb-2">

        <h4 class="capitalize dst">{{ theme.name }}</h4>

        <input
          type="checkbox"
          :checked="theme.name == as.dataTheme" class="checkbox checkbox-neutral drop-shadow-sm tldr-30 checkbox-sm group-hover/theme:opacity-50 rounded-full" :class="{ 'opacity-0': theme.name != as.dataTheme }" />

      </div>

    </div>
    <div
      class="bg-b1 text-bc shadow-sm border-b3 h-20 w-full overflow-hidden rounded-xl border"
      :data-theme="theme.name">
      <div class="grid h-full w-full grid-cols-[1fr_4fr]">
        <div class="bg-b2 grid size-full place-items-center"></div>
        <div class="flex h-full items-center gap-2 px-5 font-medium">
          <div class="text-4 grow px-1 font-semibold">Aa</div>
          <div class="color-chip bg-b2 text-bc"></div>
          <div class="color-chip text-bc bg-b3"></div>
          <div class="color-chip !bg-neutral !text-nc"></div>
        </div>
      </div>
    </div>

  </label>
</template>