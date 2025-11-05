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
      v-tippy="{ content: 'Cooldown', theme: 'base' }"
      class="flex items-center gap-2">
      <i-lol-ah
        name="ph:hourglass"
        class="dst mt-px inline size-3.5 shrink-0 text-black" />

      {{ ability.cooldown }}
    </div>

    <template v-if="ability.resource === 'Charge'">
      <div
        v-if="ability.resource"
        v-tippy="{ content: 'Max Charges', theme: 'base' }"
        class="flex items-center gap-2">
        <component
          :is="`i-lol-charge-${ability.maxCharges}`"
          class="dst text-bc/80 -mt-px inline size-7 *:stroke-[1.3]" />

        <span>
          {{ ability.maxCharges }}
        </span>
      </div>

      <div
        v-if="ability.rechargeRate"
        v-tippy="{ content: 'Recharge Rate', theme: 'base' }"
        class="flex items-center gap-2">
        <icon
          name="mynaui:battery-charging"
          class="dst text-bc/80 -mt-px size-7 *:stroke-[1.3]" />

        {{ ability.rechargeRate }}
      </div>
    </template>

    <div
      v-else-if="ability.cost?.length && ability.resource"
      v-tippy="`${ability.resource} Cost`"
      :name="ability.resource"
      class="flex items-center gap-2">
      <component
        :is="`i-lol-${ability.resource.replace(/\s/g, '-')}`"
        :class="cn('dst size-4   text-bc/80')" />

      {{ ability.cost }}
    </div>

    <div
      v-if="ability.effectRadius"
      v-tippy="{ content: 'Effect Radius', theme: 'base' }"
      class="flex items-center gap-3">
      <span class="relative size-3 justify-start">
        <i-lol-radius class="text-bc/80 dst absolute -top-0.5 size-4.5" />
      </span>
      {{ ability.effectRadius }}
    </div>

    <div
      v-if="ability.targetRange"
      v-tippy="{ content: 'Range', theme: 'base' }"
      class="flex items-center gap-2">
      <i-lol-range class="text-bc dst text-bc/80 size-4" />
      {{ ability.targetRange }}
    </div>
  </div>
</template>