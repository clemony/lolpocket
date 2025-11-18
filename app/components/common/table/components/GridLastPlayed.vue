<script setup lang="ts">
const { params } = defineProps<{
  params: any
}>()
</script>

<template>
  <div
    v-if="params.data.lastPlayed"
    class="
      relative flex size-full flex-col justify-center gap-1 *:flex
      *:items-center *:gap-3
    ">
    <p>
      <icon
        name="lucide:calendar"
        class="-mt-0.25 size-3.5 align-middle opacity-80 dst **:stroke-[2.1]" />
      {{ useDateFormat(params.data.lastPlayed, "MMM DD, YYYY").value }}
    </p>
    <p>
      <icon
        name="lucide:clock"
        class="size-3.5 align-text-bottom opacity-80 dst **:stroke-[2.4]" />
      {{ useDateFormat(params.data.lastPlayed, "h:mm a").value }}
    </p>
  </div>
</template>
