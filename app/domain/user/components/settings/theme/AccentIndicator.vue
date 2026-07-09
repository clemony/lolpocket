<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
import type { AccentItem } from "~/domain/user/utils/theme/themeAccent"

const { item, open } = defineProps<
  ButtonProps & {
    item: AccentItem
    open?: boolean
  }
>()

const themeAccent = useThemeAccentPreference()
</script>

<template>
  <UTooltip
    :key="item.value"
    as-child
    disable-hoverable-content
    :text="item.label"
    arrow
    :ui="{ content: 'h-max! rounded-2xl' }"
    :content="{ side: 'top', sideOffset: 2 }">
    <UButton
      :style="{
        '--color-accent': `var(--color-${item.value})`,
      }"
      :icon="item.value === themeAccent ? 'i-tick' : item.icon ? item.icon : ''"
      :ui="{
        base: cn(
          'aspect-square size-7.5! justify-center rounded-full! transition-transform duration-300 ease-spring hover:scale-110',
          item.ui?.base
        ),
        leadingIcon: 'text-pc **:stroke-[12%]!',
      }"
      @click="item.onClick" />

    <template #content>
      <div class="inline-flex items-center gap-1">
        <UAvatar
          v-if="item.champion || item.value === 'legends'"
          icon="i-riot"
          :ui="{
            root: 'bg-n3',
            icon: 'text-nc!',
          }"
          :src="
            item.champion
              ? `/img/champion/${champIdByName(item.champion)}.webp`
              : undefined
          "
          size="2xs" />
        <div class="text-sm font-semibold text-nc">
          {{ item.label }}
        </div>
      </div>
    </template>
  </UTooltip>
</template>
