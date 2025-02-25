<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
  selected: RuneSet
}>()

const emit = defineEmits(['update:selected'])

const pocket = ref(props.pocket)

const selectedSet = ref<RuneSet>(props.pocket.runes.sets[0])
</script>

<template>
  <div class="h-full w-26 absolute top-0 left-0 overflow-y-hidden  !overflow-x-visible bg-b1/70 backdrop-blur-md flex flex-col items-center py-4">
    <button
      v-tippy="'New Rune Set'"
      class="btn btn-ghost rounded-lg btn-square btn-xl"
      @click="newRuneSet(pocket.key)"
    >
      <icon
        name="add-sm"
        class="-mt-[2px] size-5.5 self-center"
      />
    </button>
    <div class="h-full w-full relative overflow-y-auto !overflow-x-visible">
      <div class="absolute inset-0 top-0 left-0  pt-5  flex flex-col items-center ">
        <HoverCard
          v-for="(set, index) in pocket.runes.sets"
          :key="set.name + index"
          :class="set.primary"
        >
          <HoverCardTrigger as-child>
            <label
              class="relative size-19 shadow-outline shadow-black/15 grid aspect-square   place-items-center overflow-visible items-center rounded-full transition-all duration-500" :style="{
                background: `linear-gradient(110deg, transparent, var(--color-${set.primary.path.toLowerCase()}))` }"
            >
              <input
                id="runeSets"

                v-model="selectedSet"
                :value="set"
                type="radio"
                class="peer hidden"
                @change="emit('update:selected', selectedSet)"
              />

              <div class="from-b1/90 to-b1/40 grid place-items-center rounded-full bg-gradient-to-br aspect-square  backdrop-blur-md overflow-hidden size-full ">
                <div class="p-1.5 size-full grid place-items-center">
                  <i-rune-icon v-if="set.primary.runes[0].name == 'empty'" class="size-11 opacity-60 dst" />
                  <img
                    v-else
                    :src="`/img/runes/${set.primary.path}/${set.primary.runes[0].name.replace(/\s/g, '')}.webp`"

                    class="object-contain transition-all duration-200 drop-shadow-sm"
                  />
                </div>

              </div>
              <div
                class="absolute -right-2 -bottom-2  shadow-outline shadow-black/15 grid aspect-square size-11 place-items-center  rounded-full  transition-all duration-500" :style="{
                  background: `linear-gradient(110deg, transparent, var(--color-${set.secondary.path.toLowerCase()}))` }"
              >

                <div class="from-b1/90 to-b1/40 grid size-full place-items-center rounded-full bg-gradient-to-br p-1 backdrop-blur-md overflow-hidden ">
                  <img
                    :src="set.secondary.path == 'empty' ? '/img/runes/blankRune.webp' : `/img/runes/${set.secondary.path}.webp`"
                    class=" shrink-0 h-7 w-auto object-contain transition-all duration-200 dst"
                  />
                </div>
              </div>
            </label>
          </HoverCardTrigger>
          <RuneSetHoverCard :pocket="pocket" :set="set" />
        </HoverCard>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>