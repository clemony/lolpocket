<script lang="ts" setup>
import { modeQuote } from "~~/layers/ui/app/config/colorMode"

const { mode, class: className } = defineProps<{
  mode: string
  class?: HTMLAttributes["class"]
}>()

const colorChip =
  "aspect-square inset-shadow-sm drop-shadow-xs size-9 flex items-center justify-center rounded-md shadow-sm"

const chips = [
  "bg-p2 text-pc",
  "bg-p3 text-pc",
  "bg-p4 text-pc",
  "bg-n3 text-nc",
  "bg-neutral text-nc",
]
const quote = computed(() => modeQuote[mode])
</script>

<template>
  <UCard
    :value="mode"
    :data-quote="mode"
    :class="
      cn(
        'quote-${mode}',
        `group/quote hover-ring relative grid size-full! max-h-90 max-w-82 cursor-pointer grid-rows-[repeat(2,2fr)_repeat(2,0.5fr)] items-center justify-center gap-5 overflow-hidden rounded-lg bg-p0 px-6 py-4 text-pc shadow-sm shadow-black/16 drop-shadow-xs select-none`,
        {
          'border-pc group-hover/label:ring group-hover/label:ring-offset-1':
            mode === $colorMode.preference,
        },
        className
      )
    ">
    <UButton
      v-if="$colorMode.preference === mode"
      class="relative grid aspect-square place-items-center rounded-full"
      size="sm"
      color="neutral">
      <icon class="absolute size-6 **:stroke-3" name="tick" />
    </UButton>
    <div v-else class="" />
    <div class="hidden h-32 w-full pt-3 pr-2 pl-1 -indent-1 md:block">
      <h4 class="leading-8 font-bold capitalize">
        {{ mode }}
      </h4>
      <p class="h-9 leading-5 text-pretty italic">
        '{{ quote?.quote }}'
      </p>
      <p class="pr-4 text-end text-sm/4 text-pretty italic opacity-80">
        —{{ quote?.source }}
      </p>
    </div>

    <div class="grid">
      <div class="flex items-center gap-2 *:rounded-full">
        <div v-for="(chip, i) in chips" :key="i" :class="cn(chip, colorChip)" />
      </div>
    </div>
    <div class="mt-3 tracking-wide text-pc opacity-90 *:leading-3.5">
      <p class="text-[8px] font-semibold uppercase">
        lolpocket quote
      </p>
    </div>
  </UCard>
</template>
