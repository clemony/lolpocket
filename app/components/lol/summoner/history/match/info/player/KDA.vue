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
    class="
      ml-2 grid w-25 auto-rows-max items-center justify-end justify-items-end gap-2
   py-1 *:w-full *:items-center **:text-end
    ">
    <p
      class="
        inline-flex flex-nowrap items-center justify-end text-end text-4 leading-4
        font-bold tracking-wide text-nowrap
      ">
      {{ player.kills }}&thinsp;/&thinsp;
      <span class="inline text-shade-domination/10">
        {{ player.deaths }}
      </span>
      &thinsp;/&thinsp;{{ player.assists }}
    </p>

    <div
      class="
        space-y-0.5 text-end font-medium
        opacity-80 *:flex *:items-center *:justify-end **:flex
      **:text-1! **:leading-none
      ">
      <p>
        {{ Math.round(player.challenges.killParticipation * 100) }}
        <span>%&nbsp;KP</span>
      </p>

      <p
        v-if="!player.deaths"
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
