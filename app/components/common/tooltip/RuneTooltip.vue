<script setup lang="ts">
import type { BadgeProps, SeparatorProps } from "@nuxt/ui"

const { id, class: className } = defineProps<{
  id: number
  class?: HTMLAttributes["class"]
}>()

const idRef = computed(() => id ?? 0)

const { data: rune, status } = useFetch<Rune>(
  () => `/cdn/runes/${idRef.value}.json`,
  {
    server: false,
    lazy: true,
    immediate: false,
    key: () => `rune-${idRef.value}`,
    watch: [idRef],
  }
)
</script>

<template>
  <OnClickOutside
    v-if="rune"
    :class="
      cn(
        'relative flex size-full cursor-default flex-col justify-center pb-3',
        className
      )
    ">
    <div class="flex size-full items-center gap-2 px-3 py-2 **:select-none">
      <Img
        v-if="rune"
        :key="rune.name"
        loading-type="spinner"
        :src="`/img/runes/${rune.id}.webp`"
        :alt="`${rune.name} Image`"
        :class="
          cn(
            'size-12 shrink-0 rounded-full shadow-sm drop-shadow-sm *:scale-110 *:object-contain',
            {
              '[&_img]:size-14 [&_img]:-translate-y-1': rune.tier === 0,
              '[&_img]:size-12': rune.tier !== 0,
            }
          )
        " />

      <h2
        class="dst grow text-xl leading-none font-bold tracking-tight text-pc/80">
        {{ rune.name }}
      </h2>
    </div>

    <USeparator class="mb-3" :color="'p3' as SeparatorProps['color']" />
    <div
      :key="rune.id"
      class="flex size-full max-h-full w-full max-w-full flex-col gap-3 overflow-y-scroll px-4">
      <div class="flex items-center gap-2">
        <UBadge
          size="sm"
          :color="(rune.tier === 0 ? 'gold' : 'p2') as BadgeProps['color']"
          :trailing-icon="rune.tier === 0 ? 'lucide:key' : 'lucide:diamond'"
          :label="
            rune.tier === 0
              ? 'Keystone'
              : `Slot ${rune.tier} - ${rune.tierLabel}`
          " />

        <UBadge
          size="sm"
          :color="rune.path.toLowerCase() as BadgeProps['color']"
          :label="rune.path"
          :ui="{ trailingIcon: 'scale-110 translate-x-0.5 text-white' }"
          :trailing-icon="`path:${rune.path}`" />
      </div>

      <span
        class="text-2 font-medium text-pretty whitespace-pre-line"
        v-html="rune.description" />
    </div>
  </OnClickOutside>
</template>
