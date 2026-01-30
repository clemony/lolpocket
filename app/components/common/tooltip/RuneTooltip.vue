<script setup lang="ts">
const { id, class: className } = defineProps<{
  id: number
  class?: HTMLAttributes['class']
}>()

const rune = shallowRef<Rune>(null)
const status = shallowRef<'idle' | 'loading' | 'success' | 'error'>('idle')

watchEffect(async () => {
  console.log('🥸 - id:', id)
  if (!id) return

  status.value = 'loading'
  try {
    const module = await import(`#layers/patch/shared/records/runes/${id}.ts`)
    rune.value = module.default || null
    console.log('🥸 - mod:', module)

    status.value = 'success'
  }
  catch (e) {
    status.value = 'error'
    console.error(e)
  }
})
</script>

<template>
  <div
    v-if="rune"
    :class="
      cn(
        'relative flex size-full max-h-80 cursor-default flex-col justify-center py-3',
        className,
      )
    "
  >
    <div class="flex size-full items-center gap-4 px-4 **:select-none">
      <button
        :title="rune.tier === 0 ? 'Keystone' : null"
        :class="
          cn('group/s relative size-12 shrink-0', {
            '[&_img]:size-14 [&_img]:-translate-y-1': rune.tier === 0,
            '[&_img]:size-12': rune.tier !== 0,
          })
        "
      >
        <span class="absolute top-0 left-0 grid size-full place-items-center">
          <Img
            v-if="rune"
            :key="rune.name"
            loading-type="spinner"
            :src="`/img/runes/${rune.id}.webp`"
            :alt="`${rune.name} Image`"
            :class="
              cn(`
              pointer-events-none absolute top-0 left-0 size-full rounded-full
              object-contain shadow-sm inset-shadow-sm drop-shadow-sm
            `)
            "
          />
        </span>
        <icon
          v-if="rune.tier === 0"
          class="**:text-g/90 group-hover/s:animate-heartbeat group-hover/s:drop-shadow-g absolute bottom-0 left-0 size-3.5 group-hover/s:drop-shadow-md group-hover/s:delay-400"
          name="star-fill"
        />
      </button>

      <div class="flex size-full flex-col justify-center gap-0.5">
        <div class="flex items-center justify-between">
          <h4 class="dst grow text-lg leading-none font-bold">
            {{ rune.name }}
          </h4>
          <a
            :key="rune.id"
            :title="`Official LoL Wiki - ${rune.name}`"
            :href="wikiLink(rune.name)"
            target="_blank"
            alt="link to league wiki"
          >
            <img
              class="size-5 shrink-0 rounded-sm"
              src="/img/logos/wiki.webp"
              alt="wiki"
            >
          </a>
        </div>

        <div class="flex w-full items-center gap-3">
          <Element size="sq-4">
            <span class="size-4.5">
              <img
                class="dst shrink-0 object-contain"
                :src="`/img/paths/${rune.path}.webp`"
                :alt="rune.path"
              >
            </span>
          </Element>

          <span class="grow text-sm font-medium italic">{{ rune.path }}</span>
        </div>
      </div>
    </div>

    <Separator class="px-4" color="neutral" :size="2" />

    <div
      :key="rune.id"
      class="flex size-full max-h-full max-w-full flex-col justify-between gap-8 overflow-y-scroll px-4.5"
    >
      <span class="text-pretty whitespace-pre-line" v-html="rune.description" />
    </div>
  </div>
</template>
