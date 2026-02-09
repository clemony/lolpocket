<script setup lang="ts">
import { hyphenateChampionName } from "~/domain/champions/utils"

const { champKey, class: className } = defineProps<{
  class?: HTMLAttributes["class"]
  champKey?: string
}>()
const emit = defineEmits(["loaded"])

const loaded = ref(false)
const img = computed(() => (champKey ? getSplash(champKey, "load") : undefined))
const champName = computed(() => {
  if (!champKey) return ''
  return hyphenateChampionName(champNameByKey(champKey ?? '') ?? '')
})

watchEffect(() => {
  if (loaded.value) emit("loaded", loaded.value)
})
</script>

<template>
  <div
    as="div"
    :class="
      cn(
        'parallax group relative grid size-full cursor-pointer place-items-center rounded-xl **:select-none',
        { '': loaded },
        className
      )
    ">
    <div
      class="size-full"
      :class="
        cn(
          'group relative grid size-full cursor-pointer justify-center overflow-hidden rounded-lg bg-no-repeat **:select-none',
          className
        )
      "
      :style="{
        objectPosition: '50% -1.8rem',
      }">
      <Img
        class="absolute -top-8 rounded-xl! bg-size-[190%] object-cover *:rounded-xl"
        :src="img"
        :quality="60"
        :class="{
          'animate-in fade-in zoom-in inset-shadow-[0px_0px_10px_4px_#00000040] duration-500':
            loaded,
        }"
        :alt="`${champKey}-Splash`"
        @loaded="loaded = true">
        <slot />
      </Img>
    </div>

    <div
      v-show="champKey"
      class="hover:ringneutral/60 bgneutral/50 pointer-events-none absolute inset-0 grid items-end justify-start overflow-hidden rounded-xl px-3.5 py-4 text-left text-6xl leading-none font-bold tracking-tighter text-wrap break-all hyphens-manual whitespace-break-spaces text-nc opacity-0 transition-all duration-300 group-hover:opacity-100 hover:ring-offset-2 hover:ring-offset-p0/95">
      {{ champName }}
    </div>

    <div
      v-show="loaded"
      class="border-b4 absolute top-0 left-0 size-full rounded-xl border shadow-sm! drop-shadow-sm" />
  </div>
</template>
