<script lang="ts" setup>
const props = defineProps<{
  ability: Ability
  champion: Champion
  kbd: string
}>()
console.log('💠 - kbd:', props.kbd)

/* const ability = computed (() => props.ability)
console.log('💠 - ability:', ability.value.description)
const champion = computed (() => props.champion)
console.log('💠 - champion:', champion)
const resource = computed (() => champion.value.partype) */
</script>

<template>
  <div class="flex flex-col ">
    <div class="w-full gap-3 flex items-center">
      <kbd class="kbd kbd-xl bg-neutral text-nc drop-shadow-xs shadow-sm ">{{ props.kbd }}</kbd>
      <h1 class="tracking-tight  ">
        {{ ability.name }}
      </h1>
    </div>

   <!--  <div class="w-full flex flex-wrap items-center justify-between h-auto gap-x-6 gap-y-3 mt-6 **:font-medium pr-1">
      <p v-if="ability.cooldownBurn" v-tippy="'Cooldown'" class="flex gap-2 items-center">
        <i-stats-ah name="ph:hourglass" class="size-3.5  dst text-bc -mt-px" />
        <span class="align-bottom tracking-wide">{{ ability.cooldownBurn }}</span>
      </p>

      <p v-if="ability.costBurn && resource != 'None'" v-tippy="`${resource} Cost`" class="flex gap-2 items-center">
        <i-stats-mana v-if="resource.toLowerCase() == 'mana'" class="dst size-4 -mt-px" />

        <i-stats-energy v-if="resource.toLowerCase() == 'energy'" class="dst text-bc size-4 -mt-px " />
        <span class="tracking-wide align-bottom ">{{ ability.costBurn }}</span>
      </p>

      <p v-if="ability.maxammo > 0" v-tippy="'Max Charges'" class="flex gap-2 items-center">
        <span class="size-4 relative">
          <icon name="streamline:computer-battery-medium-1-phone-mobile-charge-medium-device-electricity-power-battery" class="size-5.5 -mt-1 top-0 left-0 absolute text-bc" /></span>
        {{ ability.maxammo }}
      </p>

      <p v-if="ability.rangeBurn" v-tippy="'Range'" class="flex gap-2 items-center">
        <i-stats-range class="size-4 text-bc dst" />
        {{ ability.rangeBurn }}
      </p>
 -->
      <!--     <p v-if="ability.maxrank" v-tippy="'Max Rank'" class="flex gap-2 items-center">
        <span class="size-3 relative justify-start">
          <icon name="teenyicons:double-caret-up-small-solid" class="size-6.5 -left-1.5 -top-1.5 absolute text-bc dst" />
        </span>
        {{ ability.maxrank }}
      </p> -->
    </div>
    <Separator class="mb-6 mt-3 bg-neutral" />

   <!--  <div class="text-4">
      <p v-html="ability.description" />
    </div>
  </div>-->
</template>