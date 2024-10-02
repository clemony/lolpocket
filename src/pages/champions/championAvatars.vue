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
    <div class="flex items-center py-0 mr-1 -space-x-4 avatar-group rtl:space-x-reverse ">
      <template v-for="(champion, index) in pocket.champions[0].champions" :key="index">
        <div v-if="index <= 2" class="z-0 items-center size-12 avatar">
          <img :src="champion.img" class="scale-110" />
        </div>

      </template>

      <div v-if="pocket?.champions[0]?.champions?.length > 3" class="avatar placeholder ">
        <div class="size-9 bg-neutral text-neutral-content">
          <span>+ {{ length }}</span>
        </div>
      </div>


      <div v-if="pocket?.champions[0]?.champions?.length == 0" class="flex items-center py-0 mx-1 ">
        <icon icon="lets-icons:add-ring-light" class="z-0 stroke-[0.9] items-center size-9" />
      </div>
    </div>
  </div>

</template>

<style scoped></style>
