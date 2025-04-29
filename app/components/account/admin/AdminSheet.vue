<script lang="ts" setup>
const { summoner } = defineProps<{
  summoner: Summoner
}>()

const { forceReload, loading } = useSummoner(summoner.puuid)
</script>

<template>

    <AccordionItem value="item-1">
      <AccordionTrigger>Admin</AccordionTrigger>
      <AccordionContent>
      <ClearMatchesButton />

      <NavBtn
        class="" @click="forceReload()">
        <icon
          name="ph:gear-six" />
        Force Reload User Summoner
      </NavBtn>
      </AccordionContent>
    </AccordionItem>

</template>