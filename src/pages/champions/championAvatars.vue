<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { usePocketStore } from '../../stores/pocketStore';
import type { pocket } from '../../stores/pocketStore';
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateToPocket(pocket) {
  console.log('Navigating to pocket:', pocket.key);
  console.log(router.getRoutes());

  router
    .push({
      name: 'pocket',
      params: {
        pocketKey: String(pocket.key), // Convert to string if it's a number
      },
    })
    .catch((err) => {
      console.error('Error navigating to pocket:', err);
    });
}

const ps = usePocketStore();

const props = defineProps<{
  pocketKey: string;
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
      <template v-if="pocket.champions[0].champions.length > 0">
        <template v-for="(champion, index) in pocket.champions[0].champions" :key="index">
          <button v-if="index <= 2" class="z-0 items-center overflow-hidden rounded-full shadow-sm size-10 hover-effect"
            @click="() => ps.navigateToPocket(pocket)">
            <img :src="champion.img" class="scale-[115%]" />
          </button>

        </template>

      </template>
      <Placeholder v-else @click="() => ps.navigateToPocket(pocket)" />

      <button v-if="pocket.champions[0].champions.length > 3" class="flex placeholder"
        @click="() => ps.navigateToPocket(pocket)">
        <div class="flex items-center pl-1 overflow-hidden font-semibold rounded-full size-9 hover-effect">
          +<span class="ml-0.5">{{ length }}</span>
        </div>
      </button>






    </div>
  </div>

</template>

<style scoped></style>
