<script setup lang="ts">
const { ability, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  ability: Ability
}>()
</script>

<template>
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
    :class="cn('', className)">
    <div
      v-if="ability.cooldown?.length"
      title="Cooldown"
      class="flex items-center gap-2">
      <Icon
        name="stat:abilityHaste"
        class="dst mt-px inline size-3 shrink-0 text-black" />{{ ability.cooldown }}
    </div>

    <template v-if="ability.resource === 'Charge'">
      <div
        v-if="ability.resource"
        title="Max Charges"
        class="flex items-center gap-2">
        <Icon
          :name="`stat:charge-${ability.maxCharges}`"
          class="dst -mt-px inline size-7 *:stroke-[1.3]" />

        <span>{{ ability.maxCharges }}
        </span>
      </div>

      <div
        v-if="ability.rechargeRate"
        title="Recharge Rate"
        class="flex items-center gap-2">
        <icon
          name="mynaui:battery-charging"
          class="dst -mt-px size-7 *:stroke-[1.3]" />{{ ability.rechargeRate }}
      </div>
    </template>

    <div
      v-else-if="ability.cost?.length && ability.resource"
      :title="`${ability.resource} Cost`"
      :name="ability.resource"
      class="flex items-center gap-1.5">
      <Icon
        :name="`stat:${ability.resource.replace(/\s/g, '-').toLowerCase()}`"
        :class="cn('dst size-3.25')" />{{ ability.cost }}
    </div>

    <div
      v-if="ability.effectRadius"
      title="Effect Radius"
      class="flex items-center gap-2">
      <span class="relative size-3 justify-start">
        <Icon
          name="stat:gameplayRadius"
          class="dst absolute -top-0.5 size-3.25" />
      </span>
      {{ ability.effectRadius }}
    </div>

    <div
      v-if="ability.targetRange"
      title="Range"
      class="flex items-center gap-2">
      <Icon
        name="stat:rangeCenter"
        class="dst size-4" />
      {{ ability.targetRange }}
    </div>
  </div>
</template>
