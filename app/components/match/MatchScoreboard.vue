<script lang="ts" setup>
const props = defineProps<{
  match: any
  red: any
  blue: any
}>()

const match = computed (() => {
  return props.match
})

const blue = computed (() => {
  return props.blue
})

const red = computed (() => {
  return props.red
})
</script>

<template>
  <div class="gap-2 flex flex-col overflow-x-scroll px-2">
    <!--   teammate -->
    <div class=" size-full ">
      <template v-for="(player, i) in blue" :key="i">
        <MatchTeammate v-if="match && blue && player" :player="player" />
      </template>
    </div>
    <!-- team stats -->
    <MatchTeamData :match="match" :team="blue" :team-id="100" :index="0" :enemy="red" />

    <Separator class="bg-b3/60 " />

    <!-- team stats -->
    <MatchTeamData :match="match" :team="red" :team-id="200" :index="1" :enemy="blue" />

    <!--   teammate -->

    <div class=" size-fit mt-1">
      <template v-for="(player, i) in red" :key="i">
        <MatchTeammate v-if="match && red && player" :player="player" />
      </template>
    </div>
  </div>
</template>