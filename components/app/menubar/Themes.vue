<script setup lang="ts">
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
  <div
    class="collapse  w-full  group
    ">
    <input type="checkbox" class="collapse-input !h-8 " />
    <div class="collapse-title btn !text-2 font-medium btn-sm btn-ghost justify-start pl-4 gap-4 pr-2 !h-8 flex ">
      <icon
        name="teenyicons:paintbucket-outline"
        class="!size-4.5 shrink-0" />

      Themes

      <ExpandIndicator />
    </div>
    <div class="collapse-content py-0 flex flex-col gap-1">
      <label
        v-for="theme in themes"
        :key="theme.name"
        class="hover:bg-b2 flex h-10 items-center px-11">
        <input
          v-model="as.dataTheme"
          type="radio"
          class="peer hidden"
          name="themeChanger"
          :value="theme.name"
          @change="handleChange(theme.name, theme.id)" />

        <div
          class="flex items-center capitalize"
          :class="{
            'underline underline-offset-2': as.dataTheme == theme.name,
          }">
          {{ theme.name }}
        </div>
        <Grow />
        <div
          :data-theme="theme.name"
          :class="{
            'ring-neutral/60 inset-shadow-sm ring-1': as.dataTheme == theme.name && (theme.name == 'light' || theme.name == 'dawn'),
            'inset-shadow-sm ring-1 ring-white/60': as.dataTheme == theme.name && (theme.name == 'dusk' || theme.name == 'midnight'),
            'opacity-60': as.dataTheme != theme.name,
          }"
          class="text-bc border-neutral pointer-events-auto grid size-8 place-items-center rounded-lg border p-1 shadow-sm transition-all duration-300 hover:opacity-100"
          :style="{ background: theme.color }">
          <icon
            v-if="theme.icon"
            :name="theme.icon"
            class=" !size-full stroke-2"
            :style="{ color: 'var(--bc)' }" />
        </div>
      </label>
    </div>
  </div>
</template>

<style scoped></style>
