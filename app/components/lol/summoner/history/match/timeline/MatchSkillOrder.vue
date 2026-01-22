<script lang="ts" setup>
const { match, player, timeline } = defineProps<{
  timeline: PlayerTimeline
  match: MatchData
  player: Player
}>()

const championData = await import(
  `#shared/records/champions/${champKeyById(player.championId)}.ts`
)
const champion = computed(() => championData.default)

const abilities = computed (() => champion.value.abilities.filter(a => a.key !== 'P'))

const skillOrder = computed(() => [
  ...timeline.skills.order,
  ...Array.from({ length: 18 - timeline.skills.order.length }).fill(0)
])
</script>

<template>
  <div class="flex w-170 items-center justify-between">
    <Card class="flex h-20 w-max shrink-0 place-items-center gap-2 rounded-xl px-4 py-3">
      <div
        v-for="ability, i in abilities?.filter(a => a.key !== 'R').sort((a, b) => timeline?.skills?.priority?.indexOf(a.key) - timeline?.skills?.priority.indexOf(b.key))"
        :key="i"
        data-type="ability"
        :data-id="`${player.championId}${ability.key}`"

        :style="{
          order: 1 + (Number(i) * 2),
        }"
        class="tippy relative size-12">
        <Img
          alt="icon"
          :src="ability.icon"
          class="size-12 rounded-lg shadow-sm dss" />
        <div
          class="absolute -right-1 -bottom-1 grid size-6.5 place-items-center rounded-full border-2 border-b1 bg-neutral font-mono text-xxs font-semibold text-nc"
          variant="neutral">
          {{ ability.key }}
        </div>
      </div>

      <Icon
        v-for="i in 2"
        :key="i"
        :style="{
          order: i === 1 ? 2 : 4,
        }"
        name="right"
        class="row-start-1 size-4 opacity-60 **:stroke-[2.4]" />
    </Card>
    <slot />
  </div>
  <Card class="flex h-38 w-170 gap-4 rounded-xl px-4 py-3">
    <div
      v-if="abilities"
      class="grid shrink-0 grid-cols-[0.7fr_1fr] place-items-center gap-1.25">
      <template
        v-for="ability, i in abilities"
        :key="i">
        <div class="grid h-7 w-full items-center font-mono font-medium uppercase">
          {{ ability.key }}
        </div>
        <div
          data-type="ability"
          data-placement="left"
          :data-id="`${player.championId}${ability.key}`"
          class="size-7 overflow-hidden rounded-md shadow-sm dss">
          <Img
            :alt="`${champNameById(player.championId)} ${ability.key} icon`"
            :src="ability?.icon"
            class="size-full" />
        </div>
      </template>
    </div>
    <div class="flex h-full flex-col justify-evenly gap-1.25 rounded-lg">
      <div
        v-for="row, index in 4"
        :key="row"
        :class="cn('', {
          '': index === 0,
          '': index === 3,
        })"
        class="grid h-7 w-fit grid-flow-col grid-cols-18 place-items-center gap-x-1.25 bg-b2/80 first:rounded-t-lg last:rounded-b-lg">
        <div
          v-for="skill, i in skillOrder"
          :key="i"
          class="relative grid size-7 place-items-center">
          <div
            :style="{ gridColumnStart: i + 1 }"
            class="absolute grid size-7 ring-2 ring-b1">
          </div>
          <div
            v-if="skill === row"
            :style="{ gridColumnStart: i + 1 }"
            class="absolute grid size-7 place-items-center bg-neutral text-xxs font-semibold text-nc shadow-sm">
            {{ i + 1 }}
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>