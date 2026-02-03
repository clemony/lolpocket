<script lang="ts" setup>
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
        'theme-${theme.name}',
        `
          group/theme hover-ring bg-b1 text-bc relative grid size-full!
          max-h-90 max-w-82 cursor-pointer
          grid-rows-[repeat(2,2fr)_repeat(2,0.5fr)] items-center justify-center gap-5 overflow-hidden rounded-lg px-6
          py-4 shadow-sm shadow-black/16 drop-shadow-xs select-none
        `,
        {
          'border-bc group-hover/label:ring group-hover/label:ring-offset-1':
            theme.name === activeTheme,
        },
        className,
      )
    "
  >
    <Button
      v-if="as().settings.theme === theme.name"
      class="relative grid aspect-square place-items-center rounded-full"
      size="sm"
      color="neutral"
    >
      <icon class="absolute size-6 **:stroke-3" name="tick" />
    </Button>
    <div v-else class="" />
    <div class="hidden h-32 w-full pt-3 pr-2 pl-1 -indent-1 md:block">
      <h4 class="leading-8 font-bold capitalize">
        {{ theme.name }}
      </h4>
      <p class="h-9 leading-5 text-pretty italic">
        '{{ theme.quote }}'
      </p>
      <p class="pr-4 text-end text-sm/4 text-pretty italic opacity-80">
        —{{ theme.champion }}
      </p>
    </div>

    <div class="grid">
      <div class="flex items-center gap-2 *:rounded-full">
        <div :class="cn('bg-b2 text-bc', colorChip)" />

        <div :class="cn('bg-b3 text-bc', colorChip)" />

        <div :class="cn('bg-b4 text-bc', colorChip)" />
        <div :class="cn('bg-n3 text-nc', colorChip)" />
        <div :class="cn('bgneutral text-nc', colorChip)" />
      </div>
    </div>
    <div class="text-bc mt-3 tracking-wide opacity-90 *:leading-3.5">
      <p class="text-[8px] font-semibold uppercase">
        lolpocket theme
      </p>
    </div>
  </Card>
</template>
