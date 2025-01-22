<script setup lang="ts">
  const ts = useTempStore()

  const props = defineProps<{
    pocket: pocket
  }>()

  const pocket = ref(props.pocket)

  const champs = computedAsync(() => {
    return pocket.value.champions[0].champions
  })
</script>

<template>
  <transition-slide
    group
    class="grid h-auto items-center pt-0">
    <Button
      variant="ghost"
      size="md"
      v-for="(champion, index) in champs"
      :key="champion.apiname"
      class="flex gap-3 items-center justify-start pl-2 pr-3"
      :class="`group/${champion.apiname}`">
      <Champion
        :key="champion.name"
        :champion="champion"
        :pocket="pocket"
        class="size-8 shrink-0 hover:ring-0 hover:ring-offset-0"
        :roundedMd="true" />
      <span class="text-start grow !tracking-normal !font-normal text-3">{{ champion.name }}</span>

      <icon
        name="x-sm"
        class="size-4.5 opacity-0"
        :class="`group/${champion.apiname}-hover:opacity-100`" />
    </Button>

    <Button
      variant="ghost"
      size="md"
      @click="ts.champSelectDrawerTrigger = true"
      class="flex gap-3.5 items-center justify-start pl-2 pr-3 mt-1">
      <icon
        name="add-sm"
        class="size-8 shadow-sm border p-0.5 border-b3 rounded-[5px] bg-neutral text-nc/90" />
      Champion
    </Button>
  </transition-slide>
</template>

<style scoped></style>
