<script lang="ts" setup>
const { ability, index } = defineProps<{
  ability: Ability
  index: string
}>()
console.log('💠 - ability:', ability)
</script>

<template>
  <transition-slide group class="flex flex-col h-full">
    <div class="w-full gap-3 flex items-center">
      <h2 class="tracking-tight  grow">
        {{ ability.name }}
      </h2>
      <kbd class="kbd kbd-lg drop-shadow-xs  shadow-sm brightness-97">{{ index }}</kbd>
    </div>

    <transition-slide group class="w-full flex flex-wrap items-center justify-between gap-x-6 gap-y-3 mt-6 **:font-medium pr-1">
      <p v-if="ability.cooldown.modifiers.length" v-tippy="'Cooldown'" class="flex items-center">
        <i-stats-ah name="ph:hourglass" class="size-3.5 dst text-bc mr-2" />
        
        <span class="flex overflow-x-scroll gap-0 items-center max-w-60 justify-start truncate ">
        <span v-for="(cd, i) in ability.cooldown.modifiers[0].values" :key="i" class="align-bottom  space-x-px">{{ Math.round(cd * 100) / 100 }}<span v-if="i != ability.cooldown.modifiers[0].values.length - 1" class="tracking-wider">/</span>
        </span>
      </span>
      </p>

      <div v-if="ability.cost.length" v-tippy="`${ability.resource.replace('per_second', '/ second')} Cost`" class="flex gap-2 items-center">
        <i-stats-mana v-if="ability.resource == 'Mana'" class="dst  size-4 -mt-px  text-bc/80" />

        <i-stats-mana-regen v-if="ability.resource == 'Mana per_second'" class="dst size-4 -mt-px text-bc/80" />

        <i-stats-energy v-if="ability.resource == 'Energy'" class="dst text-bc/80 size-4 -mt-px " />
        <ValueFormatter :array="ability.cost[0].values" />
      </div>

      <!--    <p v-if="ability.occurrence > 0" v-tippy="'Max Charges'" class="flex gap-2 items-center">
        <span class="size-4 relative">
          <icon name="streamline:computer-battery-medium-1-phone-mobile-charge-medium-device-electricity-power-battery" class="size-5.5 -mt-1 top-0 left-0 absolute text-bc" /></span>
        {{ ability.maxammo }}
      </p> -->

      <p v-if="ability.effectRadius" v-tippy="'Effect Radius'" class="flex gap-2 items-center">
        <span class="size-3 relative justify-start">
          <i-stats-radius class="size-4.5 -left-1.5 -top-0.5 absolute text-bc/80 dst" />
        </span>
        {{ ability.effectRadius }}
      </p>

      <p v-if="ability.targetRange" v-tippy="'Range'" class="flex gap-2 items-center">
        <i-stats-range class="size-4 text-bc dst text-bc/80" />
        {{ ability.targetRange }}
      </p>

      <!--  <p v-if="ability.width" v-tippy="'Max Rank'" class="flex gap-2 items-center">
        <span class="size-3 relative justify-start">
          <icon name="teenyicons:double-caret-up-small-solid" class="size-6.5 -left-1.5 -top-1.5 absolute text-bc dst" />
        </span>
        {{ ability.maxrank }}
      </p>  -->
    </transition-slide>
    <Separator class="mb-6 mt-3 !bg-neutral/30" />

    <transition-slide group class="flex flex-col gap-6 h-full items-start overflow-y-auto">
      <AbilityDescription v-for="(effect, i) in ability.effects" :key="i" :effect="effect" />
    </transition-slide>
  </transition-slide>
</template>