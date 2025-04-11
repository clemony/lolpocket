<script lang="ts" setup>
const ans = useAnalysisStore()

const selectQueues = [
  {
    name: 'all matches',
    icon: 'ph:infinity-bold',
    select: 'all',
  },
  {
    name: 'Ranked Solo/Duo',
    icon: 'i-roles-challenger',
    select: 'solo',
    class: "size-8.5 dst"
  },
  {
    name: 'Ranked Flex',
    icon: 'i-roles-flex',
     class: 'size-6.5 dst',
    select: 'flex',
  },
  {
    name: 'Summoner\'s Rift 5v5',
    icon: 'i-roles-all',
     class: 'size-5 dst',
    select: 'sr',
  },

]
</script>

<template>
  <div class=" *:justify-start grid gap-y-3.5  *:flex  *:text-3 *:items-center *:font-medium *:gap-3">

    <label v-for="queue in selectQueues" :key="queue.select" class="btn btn-ghost pl-3 pr-5 opacity-30 hover:opacity-60" :class="{ 'opacity-100': ans.queueSelect == queue.select }">
      <input v-model="ans.queueSelect" name="queue-tabs" type="radio" class="peer hidden" value="all" />
      <span class="w-8.5 flex items-center justify-center">
        <icon v-if="queue.select == 'all'" :name="queue.icon" class="size-6.5 dst" />
        <component :is="queue.icon" :class="queue.class"  />
      </span>

      <span class="grow text-left capitalize pt-1">
        {{queue.name}}
      </span>
      <icon name="tick-sm" class="opacity-0 size-6" :class="{ 'opacity-100': ans.queueSelect == queue.select }" />
    </label>

  </div>
</template>