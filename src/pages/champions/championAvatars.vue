<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { usePocketStore } from '../../stores/pocketStore';
import type { pocket } from '../../stores/pocketStore';


const ps = usePocketStore();

const props = defineProps<{
  pocketKey: number;
  pocket: pocket;
}>()

const pocket = computed<pocket | undefined>(() => {
  if (!ps.pockets || !props.pocketKey) return undefined;
  return ps.pockets.find((pocket) => pocket.key === props.pocketKey);
});

const length = computed(() => {
  const currentPocket = pocket.value;
  if (currentPocket && currentPocket.champions.length > 0) {
    return currentPocket.champions[0].champions.length > 3
      ? currentPocket.champions[0].champions.length - 3
      : '';
  }
  return ''; // Return an empty string if conditions are not met
});

onMounted(() => {
  console.log('Pocket:', pocket.value);
});
</script>

<template>
  <div v-if="pocket" class="">
    <div class="flex items-center gap-2 py-0 mr-1">
      <template v-for="(champion, index) in pocket.champions[0].champions" :key="index">
        <div v-if="index <= 2" class="z-0 items-center overflow-hidden rounded-md shadow-sm size-10">
          <img :src="champion.img" class="scale-[115%]" />
        </div>

      </template>

      <div v-if="pocket?.champions[0]?.champions?.length > 3" class="flex placeholder">
        <div class="flex items-center pl-1 overflow-hidden font-semibold rounded-md size-9">
          +<span class="ml-0.5">{{ length }}</span>
        </div>
      </div>


      <div v-if="pocket?.champions[0]?.champions?.length == 0"
        class="flex items-center overflow-hidden size-10 opacity-40">

        <img src="/img/ui/frame.webp" class="scale-110" />
        <icon icon="teenyicons:add-outline" class="absolute p-4 size-10" />
      </div>
    </div>
  </div>

</template>

<style scoped></style>
