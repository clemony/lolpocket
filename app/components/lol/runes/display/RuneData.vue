<script setup lang="ts">
const {
  id,
  class: className,
} = defineProps<{
  id: number
  class?: HTMLAttributes['class']
}>()

const rune = shallowRef<Rune>(null)

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
    :class=" cn('relative flex flex-col justify-center py-3', className)">
    <div class="flex w-full items-center gap-4 px-4 **:select-none">
      <button

        :title="rune.tier === 0 ? 'Keystone' : null"
        :class="cn('group/s relative size-12 shrink-0', { '[&_img]:size-14 [&_img]:-translate-y-1': rune.tier === 0, '[&_img]:size-12': rune.tier !== 0 })">
        <span class="absolute top-0 left-0 grid size-full place-items-center">
          <Img
            v-if="rune"
            :key="rune.name"
            spinner
            :src="`/img/runes/${rune.id}.webp`"
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

      <div class="flex h-full w-full flex-col justify-center gap-0.5">
        <div class="flex items-center justify-between">
          <h4 class="grow text-4 leading-none font-bold dst">
            {{ rune.name }}
          </h4>
          <a
            :key="rune.id"
            :title="`Official LoL Wiki - ${rune.name}`"
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

          <span class="grow text-2 font-medium italic">{{ rune.path }}</span>
        </div>
      </div>
    </div>

    <Separator
      color="neutral"
      class="px-4"
      :size="2" />

    <div
      :key="rune.id"
      class="flex h-max w-full max-w-full flex-col justify-between gap-8 overflow-y-scroll px-4.5">
      <span
        class="text-pretty whitespace-pre-line"
        v-html="rune.description" />
    </div>
  </div>
</template>