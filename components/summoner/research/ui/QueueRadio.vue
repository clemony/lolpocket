<script lang="ts" setup>
const ans = useAnalysisStore()
</script>

<template>
  <div class=" *:justify-start  *:flex  *:text-3 *:items-center *:font-medium *:gap-3">
    <label class="btn btn-ghost btn-lg"  :class="{'btn-active': ans.queueSelect == 'all'}">
      <input v-model="ans.queueSelect" name="queue-tabs" type="radio" class="peer hidden" value="all" />
      <span class="w-8.5 flex items-center justify-center">
        <i-roles-queues class="size-6 dst" />
      </span>
      All Matches
    </label>

    <label class="btn btn-ghost btn-lg" :class="{'btn-active': ans.queueSelect == 'solo'}">
      <input v-model="ans.queueSelect" name="queue-tabs" type="radio" class="peer hidden" value="solo" />
      <span class="w-8.5 flex items-center justify-center">
        <i-roles-challenger class="size-8.5 dst" />
      </span>
      Ranked Solo/Duo
    </label>

    <label class="btn btn-ghost btn-lg"  :class="{'btn-active': ans.queueSelect == 'flex'}">
      <input v-model="ans.queueSelect" name="queue-tabs" type="radio" class="peer hidden" value="flex" />
      <span class="w-8.5 flex items-center justify-center">
        <i-roles-flex class="size-6.5 dst" />
      </span>
      Ranked Flex
    </label>

    <label class="btn btn-ghost btn-lg"  :class="{'btn-active': ans.queueSelect == 'sr'}">
      <input v-model="ans.queueSelect" name="queue-tabs" type="radio" class="peer hidden" value="sr" />
      <span class="w-8.5 flex items-center justify-center">
        <i-roles-all class="size-5 dst" />
      </span>
      Classic SR 5v5
    </label>
  </div>
</template>