<script lang="ts" setup>
async function clear() {
  const { clearMatches } = useIndexedDB()
  await clearMatches()
}
</script>

<template>
  <ActionCard
    class="h-60 cursor-default"
    as="div"
    button="Clear Matches"
    @click="clear()">
    <template #title> Clear Local Match Data </template>
    <template #text>
      Remove
      <tippy
        class="underline-dotted rounded-tiny cursor-help underline transition-colors duration-200 hover:bg-neutral/96 hover:text-nc">
        stored data
        <template #content>
          <ul class="list-disc p-3 not-first:mt-2">
            <li>
              Match data is cached in your browser's internal database to limit
              strain on Riot's API servers.
            </li>
            <li>This data is not permanent.</li>
            <li>
              Most modern browsers automatically clear data as it becomes stale
              or unused over time.
            </li>
          </ul>
        </template>
      </tippy>
      from your browser's cache. If you're having issues updating matches, try
      this button ↘︎ or
      <UModal>
        <UButton
          class="relative inline-flex h-4! w-24 origin-center items-center justify-center self-center overflow-visible! align-baseline">
          <span
            class="absolute mt-0.5 h-6! w-24 text-center font-medium underline transition-all duration-200 hover:font-bold">
            contact me.
          </span>
        </UButton>
      </UModal>
    </template>
  </ActionCard>
</template>
