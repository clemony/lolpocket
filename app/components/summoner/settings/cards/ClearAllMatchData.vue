<script lang="ts" setup>
async function clear() {
  const { clearMatches } = useMatchDexie()
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
      Clear all Match Data
    </template>
    <template #text>
      Match data is cached in your browser's internal database to limit
      strain on Riot's API servers. If you're having issues updating
      matches, try this, or
      <ResponsiveDialog>
        <ResponsiveDialogTrigger class=" items-center !overflow-visible align-baseline w-24  !h-4   justify-center  origin-center relative inline-flex self-center">
          <span class="absolute font-medium w-24 !h-6 mt-0.5  text-center hover:font-bold transition-all underline duration-200 ">
            contact me.
          </span>
        </ResponsiveDialogTrigger>
      </ResponsiveDialog>
    </template>
  </ActionCard>
</template>