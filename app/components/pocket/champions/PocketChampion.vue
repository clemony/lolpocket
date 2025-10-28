<script setup lang="ts">
<<<<<<< HEAD
import { motion } from 'motion-v'

=======
const { champion, class: className, pocket: p } = defineProps<{
  class?: HTMLAttributes['class']
  champion: ChampionIndex
  pocket: Pocket
}>()

const pocket = computed (() => p)

const open = shallowRef<boolean>(false)
>>>>>>> refs/remotes/origin/main
/* const hover = shallowRef<boolean>(false)
const debounced = refDebounced(hover, 400)

const active = computed (() => open.value || debounced.value)

watch(() => active.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
}) */
<<<<<<< HEAD

defineOptions({
  inheritAttrs: false
})

const { class: className, k, pocket: p } = defineProps<{
  class?: HTMLAttributes['class']
  k: string
  pocket: Pocket
}>()

const pocket = computed (() => p)

const open = shallowRef<boolean>(false)

const loaded = ref(false)

const variants = {
  loaded: {
    opacity: 1,
    scale: 1,
  },
  unloaded: {
    opacity: 0,
    scale: 0.8,
  }
}
const defaultFilters = {
  attackType: null,
  position: null,
  query: '',
  resource: null,
  role: null,
  sort: 'az'
}
onBeforeMount(() => {
  if (cs().filters === defaultFilters)
    console.log('🌱 - cs().filters === defaultFilters:', cs().filters === defaultFilters)
  loaded.value = true
})
</script>

<template>
  <motion.div
    :key="k"
    :variants
    :initial="loaded ? 'loaded' : 'unloaded'"
    :animate="loaded ? 'loaded' : 'unloaded'"
    exit="unloaded"
    layout="position">
    <Popover
      v-model:open="open">
      <PopoverTrigger
        v-bind="$attrs"
        :class="cn('hover:ring hover:ring-2 relative transition-all duration-300 target **:cursor-context-menu group focus:ring focus:ring-offset-3 ring-offset-b1 !cursor-context-menu ring-bc/50 open:ring-offset-3 open:ring grid  aspect-square group  rounded-lg size-full ', className)"
        tabindex="0">
        <ChampionIcon
          :k
          class="size-full "
          role="button"
          @loaded="loaded = true" />
      </PopoverTrigger>
      <PocketChampionMenu
        v-if="open"
        :pocket
        :k />
    </Popover>
  </motion.div>
=======
</script>

<template>
  <Popover
    ref="target"
    v-model:open="open">
    <PopoverTrigger
      :class="cn('hover:ring hover:ring-2 relative transition-all duration-300 overflow-hidden shadow-sm drop-shadow-sm **:cursor-context-menu group focus:ring focus:ring-offset-3 ring-offset-b1 !cursor-context-menu ring-bc/50 open:ring-offset-3 open:ring grid  group  rounded-lg size-full  *:pointer-events-none focus:*:pointer-events-auto', className)"
      tabindex="0">
      <ChampionIcon
        :id="champion.id"
        :title="champion.name"
        class=""
        role="button"
        @click="pocket.champions.push(champion.key)">
      </ChampionIcon>
      <span class="group-focus:opacity-100 group-open:opacity-100   transition-all duration-300   opacity-0 bg-neutral/70 **:text-nc/30 justify-self-center  p-4 absolute  size-full  flex justify-center">
        <icon
          name="ic:sharp-arrow-upward"
          class="size-full mix-blend-screen" />
      </span>
    </PopoverTrigger>
    <PocketChampionMenu
      v-if="open"
      :pocket
      :champion />
  </Popover>
>>>>>>> refs/remotes/origin/main
</template>