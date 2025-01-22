<script setup lang="ts">
  import { themes } from 'assets/css/themes'

  const as = useAccountStore()

  const props = defineProps<{
    scrollTo: string
  }>()
  const route = useRoute()
  console.log(route)
  console.log(props.scrollTo)

  function handleChange(newData, newName) {
    as.dataTheme = newData
    as.themeClass = newName
    document.documentElement.setAttribute('data-theme', newData)
  }
</script>
<template>
  <NuxtLayout name="setting-section-layout">
    <label
      v-for="theme in themes"
      class="cursor-pointer">
      <input
        type="radio"
        class="peer hidden"
        name="theme-changer"
        :value="theme.name"
        :v-model="as.dataTheme"
        @change="handleChange(theme.name, theme.id)" />
      <SettingCard
        :key="theme.name"
        :title="theme.name"
        :description="theme.description"
        class="select-none h-62 pb-1">
        <template #header-badge>
          <input
            type="checkbox"
            :checked="theme.name == as.dataTheme"
            class="checkbox checkbox-sm pointer-events-none !rounded-full checkbox-neutral checked:bg-neutral checked:text-nc shadow-sm"
            :class="{ invisible: theme.name != as.dataTheme }" />
        </template>
        <div
          class="bg-b1 text-bc shadow-warm border-b3 h-20 w-full overflow-hidden rounded-xl border"
          :data-theme="theme.name">
          <div class="grid h-full w-full grid-cols-[1fr_4fr]">
            <div class="bg-b2 grid size-full place-items-center"></div>
            <div class="flex h-full items-center gap-2 px-5 font-medium">
              <div class="text-4 grow px-1 font-semibold">Aa</div>
              <div class="color-chip bg-b2 text-bc"></div>
              <div class="color-chip text-bc bg-b3"></div>
              <div class="color-chip bg-neutral text-nc"></div>
            </div>
          </div>
        </div>
      </SettingCard>
    </label>
  </NuxtLayout>
</template>
<style scoped></style>
