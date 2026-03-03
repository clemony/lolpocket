<script setup lang="ts">
const { ability, class: className } = defineProps<{
  class?: HTMLAttributes["class"]
  ability: Ability
}>()
</script>

<template>
  <div
    v-if="
      ability &&
      (ability.resource ||
        ability.cooldown?.length ||
        ability.rechargeRate ||
        ability.cost?.length ||
        ability.effectRadius ||
        ability.targetRange)
    "
    :class="cn('', className)">
    <div
      v-if="ability.cooldown?.length"
      class="flex items-center gap-2"
      title="Cooldown">
      <Icon
        class="mt-px inline size-3 shrink-0 text-black drop-shadow-2xs"
        name="stat:abilityHaste" />
      {{ ability.cooldown }}
    </div>

    <template v-if="ability.resource === 'Charge'">
      <div
        v-if="ability.resource"
        class="flex items-center gap-2"
        title="Max Charges">
        <Icon
          class="-mt-px inline size-7 ds-2xs *:stroke-[1.3]"
          :name="`stat:charge-${ability.maxCharges}`" />

        <span>{{ ability.maxCharges }}</span>
      </div>

      <div
        v-if="ability.rechargeRate"
        class="flex items-center gap-2"
        title="Recharge Rate">
        <icon
          class="-mt-px size-7 ds-2xs *:stroke-[1.3]"
          name="mynaui:battery-charging" />
        {{ ability.rechargeRate }}
      </div>
    </template>

    <div
      v-else-if="ability.cost?.length && ability.resource"
      class="flex items-center gap-1.5"
      :title="`${ability.resource} Cost`"
      :name="ability.resource">
      <Icon
        :name="`stat:${ability.resource.replace(/\s/g, '-').toLowerCase()}`"
        :class="cn('size-3.25 ds-2xs')" />
      {{ ability.cost }}
    </div>

    <div
      v-if="ability.effectRadius"
      class="flex items-center gap-2"
      title="Effect Radius">
      <span class="relative size-3 justify-start">
        <Icon
          class="absolute -top-0.5 size-3.25 drop-shadow-2xs"
          name="stat:gameplayRadius" />
      </span>
      {{ ability.effectRadius }}
    </div>

    <div
      v-if="ability.targetRange"
      class="flex items-center gap-2"
      title="Range">
      <Icon class="size-4 drop-shadow-2xs" name="stat:rangeCenter" />
      {{ ability.targetRange }}
    </div>
  </div>
</template>
