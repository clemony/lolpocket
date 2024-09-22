<script setup lang="ts">
import { shallowRef } from 'vue';

import { useChampStore } from '../../stores/champStore';
import { useDataStore } from '../../stores/dataStore';

const ds = useDataStore();
const cs = useChampStore();
</script>

<template>
  <div class="">
    <div class="flex items-center py-0 mr-1 -space-x-4 avatar-group rtl:space-x-reverse ">
      <template v-for="(champion, index) in cs.champions2" class="">
        <div v-if="index <= 2" class="z-0 items-center w-12 h-12 avatar">
          <img :src="champion.img" class="scale-110" />

          <!--   <icon icon="teenyicons:x-circle-solid" class="absolute top-0 z-10 size-3 left-4" /> -->
        </div>
      </template>

      <!--       <div :class="{ hidden: cs.champions2.length > 0 }" class="self-center mr-6 text-sm font-light"></div> -->
      <!--         <div
          class="flex items-center avatar placeholder size-14 place-content-center"
          :class="{ 'border-transparent': is.buildChampions.length == 0 }">
          <div
            class="w-12 transition-all duration-500 rounded-full bg-neutral text-neutral-content"
            :class="{ empty: is.buildChampions.length == 0 }">
            <Icon
              icon="teenyicons:add-small-solid"
              class="hidden opacity-0 size-5"
              :class="{ show: is.buildChampions.length == 0 }" />

            <icon
              icon="ic:baseline-edit"
              class="size-3.5 opacity-0 hidden"
              :class="{ show: is.buildChampions.length > 0 }" />
          </div>
        </div> -->
    </div>
  </div>

</template>

<style scoped></style>
