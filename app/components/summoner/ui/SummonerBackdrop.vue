<script lang="ts" setup>
import { motion } from 'motion-v'

const { summoner } = defineProps<{
  summoner: Summoner | null
}>()
</script>

<template>
  <motion.div layout class=" z-0 h-[290px] w-screen  absolute overflow-hidden top-0 left-0 translate-x-[10%]">
    <Img v-if="summoner" layout-id="backdrop-image" img="/img/art/spirit-blossom-sona.jpeg" alt="profile-image" class="  object-cover object-[50%_7%] mask-linear-[to_right,transparent_36%,black_60%]" />
  </motion.div>
</template>