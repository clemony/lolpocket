<script lang="ts" setup>
const { abilities } = defineProps<{
  abilities: Ability[]
}>()

const selected = ref('P')

const ability = computed(
  () => Object.values(abilities[selected.value])[0] as Ability,
)
watch(
  () => ability.value,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
  },
)
</script>

<template>
  <div
    class="flex size-full max-h-full flex-col items-center gap-6 pt-6 **:text-3">
    <div class="mt-2 flex w-full items-center justify-between gap-3 px-7">
      <h2
        v-if="ability?.name"
        class="grow text-8! tracking-tight">
        {{ ability.name }}
      </h2>
    </div>

    <div
      v-if="
        ability
          && (ability.resource
            || ability.cooldown?.length
            || ability.rechargeRate
            || ability.cost?.length
            || ability.effectRadius
            || ability.targetRange)
      "
      class="
        flex w-full flex-wrap items-center gap-x-8 gap-y-4 px-9 pr-1
        **:font-medium
      ">
      <div
        v-if="ability.cooldown?.length"
        v-tippy="'Cooldown'"
        class="flex items-center gap-2">
        <i-stats-ah
          name="ph:hourglass"
          class="mt-px inline size-3.5 shrink-0 text-black dst" />

        <ValueFormatter :array="ability.cooldown" />
      </div>

      <template v-if="ability.resource === 'Charge'">
        <div
          v-if="ability.resource"
          v-tippy="'Max Charges'"
          class="flex items-center gap-2">
          <component
            :is="`i-stats-charge-${ability.maxCharges}`"
            class="-mt-px inline size-7 text-bc/80 dst *:stroke-[1.3]" />

          <span>
            {{ ability.maxCharges }}
          </span>
        </div>

        <div
          v-if="ability.rechargeRate"
          v-tippy="'Recharge Rate'"
          class="flex items-center gap-2">
          <icon
            name="mynaui:battery-charging"
            class="-mt-px size-7 text-bc/80 dst *:stroke-[1.3]" />

          <ValueFormatter :array="ability.rechargeRate" />
        </div>
      </template>

      <div
        v-else-if="ability.cost?.length"
        v-tippy="`${ability.resource} Cost`"
        :name="ability.resource"
        class="flex items-center gap-2">
        <ChampionDataIcon
          v-if="ability.resource"
          :name="ability.resource"
          class="size-4 text-bc/80 dst" />

        <ValueFormatter :array="ability.cost" />
      </div>

      <div
        v-if="ability.effectRadius"
        v-tippy="'Effect Radius'"
        class="flex items-center gap-2">
        <span class="relative size-3 justify-start">
          <i-stats-radius
            class="absolute -top-0.5 -left-1.5 size-4.5 text-bc/80 dst" />
        </span>
        {{ ability.effectRadius }}
      </div>

      <div
        v-if="ability.targetRange"
        v-tippy="'Range'"
        class="flex items-center gap-2">
        <i-stats-range class="size-4 text-bc text-bc/80 dst" />
        {{ ability.targetRange }}
      </div>

      <!--  <p v-if="ability.width" v-tippy="'Max Rank'"  class="flex gap-2 items-center items-center">
        <span class="size-3 relative justify-start">
          <icon name="teenyicons:double-caret-up-small-solid" class="size-6.5 -left-1.5 -top-1.5 absolute text-bc dst" />
        </span>
        {{ ability.maxrank }}
      </p>
<Separator class="bg-b3"  /> -->
    </div>

    <div
      v-if="ability"
      class="relative size-full self-center overflow-hidden">
      <div
        class="
          absolute inset-0 top-0 left-0 mr-px flex size-full flex-col
          items-start gap-3 overflow-y-auto px-5 pb-4
        ">
        <AbilityDescription
          v-for="(effect, i) in ability.effects"
          :key="i"
          :effect="effect" />

        <Collapsible
          v-if="ability.notes"
          class="w-full">
          <CollapsibleContent
            class="CollapsibleContent text-balanced px-3 leading-5">
            {{ ability.notes }}
            <CollapsibleTrigger
              class="
                ability-header flex w-full flex-nowrap justify-between px-3
              ">
              <icon name="add" />
            </CollapsibleTrigger>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  </div>
</template>
