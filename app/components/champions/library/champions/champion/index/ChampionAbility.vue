<script lang="ts" setup>
const { ability } = defineProps<{
  ability: Ability
}>()
</script>

<template>
  <Collapsible
    :id="ability.key"
    :default-open="true"
    class="flex field-box max-w-230 flex-col **:text-sm gap-6 w-full justify-center">
    <CollapsibleTrigger
      class="px-6 py-4 data-[state=open]:border-b border-b-b3 flex items-center justify-items-start gap-6">
      <div class="size-18 rounded-lg shadow-sm drop-shadow-sm overflow-hidden">
        <Img
          :img="ability.icon"
          :alt="ability.name" />
      </div>

      <div class="gap-2 flex flex-col grow justify-center">
        <h2
          v-if="ability?.name"
          class="tracking-tight leading-8 !text-3xl  justify-start text-start grow">
          {{ ability.name }}
        </h2>

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
          class="w-full flex justify-start flex-wrap items-center px-1 gap-x-8 gap-y-2 **:font-medium pr-1">
          <div
            v-if="ability.cooldown?.length"
            v-tippy="'Cooldown'"
            class="flex gap-2 items-center">
            <i-lol-ah
              name="ph:hourglass"
              class="size-3.5 inline shrink-0 dst mt-px text-black" />

            {{ ability.cooldown }}
          </div>

          <template v-if="ability.resource === 'Charge'">
            <div
              v-if="ability.resource"
              v-tippy="'Max Charges'"
              class="flex gap-2 items-center">
              <component
                :is="`i-lol-charge-${ability.maxCharges}`"
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

              {{ ability.rechargeRate }}
            </div>
          </template>

          <div
            v-else-if="ability.cost?.length"
            v-tippy="`${ability.resource} Cost`"
            :name="ability.resource"
            class="flex gap-2 items-center">
            <component
              :is="`i-lol-${ability.resource}`"
              :class="cn('dst size-4   text-bc/80')" />

            {{ ability.cost }}
          </div>

          <div
            v-if="ability.effectRadius"
            v-tippy="'Effect Radius'"
            class="flex gap-3 items-center">
            <span class="size-3 relative justify-start">
              <i-lol-radius class="size-4.5 -top-0.5 absolute text-bc/80 dst" />
            </span>
            {{ ability.effectRadius }}
          </div>

          <div
            v-if="ability.targetRange"
            v-tippy="'Range'"
            class="flex gap-2 items-center">
            <i-lol-range class="size-4 text-bc dst text-bc/80" />
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
      </div>
      <CaretFlip />
    </CollapsibleTrigger>
    <CollapsibleContent
      v-if="ability"
      class="self-center relative overflow-hidden size-full">
      <div class="gap-3 py-4 size-full items-start px-5 mr-px flex flex-col">
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
    </CollapsibleContent>
  </Collapsible>
</template>
