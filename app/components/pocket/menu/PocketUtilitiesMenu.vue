<script lang="ts" setup>
import type { Pocket } from '~~/shared/schema'

const { pocket: p } = defineProps<{
  pocket: Pocket
}>()
const isOpen = shallowRef(false)
/* const pocket = computed (() => p) */

const route = useRoute()
const pocket = computed(() => ps().getPocket(String(route.params.pocket_key)))

async function testSaveAllPockets() {
  await $fetch('/api/supabase/updatePockets', {
    body: { pockets: ps().pockets },
    method: 'POST',
  })

  console.log('🌱 - all pockets sent!')
}
</script>

<template>
  <Popover v-model:open="isOpen">
    <PopoverTrigger as-child>
      <Button
        variant="ghost"
        size="md"
        hover="ghost"
        :class="
          cn('mb-1 btn-square self-end hover:bg-b3!',
            { 'btn-active': isOpen },
          )
        ">
        <icon
          name="more"
          class="
            opacity-60 group-hover/drop:opacity-80
            group-data-[state=open]/drop:opacity-80
          " />
      </Button>
    </PopoverTrigger>

    <LazyPopPopoverContent
      arrow-class="hidden"
      align="start"
      :side-offset="-18"
      :align-offset="-4"
      class="
        ml-3 flex min-w-76 flex-col justify-center justify-items-center
        overflow-hidden px-1 py-3 **:[&_button]:w-full
        **:[&_button]:justify-start **:[&_button]:gap-3! **:[&_button]:px-3
      ">
      <Button
        variant="ghost"
        size="sm"
        class="h-9! rounded-md"
        @click="testSaveAllPockets()">
        sync
      </Button>

      <Button
        variant="ghost"
        size="sm"
        class="h-9! rounded-md">
        <icon
          name="send"
          class="size-4.5" />
        Share
      </Button>

      <Button
        variant="ghost"
        size="sm"
        class="h-9! rounded-md">
        <icon
          name="hugeicons:image-download"
          class="dst" />
        Download Pocket Card
      </Button>

      <Separator class="-mx-2 my-2 justify-self-center bg-b3" />
      <Label
        variant="label"
        class="mb-1 px-3 py-2">
        <icon
          name="export"
          class="size-4.5 dst" />
        Export to League Client
      </Label>
      <Button
        variant="ghost"
        size="sm"
        class="h-9! rounded-md pl-10.75!">
        Items & Champions
      </Button>

      <Button
        variant="ghost"
        size="sm"
        class="h-9! rounded-md pl-10.75!">
        Runes
      </Button>

      <Separator class="-mx-2 my-2 justify-self-center bg-b3" />
      <Button
        variant="ghost"
        size="sm"
        class="h-9! rounded-md"
        as-child>
        <DeletePocketDialog :pocket="pocket">
          <icon
            name="trash"
            class="size-4.5 dst" />
          Delete Pocket
        </DeletePocketDialog>
      </Button>
    </LazyPopPopoverContent>
  </Popover>
</template>
