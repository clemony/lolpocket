<script lang="ts" setup>
async function clear() {
  const { clearMatches } = useIndexedDB()
  await clearMatches()
}
</script>

<template>
  <ActionCard
    as="div"
    button="Clear Matches"
    class="h-60 cursor-default"
    @click="clear()">
    <template #title>
      Clear Local Match Data
    </template>
    <template #text>
      Remove
      <tippy
        class="underline transition-colors duration-200 cursor-help underline-dotted rounded-tiny hover:bg-neutral/96 hover:text-nc">
        stored data
        <template #content>
          <ul class="p-3 list-disc not-first:mt-2">
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
      <ResponsiveDialog>
        <ResponsiveDialogTrigger
          class="items-center !overflow-visible align-baseline w-24 !h-4 justify-center origin-center relative inline-flex self-center">
          <span
            class="absolute font-medium w-24 !h-6 mt-0.5 text-center hover:font-bold transition-all underline duration-200">
            contact me.
          </span>
        </ResponsiveDialogTrigger>
      </ResponsiveDialog>
    </template>
  </ActionCard>
</template>
