<script setup lang="ts">
  import { VueDraggable } from 'vue-draggable-plus';
  const ts = useTempStore();

  const props = defineProps<{
    pocket: pocket;
  }>();

  const pocket = ref(props.pocket);

  const champions = computed(() => {
    return pocket.value?.champions[0]?.champions || [];
  });
</script>

<template>
  <VueDraggable
    v-if="pocket"
    v-model="pocket.champions[0].champions"
    :delay="0"
    :animation="300"
    :group="{ name: 'champs', pull: true, put: true, revertClone: false }"
    :prevent-on-filter="true"
    direction="horizontal"
    :bubbleScroll="false"
    :scroll="false"
    ghostClass="ghosty"
    :force-fallback="true"
    :fallbackTolerance="0"
    fallbackClass="drag-clone"
    :fallbackOnBody="true"
    class="drag-draggable scrollbar-hide h-full flex-nowrap items-center gap-5! overflow-x-scroll overflow-y-clip px-2 py-2">
    <div
      v-for="(champion, index) in pocket.champions[0].champions"
      :key="champion.name"
      class="border-b3 shadow-warm relative grid size-22 shrink-0 place-items-center rounded-lg border">
      <TransitionGroup name="pop">
        <Champion
          :key="champion.name"
          :champion="champion"
          ref="list"
          class="size-22 shrink-0 overflow-hidden rounded-lg"
          dragClass="setDrag"></Champion>
      </TransitionGroup>

      <button
        @click="removeChamp(champion.name, pocket)"
        class="bg-b1 absolute top-1.5 right-1.5 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-70">
        <icon name="teenyicons:x-circle-solid" />
      </button>
    </div>
    <Placeholder class="sortable-ghost size-21 rounded-lg" />
  </VueDraggable>
</template>

<style scoped></style>
