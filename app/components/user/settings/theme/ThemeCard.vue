<script lang="ts" setup>
import { modeQuote } from "~/components/user/settings/theme/themeBase"

const { mode, class: className } = defineProps<{
  mode: string
  class?: HTMLAttributes["class"]
}>()
const emit = defineEmits<{
  select: [mode: string]
}>()
const systemTheme = useSystemThemeValue()
const themeAccent = useThemeAccentPreference()

const colorChip =
  "aspect-square inset-shadow-sm drop-shadow-xs size-9 flex items-center justify-center rounded-md shadow-sm"

const chips = [
  "bg-p2 text-pc",
  "bg-p3 text-pc",
  "bg-p4 text-pc",
  "bg-n3 text-nc",
  "bg-neutral text-nc"
]
const quote = computed(() => modeQuote[mode])
const previewTheme = computed(() =>
  mode === "system" ? systemTheme.value : mode
)
</script>

<template>
  <UCard
    :value="mode"
    :data-theme="previewTheme"
    :data-accent="themeAccent"
    :data-quote="mode"
    tabindex="0"
    :ui="{
      header: 'h-32 w-full pt-3 pr-2 pl-1',
      root: cn(
        'group/quote hover-ring noise relative flex size-full! h-90! max-h-90 w-82 max-w-82 grow cursor-pointer flex-col items-start justify-center gap-5 overflow-hidden rounded-lg bg-p0 px-6 py-4 text-pc shadow-sm shadow-black/16 drop-shadow-xs select-none',
        {
          'border-pc group-hover/label:ring group-hover/label:ring-offset-1':
            mode === user().settings?.theme
        },
        className
      )
    }"
    @click="emit('select', mode)"
    @keydown.enter.prevent="emit('select', mode)"
    @keydown.space.prevent="emit('select', mode)">
    <template #header>
      <h4 class="leading-8 font-bold capitalize">
        {{ mode }}
      </h4>
      <p class="h-9 leading-5 text-pretty italic">'{{ quote?.quote }}'</p>
      <p class="pr-4 text-end text-sm/4 text-pretty italic opacity-80">
        —{{ quote?.source }}
      </p>
    </template>

    <template #footer>
      <div class="grid">
        <div class="flex items-center gap-2 *:rounded-full">
          <div
            v-for="(chip, i) in chips"
            :key="i"
            :class="cn(chip, colorChip)" />
        </div>
      </div>
      <div class="mt-3 tracking-wide text-pc opacity-90 *:leading-3.5">
        <p class="text-[8px] font-semibold uppercase">
          {{ quote?.lpQuote }}
        </p>
      </div>
    </template>
  </UCard>
</template>
