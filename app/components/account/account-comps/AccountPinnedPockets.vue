<script lang="ts" setup>
const { account } = defineProps<{
  account: userAccount
}>()
const ps = usePocketStore()

const pinned = computed (() => {
  return ps.pockets.filter(p => p.location.pinned == true)
})
</script>

<template>
  <Field  class="relative px-2">
    <icon name="pin" class="absolute top-3 right-3 size-4.5 dst opacity-80" />
    <ul v-if="account && pinned && pinned.length" class="space-y-2">
      <li
        v-for="pocket in pinned"
        :key="pocket.key"
        @click="navigateTo(`/pocket/${pocket.key}`)">
        <SheetClose
          class="btn !font-medium tracking-tight !gap-5 btn-ghost px-2 btn-lg w-full *:last:opacity-0 hover:*:opacity-100">
          <PocketIcon :image="pocket.icon" class="size-9 " />
          <span class="grow text-start">
            {{ pocket.name }}
          </span>
          <icon name="open" class="transition duration-200 size-4" />
        </SheetClose>
      </li>
    </ul>
    <div v-else-if="account && !pinned && !pinned.length" class="grid place-items-center h-20">
      Pin pockets from your backpack for quick access.
    </div>
  </Field>
</template>