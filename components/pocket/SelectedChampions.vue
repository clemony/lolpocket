<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

const ts = useTempStore()

const pocket = ref(props.pocket)

const champs = computedAsync(() => {
  return pocket.value.champions[0].champions
})
</script>

<template>
  <transition-slide
    group
    class="grid h-auto items-center pt-0"
  >
    <Button
      v-for="champion in champs"
      :key="champion.apiname"
      variant="ghost"
      size="md"
      class="flex gap-3 items-center justify-start pl-2 pr-3"
      :class="`group/${champion.apiname}`"
    >
      <Champion
        :key="champion.name"
        :champion="champion"
        :pocket="pocket"
        class="size-8 shrink-0 hover:ring-0 hover:ring-offset-0"
        :rounded-md="true"
      />
      <span class="text-start grow !tracking-normal !font-normal text-3">{{ champion.name }}</span>

      <icon
        name="x-sm"
        class="size-4.5 opacity-0"
        :class="`group/${champion.apiname}-hover:opacity-100`"
      />
    </Button>

    <Button
      variant="ghost"
      class="flex gap-4.5 justify-start font-normal  pl-2.5  w-full  mt-1 "
      @click="ts.champSelectDrawerTrigger = true"
    >
      <icon
        name="add-sm"
        class="size-6 shrink-0"
      />
      add
    </Button>
  </transition-slide>
</template>

<style scoped></style>
