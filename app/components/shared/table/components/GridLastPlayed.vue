<script setup lang="ts">
const { params } = defineProps<{
  params: any
}>()
</script>

<template>
  <div
    v-if="params.data.lastPlayed"
    class="size-full relative flex flex-col gap-1 justify-center *:flex *:items-center *:gap-3">
    <p>
      <icon
        name="lucide:calendar"
        class="size-3.5 dst opacity-80 align-middle **:stroke-[2.1] -mt-0.25" />
      {{ useDateFormat(params.data.lastPlayed, "MMM DD, YYYY").value }}
    </p>
    <p>
      <icon
        name="lucide:clock"
        class="size-3.5 dst opacity-80 align-text-bottom **:stroke-[2.4]" />
      {{ useDateFormat(params.data.lastPlayed, "h:mm a").value }}
    </p>
  </div>
</template>
