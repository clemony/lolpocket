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

const abilities = computed(() =>
  champion.value.abilities.filter(a => a.key !== 'P')
)

const skillOrder = computed(() => [
  ...timeline.skills.order,
  ...Array.from({ length: 18 - timeline.skills.order.length }).fill(0),
])
</script>

<template>
  <div class="flex w-170 items-center justify-between">
    <Card
      class="flex h-20 w-max shrink-0 place-items-center gap-2 rounded-xl px-4 py-3"
    >
      <div
        v-for="(ability, i) in abilities
          ?.filter((a) => a.key !== 'R')
          .sort(
            (a, b) =>
              timeline?.skills?.priority?.indexOf(a.key)
              - timeline?.skills?.priority.indexOf(b.key),
          )"
        :key="i"
        class="tippy relative size-12"
        data-type="ability"
        :data-id="`${player.championId}${ability.key}`"
        :style="{
          order: 1 + Number(i) * 2,
        }"
      >
        <Img
          class="dss size-12 rounded-lg shadow-sm"
          alt="icon"
          :src="ability.icon"
        />
        <div
          class="border-b1 bg-neutral text-xxs text-nc absolute -right-1 -bottom-1 grid size-6.5 place-items-center rounded-full border-2 font-mono font-semibold"
          variant="neutral"
        >
          {{ ability.key }}
        </div>
      </div>

      <Icon
        v-for="i in 2"
        :key="i"
        class="row-start-1 size-4 opacity-60 **:stroke-[2.4]"
        :style="{
          order: i === 1 ? 2 : 4,
        }"
        name="right"
      />
    </Card>
    <slot />
  </div>
  <Card class="flex h-38 w-170 gap-4 rounded-xl px-4 py-3">
    <div
      v-if="abilities"
      class="grid shrink-0 grid-cols-[0.7fr_1fr] place-items-center gap-1.25"
    >
      <template v-for="(ability, i) in abilities" :key="i">
        <div
          class="grid h-7 w-full items-center font-mono font-medium uppercase"
        >
          {{ ability.key }}
        </div>
        <div
          class="dss size-7 overflow-hidden rounded-md shadow-sm"
          data-type="ability"
          data-placement="left"
          :data-id="`${player.championId}${ability.key}`"
        >
          <Img
            class="size-full"
            :alt="`${champNameById(player.championId)} ${ability.key} icon`"
            :src="ability?.icon"
          />
        </div>
      </template>
    </div>
    <div class="flex h-full flex-col justify-evenly gap-1.25 rounded-lg">
      <div
        v-for="(row, index) in 4"
        :key="row"
        class="bg-b2/80 grid h-7 w-fit grid-flow-col grid-cols-18 place-items-center gap-x-1.25 first:rounded-t-lg last:rounded-b-lg"
        :class="
          cn('', {
            '': index === 0,
            '': index === 3,
          })
        "
      >
        <div
          v-for="(skill, i) in skillOrder"
          :key="i"
          class="relative grid size-7 place-items-center"
        >
          <div
            class="ring-b1 absolute grid size-7 ring-2"
            :style="{ gridColumnStart: i + 1 }"
          />
          <div
            v-if="skill === row"
            class="bg-neutral text-xxs text-nc absolute grid size-7 place-items-center font-semibold shadow-sm"
            :style="{ gridColumnStart: i + 1 }"
          >
            {{ i + 1 }}
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>
