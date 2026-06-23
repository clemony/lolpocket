<script setup lang="ts">
import { useSidebar } from "~/domain/app/composables/useSidebar"

const { color = "base" } = defineProps<{
  color?: "base" | "transparent" | "primary"
}>()

const sidebar = useSidebar()

const { settings, hotkeys } = storeToRefs(user())
</script>

<template>
  <UHeader
    title="LP"
    :toggle="false"
    :ui="{
      root: 'z-50 translate-3d transform-gpu px-4',
      container: cn('px-3!', {
        ' backdrop-contrast-100 backdrop-saturate-100': color !== 'base',
        'bg-transparent!': color === 'transparent',
        'bg-p1!': color === 'primary',
      }),
      title: 'hidden',
      right: 'gap-5 pr-4',
    }">
    <template #left>
      <LpLogo :ui="{ base: 'min-w-10!' }" />
    </template>
    <div class="flex items-center gap-4">
      <slot name="center-leading" />
    </div>

    <template #right>
      <UButton
        icon="i-search"
        label="Search"
        variant="outline"
        :ui="{
          base: 'w-54! cursor-text rounded-xl bg-p0/30 align-baseline shadow-none inset-shadow-sm inset-ring-p3/60 drop-shadow-none hover:bg-transparent hover:inset-ring-pc/60 hover:fx-0!',
          leadingIcon:
            'size-4.5 align-icon opacity-50 group-hover/btn:opacity-50!',
          label: 'pr-4 align-baseline opacity-50',
        }"
        @click="sidebar.open('search')">
        <template #trailing>
          <div class="flex -space-x-0">
            <UKbd
              v-for="k in hotkeys?.search"
              :key="k"
              variant="ghost"
              size="md"
              square
              :ui="{
                base: cn('text-md! text-pc/50'),
              }"
              :value="k" />
          </div>
        </template>
      </UButton>

      <UButton
        icon="i-menu"
        color="neutral"
        aria-label="Command Center"
        variant="ghost"
        :ui="{
          base: 'rounded-xl',
          leadingIcon: 'size-5 opacity-60 group-hover/btn:opacity-100',
        }"
        @click="sidebar.open()" />
    </template>
  </UHeader>
</template>
