<script setup lang="ts">
const props = defineProps<{
  rune?: {
    name?: string
    tier?: string
    wiki?: string
    path?: string
    img?: string
    stats?: string
  }
}>()

const isCollapsed = ref("")

// Create a computed property for the rune
const rune = computed(() => {
  return props.rune // Fallback to rs().selectedRune if no prop is passed
})
</script>

<template>
  <div
    v-if="rune"
    class="relative h-fit max-h-full max-w-64 overflow-y-auto pb-6 shadow-[inset_0px_0px_40px_#00000009,rgba(50,50,105,0.15)_0px_2px_5px_0px,rgba(0,0,0,0.05)_0px_1px_1px_0px] transition-all duration-500">
    <div :key="rune.name" class="h-full" :rune="rune">
      <label
        :key="`${rune.name}1`"
        class="frost sticky top-0 left-0 z-50 flex h-fit! w-full flex-wrap items-center justify-end gap-4 rounded-t-xl border-b border-b-p3 px-4 py-1">
        <h2 class="sub-text flex grow items-center justify-start gap-3">
          <span class="grow">{{ rune.name || "Rune Detail" }}</span>

          <div v-if="rune">
            <img
              class="h-5 object-contain"
              :src="`/img/rune/${rune.path}.webp`" />
          </div>
        </h2>
      </label>

      <div
        id="wrap"
        :key="`${rune.name}2`"
        class="relative px-4 pt-3"
        :data-tier="rune.tier">
        <div
          :key="`${rune.name}img`"
          class="img-wrapper group relative z-0 before:absolute"
          :href="rune.wiki"
          target="_blank"
          :title="rune.wiki"
          :alt="rune.wiki">
          <div class="link-set">
            <img
              id="runeImg"
              class="float-right mt-1 ml-2.5 rounded-full"
              :src="rune.img" />

            <div class="link-icon flex items-center justify-center">
              <Icon class="size-3 text-pc" name="teenyicons:link-outline" />
            </div>
          </div>
        </div>

        <div
          id="runeStats"
          :key="`${rune.name}3`"
          class="mt-1 text-justify font-serif text-[0.76rem] whitespace-pre-line first-letter:float-left first-letter:mr-1.5 first-letter:text-4xl first-letter:font-bold first-line:font-bold first-line:tracking-widest first-line:uppercase">
          {{ rune.stats }}
        </div>
      </div>
    </div>
  </div>

  <div v-else />
</template>
