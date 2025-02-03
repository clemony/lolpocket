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
  <NuxtLink to="/pocket" class="btn btn-ghost h-26 !py-2 flex items-center  !px-2 rounded-lg w-full hover:bg-b2/40 hover-border-b2 group">
    <transition-slide
      group :appear="false"
      class=" gap-3 grid grid-cols-4 h-auto items-center w-full justify-between "
    >
      <button
        v-for="champion in champs"
        :key="champion.apiname"
        class="size-20 shadow-sm btn p-0 rounded-lg border-0 "
        :class="`group/${champion.apiname}`"
      >
        <Champion
          :key="champion.name"
          :champion="champion"
          :pocket="pocket"
          class="size-full shrink-0 !cursor-pointer"
        />
      </button>

      <Placeholder
        class="size-20 rounded-lg bg-b2/70 border-b3/75 transition-all duration-300 group-hover:bg-b1 group-hover:inset-shadow-sm group-hover:shadow-none group-hover:border-b3"
      >
        <i-no-champ class="size-13 opacity-30" />
      </Placeholder>
    </transition-slide>
  </NuxtLink>
</template>

<style scoped></style>
