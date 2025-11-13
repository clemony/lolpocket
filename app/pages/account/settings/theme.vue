<script setup lang="ts">
import { themes } from "#shared/data";
import { ListboxContent, ListboxRoot } from "reka-ui";

definePageMeta({
  title: "themes",
  description: "Choose your app interface colors.",
  icon: "swatch",
  listClass: "**:stroke-[1.5] !size-4.75 -mr-0.25",
  path: "/settings/theme",
});

function handleChange(theme) {
  as().settings.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
}
</script>

<template>
  <ListboxRoot
    v-model:model-value="as().settings.theme"
    class="z-0 w-full py-4"
    :multiple="false"
    selection-behavior="replace"
    @entry-focus.prevent
    @update:model-value="handleChange(as().settings.theme)"
  >
    <ListboxContent class="grid w-fit grid-cols-2 gap-x-14 gap-y-10">
      <ListboxItem
        v-for="theme in themes"
        :key="theme.name"
        :value="theme.name"
        class="group/label grid size-full h-max items-center border-transparent!"
      >
        <ThemeCard
          class=""
          :theme="theme"
          :active-theme="as().settings.theme"
        />
      </ListboxItem>
    </ListboxContent>
  </ListboxRoot>
</template>
