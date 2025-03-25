<script lang="ts" setup>
const props = defineProps<{
  match: any
}>()
const match = computed (() => {
  return props.match
})

const blue = computed (() => {
  return match.value.participants.filter(p => p.teamId == 100)
})

const red = computed (() => {
  return match.value.participants.filter(p => p.teamId == 200)
})
</script>

<template>
  <div class="grid grid-cols-[1fr_1fr] @min-xl/match:*:max-w-36 @min-xl/match:*:w-36 @min-lg/match:*:max-w-24 @min-lg/match:*:w-24  gap-4  overflow-hidden *:gap-y-px *:grid *:grid-rows-5">
    <div class="">
    <div v-for="player in blue" :key="player.participantId" class="flex gap-2 overflow-hidden">
      <div class="flex gap-2 overflow-hidden">
      <div class="shadow-sm size-fit">
        <div class="rounded-tiny size-5.5 overflow-hidden">
          <img
            :src="`/img/champion/${player.championId}.webp`" class="rounded-tiny size-full scale-122" />
        </div>
      </div>
<a class="text-1 tracking-tight h-full align-middle w-full  text-nowrap  hover:underline decoration-1 font-medium truncate">
      {{player.riotIdGameName}}
      </a>
      </div>
    </div>
</div>

<div class="">
     <div v-for="player in red" :key="player.participantId" class="flex gap-2 overflow-hidden">
      <div class="flex gap-2 overflow-hidden">
      <div class="shadow-sm size-fit">
        <div class="rounded-tiny size-5.5 overflow-hidden">
          <img
            :src="`/img/champion/${player.championId}.webp`" class="rounded-tiny size-full scale-122" />
        </div>
      </div>
<a class="@max-lg/match:hidden @max-lg/match:opacity-0 text-1 tracking-tight h-full align-middle w-full text-nowrap  hover:underline decoration-1 font-medium truncate">
      {{player.riotIdGameName}}
</a>
      </div>
    </div>
    </div>
  </div>
</template>