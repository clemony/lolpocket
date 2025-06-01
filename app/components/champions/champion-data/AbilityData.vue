<script lang="ts" setup>
const { ability, index } = defineProps<{
  ability: Ability
  index: string
}>()
</script>

<template>
  <transition-slide group class="flex flex-col gap-2 h-full">
    <div class="w-full gap-3 flex items-center">
      <kbd class="kbd kbd-lg drop-shadow-xs  shadow-sm bg-b1/94">{{ index }}</kbd>
      <h2 class="tracking-tight  grow">
        {{ ability.name }}
      </h2>
    </div>

    <transition-slide group class="w-full flex flex-wrap items-center  gap-x-6 gap-y-3 mt-2 mb-4 **:font-medium pr-1">
      <div v-if="ability.cooldown.length" v-tippy="'Cooldown'" class="badge badge-lg   bg-ah/30 border-black-50/30 ">
        <i-stats-ah name="ph:hourglass" class="size-3.5 dst text-black" />

        <ValueFormatter :array="ability.cooldown" />
      </div>

      <template v-if="ability.resource == 'Charge'">
        <div v-if="ability.resource" v-tippy="'Max Charges'" class="badge badge-lg border-b3 border bg-b1/90 shadow-black/5">
          <component :is="`i-stats-charge-${ability.maxCharges}`" class="dst  -mt-px text-bc/80 size-7 *:stroke-[1.3]" />
          <span>
            {{ ability.maxCharges }}
          </span>
        </div>

        <div v-if="ability.rechargeRate" v-tippy="'Recharge Rate'" class="badge badge-lg border-b3 border bg-b1/90 shadow-black/5">
          <icon name="mynaui:battery-charging" class="dst  -mt-px text-bc/80 size-7 *:stroke-[1.3]" />

          <ValueFormatter :array="ability.rechargeRate" />
        </div>
      </template>

      <ChampionDataBg v-else-if="ability.cost.length" :name="ability.resource" v-tippy="`${ability.resource} Cost`" class="badge badge-lg border-black-50/40" >
       <ChampionDataIcon :name="ability.resource" v-if="ability.resource" class="dst size-4 -mt-px text-bc/80" />

        <ValueFormatter :array="ability.cost" />
      </ChampionDataBg>

      <ChampionDataBg v-if="ability.effectRadius" v-tippy="'Effect Radius'" class="badge badge-lg border-b3 border  ">
        <span class="size-3 relative justify-start">
          <i-stats-radius class="size-4.5 -left-1.5 -top-0.5 absolute text-bc/80 dst" />
        </span>
        {{ ability.effectRadius }}
      </ChampionDataBg>

      <ChampionDataBg v-if="ability.targetRange" v-tippy="'Range'" class="badge badge-lg">
        <i-stats-range class="size-4 text-bc dst text-bc/80" />
        {{ ability.targetRange }}
      </ChampionDataBg>

      <!--  <p v-if="ability.width" v-tippy="'Max Rank'" class="flex gap-2 items-center">
        <span class="size-3 relative justify-start">
          <icon name="teenyicons:double-caret-up-small-solid" class="size-6.5 -left-1.5 -top-1.5 absolute text-bc dst" />
        </span>
        {{ ability.maxrank }}
      </p>  -->
    </transition-slide>

    <transition-slide group class="flex flex-col gap-2 h-full items-start overflow-y-auto  border border-b3/60 inset-shadow-xs  bg-b1/90 rounded-xl py-4 px-5">
      <AbilityDescription v-for="(effect, i) in ability.effects" :key="i" :effect="effect" />
    </transition-slide>
  </transition-slide>
</template>
