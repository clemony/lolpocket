<script setup lang="ts">
const { class: className, champKey,
}
  = defineProps<{
    class?: HTMLAttributes['class']
    champKey?: string
  }>()
const emit = defineEmits(['loaded'])
const ix = useIndexStore()

const loaded = ref(false)

watchEffect(() => {
  if (loaded.value)
    emit('loaded', loaded.value)
})
</script>

<template>
  <div
    as="div"
    :class="cn('grid place-items-center parallax relative cursor-pointer  rounded-xl size-full **:select-none  group relative', { '': loaded }, className)">
    <ChampionLoadScreen
      :quality="60"
      :champ-key="champKey"
      type="load"
      class=" !rounded-xl *:rounded-xl"
      @loaded="loaded = true" />

    <label
      v-show="champKey"
      class="absolute inset-0 rounded-xl hover:ring-offset-2  text-left hover:ring-offset-b1/95 hover:ring-n1/60 overflow-hidden  opacity-0 pointer-events-none group-hover:opacity-100 bg-n1/50 text-nc transition-all duration-300 py-4 px-3.5 grid justify-start text-12 break-all hyphens-manual tracking-tighter font-bold leading-none text-wrap items-end whitespace-break-spaces">
      {{ hyphenateChampionName(ix.champNameByKey(champKey)) }}

    </label>
    <!--
    <Skeleton v-else class=" z-0 top-0 left-0 rounded-xl absolute inset-0 opacity-90" :class="{ 'animate-out fade-out duration-600 ': loaded }" /> -->

    <div
      v-show="loaded"
      class="size-full absolute top-0 left-0 !shadow-sm drop-shadow-sm  border-b4 border   rounded-xl" />
  </div>
</template>

<style scoped></style>
