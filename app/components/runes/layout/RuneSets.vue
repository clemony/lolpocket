<script setup lang="ts">
const props = defineProps<{
  pocket: Pocket
  selected: RuneSet
}>()

const emit = defineEmits(['update:selected'])

const pocket = ref(props.pocket)

/* const selectedSet = ref<RuneSet>(props.pocket.runes.sets[0])

const secondary = computed(() => {
  const a = Object.values(selectedSet.value.secondary.runes).filter(r => r != null || undefined)
  return a.filter(r => r.name != 'empty')
})
 */
const primaryColor = computedAsync (() => {

})
</script>

<template>
  <div class="flex flex-col gap-4 h-full">
    <!--  <DropdownMenu>
      <DropdownMenuTrigger
        class="rounded-lg   gap-4 cursor-pointer  p-3 hover:border-b3 hover:shadow-warm-2 hover:shadow-black/6 hover:shadow-inset-sm transition-all duration-300  border-transparent items-center    h-fit  justify-start  data-[state=open]:border-b3 group grid grid-cols-3">
        <div
          class="relative  shadow-outline shadow-black/19 grid aspect-square size-19  place-items-center items-center rounded-full " :style="{
            background: `linear-gradient(110deg, transparent, var(--color-${selectedSet.primary.path.toLowerCase()}))` }">
          <div class="from-b1/90 to-b1/40 grid place-items-center rounded-full bg-gradient-to-br size-full backdrop-blur-md overflow-hidden">
            <div class="p-2 ">
              <img
                :src="selectedSet.primary.runes[0].name == 'empty' ? '/img/runes/blankRune.webp' : `/img/runes/${selectedSet.primary.path}/${selectedSet.primary.runes[0].name.replace(/\s/g, '')}.webp`"

                class="drop-shadow-softer shrink-0 object-contain transition-all duration-200 hover:drop-shadow-sm" />
            </div>
          </div>
        </div>
        <div
          class="relative  shadow-outline shadow-black/15 grid aspect-square size-19 place-items-center items-center rounded-full  " :style="{
            background: `linear-gradient(110deg, transparent, var(--color-${selectedSet.secondary.path.toLowerCase()}))` }">
          <div class="from-b1/90 to-b1/40 grid size-19 place-items-center rounded-full bg-gradient-to-br p-1 backdrop-blur-md overflow-hidden ">
            <img
              :src="selectedSet.secondary.path == 'empty' ? '/img/runes/blankRune.webp' : `/img/runes/${selectedSet.secondary.path}.webp`"
              class="drop-shadow-softer shrink-0 h-10 w-auto object-contain transition-all duration-200 hover:drop-shadow-sm" />
          </div>
        </div>
        <icon name="select" class="size-5 justify-self-end mr-2" />
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-[var(--radix-dropdown-menu-trigger-width)] pr-0">
        <DropdownMenuItem
          v-for="(set, index) in pocket.runes.sets"
          :key="set.name + index"
          :class="set.primary">
          <label class="group flex h-full w-full items-center gap-4  pr-3">
            <input
              id="runeSets"

              v-model="selectedSet"
              :value="set"
              type="radio"
              class="peer hidden"
              @change="emit('update:selected', selectedSet)" />

            <icon name="tick-sm" class="size-5.5 peer-checked:opacity-100 opacity-0" />

            <div
              class="[&_#blank]:peer-checked:ring-n1/15  grid grid-cols-2 w-22 gap-3 place-items-center justify-self-center   transition-all duration-300 peer-checked:opacity-100  [&_#blank]:peer-checked:opacity-80 ">
              <img :src="set.primary.runes[0].name == 'empty' ? '/img/runes/blankRune.webp' : `/img/runes/${set.primary.path}/${set.primary.runes[0].name.replace(/\s/g, '')}.webp`" class="drop-shadow-soft h-10 w-auto aspect-square" :class="{ '!h-8.5': set.primary.runes[0].name == 'empty' }" />

              <img
                :src="`/img/runes/${set.secondary.path}.webp`"
                class="drop-shadow-softer h-10 w-auto p-1.5"
                :class="{ '!h-9': set.secondary.path == 'empty' }" />
            </div>

            <Grow />

            <button v-tippy="'Delete Set'" class="btn btn-sm btn-ghost px-2 -mr-3" @click.stop>
              <span class="size-3.5 relative">
                <icon name="x-sm" class="opacity-70 -top-0.75 -left-0.75 absolute shrink-0 mb-0.5 size-5" />
              </span>
            </button>

            <button v-tippy="set == pocket.runes.default ? 'Default Set' : 'Set as default'" class="btn btn-ghost btn-sm px-2 -mr-1" @click.stop="set == pocket.runes.default">

              <icon v-if="set == pocket.runes.default" name="star-fill" class="opacity-70 shrink-0 mb-0.5 size-3.5" />
              <icon v-else name="star" class="opacity-70 shrink-0 mb-0.5 size-3.5" />

            </button>
          </label>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          class=""
          @click="newRuneSet(pocket.key)">
          <icon
            name="add-sm"
            class="-mt-[2px] size-5.5 self-center" />
          Add Rune Set
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu> -->
  </div>
</template>

<style>

</style>
