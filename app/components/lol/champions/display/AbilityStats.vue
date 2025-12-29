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
        class="mt-px inline size-3 shrink-0 text-black dst" />{{ ability.cooldown }}
    </div>

    <template v-if="ability.resource === 'Charge'">
      <div
        v-if="ability.resource"
        title="Max Charges"
        class="flex items-center gap-2">
        <Icon
          :name="`stat:charge-${ability.maxCharges}`"
          class="-mt-px inline size-7 dst *:stroke-[1.3]" />

        <span>{{ ability.maxCharges }}
        </span>
      </div>

      <div
        v-if="ability.rechargeRate"
        title="Recharge Rate"
        class="flex items-center gap-2">
        <icon
          name="mynaui:battery-charging"
          class="-mt-px size-7 dst *:stroke-[1.3]" />{{ ability.rechargeRate }}
      </div>
    </template>

    <div
      v-else-if="ability.cost?.length && ability.resource"
      :title="`${ability.resource} Cost`"
      :name="ability.resource"
      class="flex items-center gap-1.5">
      <Icon
        :name="`stat:${ability.resource.replace(/\s/g, '-').toLowerCase()}`"
        :class="cn('size-3.25 dst')" />{{ ability.cost }}
    </div>

    <div
      v-if="ability.effectRadius"
      title="Effect Radius"
      class="flex items-center gap-2">
      <span class="relative size-3 justify-start">
        <Icon
          name="stat:gameplayRadius"
          class="absolute -top-0.5 size-3.25 dst" />
      </span>
      {{ ability.effectRadius }}
    </div>

    <div
      v-if="ability.targetRange"
      title="Range"
      class="flex items-center gap-2">
      <Icon
        name="stat:rangeCenter"
        class="size-4 dst" />
      {{ ability.targetRange }}
    </div>
  </div>
</template>
