<script lang="ts" setup>
const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()

const math = computed(() => {
  return Math.round(((player.stats.kills.total + player.stats.assists) / player.stats.deaths) * 100)
})
</script>

<template>
  <div
    class="
      ml-2 grid grow auto-rows-max items-center justify-end justify-items-end gap-2 justify-self-end py-1
   text-end *:w-full *:items-center **:text-end
    ">
    <p
      class="
        inline-flex flex-nowrap items-center justify-end text-end text-4 leading-4
        font-bold tracking-wide text-nowrap
      ">
      {{ player.stats.kills.total }}&thinsp;/&thinsp;
      <span class="inline text-shade-domination/10">
        {{ player.stats.deaths }}
      </span>
      &thinsp;/&thinsp;{{ player.stats.assists }}
    </p>

    <div
      class="
        space-y-0.5 text-end font-medium
        opacity-80 *:flex *:items-center *:justify-end **:flex
      **:text-1! **:leading-none
      ">
      <p>
        {{ Math.round(player.stats.kp * 100) }}
        <span>%&nbsp;KP</span>
      </p>

      <p
        v-if="!player.stats.deaths"
        class="flex items-center gap-1 truncate tracking-tight text-nowrap">
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
