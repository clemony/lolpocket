<script lang="ts" setup>
const { player, class: className } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()

const math = computed(() => {
  return Math.round(((player.kills + player.assists) / player.deaths) * 100)
})
</script>

<template>
  <div
    class="flex w-25 gap-1 grid auto-rows-max *:w-full justify-end justify-items-end py-1 ml-2 items-center *:items-center text-xs">
    <p
      class="text-lggrid items-center font-bold grid justify-end tracking-wide text-nowrap inline-flex flex-nowrap leading-4">
      {{ player.kills }}&thinsp;/&thinsp;
      <span class="text-shade-domination/10 inline">
        {{ player.deaths }}
      </span>
      &thinsp;/&thinsp;{{ player.assists }}
    </p>

    <div
      class="grid *:flex *:items-center size-full justify-end gap-0 items-center font-medium text-xxs **:leading-none **:text-end">
      <p>
        {{ Math.round(player.challenges.killParticipation * 100) }}
        <span>%&nbsp;KP</span>
      </p>

      <p
        v-if="!player.deaths"
        class="text-nowrap tracking-tight truncate">
        PERFECT KDA
      </p>

      <p v-else>
        {{ (math / 100).toFixed(1) }}
        <span class="text-[0.89rem]">&nbsp;KDA</span>
      </p>
    </div>
  </div>
</template>
