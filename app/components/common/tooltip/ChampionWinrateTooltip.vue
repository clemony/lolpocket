<script lang="ts" setup>
import { champKeyToRole } from "~~/shared/constants/champions/champKeyToRole"

const { winrates, k } = defineProps<{
  winrates?: ChampionWinrate[]
  k: string
}>()

const wr = computed(() =>
  winrates?.toSorted((a, b) => b.pick_rate - a.pick_rate)
)
</script>

<template>
  <div class="w-58 py-1.5">
    <div class="flex items-center justify-between px-1 pb-2">
      <UUser
        size="sm"
        :name="champNameByKey(k)"
        :description="champKeyToRole[k]"
        :avatar="{
          src: `/img/champions/${champIdByKey(k)}.webp`
        }"
        :ui="{
          name: 'text-md font-bold text-nc/90',
          description:
            'inline-flex -translate-x-px items-center gap-px align-baseline leading-4.5 text-nc/60 italic',
          wrapper: 'ml-1'
        }">
      </UUser>
      <Icon
        :name="`i-lp-${champKeyToRole[k]?.toLowerCase()}`"
        class="mt-px mr-1 self-start text-nc/80" />
    </div>

    <div class="divide-1 space-y-2.5 divide-y divide-n3/80 pb-1">
      <div
        class="grid grid-cols-[0.7fr_repeat(3,_1fr)] place-items-center gap-2 rounded-lg bg-n3/60 py-0.25">
        <span
          v-for="i in ['Role', 'Pick', 'Win', 'Tier']"
          :key="i"
          class="text-xs font-semibold text-nc/80 capitalize"
          >{{ i }}</span
        >
      </div>
      <div
        v-for="winrate in wr"
        :key="winrate.role"
        class="grid grid-cols-[0.7fr_repeat(3,_1fr)] place-items-center gap-2 py-0.75">
        <Icon :name="`i-lp-${winrate.role}`" class="size-6 text-nc/80" />

        <h5
          :class="
            cn(
              'inline align-baseline text-sm font-bold',
              tierText[winrate.tier]
            )
          ">
          {{ roundDecimalToPercent(winrate.role_rate, 1) }}%
        </h5>

        <h5
          :class="
            cn(
              'inline align-baseline text-sm font-bold',
              tierText[winrate.tier]
            )
          ">
          {{ roundDecimalToPercent(winrate.win_rate, 1) }}%
        </h5>

        <h5
          :class="
            cn('inline align-baseline font-bold', tierText[winrate.tier])
          ">
          {{ winrate.tier }}
        </h5>
      </div>
    </div>
  </div>
</template>
