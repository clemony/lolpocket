<script setup lang="ts">
definePageMeta({
  name: 'themes',
  path: '/settings/themes',
})

const as = useAccountStore()

function handleChange(newData, newName) {
  as.dataTheme = newData
  as.themeClass = newName
  document.documentElement.setAttribute('data-theme', newData)
}
</script>

<template>
  <div class="flex gap-12 flex-wrap">
    <label
      v-for="theme in themes"
      :key="theme.name"
      class="cursor-pointer min-w-110 w-110 max-w-110">
      <input
        v-model="as.dataTheme"
        type="radio"
        class="peer hidden"
        name="theme-changer"
        :value="theme.name"
        @change="handleChange(theme.name, theme.id)" />
      <SettingCard
        :key="theme.name"
        :title="theme.name"
        :description="theme.description"
        class="select-none h-62 pb-1">
        <template #header-badge>

          <input
            type="checkbox"
            :checked="theme.name == as.dataTheme" class="checkbox checkbox-neutral rounded-full" :class="{ invisible: theme.name != as.dataTheme }" />

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
              <div class="color-chip !bg-neutral !text-nc"></div>
            </div>
          </div>
        </div>
      </SettingCard>
    </label>
  </div>
</template>

<style scoped></style>
