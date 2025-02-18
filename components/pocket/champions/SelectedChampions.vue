<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

const ts = useTempStore()
const ss = useSidebarStore()
const isOpen = ref(ss.isSidebarOpen)
const pocket = ref(props.pocket)

const champs = computedAsync(() => {
  return pocket.value.champions.children
})
</script>

<template>
  <transition-slide
    group :appear="false"
    class="avatar-group shadow-sm rounded-full bg-b2 bordr-b3 py-2 px-0.5 -space-y-0 h-auto items-center flex-col flex i"
  >
    <template
      v-for="(champion, i) in champs"
      :key="champion.apiname"
    >
      <div
        v-if="i < 3"
        class="avatar size-14 border-b2 "
        :class="`group/${champion.apiname}`"
      >
        <Champion
          :key="champion.name"
          :champion="champion"
          :pocket="pocket"
          class="size-full shrink-0 !cursor-pointer transition-all duration-500"
          :class="{ 'grayscale !brightness-115 contrast-85 opacity-90': !isOpen }"
        />
      </div>
    </template>

    <div v-if="champs && champs.length > 3" class="avatar avatar-placeholder border-b2">
      <div class="bg-neutral text-nc  w-11">
        <span>+{{ champs.length - 3 }}</span>
      </div>
    </div>

    <Placeholder
      v-if="!pocket.champions.children.length"
      class="size-13 rounded-full bg-b2/70 border-b3/75 transition-all duration-300 hover:bg-b3/50 hover:inset-shadow-sm hover:shadow-none hover:border-b3"
    >
      <i-no-champ class="size-11 opacity-30" />
    </Placeholder>
  </transition-slide>
</template>

<style scoped></style>
