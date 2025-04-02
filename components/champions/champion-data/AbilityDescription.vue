<script lang="ts" setup>
const props = defineProps<{
  ability: Ability
  champion: Champion
  kbd: string
}>()

const ability = computed (() => props.ability)
console.log('💠 - ability:', ability)
const champion = computed (() => props.champion)
const resource = computed (() => champion.value.partype)

const replace = {
  '{{ abilityresourcename }}': champion.value.partype,
}
</script>

<template>
  <div class="flex flex-col w-full grow">
    <div class="w-full flex items-center">
      <h1 class="tracking-tight  dst grow">
        {{ ability.name }}
      </h1>
      <kbd class="kbd kbd-xl bg-sorcery-light drop-shadow-sm -mt-2" :class="`bg-${champion.tags[0]}-light`">{{ props.kbd }}</kbd>
    </div>

    <div class="w-full flex items-center justify-between gap-10 mt-4 **:font-medium">
      <p v-if="ability.cooldown" v-tippy="'Cooldown'" class="flex gap-2 items-center">
        <span class="align-bottom tracking-wide">{{ ability.cooldownBurn }}</span>
        <icon name="ph:hourglass" class=" 3.75 dst " />
      </p>

      <p v-if="ability.cost && resource != 'None'" v-tippy="`${resource} Cost`" class="flex gap-2 items-center">
        <span class="tracking-wide align-bottom ">{{ ability.costBurn }}</span>
        <icon v-if="resource.toLowerCase() == 'mana'" name="lucide:droplet" class="dst size-4.75 -mt-px" />

        <icon v-if="resource.toLowerCase() == 'energy'" name="lineicons:bolt-2" class="dst   -mt-px " />
      </p>
    </div>
    <Separator class="mb-6 mt-3 bg-neutral" />

    <div class="">
      <p class="text-4" v-html="ability.tooltip" />
    </div>
  </div>
</template>