<script setup lang="ts">
  import { useBStore } from '../../stores/buildStore';
  const bs = useBStore();

  const magic = ['Ability Power', 'Magic Pen'];
  const utility = ['Ability Haste', 'Heal + Shield Power', 'Mana', 'Mana Regen'];
  const normal = ['Movespeed', 'GP/10', 'Tenacity'];
  const defense = ['Health', 'Health Regen', 'Armor', 'Magic Resist'];
  const ad = ['Attack Damage', 'Attack Speed', 'Critical Strike', 'Armor Pen', 'Lethality'];
</script>

<template>
  <div class="dropdown">
    <div
      tabindex="0"
      role="button"
      class="items-center btn btn-xs btn-outline border-none rounded-md h-full relative font-normal flex-nowrap text-nowrap">
      <div
        :class="{ 'opacity-90': bs.tierFilters.length > 0 }"
        class="opacity-0 filter-on rounded-full size-2 after:size-2 after:absolute after:top-0 after:-right-[0px] after:bg-success bg-success absolute top-[3px] right-[0px] after:rounded-full after:animate-ping"></div>

      Stat
      <Icon icon="teenyicons:down-small-outline" />
    </div>

    <ul
      tabindex="0"
      class="dropdown-content backdrop-blur-md border border-base-300 menu bg-base-100/90 rounded-box z-[1] w-52 p-2 top-[29px] -left-[61px] shadow [&_label]:py-1 [&_span]:text-nowrap rounded-t-none rounded-b-lg">
      <li class="disabled pointer-events-none flex">
        <div class="flex items-center">
          <span class="grow text-xs flex align-middle font-semibold">FILTER / STAT</span>
          <button
            class="btn btn-outline btn-neutral btn-square border-none pointer-events-auto btn-xs"
            alt="Reset Filters"
            title="Reset Filters"
            @click="bs.statFilters.length = 0">
            <Icon
              icon="teenyicons:clockwise-outline"
              class="self-center size-3.5 -mt-[2px] p-0" />
          </button>
        </div>
      </li>
      <li v-for="stat in magic">
        <label class="cursor-pointer label gap-4 justify-start">
          <input
            type="checkbox"
            v-model="bs.statFilters"
            class="checkbox checkbox-xs checkbox-info rounded-[4px]"
            :value="stat"
            @change="console.log(bs.items.stats)" />
          <span class="label-text">{{ stat }}</span>
        </label>
      </li>

      <div class="divider-thin"></div>

      <li v-for="stat in utility">
        <label class="cursor-pointer label gap-4 justify-start">
          <input
            type="checkbox"
            v-model="bs.statFilters"
            class="checkbox checkbox-blue checkbox-xs rounded-[4px]"
            :value="stat" />
          <span class="label-text">{{ stat }}</span>
        </label>
      </li>

      <div class="divider-thin"></div>

      <li v-for="stat in defense">
        <label class="cursor-pointer label gap-4 justify-start">
          <input
            type="checkbox"
            v-model="bs.statFilters"
            class="checkbox checkbox-success checkbox-xs rounded-[4px]"
            :value="stat" />
          <span class="label-text">{{ stat }}</span>
        </label>
      </li>

      <div class="divider-thin"></div>

      <li v-for="stat in ad">
        <label class="cursor-pointer label gap-4 justify-start">
          <input
            type="checkbox"
            v-model="bs.statFilters"
            class="checkbox checkbox-warning checkbox-xs rounded-[4px]"
            :value="stat" />
          <span class="label-text">{{ stat }}</span>
        </label>
      </li>

      <div class="divider-thin"></div>

      <li v-for="stat in normal">
        <label class="cursor-pointer label gap-4 justify-start">
          <input
            type="checkbox"
            v-model="bs.statFilters"
            class="checkbox checkbox-xs rounded-[4px]"
            :value="stat" />
          <span class="label-text">{{ stat }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
