<script lang="ts" setup>
const { class: className, path, runes, used } = defineProps<{
  runes: Record<number, StatDetail>
  keystones?: Record<number, StatDetail>
  path: RunePath
  used: string[]
  class?: HTMLAttributes['class']
}>()

const loaded = ref(false)
</script>

<template>
  <Card
    :data-path="path.name"
    :class="cn('relative flex min-w-40 flex-col gap-4 overflow-hidden px-4 py-6 **:cursor-default',
               { ' gradient after:absolute after:inset-0 after:z-0 after:size-full after:bg-linear-to-b after:from-b1/50 after:via-[color-mix(in_lch,var(--color-b2)_50%,var(--color-b1)_50%)] after:to-b1': used.includes(path.name) }, className)">
    <div
      v-if="keystones"
      :class=" cn('z-1 flex w-full grow items-center justify-between', path.slots[0].runes.length === 4 ? '' : ' gap-4')">
      <Keystone
        v-for="keystone in path.slots[0].runes"
        :id="keystone.id"
        :key="keystone.id"
        :data-id="keystone.id"
        data-tip="rune"
        :data-interactive="true"
        data-size="lg"

        :class="cn('flex size-10 justify-center opacity-30 contrast-104 grayscale transition duration-200 *:origin-center hover:scale-110 hover:opacity-100 hover:contrast-100 hover:grayscale-0 [&_img]:scale-116',
                   { 'grayscale-0 opacity-100': keystones?.[keystone.id] },
                   path.slots[0].runes.length === 4 ? 'basis-1/4' : 'basis-1/3')">
        <span
          v-if="keystones?.[keystone.id]"
          class="absolute -bottom-3 z-1 inline-flex justify-self-center rounded-lg border border-tint-neutral/50 bg-neutral/70 px-1.5 py-0.5 align-middle text-0 leading-none font-bold text-nc/80 shadow-sm dss backdrop-blur-sm">
          {{ keystones[keystone.id].winrate }}
        </span>
      </Keystone>
    </div>
    <div
      :data-path="path.name"
      class="grid size-full place-items-center gap-y-4 self-end">
      <div
        v-for="slot, i in path.slots.filter(s => s.tier !== 0)"
        :key="i"
        class="z-1 grid w-full grid-cols-3 place-items-center gap-4">
        <div
          v-for="rune in slot.runes"
          :key="rune.id"
          :data-id="rune.id"
          data-tip="rune"
          :data-interactive="true"
          data-size="lg"
          :data-text="runes?.[rune.id] ? `${runes[rune.id]?.games} game${runes[rune.id]?.games > 1 ? 's' : ''} - ${runes[rune.id]?.winrate}% WR` : ''"

          class="relative grid place-items-center">
          <span
            :class="
              cn('size-10 rounded-full border-2 border-black/70 shadow-sm drop-shadow-sm transition duration-300 hover:scale-106 hover:opacity-100 hover:brightness-100 hover:contrast-100 hover:grayscale-0', {
                'opacity-100 grayscale-0': runes?.[rune.id],
                ' brightness-120  opacity-25 contrast-130  grayscale ': !runes?.[rune.id],
              })">
            <img
              class="size-full scale-108"
              :src="`/img/runes/${runeToPath[rune.id]}/${rune.id}.webp`"
              :alt="ix().runeNameById(rune.id)" />
          </span>

          <span
            v-if="runes?.[rune.id]"
            class="absolute -bottom-3 z-1 inline-flex rounded-lg border border-tint-neutral/50 bg-neutral/70 px-1.5 py-0.5 align-middle text-0 leading-none font-bold text-nc/80 shadow-sm dss backdrop-blur-sm">
            {{ runes[rune.id].winrate }}
          </span>
        </div>
      </div>
    </div>
  </Card>
</template>