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
      <Icon
        name="lp:ah"
        class="mt-px inline size-3.5 shrink-0 text-black dst" />

      {{ ability.cooldown }}
    </div>

    <template v-if="ability.resource === 'Charge'">
      <div
        v-if="ability.resource"
        v-tippy="{ content: 'Max Charges', theme: 'base' }"
        class="flex items-center gap-2">
        <Icon
          :name="`lp:charge-${ability.maxCharges}`"
          class="
            -mt-px inline size-7 dst
            *:stroke-[1.3]
          " />

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
          class="
            -mt-px size-7 dst
            *:stroke-[1.3]
          " />

        {{ ability.rechargeRate }}
      </div>
    </template>

    <div
      v-else-if="ability.cost?.length && ability.resource"
      v-tippy="`${ability.resource} Cost`"
      :name="ability.resource"
      class="flex items-center gap-2">
      <Icon
        :name="`lp:${ability.resource.replace(/\s/g, '-').toLowerCase()}`"
        :class="cn('size-4 dst')" />

      {{ ability.cost }}
    </div>

    <div
      v-if="ability.effectRadius"
      v-tippy="{ content: 'Effect Radius', theme: 'base' }"
      class="flex items-center gap-3">
      <span class="relative size-3 justify-start">
        <Icon
          name="lp:radius "
          class="absolute -top-0.5 size-4.5 dst" />
      </span>
      {{ ability.effectRadius }}
    </div>

    <div
      v-if="ability.targetRange"
      v-tippy="{ content: 'Range', theme: 'base' }"
      class="flex items-center gap-2">
      <Icon
        name="lp:range"
        class="size-4 dst" />
      {{ ability.targetRange }}
    </div>
  </div>
</template>
