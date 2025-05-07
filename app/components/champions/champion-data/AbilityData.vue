<script lang="ts" setup>
const {ability, index} = defineProps<{
  ability: Ability
  index: string
}>()
  console.log("💠 - ability:", ability)

</script>

<template>
  <div class="flex flex-col ">
    <div class="w-full gap-3 flex items-center">
      <h2 class="tracking-tight  grow">
        {{ ability.name }}
      </h2>
      <kbd class="kbd kbd-lg bg-neutral text-nc drop-shadow-xs shadow-sm ">{{ index }}</kbd>
    </div>

 <div class="w-full flex flex-wrap items-center justify-between gap-x-6 gap-y-3 mt-6 **:font-medium pr-1">
      <p v-if="ability.cooldown.modifiers.length" v-tippy="'Cooldown'" class="flex gap-0 items-center">
        <i-stats-ah name="ph:hourglass" class="size-3.5 dst text-bc mr-2" />
        <span  v-for="(cd, i) in ability.cooldown.modifiers[0].values"  :key="i" class="align-bottom  flex gap-px ">{{ cd }}<span v-if="i != ability.cooldown.modifiers[0].values.length - 1" class="tracking-wider">/</span>
        </span>
      </p>

 <!--    <p v-if="ability.cost && ability.resource != 'None'" v-tippy="`${ability.resource} Cost`" class="flex gap-2 items-center">
        <i-stats-mana v-if="ability.resource.toLowerCase() == 'mana'" class="dst size-4 -mt-px" />

        <i-stats-energy v-if="ability.resource.toLowerCase() == 'energy'" class="dst text-bc size-4 -mt-px " />
        <span class="tracking-wide align-bottom ">{{ ability.cost[0].values }}</span>
      </p> -->

   <!--    <p v-if="ability.occurrence > 0" v-tippy="'Max Charges'" class="flex gap-2 items-center">
        <span class="size-4 relative">
          <icon name="streamline:computer-battery-medium-1-phone-mobile-charge-medium-device-electricity-power-battery" class="size-5.5 -mt-1 top-0 left-0 absolute text-bc" /></span>
        {{ ability.maxammo }}
      </p> -->

      <p v-if="ability.targetRange" v-tippy="'Range'" class="flex gap-2 items-center">
        <i-stats-range class="size-4 text-bc dst" />
        {{ ability.targetRange }}
      </p>

      <!--     <p v-if="ability.maxrank" v-tippy="'Max Rank'" class="flex gap-2 items-center">
        <span class="size-3 relative justify-start">
          <icon name="teenyicons:double-caret-up-small-solid" class="size-6.5 -left-1.5 -top-1.5 absolute text-bc dst" />
        </span>
        {{ ability.maxrank }}
      </p> -->
    </div>
    <Separator class="mb-6 mt-3 bg-neutral/80" />


   <div class="grid gap-6 h-fit items-start">
       <AbilityDescription  v-for="effect in ability.effects" :effect="effect"/>
  
</div>
    </div>

</template>