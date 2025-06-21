<script lang="ts" setup>
const props = defineProps<{
  team: any
  match: any
}>()

const match = computed (() => {
  return props.match
})

const teamWin = computed (() => {
  const a = match.value.teams[0].win ? 100 : 200

  return a == props.team
})
</script>

<template>
  <div
    :class="props.team == 100 ? 'bg-inspiration' : 'bg-domination'"
    class="!text-2 w-20 shadow-sm flex-nowrap flex py-1 gap-2 items-center pl-2 !font-medium !tracking-wide rounded-md text-white capitalize">
    <icon
      v-if="teamWin"
      name="ph:star-fill"
      class="size-3.5 text-white shrink-0 dst" />

    <icon
      v-else name="vaadin:close"
      class="size-3 text-white shrink-0 dst mt-px" />

    <slot />

    <span class="flex w-full  text-center grow"> {{ teamWin ? 'Win' : 'Loss' }}</span>
  </div>
</template>