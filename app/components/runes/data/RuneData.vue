<script setup lang="ts">


const { runeIndex } = defineProps<{
  runeIndex: RuneIndex
}>()

const rune = ref<Rune>()
</script>

<template>
  <div
    v-if="rune"
    :key="rune.id"
    class="relative  animate-in fade-in  flex w-full max-w-114 justify-center flex-col tldr-30">
    <div
      class=" **:select-none mb-4 grid w-full items-center grid-cols-[50px_1fr]    tldr-20  ">
      <div
        class="group/link relative col-start-1  items-center justify-center">
        <Img
          v-if="rune"
          :key="rune.name"
          :img="`/img/runes/${rune.path}/${rune.key}.webp`"
          :alt="`${rune.name} Image`"
          class="'pointer-events-none size-16 drop-shadow-sm rounded-full  bg-black ring-1 shadow-sm ring-b3 inset-shadow-sm " />
      </div>

      <div class="grid h-full grid-cols-1  -mt-2">
        <div class="items-center justify-between gap-8 group py-1.5 px-3 transition-all duration-300 *:dst  flex">
          <h2
            class=" leading-6 grow    dst">
            {{ rune.name }}
          </h2>
        </div>

        <div class="flex gap-3 pl-3 items-center w-full">
          <img
            :src="`/img/runes/${rune.path}.webp`"
            class="h-5 w-auto dst" />

          <span class="text-4 font-medium grow">{{ rune.path }}</span>
        </div>
      </div>
    </div>

    <div
      :key="rune.id"
      class="max-w-105 px-1 !text-3 text-pretty whitespace-pre-line flex flex-col h-full w-full justify-between gap-8">
      {{ rune.details }}
      <a
        :key="rune.id"
        v-tippy="{ content: 'View on Official Wiki  🡵', placement: 'right-end', offset: [40, 3] }"
        :href="getWikiLink(rune.name)"
        target="_blank"
        alt="link to league wiki"
        class="flex items-center gap-3 hover:underline underline-offset-2 text-2 self-end">
        Official Wiki

        <icon
          name="link"
          class="size-3.5 opacity-60 group-hover:opacity-100 " />
      </a>
    </div>
  </div>
</template>

<style scoped></style>
