<script lang="ts" setup>
const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()

const math = computed(() => {
  return Math.round(((player.kills + player.assists) / player.deaths) * 100)
})
</script>

<template>
  <div
    class="flex w-25 gap-2 **:text-end grid auto-rows-max *:w-full justify-end justify-items-end py-1 ml-2 items-center *:items-center ">
    <p
      class="text-lg grid items-center font-bold grid justify-end tracking-wide text-nowrap inline-flex flex-nowrap  leading-4">
      {{ player.kills }}&thinsp;/&thinsp;
      <span class="text-shade-domination/10 inline">
        {{ player.deaths }}
      </span>
      &thinsp;/&thinsp;{{ player.assists }}
    </p>

    <div
      class="grid *:flex **:!text-xs *:items-center text-end size-full justify-end flex flex-col gap-0.5 items-center font-medium **:justify-items-end **:justify-end **:flex **:leading-none **:text-end">
      <p>
        {{ Math.round(player.challenges.killParticipation * 100) }}
        <span>%&nbsp;KP</span>
      </p>

      <p
        v-if="!player.deaths"
        class="text-nowrap tracking-tight items-center flex gap-1 truncate">
        <icon
          name="proicons:infinity"
          class="size-4.5 **:stroke-[1.6]" />
        KDA
      </p>

      <p v-else>
        {{ (math / 100).toFixed(1) }}
        <span>&nbsp;KDA</span>
      </p>
    </div>
  </div>
</template>
