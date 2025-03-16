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
    :class="`theme-${theme.name}`"
    class="cursor-pointer min-w-64  @min-sm/settings:w-110 select-none h-62 bg-b1/90 pb-1 shadow-warm rounded-box border-b3/40 border px-8 pb-6 pt-8 grid grid-rows-2">
    <input
      v-model="as.dataTheme"
      type="radio"
      class="peer hidden absolute pointer-events-none"
      name="theme-changer"
      :value="theme.name"
      @change="handleChange(theme.name)" />

    <div class="w-full">
      <div class="flex justify-between items-center mb-3">

        <h3 class="capitalize dst">{{ theme.name }}</h3>

        <input
          type="checkbox"
          :checked="theme.name == as.dataTheme" class="checkbox checkbox-neutral drop-shadow-sm  rounded-full" :class="{ invisible: theme.name != as.dataTheme }" />

      </div>

      <p>{{ theme.description }}</p>
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