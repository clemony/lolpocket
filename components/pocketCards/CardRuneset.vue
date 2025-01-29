<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  pocket: pocket
  class?: HTMLAttributes['class']
  type?: string
  style: any
}>()

const pocket = ref(props.pocket)
console.log(pocket)

/* const set = computed(() => {
    let a = pocket.value.runes[0].runeSets[pocket.value.runes[0].starred]
    const b = pocket.value.runes[0].runeSets[0]
    !a && b ? (a = b)
    : !b ? (a = newRuneSet())
    : a
    return a
}) */

const runes = ref()
</script>

<template>
  <div
    class="relative flex w-full justify-evenly rounded-full p-2 inset-shadow-sm backdrop-brightness-95 backdrop-saturate-130"
    :style="{
      /* backgroundColor: `var(--${set.primary}-light)`, */
      /*   boxShadow: `0px 2px 5px 0px var(--${set.primary}), 0px 1px 1px 0px var(--${set.primary}-light))` */
    }"
  >
    <template v-for="(rune, i) in runes" :key="rune.name">
      <div
        class="shadow-warm z-10 size-9 shrink-0 rounded-full p-0"
        :style="{
          /*   backgroundColor: `var(--${set.primary})`, */
          zIndex: runes.length + 1 - i,
        }"
      >
        <img
          v-if="rune.name != 'empty'"
          :url="rune.img"
          class="z-0 size-full rounded-full"
          :class="{
            'shadow-inner shadow-black': rune.name != 'empty',
          }"
        />
        <ShadowedPlaceholder
          v-else
          class="border-dark-1/15 bg-light-2 z-0 size-full rounded-full"
          :style="{
            /*   backgroundColor: `var(--${set.primary}-light)`, */
          }"
        />
      </div>
    </template>

    <slot />
  </div>

  <!--  <div
        class="absolute -bottom-4 left-1 z-10 flex flex-col gap-2 py-7 pl-1.5 pr-8">
        <template v-for="rune in runes2">
            <div
                class="grid aspect-square size-9 place-items-center overflow-hidden rounded-full shadow-inner"
                :class="{
                    'overflow-hidden border border-neutral/80':
                        rune.name != 'empty',
                }">
                <LoadImg
                    v-if="rune.name != 'empty'"
                    :url="rune.img"
                    class="size-full" />
                <ShadowedPlaceholder v-else class="size-full rounded-full" />
            </div>
        </template>
    </div> -->
</template>

<style scoped></style>
