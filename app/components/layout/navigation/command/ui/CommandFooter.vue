<script lang="ts" setup>
import { patchIndex } from "~~/shared/constants/patch-index"

const { reference } = defineProps<{
  reference: HTMLElement | null
}>()
const hotkeysOpen = defineModel<boolean>("openHotkeys", { default: false })
</script>

<template>
  <div
    class="min-h-8,5 flex h-8.5 items-center justify-between gap-2 border-t border-p3 px-2 pt-0.5">
    <div class="inline-flex items-center">
      <span class="px-3 text-lg font-[800] text-pc">LP</span>
      <UPopover
        :content="{
          side: 'top',
          align: 'start',
          alignOffset: -28,
          sideOffset: 4
        }"
        :ui="{ content: 'shadow-sm drop-shadow-sm' }">
        <UButton size="xs" variant="ghost">
          {{ patchIndex[0] }}
        </UButton>
        <template #content>
          <PatchPost :patch="patchIndex[0]" class="max-w-100" />
        </template>
      </UPopover>
    </div>
    <div class="flex items-center gap-1">
      <UButton
        color="neutral"
        variant="ghost"
        label="Open Command"
        :ui="{
          base: 'gap-3'
        }"
        size="xs">
        <template #trailing>
          <UKbd value="enter" />
        </template>
      </UButton>
      <LazyUSeparator orientation="vertical" class="h-4 border-p4/60!" />
      <UPopover
        v-model:open="hotkeysOpen"
        :ui="{
          content:
            'z-1 rounded-b-none border-0 shadow-none ring-0 drop-shadow-none'
        }"
        :content="{
          side: 'top',
          align: 'center',
          sideOffset: 4,
          collisionBoundary: reference,
          collisionPadding: 0,
          sideFlip: false
        }">
        <UButton
          variant="ghost"
          label="Hotkeys"
          :ui="{
            base: 'gap-3'
          }"
          size="xs">
          <template #trailing>
            <div class="flex items-center gap-1.25">
              <UKbd v-for="v in ['meta', 'K']" :key="v" square :value="v" />
            </div>
          </template>
        </UButton>

        <template #content>
          <HotkeyForm />
        </template>
      </UPopover>
    </div>
  </div>
</template>
