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
const ds = useDataStore()
const ts = useTempStore()

const isCollapsed = ref('')

// Create a computed property for the rune
const rune = computed(() => {
  return props.rune || ts.selectedRune // Fallback to ts.selectedRune if no prop is passed
})
</script>

<template>
  <div
    v-if="rune"
    class="relative h-fit max-h-full max-w-64 overflow-y-auto pb-6 shadow-[inset_0px_0px_40px_#00000009,_rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition-all duration-500"
  >
    <div
      :key="rune.name"
      :rune="rune"
      class="h-full"
    >
      <!-------------------------------⟢ Header ⟣-------------------------------->

      <label
        :key="`${rune.name}1`"
        class="frost border-b-b3 sticky top-0 left-0 z-50 flex h-fit! w-full flex-wrap items-center justify-end gap-4 rounded-t-xl border-b px-4 py-1"
      >
        <h2 class="sub-text flex grow items-center justify-start gap-3">
          <span class="grow">{{ rune.name || 'Rune Detail' }}</span>
          <div v-if="rune">
            <img
              :src="`/img/runes/${rune.path}.webp`"
              class="h-5 object-contain"
            />
          </div>
        </h2>
      </label>

      <!-------------------------------⟢ Data ⟣-------------------------------->

      <div
        id="wrap"
        :key="`${rune.name}2`"
        :data-tier="rune.tier"
        class="relative px-4 pt-3"
      >
        <div
          :key="`${rune.name}img`"
          class="img-wrapper group relative z-0 before:absolute"
          :href="rune.wiki"
          target="_blank"
          :title="rune.wiki"
          :alt="rune.wiki"
        >
          <div class="link-set">
            <img
              id="runeImg"
              :src="rune.img"
              class="float-right mt-1 ml-2.5 rounded-full"
            />
            <div class="link-icon flex items-center justify-center">
              <Icon
                name="teenyicons:link-outline"
                class="text-bc size-3"
              />
            </div>
          </div>
        </div>
        <div
          id="runeStats"
          :key="`${rune.name}3`"
          class="first-letter:text-8 mt-1 text-justify font-serif text-[0.76rem] whitespace-pre-line first-letter:float-left first-letter:mr-1.5 first-letter:font-[700] first-line:font-[700] first-line:tracking-widest first-line:uppercase"
        >
          {{ rune.stats }}
        </div>
      </div>
    </div>
  </div>
  <div v-else></div>
</template>

<style scoped>
  /*
  [data-tier='0'] {
    .img-wrapper::before,
    .img-wrapper .link-icon {
      content: '';
      @apply absolute rounded-full content-[''];
    }
    #runeImg {
      @apply z-20 ml-0 size-[6rem] rounded-none p-1.5 drop-shadow-md;
    }

    .img-wrapper .link-icon {
      @apply bg-neutral top-[4rem] right-[-0.01rem] z-20 size-[1.5rem] shadow-md transition-all duration-500;
    }
    .link-set:hover .link-icon {
      @apply ring-neutral ring-offset-neutral rotate-180 ring-2;
    }
  }

  [data-tier='1'],
  [data-tier='2'],
  [data-tier='3'] {
    .img-wrapper::before,
    .img-wrapper .link-icon {
      content: '';
      @apply absolute rounded-full content-[''];
    }

    .img-wrapper .link-icon {
      @apply bg-neutral top-[2.17rem] right-[-0.01rem] z-20 size-[1.5rem] shadow-md transition-all duration-500;
    }

    #runeImg {
      @apply ring-b2 ring-offset-b3 size-14 ring-1 shadow-[inset_0px_0px_2px_3px_#00000099,_1px_2px_1px_2px_#00000018] ring-offset-1;
    }

    .link-set:hover .link-icon {
      @apply ring-neutral ring-offset-neutral rotate-180 ring-2;
    }
  } */
</style>
