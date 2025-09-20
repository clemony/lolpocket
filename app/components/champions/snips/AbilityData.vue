<script lang="ts" setup>
const { abilities } = defineProps<{
  abilities: Ability[]
}>()

console.log('💠 - abilities:', abilities)
const selected = ref('P')

const ability = computed(
  () => Object.values(abilities[selected.value])[0] as Ability
)
watch(
  () => ability.value,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
  }
)
</script>

<template>
  <div
    class="flex flex-col pt-6 **:text-sm gap-6 size-full max-h-full items-center">
    <div class="h-20 w-full">
      <LazyChampionAbilityTabs
        v-model:model-value="selected"
        :abilities="abilities"
        @update:ability="(e) => (selected = e)" />
    </div>

    <div class="w-full gap-3 flex items-center mt-2 px-7 justify-between">
      <h2
        v-if="ability?.name"
        class="tracking-tight !text-8 grow">
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
      class="w-full flex flex-wrap items-center px-9 gap-x-8 gap-y-4 **:font-medium pr-1">
      <div
        v-if="ability.cooldown?.length"
        v-tippy="'Cooldown'"
        class="flex gap-2 items-center">
        <i-stats-ah
          name="ph:hourglass"
          class="size-3.5 inline shrink-0 dst mt-px text-black" />

        <ValueFormatter :array="ability.cooldown" />
      </div>

      <template v-if="ability.resource === 'Charge'">
        <div
          v-if="ability.resource"
          v-tippy="'Max Charges'"
          class="flex gap-2 items-center">
          <component
            :is="`i-stats-charge-${ability.maxCharges}`"
            class="dst -mt-px text-bc/80 size-7 inline *:stroke-[1.3]" />

          <span>
            {{ ability.maxCharges }}
          </span>
        </div>

        <div
          v-if="ability.rechargeRate"
          v-tippy="'Recharge Rate'"
          class="flex gap-2 items-center">
          <icon
            name="mynaui:battery-charging"
            class="dst -mt-px text-bc/80 size-7 *:stroke-[1.3]" />

          <ValueFormatter :array="ability.rechargeRate" />
        </div>
      </template>

      <div
        v-else-if="ability.cost?.length"
        v-tippy="`${ability.resource} Cost`"
        :name="ability.resource"
        class="flex gap-2 items-center">
        <ChampionDataIcon
          v-if="ability.resource"
          :name="ability.resource"
          class="dst size-4 text-bc/80" />

        <ValueFormatter :array="ability.cost" />
      </div>

      <div
        v-if="ability.effectRadius"
        v-tippy="'Effect Radius'"
        class="flex gap-2 items-center">
        <span class="size-3 relative justify-start">
          <i-stats-radius
            class="size-4.5 -left-1.5 -top-0.5 absolute text-bc/80 dst" />
        </span>
        {{ ability.effectRadius }}
      </div>

      <div
        v-if="ability.targetRange"
        v-tippy="'Range'"
        class="flex gap-2 items-center">
        <i-stats-range class="size-4 text-bc dst text-bc/80" />
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
      class="self-center relative overflow-hidden size-full">
      <div
        class="relative absolute top-0 left-0 inset-0 gap-3 size-full items-start overflow-y-auto pb-4 px-5 mr-px flex flex-col">
        <AbilityDescription
          v-for="(effect, i) in ability.effects"
          :key="i"
          :effect="effect" />

        <Collapsible
          v-if="ability.notes"
          class="w-full">
          <CollapsibleContent
            class="CollapsibleContent px-3 leading-5 text-balanced">
            {{ ability.notes }}
            <CollapsibleTrigger
              class="ability-header flex px-3 flex-nowrap justify-between w-full">
              <icon name="add" />
            </CollapsibleTrigger>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  </div>
</template>
