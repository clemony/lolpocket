<script setup lang="ts">
const { runes, selected } = defineProps<{
  runes: any
  selected: number | null
}>()

const emit = defineEmits(['update:rune'])

const selectedRune = ref(null)

watch(() => selected, (newVal) => {
  if (newVal && newVal != selectedRune.value)
    selectedRune.value = selected
})
</script>

<template>
  <Field class=" !px-4 !m-0 items-center justify-center gap-y-16 flex flex-col relative w-full h-100 rounded-box  shadow-warm  **:select-none pb-12 ">
    <div class="absolute pointer-events-none size-full z-0 top-0 left-0 rounded-box overflow-hidden opacity-40">
      <div class="absolute size-full top-0 left-0 gradient !bg-size-[700%] mask-bottom-right-1 " :data-path="runes[0][0].path" />
    </div>
    <template v-if="runes && runes.length">
      <div
        v-for="(slot, i) in runes" :key="i" layout-id="slot"
        class="cursor-pointer flex z-1 -mt-2  justify-around w-full gap-3 ">
        <template v-if="i != 0">
          <div
            v-for="rune in slot"
            :key="rune.id"
            v-tippy="rune.name === 'empty' ? 'Select a Path' : rune.name"
            layout-id="rune"

            class="size-fit rounded-full items-center justify-center animate-out fade-out"
            :class="`col-start-${rune.runeIndex + 1}`">
            <label
              :class="{
                'to-b1/40  rounded-full opacity-100 scale-110 grayscale-0 ': selected == rune.id,
                'h-full rounded-full opacity-75 transition-all duration-300 hover:opacity-100 hover:grayscale-0 group/r border-transparent relative cursor-pointer size-16 grid place-items-center aspect-square grayscale': rune.name !== 'empty',
              }">

              <input
                v-model="selectedRune"
                :value="rune.id"
                type="radio"
                class="peer hidden"
                @change="emit('update:rune', selectedRune)" />

              <Img

                :img="`/img/runes/${rune.path}/${rune.key}.webp`"
                :alt="rune.name"
                class="size-full inset-shadow-sides inset-shadow-black/60 rounded-full tldr-30 drop-shadow-[2px_2px_2px_#00000080]"
                :class="{ 'opacity-94 ': selected == rune.id }" />
            </label>
          </div>
        </template>
      </div>
    </template>

    <div v-else class="size-full grid grid-cols-3 gap-y-14">
      <Placeholder v-for="i in 9" :key="i" class="size-18 rounded-full place-self-center" />
    </div>
  </Field>
</template>