<script setup lang="ts">
  import { shallowRef } from 'vue';

  import { useBStore } from '../../stores/buildStore';
  import { useDataStore } from '../../stores/dataStore';

  const ds = useDataStore();
  const bs = useBStore();
</script>

<template>
  <div class="px-4 p flex justify-end">
    <div class="dropdown dropdown-end">
      <label
        role="button"
        for="my-drawer-4"
        class="drawer-button cursor-pointer hover:bg-transparent avatar-group -space-x-6 rtl:space-x-reverse w-fit mr-2 relative"
        @click="">
        <div
          v-for="champion in bs.buildChampions"
          class="avatar hover:drop-shadow-sm z-0">
          <div class="w-12">
            <img
              :src="champion"
              class="scale-110" />
          </div>
          <icon
            icon="teenyicons:x-circle-solid"
            class="absolute size-3 top-0 left-4 z-10" />
        </div>

        <div
          :class="{ hidden: bs.buildChampions.length > 0 }"
          class="self-center mr-6 text-sm font-light"></div>
        <!--         <div
          class="avatar placeholder size-14 flex items-center place-content-center"
          :class="{ 'border-transparent': bs.buildChampions.length == 0 }">
          <div
            class="bg-neutral text-neutral-content w-12 rounded-full transition-all duration-500"
            :class="{ empty: bs.buildChampions.length == 0 }">
            <Icon
              icon="teenyicons:add-small-solid"
              class="size-5 opacity-0 hidden"
              :class="{ show: bs.buildChampions.length == 0 }" />

            <icon
              icon="ic:baseline-edit"
              class="size-3.5 opacity-0 hidden"
              :class="{ show: bs.buildChampions.length > 0 }" />
          </div>
        </div> -->
      </label>
    </div>
  </div>
</template>

<style scoped></style>
