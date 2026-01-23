<script lang="ts" setup>
const { class: className, path, runes } = defineProps<{
  runes: Record<number, StatDetail>
  keystones?: Record<number, StatDetail>
  path: RunePath
  class?: HTMLAttributes['class']
}>()

const loaded = ref(false)
</script>

<template>
  <div
    :class="cn('border-b3 relative flex size-full max-w-60 min-w-40 flex-col gap-6 rounded-lg border px-2 py-6 **:cursor-default',
               { 'order-last': path.name === 'Inspiration' }, className)">
    <div
      v-if="keystones"
      :class=" cn('z-2 flex w-full grow items-center justify-around', path.slots[0].runes.length === 4 ? '' : ' gap-4')">
      <div
        v-for="keystone in path.slots[0].runes"
        :key="keystone.id"
        :data-id="keystone.id"
        data-type="rune"
        :data-interactive="true"
        data-size="lg"
        class="relative grid size-12">
        <Keystone
          :id="keystone.id"

          :class="cn('flex size-12 justify-center opacity-50 contrast-130 grayscale transition duration-200 *:origin-center hover:scale-110 hover:opacity-100 hover:contrast-100 hover:grayscale-0 [&_img]:scale-116',
                     { 'grayscale-0 opacity-100': keystones?.[keystone.id],
                       'scale-90': !keystones?.[keystone.id] },
                     path.slots[0].runes.length === 4 ? 'basis-1/4' : 'basis-1/3')">
        </Keystone>

        <WinrateIndicator
          v-if="keystones?.[keystone.id]"
          :value="keystones?.[keystone.id]?.winrate" />
        <span
          v-if="keystones?.[keystone.id]"
          class="border-tint-neutral/50 bg-neutral/70 text-xxs! text-nc/80 dss absolute -bottom-3 z-1 inline-flex justify-self-center rounded-lg border px-1.5 py-0.5 align-middle leading-none font-bold shadow-sm backdrop-blur-sm">
          {{ keystones[keystone.id].winrate }}
        </span>
      </div>
    </div>
    <div
      :data-path="path.name"
      class="z-2 grid size-full place-items-center gap-y-4 self-end">
      <div
        v-for="slot, i in path.slots.filter(s => s.tier !== 0)"
        :key="i"
        class="z-1 grid w-full grid-cols-3 place-items-center gap-4">
        <div
          v-for="rune in slot.runes"
          :key="rune.id"
          :data-id="rune.id"
          data-type="rune"
          :data-interactive="true"
          data-size="lg"
          :data-text="runes?.[rune.id] ? `${runes[rune.id]?.games} game${runes[rune.id]?.games > 1 ? 's' : ''} - ${runes[rune.id]?.winrate}% WR` : ''"

          class="relative grid size-12 place-items-center">
          <span
            :class="
              cn('aspect-square size-12 shrink-0 overflow-hidden rounded-full shadow-sm drop-shadow-sm transition duration-300 hover:scale-106 hover:opacity-100 hover:brightness-100 hover:contrast-100 hover:grayscale-0', {
                ' brightness-110  opacity-45 contrast-120 scale-90  grayscale': !runes?.[rune.id],
                'opacity-100 grayscale-0 ': runes?.[rune.id] })">
            <img
              class="size-full scale-108"
              :src="`/img/runes/${runeToPath[rune.id]}/${rune.id}.webp`"
              :alt="ix().runeNameById(rune.id)" />
          </span>
          <WinrateIndicator
            v-if="runes?.[rune.id]"
            :value="runes?.[rune.id]?.winrate" />
          <span
            v-if="runes?.[rune.id]"
            :class="cn('')"
            class="border-tint-neutral/50 bg-neutral/70 text-xxs text-nc/80 dss absolute -bottom-2 z-1 inline-flex rounded-lg border px-1.5 py-0.5 align-middle leading-none font-bold shadow-sm backdrop-blur-sm">
            {{ runes[rune.id].winrate }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>