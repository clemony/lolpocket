<script lang="ts" setup>
import { HoverCardArrow } from 'reka-ui'
import { VueDraggable } from 'vue-draggable-plus'

const ps = usePocketStore()
const as = useAccountStore()
const pockets = computed (() => [...ps.pockets])
const allKeys = computed (() => [...ps.pockets.map(p => p.key)])
</script>

<template>
  <ResponsiveDialog>
    <ResponsiveDialogTrigger>
<slot />
    </ResponsiveDialogTrigger>

    <ResponsiveDialogContent side="bottom" class="w-180 min-w-180 h-160">
      <ResponsiveDialogHeader title="Edit Pocket Pins" description="Select and organize your favorite pockets for easy access." />

      <article class="grid grid-cols-[4fr_0.5fr_4fr] size-full mt-6 gap-6">
<section>
  <h5>All Pockets</h5>
<VueDraggable :sortable="false" v-model="allKeys" class="grid">

  <HoverCard v-for="pocket in pockets" :key="pocket.key">
<HoverCardTrigger class=" btn btn-ghost btn-lg justify-start">
  <PocketIcon :image="pocket.icon"  class="size-9 rounded-full"/>
  {{ pocket.name }}
</HoverCardTrigger>
<LazyHoverCardContent hydrate-on-interact side="left">
<HoverCardArrow/>
</LazyHoverCardContent>
</HoverCard>
</VueDraggable>

</section>

<div class="h-full">
  <icon name="right-sm" />
</div>

<VueDraggable class="a" v-model="as.userAccount.pockets.pinned">

</VueDraggable>
      </article>
    </ResponsiveDialogContent>
  </ResponsiveDialog>
</template>