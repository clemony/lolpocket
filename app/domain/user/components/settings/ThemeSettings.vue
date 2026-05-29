<script setup lang="ts">
import { themeAccentOptions } from "~/components/user/utils/settings/theme/themeAccent"
import { colorModes } from "~/components/user/utils/settings/theme/themeBase"

const { orientation } = defineProps<{
  orientation?: "vertical" | "horizontal"
}>()

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
          :avatar="{
            src: `/img/champion/${champIdByName(accent.champion)}.webp`,
            size: 'lg'
          }"
          color="base"
          :ui="{
            base: cn(
              'gap-2 rounded-xl border-0! px-3 inset-ring-black/6! ring-offset-black!',
              themeAccent === accent.value
                ? 'ring ring-accent ring-offset-1 ring-offset-p0'
                : '',
              twBg[accent.value]
            ),
            label: 'font-bold text-white'
          }"
          :label="accent.label"
          @click="themeAccent = accent.value">
          <!--      <template #leading>
            <span class="size-3 rounded-full bg-accent" />
          </template> -->
        </UButton>
      </div>
    </section>
  </div>
</template>
