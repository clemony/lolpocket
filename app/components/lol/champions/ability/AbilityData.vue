<script lang="ts" setup>
const { abilities, ability: a } = defineProps<{
  abilities?: Ability[]
  ability?: Ability
}>()

const selected = ref("P")

const ability = computed(() => {
  if (a) return a
  const list = abilities ?? []
  return list.find((ab) => ab.key === selected.value) ?? list[0]
})

watch(
  () => ability.value,
  (newVal) => {
    console.log("💠 - watch - newVal:", newVal)
  }
)
</script>

<template>
  <div
    class="flex size-full max-h-full flex-col items-center gap-6 pt-6 **:text-md">
    <div class="mt-2 flex w-full items-center justify-between gap-3 px-7">
      <h2 v-if="ability?.name" class="grow text-4xl! tracking-tight">
        {{ ability.name }}
      </h2>
    </div>

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
      class="flex w-full flex-wrap items-center gap-x-8 gap-y-4 px-9 pr-1 **:font-medium">
      <Tooltip
        v-if="ability.cooldown?.length"
        label="'Cooldown'"
        class="flex items-center gap-2">
        <i-stats-ah
          class="dst mt-px inline size-3.5 shrink-0 text-black"
          name="ph:hourglass" />

        <ValueFormatter :array="ability.cooldown" />
      </Tooltip>

      <template v-if="ability.resource === 'Charge'">
        <Tooltip
          v-if="ability.resource"
          label="'Max Charges'"
          class="flex items-center gap-2">
          <component
            :is="`i-stats-charge-${ability.maxCharges}`"
            class="-mt-px inline size-7 text-pc/80 ds-2xs *:stroke-[1.3]" />

          <span>
            {{ ability.maxCharges }}
          </span>
        </Tooltip>

        <Tooltip
          v-if="ability.rechargeRate"
          label="'Recharge Rate'"
          class="flex items-center gap-2">
          <icon
            class="-mt-px size-7 text-pc/80 ds-2xs *:stroke-[1.3]"
            name="mynaui:battery-charging" />

          <ValueFormatter :array="ability.rechargeRate" />
        </Tooltip>
      </template>

      <Tooltip
        v-else-if="ability.cost?.length"
        :label="`${ability.resource} Cost`"
        class="flex items-center gap-2"
        :name="ability.resource">
        <ChampionDataIcon
          v-if="ability.resource"
          class="dst size-4 text-pc/80"
          :name="ability.resource" />

        <ValueFormatter :array="ability.cost" />
      </Tooltip>

      <Tooltip
        v-if="ability.effectRadius"
        label="'Effect Radius'"
        class="flex items-center gap-2">
        <span class="relative size-3 justify-start">
          <i-stats-radius
            class="dst absolute -top-0.5 -left-1.5 size-4.5 text-pc/80" />
        </span>
        {{ ability.effectRadius }}
      </Tooltip>

      <Tooltip
        v-if="ability.targetRange"
        label="'Range'"
        class="flex items-center gap-2">
        <i-stats-range class="dst size-4 text-pc/80" />
        {{ ability.targetRange }}
      </Tooltip>

      <!--  <p v-if="ability.width" label="'Max Rank'"  class="flex gap-2 items-center items-center">
        <span class="size-3 relative justify-start">
          <icon name="teenyicons:double-caret-up-small-solid" class="size-6.5 -left-1.5 -top-1.5 absolute text-pc dst" />
        </span>
        {{ ability.maxrank }}
      </p>
<Separator class="bg-p3"  /> -->
    </div>

    <div v-if="ability" class="relative size-full self-center overflow-hidden">
      <div
        class="absolute inset-0 top-0 left-0 mr-px flex size-full flex-col items-start gap-3 overflow-y-auto px-5 pb-4">
        <AbilityDescription
          v-for="(effect, i) in ability.effects"
          :key="i"
          :effect="effect" />

        <Collapsible v-if="ability.notes" class="w-full">
          <CollapsibleContent
            class="CollapsibleContent text-balanced px-3 leading-5">
            {{ ability.notes }}
            <CollapsibleTrigger
              class="ability-header flex w-full flex-nowrap justify-between px-3">
              <icon name="add" />
            </CollapsibleTrigger>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  </div>
</template>
