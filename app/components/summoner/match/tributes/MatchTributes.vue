<script lang="ts" setup>
const props = defineProps<{
  match: any
}>()
</script>

<template>
  <div class="grid grid-cols-2 w-full">
    <icon name="hugeicons:wanted" />
    highest bounty
    <icon name="mynaui:click" />
    biggest pinger
    <icon name="fluent:eye-off-20-filled" />
    most wards killed

    <icon name="maki:farm" />
    minions farmed

    <icon name="streamline:spiral-shape" />
    cc duration

    <icon name="emojione-monotone:smiling-face-with-halo" />
    save ally from death

    <icon name="iconoir:coins" /><!--
<icon name="ph:hand-coins-light" /> -->
    gold earned

    <icon name="ph:shield-plus" />
    ally healing and shielding

    <icon name="iconoir:tower" />
    turrets destroyed

    <icon name="la:user-friends" />
    pick kill with ally

    <icon name="game-icons:pentarrows-tornado" />
    pentakill

    <div class="flex gap-2">
      <icon name="solar:running-bold" />

      <icon name="arcticons:shadow-fight-2" class="stroke-3 size-7" />
    </div>
    killing spree

    <icon name="fluent-mdl2:group" />

    <icon name="fa6-solid:people-pulling" />
    kill participation

    <div class="flex gap-2">
      <icon name="ix:sword-swing" />

      <icon name="covid:graph-death-rate-increasing" />

      <icon name="mdi:karate" />
    </div>
    damage done

    <icon name="fa6-solid:people-robbery" />

    <icon name="solar:target-outline" />
    skillshots hit
  </div>
</template>