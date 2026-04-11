<script setup lang="ts">
import { themeAccentOptions } from "~/components/user/settings/theme/themeAccent"
import { colorModes } from "~/components/user/settings/theme/themeBase"
definePageMeta({
  title: "Theme",
  description: "Choose your app interface colors.",
  icon: "swatch",
  order: 4,
  path: "/settings/theme",
  prefix: "Settings"
})

const mode = useColorMode()
const themePreference = useThemePreference()
const themeAccent = useThemeAccentPreference()

function handleChange(theme: string) {
  //themePreference.value = theme
}
</script>

<template>
  <div class="flex w-full max-w-5xl flex-col gap-8">
    <div class="flex flex-wrap gap-6">
      <ThemeCard
        v-for="item in colorModes"
        :key="item"
        :mode="item"
        @select="handleChange" />
    </div>

    <section class="space-y-3">
      <div class="space-y-1">
        <h3 class="text-xl font-semibold">Accent</h3>
        <p class="text-sm text-n4">Customize the accent color.</p>
      </div>

      <div class="flex flex-wrap gap-3">
        <UButton
          v-for="accent in themeAccentOptions"
          :key="accent.value"
          :data-theme="mode"
          :data-accent="accent.value"
          variant="ghost"
          :ui="{
            base: cn(
              'h-11 gap-2 rounded-lg border border-p3 bg-p0 px-3 text-pc',
              themeAccent === accent.value
                ? 'ring ring-accent ring-offset-1 ring-offset-p0'
                : ''
            )
          }"
          :label="accent.label"
          @click="themeAccent = accent.value">
          <template #leading>
            <span class="size-3 rounded-full bg-accent" />
          </template>
        </UButton>
      </div>
    </section>
  </div>
</template>
