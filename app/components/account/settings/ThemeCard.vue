<script lang="ts" setup>
import { ListboxItem, ListboxItemIndicator } from 'reka-ui'

const { theme, activeTheme } = defineProps<{
  theme: any
  activeTheme: string
}>()

const colorChip = 'aspect-square inset-shadow-sm drop-shadow-xs size-9 flex items-center justify-center rounded-md shadow-sm'
</script>

<template>
  <ListboxItem
    :value="theme.name"
    :class="cn(`theme-${theme.name}`, 'relative grid gap-3 rounded-xl cursor-pointer  !p-0 focus:outline-0 drop-shadow-sm shadow-warm-soft border border-b3     shrink-0 w-full items-center  dst', { 'border-bc ring ring-bc/60  ': theme.name == activeTheme })">
    <div class="cursor-pointer overflow-hidden select-none  w-full group/theme  rounded-xl flex flex-col">
      <div
        class="bg-b1 text-bc shadow-sm  w-full "
        :data-theme="theme.name">
        <div class="grid h-full w-full grid-cols-[1fr_4fr]">
          <div class="bg-b2 grid items-end size-full justify-center px-2 ">
          </div>

          <div class=" px-4 h-full pt-1.75 pb-3.5  grid">
            <span class="text-4 text-bc w-full text-end font-semibold capitalize mb-2">{{ theme.name }}
            </span>

            <div class="flex items-center gap-2 self-end justify-self-end">
              <div :class="cn('bg-b2 text-bc', colorChip)"></div>

              <div :class="cn('bg-b3 text-bc', colorChip)"></div>

              <div :class="cn('bg-n1 text-nc', colorChip)"></div>
            </div>
          </div>
        </div>
      </div>

      <ListboxItemIndicator class="absolute bg-n1 size-7 grid place-items-center -left-1.5 -top-1.5  rounded-full shadow-sm drop-shadow-sm">
        <icon
          name="tick-sm"
          class="size-6 text-nc stroke-[1.5]" />
      </ListboxItemIndicator>
    </div>
  </ListboxItem>
</template>