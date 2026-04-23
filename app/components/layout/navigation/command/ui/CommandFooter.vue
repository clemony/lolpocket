<script lang="ts" setup>
import { patchIndex } from "~~/shared/constants/patch-index"

const { reference } = defineProps<{
  reference: HTMLElement | null
}>()
const emit = defineEmits(["update:open"])

const hotkeysOpen = defineModel<boolean>("openHotkeys", { default: false })
</script>

<template>
  <div
    class="min-h-8,5 flex h-8.5 items-center justify-between gap-2 border-t border-p3 px-2 pt-0.5">
    <div class="inline-flex items-center">
      <span class="px-3 text-lg font-[800] text-pc">LP</span>
      <LazyUPopover
        :content="{
          side: 'top',
          align: 'start',
          alignOffset: -38,
          sideOffset: 4
        }"
        :ui="{ content: 'px-1 pt-1 shadow-sm drop-shadow-sm' }">
        <UButton size="xs" variant="ghost">
          {{ patchIndex[0] }}
        </UButton>
        <template #content>
          <LazyPatchPost :patch="patchIndex[0]" class="max-w-100" />
        </template>
      </LazyUPopover>
    </div>
    <div class="flex items-center gap-1">
      <LazyUButton
        color="neutral"
        variant="ghost"
        label="Open Command"
        :ui="{
          base: 'gap-3'
        }"
        size="xs">
        <template #trailing>
          <UKbd value="enter" color="base" variant="outline" class="pt-px" />
        </template>
      </LazyUButton>
      <LazyUSeparator orientation="vertical" class="h-4 border-p4/60!" />

      <UButton
        variant="ghost"
        label="Hotkeys"
        :ui="{
          base: 'gap-3'
        }"
        size="xs"
        @click="emit('update:open', 'hotkeys')">
        <template #trailing>
          <div class="flex items-center gap-1.25">
            <LazyUKbd
              v-for="v in ['meta', 'K']"
              :key="v"
              square
              :value="v"
              color="base"
              variant="outline" />
          </div>
        </template>
      </UButton>
    </div>
  </div>
</template>
