<script setup lang="ts">
const {
  id,
  class: className,
  runeSize = 16,
} = defineProps<{
  id: number
  class?: HTMLAttributes['class']
  runeSize?: number
}>()

const rune = shallowRef<Rune>(null)

const wrapperSize = computed(() => `size-${runeSize}`)
const imgSize = computed(() =>
  rune.value.tier === 0 ? `size-${runeSize + 1} ` : `size-${runeSize}`,
)
watchEffect(async () => {
  if (!id)
    return

  try {
    const module = await import(`#shared/records/runes/${id}.ts`)
    rune.value = module.default || null
  }
  catch (err) {
    console.error(`Failed to load champion for ${id}`, err)
    rune.value = null
  }
})
</script>

<template>
  <div
    v-if="rune"
    :key="rune.id"
    :class="
      cn(
        `
      animate-in fade-in tldr-30 relative flex w-full flex-col justify-center
      py-3
    `,
        className,
      )
    ">
    <div class="flex w-full items-center gap-4 px-4 **:select-none">
      <button
        v-tippy="{
          content: rune.tier === 0 ? 'Keystone' : null,
          theme: 'neutral',
          placement: 'top-start',
          offset: [-12, 8],
        }"
        :class="cn('group/s relative shrink-0', wrapperSize)">
        <span :class="cn('absolute top-0 left-0', imgSize)">
          <Img
            v-if="rune"
            :key="rune.name"
            :img="`/img/runes/${rune.id}.webp`"
            :alt="`${rune.name} Image`"
            :class="
              cn(`
              pointer-events-none absolute top-0 left-0 size-full rounded-full
              object-contain shadow-sm inset-shadow-sm drop-shadow-sm
            `)
            " />
        </span>
        <icon
          v-if="rune.tier === 0"
          name="star-fill"
          class="absolute bottom-0 left-0 size-3.5 **:text-g/90 group-hover/s:animate-heartbeat group-hover/s:drop-shadow-md group-hover/s:drop-shadow-g group-hover/s:delay-400" />
      </button>

      <div class="flex h-full w-full flex-col justify-center gap-1">
        <div class="flex items-center justify-between">
          <h2 class="grow leading-none dst">
            {{ rune.name }}
          </h2>
          <a
            :key="rune.id"
            v-tippy="{
              content: `Official LoL Wiki - ${rune.name}`,
              theme: 'neutral',
              placement: 'top-end',
              offset: [12, 8],
            }"
            :href="getWikiLink(rune.name)"
            target="_blank"
            alt="link to league wiki">
            <img
              src="/img/logos/wiki.webp"
              alt="wiki"
              class="size-5 shrink-0 rounded-sm" />
          </a>
        </div>

        <div class="flex w-full items-center gap-3">
          <Element size="sq-4">
            <span class="size-4.5">
              <img
                :src="`/img/paths/${rune.path}.webp`"
                :alt="rune.path"
                class="shrink-0 object-contain dst" />
            </span>
          </Element>

          <span class="grow text-4 font-medium italic">{{ rune.path }}</span>
        </div>
      </div>
    </div>

    <Separator
      color="neutral"
      class="px-4"
      :size="3" />

    <div
      :key="rune.id"
      class="flex h-max w-full max-w-105 flex-col justify-between gap-8 overflow-y-auto px-4.5">
      <span
        class="text-pretty whitespace-pre-line"
        v-html="rune.description" />
    </div>
  </div>
</template>