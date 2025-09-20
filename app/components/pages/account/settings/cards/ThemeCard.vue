<script lang="ts" setup>
import { ListboxItem, ListboxItemIndicator } from 'reka-ui'

const {
  activeTheme,
  class: className,
  theme,
} = defineProps<{
  theme: any
  activeTheme: string
  class?: HTMLAttributes['class']
}>()

const colorChip
  = 'aspect-square inset-shadow-sm drop-shadow-xs size-9 flex items-center justify-center rounded-md shadow-sm'
</script>

<template>
  <Card
    :value="theme.name"
    :data-theme="theme.name"
    :class="
      cn(
        `theme-${theme.name}`,
        ' hover-ring overflow-hidden py-4 px-6 !size-full max-w-82 max-h-90 relative bg-b1 text-bc  grid grid-rows-[repeat(2,2fr)_repeat(2,0.5fr)] gap-5 rounded-lg cursor-pointer justify-center   group/theme  shadow-sm shadow-black/16 drop-shadow-xs  items-center cursor-pointer  select-none',
        {
          'border-bc group-hover/label:ring group-hover/label:ring-offset-1    ':
            theme.name === activeTheme,
        },
        className,
      )
    ">
    <Button
      v-if="$1"
      as().settings.theme="=="
      theme.name"
      size="sm"
      class="aspect-square rounded-full grid place-items-center relative"
      variant="neutral">
      <icon
        name="tick"
        class="**:stroke-3 size-6 absolute" />
    </Button>
    <div
      v-else
      class="" />
    <div class="hidden md:block pt-3 pr-2 pl-1 -indent-1 w-full h-32">
      <h4 class="font-bold leading-8 capitalize">
        {{ theme.name }}
      </h4>
      <p class="text-pretty leading-5 h-9 italic">
        '{{ theme.quote }}'
      </p>
      <p class="text-pretty text-end leading-4 pr-4 italic text-xs opacity-80">
        —{{ theme.champion }}
      </p>
    </div>

    <div class="grid">
      <div class="flex items-center gap-2 *:rounded-full">
        <div :class="cn('bg-b2 text-bc', colorChip)"></div>

        <div :class="cn('bg-b3 text-bc', colorChip)"></div>

        <div :class="cn('bg-b4 text-bc', colorChip)"></div>
        <div :class="cn('bg-n3 text-nc', colorChip)"></div>
        <div :class="cn('bgneutral text-nc', colorChip)"></div>
      </div>
    </div>
    <div class="text-bc tracking-wide mt-3 opacity-90 *:leading-3.5">
      <p class="font-semibold text-[8px] uppercase">
        lolpocket theme
      </p>
    </div>
  </Card>
</template>
