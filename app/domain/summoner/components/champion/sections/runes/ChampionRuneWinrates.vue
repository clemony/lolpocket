<script lang="ts" setup>
const {
  class: className,
  path,
  runes
} = defineProps<{
  runes: Record<number, StatDetail>
  keystones?: Record<number, StatDetail>
  path: Path
  class?: HTMLAttributes["class"]
}>()
// todo fix
const loaded = ref(false)
const keystoneRunes = computed(() => path.slots?.[0]?.runes ?? [])
const keystoneCount = computed(() => keystoneRunes.value.length)
const tierSlots = computed(() => (path.slots ?? []).filter((s) => s.tier !== 0))
</script>

<template>
  <div
    :class="
      cn(
        'relative flex size-full max-w-60 min-w-40 flex-col gap-6 rounded-lg border border-p3 px-2 py-6 **:cursor-default',
        { 'order-last': path.name === 'Inspiration' },
        className
      )
    ">
    <div
      v-if="keystones"
      :class="
        cn(
          'z-2 flex w-full grow items-center justify-around',
          keystoneCount === 4 ? '' : 'gap-4'
        )
      ">
      <div
        v-for="keystone in keystoneRunes"
        :key="keystone.id"
        class="relative grid size-12"
        :data-id="keystone.id"
        data-type="rune"
        :data-interactive="true"
        data-size="lg">
        <Keystone
          :id="keystone.id"
          :class="
            cn(
              'flex size-12 justify-center opacity-50 contrast-130 grayscale transition duration-200 *:origin-center hover:scale-110 hover:opacity-100 hover:contrast-100 hover:grayscale-0 [&_img]:scale-116',
              {
                'opacity-100 grayscale-0': keystones?.[keystone.id],
                'scale-90': !keystones?.[keystone.id]
              },
              keystoneCount === 4 ? 'basis-1/4' : 'basis-1/3'
            )
          " />

        <WinrateIndicator
          v-if="keystones?.[keystone.id]"
          :value="keystones?.[keystone.id]?.winrate ?? 0" />
        <span
          v-if="keystones?.[keystone.id]"
          class="border-tint-neutral/50 absolute -bottom-3 z-1 inline-flex justify-self-center rounded-lg border bg-neutral/70 px-1.5 py-0.5 align-middle text-2xs! leading-none font-bold text-nc/80 shadow-sm ds-sm backdrop-blur-sm">
          {{ keystones[keystone.id]?.winrate }}
        </span>
      </div>
    </div>
    <div
      class="z-2 grid size-full place-items-center gap-y-4 self-end"
      :data-path="path.name">
      <div
        v-for="(slot, i) in tierSlots"
        :key="i"
        class="z-1 grid w-full grid-cols-3 place-items-center gap-4">
        <!--  <div
          :key="rune.id"
          class="relative grid size-12 place-items-center"
          :data-id="rune.id"
          data-type="rune"
          :data-interactive="true"
          data-size="lg"
          :data-label="
            runes?.[rune.id]
              ? `${runes[rune.id]?.games} game${runes[rune.id]?.games > 1 ? 's' : ''} - ${runes[rune.id]?.winrate}% WR`
              : ''
          "
        >
          <span
            :class="
              cn(
                'aspect-square size-12 shrink-0 overflow-hidden rounded-full shadow-sm drop-shadow-sm transition duration-300 hover:scale-106 hover:opacity-100 hover:brightness-100 hover:contrast-100 hover:grayscale-0',
                {
                  'scale-90 opacity-45 brightness-110 contrast-120 grayscale':
                    !runes?.[rune.id],
                  'opacity-100 grayscale-0': runes?.[rune.id],
                },
              )
            "
          >
            <img
              class="size-full scale-108"
              :src="`/img/rune/${runeToPath[rune.id]}/${rune.id}.webp`"
              :alt="ix().runeNameById(rune.id)"
            >
          </span>
          <WinrateIndicator
            v-if="runes?.[rune.id]"
            :value="runes?.[rune.id]?.winrate"
          />
          <span
            v-if="runes?.[rune.id]"
            class="absolute -bottom-2 z-1 inline-flex rounded-lg border border-tint-neutral/50 bg-neutral/70 px-1.5 py-0.5 align-middle text-2xs leading-none font-bold text-nc/80 shadow-sm ds-sm backdrop-blur-sm"
            :class="cn('')"
          >
            {{ runes[rune.id].winrate }}
          </span>
        </div> -->
      </div>
    </div>
  </div>
</template>
