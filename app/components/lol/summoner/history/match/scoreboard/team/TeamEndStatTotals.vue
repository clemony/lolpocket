<script lang="ts" setup>
const { class: className, team } = defineProps<{
  team: MatchTeam
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn('row-start-1 mt-3 w-full overflow-hidden rounded-xl border border-bc/10 bg-linear-to-r px-3 shadow-warm-soft inset-shadow-xxs',
         {
           'from-inspiration/60 to-transparent  border-r-b3!': team.teamId === 100,
           'from-transparent to-domination/60 border-l-b3!': team.teamId === 200,
         },
         className) ">
    <div class="inline-flex h-9 w-full items-center justify-between gap-2">
      <!-- WIN / LOSS -->
      <div
        :class="cn('flex items-center gap-4',
                   {
                     'order-first': team.teamId === 100,
                     'order-last': team.teamId === 200,
                   })">
        <h3
          :class="cn('text-5 leading-none font-bold text-white/86 dst',
                     {
                       'order-first': team.teamId === 100,
                       'order-last': team.teamId === 200,
                     })">
          {{ team.win ? "WIN" : "LOSS" }}
        </h3>

        <!-- TEAM COLOR -->
        <span
          :class=" cn('flex justify-start leading-4 font-bold tracking-wide! brightness-70', {
            'text-inspiration order-last': team.teamId === 100,
            'text-domination order-first': team.teamId === 200,
          }) ">
          {{ team.teamId === 100 ? "Blue" : "Red" }}
        </span>
      </div>

      <!-- GOLD -->
      <span
        v-if="team.gold"
        :class=" cn('inline-flex items-center gap-1 font-semibold tracking-tight opacity-70', {
          'order-2': team.teamId === 100,
          'order-1': team.teamId === 200,
        }) ">
        <!--           <Icon
            name="lol:gold"
            class="inline size-3.5 text-bc/99" /> -->
        {{ team.gold.toLocaleString() }} G
      </span>

      <!-- KDA -->
      <TeamKDA
        :class="cn('opacity-90', team.teamId === 100 ? 'order-last pr-1' : 'pl-0.5 order-first')"
        :team="team" />
    </div>

    <!--     <div class="mx-4 grid w-35 grid-cols-5 gap-1 px-1">
      <ChampionIcon
        v-for="champion in team.bans"
        :id="champion"
        :key="champion"
        :data-id="champion"
        data-tip="champion"
        class="size-6.25 rounded-md opacity-80 brightness-100 contrast-120 grayscale-80" />
    </div> -->
  </div>
</template>
