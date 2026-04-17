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
  "aspect-square inset-shadow-sm drop-shadow-xs size-8 flex items-center justify-center rounded-md shadow-sm"

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
      body: 'h-32 w-full grow pt-7!',
      root: cn(
        'group/quote hover-ring relative flex size-full! h-74! w-66 max-w-66 grow cursor-pointer flex-col items-start justify-center gap-5 overflow-hidden rounded-xl bg-p0 px-6 text-pc shadow-sm shadow-black/16 drop-shadow-xs select-none',
        {
          'border-pc group-hover/label:ring group-hover/label:ring-offset-1':
            mode === user().settings?.theme
        },
        className
      ),
      footer: 'justify-self-end pb-4!'
    }"
    @click="emit('select', mode)"
    @keydown.enter.prevent="emit('select', mode)"
    @keydown.space.prevent="emit('select', mode)">
    <h4 class="pl-0.5 text-2xl leading-10 font-black capitalize">
      {{ mode }}
    </h4>
    <p
      class="mt-1 h-9 pl-1 -indent-2! leading-6 font-medium text-pretty italic">
      "{{ quote?.quote }}"
    </p>
    <p class="text-end text-sm/4 font-medium text-pretty italic opacity-80">
      —{{ quote?.source }}
    </p>

    <template #footer>
      <div class="grid">
        <div class="-ml-1 flex items-center gap-2 *:rounded-full">
          <div
            v-for="(chip, i) in chips"
            :key="i"
            :class="cn(chip, colorChip)" />
        </div>
      </div>
      <div class="mt-3 tracking-wide text-pc opacity-90 *:leading-3.5">
        <p class="text-[8px] font-semibold uppercase">
          LP - {{ quote?.lpQuote }}
        </p>
      </div>
    </template>
  </UCard>
</template>
