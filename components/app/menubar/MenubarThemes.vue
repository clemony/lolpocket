<script setup lang="ts">
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'

import { themes } from 'assets/css/themes'

const as = useAccountStore()
function handleChange(newData, newName) {
  console.log('💠 - handleChange - newName:', newName)
  as.dataTheme = newData
  console.log('💠 - handleChange - as.dataTheme:', as.dataTheme)
  as.themeClass = newName
  console.log('💠 - handleChange - as.theme:', as.themeClass)
  document.documentElement.setAttribute('data-theme', newData)
}
</script>

<template>
  <div v-bind="$attrs" class=" group">

    <div class="flex gap-2 i-c">
      <label
        v-for="theme in themes"
        :key="theme.name"
        class=" group/theme "
        :class="{
          ' rounded-md': as.dataTheme == theme.name,
          '!btn-ghost hover:bg-b2/60 hover:border-b2': as.dataTheme != theme.name,
        }"
      >
        <input
          v-model="as.dataTheme"
          type="radio"
          class="peer hidden"
          name="themeChanger"
          :value="theme.name"
          @change="handleChange(theme.name, theme.id)"
        />

        <div
          :data-theme="theme.name"
          class="text-bc shrink-0 border-neutral pointer-events-auto grid size-8 place-items-center rounded-lg border p-1 shadow-sm transition-all duration-300 z-0 group-hover/theme:opacity-100"
          :style="{ background: theme.color }"
        >
          <LittleIcon
            v-if="theme.icon"
            :icon="theme.icon"
            class=" !size-full stroke-2 shrink-0 z-10 !text-bc [&_svg]:!text-bc"
            :style="{ color: 'var(--bc) !important' }"
          />
        </div>

      </label>
    </div>
  </div>
</template>

<style scoped></style>
