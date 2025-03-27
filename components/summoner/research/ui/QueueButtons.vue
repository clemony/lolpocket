<script lang="ts" setup>
const ans = useAnalysisStore()
</script>

<template>
  <div class=" w-full relative flex justify-center gap-5  ">
    <label v-tippy="'All Matches'" class="btn btn-square">
      <input v-model="ans.queueSelect" name="queue-tabs" type="radio" class="peer hidden" value="all" />
      <i-roles-queues class="size-6 dst" />
    </label>

    <label v-tippy="'Ranked Solo/Duo'" class="btn btn-square ">
      <input v-model="ans.queueSelect" name="queue-tabs" type="radio" class="peer hidden" value="solo" />
      <i-roles-challenger class="size-8.5 dst" />
    </label>

    <label v-tippy="'Ranked Flex'" class="btn btn-square">
      <input v-model="ans.queueSelect" name="queue-tabs" type="radio" class="peer hidden" value="flex" />
      <i-roles-flex class="size-6.5 dst" />

    </label>

    <label v-tippy="'Normal 5v5 SR'" class="btn btn-square">
      <input v-model="ans.queueSelect" name="queue-tabs" type="radio" class="peer hidden" value="sr" />
      <i-roles-all class="size-5 dst" />
    </label>
  </div>
</template>