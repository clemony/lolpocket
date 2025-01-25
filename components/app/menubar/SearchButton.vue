<script setup lang="ts">
const props = defineProps<{
  placeholder: string
}>()
// import { commandModal } from 'components/drawer/data'

const as = useAccountStore()
</script>

<template>
  <Button
    size="xs"
    variant="outline"
    class="!border-b3 !bg-b1 hover:ring-b3 flex !h-10 min-h-6 w-full min-w-48 !cursor-pointer items-center border !px-2 !py-0 outline-0 transition-all duration-300 hover:border-1 hover:ring-1"
    @click="as.commandOpen ? (as.commandOpen = false) : (as.commandOpen = true)"
  >
    <icon
      name="teenyicons:search-outline"
      class="-mt-px mr-1 ml-1 size-4 justify-self-start opacity-95"
    />

    <span class="align-end text-2 mt-px grow text-start font-medium opacity-70">
      {{ props.placeholder }}
    </span>
    <DropdownMenuShortcut as-child>
      <Badge
        size="sm"
        class="text-3 border-b3 rounded-md border shadow-xs"
      >
        ⌘ K
      </Badge>
    </DropdownMenuShortcut>
  </Button>
</template>

<style scoped></style>
