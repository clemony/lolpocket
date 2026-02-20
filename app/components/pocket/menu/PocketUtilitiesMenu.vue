<script lang="ts" setup>
const { pocket: p } = defineProps<{
  pocket: Pocket
}>()
const isOpen = shallowRef(false)
/* const pocket = computed (() => p) */

const route = useRoute()
const pocket = computed(() =>
  usePockets().getPocket(String(route.params.pocket_key))
)

async function testSaveAllPockets() {
  await $fetch("/supabase/updatePockets", {
    method: "POST",
    body: { pockets: usePockets().pockets },
  })

  console.log("🌱 - all pockets sent!")
}
</script>

<template>
  <UPopover v-model:open="isOpen">
    <UButton as-child>
      <UButton
        variant="ghost"
        size="md"
        hover="ghost"
        :class="
          cn('mb-1 btn-square self-end hover:bg-p3!', { 'btn-active': isOpen })
        ">
        <icon
          class="opacity-60 group-hover/drop:opacity-80 group-data-[state=open]/drop:opacity-80"
          name="more" />
      </UButton>
    </UButton>

    <LazyPopPopoverContent
      class="ml-3 flex min-w-76 flex-col justify-center justify-items-center overflow-hidden px-1 py-3 **:[&_button]:w-full **:[&_button]:justify-start **:[&_button]:gap-3! **:[&_button]:px-3"
      arrow-class="hidden"
      align="start"
      :side-offset="-18"
      :align-offset="-4">
      <UButton
        class="h-9! rounded-md"
        variant="ghost"
        size="sm"
        @click="testSaveAllPockets()">
        sync
      </UButton>

      <UButton class="h-9! rounded-md" variant="ghost" size="sm">
        <icon class="size-4.5" name="send" />
        Share
      </UButton>

      <UButton class="h-9! rounded-md" variant="ghost" size="sm">
        <icon class="dst" name="hugeicons:image-download" />
        Download Pocket Card
      </UButton>

      <Separator class="-mx-2 my-2 justify-self-center bg-p3" />
      <Label class="mb-1 px-3 py-2" variant="label">
        <icon class="dst size-4.5" name="export" />
        Export to League Client
      </Label>
      <UButton class="h-9! rounded-md pl-10.75!" variant="ghost" size="sm">
        Items & Champions
      </UButton>

      <UButton class="h-9! rounded-md pl-10.75!" variant="ghost" size="sm">
        Runes
      </UButton>

      <Separator class="-mx-2 my-2 justify-self-center bg-p3" />
      <UButton class="h-9! rounded-md" variant="ghost" size="sm" as-child>
        <DeletePocketDialog :pocket="pocket">
          <icon class="dst size-4.5" name="trash" />
          Delete Pocket
        </DeletePocketDialog>
      </UButton>
    </LazyPopPopoverContent>
  </UPopover>
</template>
