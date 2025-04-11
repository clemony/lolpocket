<script lang="ts" setup>
import { motion, useDomRef } from 'motion-v'

const container = useDomRef()

definePageMeta({
  path: '/summoner/nexus',
  name: 'nexus',
  alias: '/nexus',
  section: 'nexus',
})

const as = useAccountStore()

</script>

<template>
  <div class="size-full pt-23 px-14">
    <motion.div layout ref="container" class="size-full grid grid-flow-col items-center auto-cols-min auto-rows-max place-items-center gap-3 ">
        <MasteryTrinket  :container="container" />

      <RankedBadgeTrinket   :container="container" />
      <ChallengesTrinket  :container="container" />
      <TotalChallengePointsTrinket  :container="container" />
      <MiniMasteryTrinket   :container="container" :championNum="1"/>
    </motion.div>
  </div>
</template>
