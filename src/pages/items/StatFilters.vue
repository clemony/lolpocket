<script setup lang="ts">
import { computed } from 'vue';
import { useItemStore } from '../../stores/itemStore';
const is = useItemStore();

const stats = [

  {
    name: "Mana",
    icon: 'teenyicons:drop-solid',
    bgClass: 'bg-blues/90',
    classList: '',
    cat: 'utility',
  },
  {
    name: "Mana Regen",
    icon: 'tabler:droplet-up',
    bgClass: 'bg-blues/90',
    classList: '',
    cat: 'utility',
  },
  {
    name: "Heal + Shield",
    icon: 'ph:shield-plus',
    bgClass: 'bg-blues/90',
    classList: '',
    cat: 'utility',
  },
  {
    name: "Ability Haste",
    icon: 'ph:hourglass',
    bgClass: 'bg-blues/90',
    classList: '',
    cat: 'utility',
  },
  {
    name: "Health",
    icon: 'mdi:plus-bold',
    bgClass: 'bg-success/90',
    classList: '',
    cat: 'utility',
  },
  {
    name: "Health Regen",
    icon: 'mdi:plus-bold',
    bgClass: 'bg-success/90',
    classList: '',
    cat: 'utility',
  },
  {
    name: "Armor",
    icon: 'ph:shield-chevron',
    bgClass: 'bg-success/90',
    classList: '',
    cat: 'utility',
  },
  {
    name: "Magic Resist",
    icon: 'ph:shield-star',
    bgClass: 'bg-success/90',
    classList: '',
    cat: 'utility',
  },
  {
    name: "Ability Power",
    icon: 'tabler:comet',
    bgClass: 'bg-info/90',
    classList: ' -rotate-90 stroke-[0.7] size-[1.1rem] -mr-[2px] ',
    cat: 'utility',
  },
  {
    name: "Magic Pen",
    icon: 'tabler:comet',
    bgClass: 'bg-info/90',
    classList: ' -rotate-90 size-[1.1rem] -mr-[2px] ',
    cat: 'utility',
  },
  {
    name: "Tenacity",
    icon: 'streamline:spiral-shape',
    bgClass: 'bg-base-300',
    classList: ' -rotate-90 size-[1.1rem] -mr-[2px] ',
    cat: 'utility',
  },
  {
    name: "GP/10",
    icon: 'ph:hand-coins-fill',
    bgClass: 'bg-warning/90',
    classList: '',
    cat: 'utility',
  },
  {
    name: "Movespeed",
    icon: 'mdi:run-fast',
    bgClass: 'bg-base-300',
    classList: '',
    cat: 'utility',
  },
  {
    name: "Crit",
    icon: 'game-icons:comet-spark',
    bgClass: 'bg-error/90',
    classList: '  ',
    cat: 'utility',
  },
  {
    name: "Armor Pen",
    icon: 'ph:shield-slash',
    bgClass: 'bg-error/90',
    classList: '',
    cat: 'utility',
  },
  {
    name: "Lethality",
    icon: 'mdi:target',
    classList: ' size-[1.05rem] -mr-[3px] ',
    bgClass: 'bg-error/90',
    cat: 'physical',
  },
  {
    name: "Attack Speed",
    icon: 'mdi:bow-arrow',
    bgClass: 'bg-warning/90',
    classList: '',
    cat: 'utility',
  },
  {
    name: "Attack Damage",
    icon: 'ph:axe',
    classList: ' size-[1.05rem] -mr-[3px] ',
    bgClass: 'bg-warning/90',
    cat: 'utility',
  }
];

const sorted = stats.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

interface stat {
  name: string;
  icon: string;
  cat: string;
  badgeClass?: string;
}
</script>

<template>

  <VDropdown theme="menuDark" placement="bottom-end" class="border-none join-item btn btn-xs btn-outline">

    <button class="flex">
      <icon icon="teenyicons:filter-outline" class="size-3.5" />
    </button>
    <template #popper>




      <!-- 
    <div v-if="is.statFilters.length > 0"
      class="z-10 flex items-center gap-3 pointer-events-auto justify-self-start btn-xs ">

      <div
        class="filter-on rounded-full size-2 after:size-2 after:absolute after:top-0 after:-right-[0px] after:bg-success bg-success relative mb-2 top-[3px] right-[0px] after:rounded-full after:animate-ping">
      </div>

      <Icon icon="teenyicons:x-outline" class="self-center  size-3 -mt-[2px] p-0" @click="is.statFilters.length = 0"
        alt="Reset Filters" title="Reset Filters" />

    </div> -->




      <div class="scrollbar-hide pointer-events-auto  flex flex-wrap [&_div]:!text-xs gap-2 p-3 w-56">

        <span
          class="w-full col-span-3 pb-1.5 border-b border-[groove] border-neutral-600 font-semibold text-neutral-content/70 ">Filter
          by Stat
        </span>


        <label v-for="stat in sorted"
          class="badge  hover:opacity-60 cursor-pointer badge-primary has-[:checked]:badge-ghost ">

          <input type="checkbox" v-model="is.statFilters" class="hidden peer" :value="stat.name"
            @change="console.log(is.items.stats)" />

          <div class="">
            {{ stat.name }}
          </div>
          <!--         <icon :icon="stat.icon" :class="stat.classList" class="w-4 text-base-content/80 size-4 " /> -->
        </label>


      </div>
    </template>
  </VDropdown>



</template>

<style scoped>
.active,
.v-popper--shown {
  @apply bg-neutral text-neutral-content;
}

.active {
  @apply ring-1 ring-offset-1 ring-neutral ring-offset-base-100;
}
</style>
