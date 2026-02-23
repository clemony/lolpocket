<script lang="ts" setup>
const { pocketKey } = defineProps<{
  pocketKey: string | null
}>()

const isDisabled = computed(() => pocketKey === null)

const pocket = computed(() => {
  if (!pocketKey) return

  return pocketKey ? usePockets().getPocket(pocketKey) : null
})

const pocketKeySafe = computed(() => pocket.value?.key ?? "")
const pinned = computed(() => usePockets().pinned.includes(pocketKeySafe.value))
</script>

<template>
  <div
    class="border-box flex h-15 items-center px-2"
    :class="cn('', { 'pointer-events-none opacity-50': isDisabled })">
    <div class="flex items-center gap-2">
      <!-- pin -->
      <Label
        label="'Pin to sidebar'"
        base="btn"
        :variant="pinned ? 'outline' : 'ghost'"
        :class="
          cn('relative grid size-11 place-items-center *:absolute', {
            'bg-p2/30': pinned,
          })
        ">
        <input
          v-if="pocket && pocket?.key"
          v-model="usePockets().pinned"
          class="peer hidden"
          :value="pocket.key"
          type="checkbox" />
        <icon v-if="!pinned" class="size-4.75 **:stroke-2" name="pin" />

        <icon v-else class="size-4.75 **:stroke-2" name="unpin" />
      </Label>

      <!-- archive -->
      <Label
        label="'Move to archive'"
        base="btn"
        :variant="
          usePockets().archive.includes(pocketKeySafe) ? 'outline' : 'ghost'
        "
        :class="
          cn('relative grid size-11 place-items-center *:absolute', {
            'bg-p2/30': pinned,
          })
        ">
        <input
          v-if="pocket && pocket?.key"
          v-model="usePockets().pinned"
          class="peer hidden"
          :value="pocket.key"
          type="checkbox" />
        <icon name="archive" />
      </Label>

      <!-- trash -->
      <UButton
        label="'Move to trash'"
        base="btn"
        :variant="
          usePockets().trash.includes(pocketKeySafe) ? 'outline' : 'ghost'
        "
        :class="
          cn('relative grid size-11 place-items-center *:absolute', {
            'bg-p2/30': pinned,
          })
        ">
        <icon name="trash" />
      </UButton>

      <Separator class="mx-1 h-6" orientation="vertical" />

      <!-- tags -->

      <PocketTagsDropdown :pocket="pocket ?? undefined" />
      <!-- edit -->
      <UButton
        v-if="pocket && pocket?.key"
        class="size-11"
        :to="`/pocket/${pocket.key}`"
        variant="ghost">
        <icon name="edit-line" />
      </UButton>
    </div>

    <div class="ml-auto flex items-center gap-2">
      <!-- share -->
      <UButton label="'Share'" class="size-11" variant="ghost">
        <icon name="send" />
      </UButton>

      <!-- export -->
      <UButton
        label="'Export to LoL'"
        class="size-11"
        :disabled="!user().account?.puuid"
        variant="ghost">
        <icon name="export" />
      </UButton>
    </div>
    <Separator class="mx-2 h-6" orientation="vertical" />

    <!-- more -->
    <UDropdownMenu>
      <UButton class="size-11" color="neutral">
        <icon name="more-vertical" />
      </UButton>
      <!-- <DropdownMenuContent class="w-64" align="end">
        <DropdownMenuItem>
          <icon name="copy" />
          Create Pocket Copy
        </DropdownMenuItem>
        <DropdownMenuItem>
          <icon name="open" />
          Open in New Tab
        </DropdownMenuItem>
      </DropdownMenuContent> -->
    </UDropdownMenu>
  </div>
  <Separator />
</template>
