<script setup lang="ts">
const { champion, class: className, pocket: p } = defineProps<{
  class?: HTMLAttributes['class']
  champion: ChampionIndex
  pocket: Pocket
}>()

const pocket = computed (() => p)

const open = shallowRef<boolean>(false)
/* const hover = shallowRef<boolean>(false)
const debounced = refDebounced(hover, 400)

const active = computed (() => open.value || debounced.value)

watch(() => active.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
}) */
</script>

<template>
  <Popover
    ref="target"
    v-model:open="open">
    <PopoverTrigger
      :class="cn('hover:ring hover:ring-2 relative transition-all duration-300 overflow-hidden shadow-sm drop-shadow-sm **:cursor-context-menu group focus:ring focus:ring-offset-3 ring-offset-b1 !cursor-context-menu ring-bc/50 open:ring-offset-3 open:ring grid  group  rounded-lg size-26  *:pointer-events-none focus:*:pointer-events-auto', className)"
      tabindex="0">
      <ChampionIcon
        :id="champion.id"
        :title="champion.name"
        class=""
        @click="pocket.champions.push(champion.key)">
      </ChampionIcon>
      <span class="group-focus:opacity-100 group-open:opacity-100   transition-all duration-300   opacity-0 bg-neutral/70 **:text-nc/30 justify-self-center  p-2 absolute  size-full  flex justify-center">
        <icon
          name="gg:arrow-up"
          class="size-full mix-blend-screen" />
      </span>
    </PopoverTrigger>
    <PocketChampionMenu
      v-if="open"
      :pocket
      :champion />
  </Popover>
</template>