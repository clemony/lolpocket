<script setup lang="ts">
import { defineProvider } from "@nuxt/image/runtime"

const {
  title,
  class: className,
  //entry,
} = defineProps<{
  entry: RankedEntry | undefined
  title?: string
  class?: HTMLAttributes["class"]
}>()

const entry = {
  name: "",
  division: "3",
  loss: 70,
  lp: 82,
  queue: "420",
  tier: "Emerald",
  win: 100,
}
const data = computed(() => {
  if (!entry) return
  return [entry.win ?? 0, entry.loss ?? 0]
})
</script>

<template>
  <UCard
    :ui="{
      root: cn(
        'relative h-36 overflow-visible drop-shadow-sm drop-shadow-black/5',
        className,
      ),
      body: 'grid h-36 w-full grid-cols-3 place-items-center',
    }">
    <span
      class="field-legend absolute translate-x-3 -translate-y-2.5 place-self-start text-sm font-semibold tracking-tight text-n3 drop-shadow-2xs">
      {{ `Ranked ${title}` }}
    </span>
    <div class="mt-0.5 grid place-items-center overflow-hidden">
      <!-- crest -->
      <img
        v-if="!entry"
        class="size-24 object-contain opacity-40 drop-shadow-sm saturate-0"
        alt="unranked"
        src="/img/crests/unranked.webp" />

      <img
        v-else
        class="size-28 object-contain drop-shadow-md drop-shadow-black/30"
        :alt="entry?.tier?.toLowerCase()"
        :src="`/img/crests/${entry?.tier?.toLowerCase()}.webp`" />
    </div>

    <div class="relative grid size-full place-items-center">
      <!--     <div
        class="relative grid place-items-center rounded-full bg-p0 shadow-md drop-shadow-black/5 after:absolute after:size-[49px] after:rounded-full after:ring after:ring-pc/8">
        <div
          class="absolute size-[83%] rounded-full bg-p0 shadow-sm inset-shadow-morphic"></div> -->
      <ChampWinrate
        v-if="entry"
        :thickness="6"
        :entry
        :color="entry?.tier?.toLowerCase()"
        :size="20"
        :ui="{
          label: 'text-md! font-medium text-pc!',
          root: 'drop-shadow-sm',
        }" />
      <!--   </div> -->
    </div>

    <div
      :class="
        cn(
          'flex flex-col justify-between overflow-hidden py-3 text-end font-medium',
          { 'opacity-40': !entry },
        )
      ">
      <span class="capitalize">
        {{
          entry
            ? `${entry?.tier?.toLowerCase()} ${entry?.division}`
            : "Unranked"
        }}
      </span>

      <span class="text-lg font-semibold capitalize">
        {{ entry?.lp ?? 0 }} LP
      </span>

      <Tooltip
        side="bottom"
        :label="`${entry ? entry?.win + entry?.loss : 0} total`"
        class="-mr-px flex items-center justify-end gap-1 place-self-end pr-0 text-end text-xs text-nowrap decoration-dotted underline-offset-2 hover:underline">
        <span class="text-end">{{ entry ? entry.win : 0 }}W</span>

        <span class="text-end">{{ entry ? entry.loss : 0 }}L</span>
      </Tooltip>
    </div>
  </UCard>
</template>
