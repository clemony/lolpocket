<script lang="ts" setup>
const { account } = defineProps<{
  account: userAccount
}>()
const ps = usePocketStore()

const pinned = computed (() => {
  return ps.pockets.filter(p => p.location.pinned == true)
})
console.log('💠 - pinned - pinned:', pinned)
</script>

<template>

    <AccordionItem value="pinned">
      <AccordionTrigger class="text-4 font-medium">Pinned Pockets</AccordionTrigger>
      <AccordionContent>
        <ul v-if="account && pinned && pinned.length" class="space-y-2">

      <li v-for="pocket in pinned"
      :key="pocket.key"
      class="btn font-medium btn-ghost btn-lg w-full *:last:opacity-0 hover:*:opacity-100"
      @click="navigateTo(`/pocket/${pocket.key}`)">

        <PocketIcon :image="pocket.icon" class="size-10" />
        <span class="grow text-start">
        {{ pocket.name }}
        </span>
        <icon name="open" class="transition duration-200"/>
      </li>
    </ul>
    <div v-else-if="account && !pinned && !pinned.length" class="grid place-items-center h-20">
      Pin pockets from your backpack for quick access.
    </div>
      </AccordionContent>
    </AccordionItem>
   

</template>