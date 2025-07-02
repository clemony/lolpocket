<script setup lang="ts">
import { motion } from 'motion-v'
import { inboxBadges } from '~/data/messaging/inbox-badges'

const as = useAccountStore()
const { inbox: i } = defineProps<{
inbox: string
}>()

const inbox =  computed (() => i == 'Notifications' ? as.userAccount.inbox.notifications : as.userAccount.inbox.messages)
const variants = {
    visible: {},
    hidden: {},
    exit: {}
}

const itemVariants = {
    visible: {
            opacity: 1,
            transform: 'translate(0, 0px)',
        },
    hidden: {
            opacity: 0,
            transform: 'translate(0, 10px)',
        },
    exit: {
        opacity: 0,
            transform: 'translate(10px, 0px)',
    }
}

function formatTime(t){
    return useTimeAgo(t)
}
</script>

<template>
<motion.div
value="Notifications"
class="  overflow-y-scroll flex flex-col absolute inset-0 top-0 left-0"
:variants="variants"
        initial="hidden"
        animate="visible"
        exit="exit"
        :transition="{delayChildren: 0.2, staggerChildren: 0.2}">

    <motion.div
    v-for="(item, i) in inbox" :key="i"
        :variants="itemVariants" :class="cn('w-full first:pt-5 hover:dst flex hover:bg-b2/40 border border-transparent items-center shrink-0 min-h-14  px-3 py-4  items-start **:items-start gap-3 overflow-hidden not-last:border-b  border-b-b2', )">

    <span v-if="inboxBadges[item.badge]" class="badge mt-0.5" :class="inboxBadges[item.badge].class">
<span v-if="inboxBadges[item.badge].text" class="text-2 font-medium text-white/90">
        {{ inboxBadges[item.badge].text }}
    </span>
    <icon :name="inboxBadges[item.badge].icon.name" v-if="inboxBadges[item.badge].icon" :class="inboxBadges[item.badge].icon.class"/>
    </span>
<div class="flex items-center w-full gap-2 ">
    <span class="font-medium grow text-start w-full">
{{ item.title }}
</span>


<span class="text-2 ml-2 font-medium text-nowrap opacity-50">
    {{ formatTime(item.time).value.toString().replace('minutes', 'min') }}
</span>


<button  class="size-9 grid  place-items-center   opacity-40 hover:opacity-100 hover:**:stroke-[1.5] cursor-pointer " @click="inbox.splice(i, 1)">
<icon name="x-sm" class="shrink-0 "/>
    </button>


</div>

</motion.div>


</motion.div>


</template>