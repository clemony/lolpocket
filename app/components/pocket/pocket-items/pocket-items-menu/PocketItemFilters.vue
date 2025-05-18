<script lang="ts" setup>
import { motion, AnimatePresence } from 'motion-v'

const is = useItemStore()

const { visible } = defineProps<{
visible: boolean
}>()
</script>

<template>
  <AnimatePresence as="div" class="w-full z-1 absolute top-15.5 left-0 py-4 px-5 " >

    <motion.div v-if="visible" class="rounded-box w-full bg-b1/80 backdrop-blur-md border border-b3/60 flex items-center py-3 px-3 shadow-lg" :initial="{opacity:0, transform: 'translateY(-100%)'}"  :animate="{opacity:100, transform: 'translateY(0)'}"  :exit="{opacity:0, transform: 'translateY(-100%)'}" :transition="{}">
    <PocketItemSearch class="bg-neutral/84 **:text-nc rounded-xl" dark />


    <ItemMapFilter  v-model:model-value="is.pItemFilter.map"  />
      <div class="gap-5 px-5  flex font-medium items-center w-full justify-end ">
        {{is.itemFilter.purchasable ? 'Purchasable' : 'All'}}
        <Switch v-model:model-value="is.pItemFilter.purchasable" class="dst"  />
      </div>

  </motion.div>
</AnimatePresence>
</template>