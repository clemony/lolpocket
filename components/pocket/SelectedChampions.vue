<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

const ts = useTempStore()

const pocket = ref(props.pocket)

const champs = computedAsync(() => {
  return pocket.value.champions.champions
})
</script>

<template>
  <transition-slide
    group :appear="false"
    class=" gap-3 grid grid-cols-4 h-auto items-center pt-4 px-0.25"
  >
    <button
      v-for="champion in champs"
      :key="champion.apiname"
      class="size-20 shadow-sm btn p-0 rounded-lg"
      :class="`group/${champion.apiname}`"
    >
      <Champion
        :key="champion.name"
        :champion="champion"
        :pocket="pocket"
        class="size-full shrink-0"
      />
    </button>

    <Placeholder
      class="size-20 rounded-lg bg-b2/70 border-b3/70" @click="ts.champSelectDrawerTrigger = true"
    >
      <i-no-champ class="size-13 opacity-30" />
    </Placeholder>
  </transition-slide>
</template>

<style scoped></style>
