<script lang="ts" setup>
const { pocketKey } = defineProps<{
  pocketKey: string
}>()

const isDisabled = computed (() => pocketKey == null)
</script>

<template>
  <div
    class="flex items-center px-2 h-16"
    :class="cn('', { 'pointer-events-none opacity-60': isDisabled })">
    <div class="flex items-center gap-2">
      <!-- pin -->

      <Button
        v-tippy="'Pin to sidebar'"
        variant="ghost"
        size="icon">
        <icon
          name="pin"
          class="size-4.75 **:stroke-[2]" />
        <span class="sr-only">Pin to sidebar</span>
      </Button>

      <!-- archive -->

      <Button
        v-tippy="'Move to archive'"
        variant="ghost"
        size="icon">
        <icon
          name="archive"
          class="size-4.5" />
        <span class="sr-only">Move to archive</span>
      </Button>

      <Button
        v-tippy="'Move to trash'"
        variant="ghost"
        size="icon">
        <icon
          name="trash"
          class="size-4.5" />
        <span class="sr-only">Move to trash</span>
      </Button>
      <Separator
        orientation="vertical"
        class="mx-1 h-6" />

      <Button
        variant="ghost"
        size="icon">
        <icon
          name="edit-line"
          class="size-4" />
        <span class="sr-only">Edit Pocket</span>
      </Button>
    </div>
    <div class="ml-auto flex items-center gap-2">
      <Button
        v-tippy="'Share'"
        variant="ghost"
        size="icon">
        <icon
          name="send"
          class="size-4.5" />
        <span class="sr-only">Share</span>
      </Button>
      <Button
        v-tippy="'Export to LoL'"
        variant="ghost"
        size="icon">
        <icon
          name="export"
          class="size-4.5" />
        <span class="sr-only">Export to LoL</span>
      </Button>
    </div>
    <Separator
      orientation="vertical"
      class="mx-2 h-6" />
    <DropdownMenu>
      <DropdownMenuTrigger
        variant="neutral"
        size="icon">
        <icon
          name="more-vertical"
          class="size-4.5" />
        <span class="sr-only">More</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        class="w-64">
        <DropdownMenuItem>
          <icon name="copy" />
          Create Pocket Copy
        </DropdownMenuItem>
        <DropdownMenuItem>
          <icon name="open" />
          Open in New Tab
        </DropdownMenuItem>
        <DropdownMenuItem>
          <icon name="tag" />
          Edit Tags
        </DropdownMenuItem>
        <DropdownMenuItem>Mute thread</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
  <Separator />
</template>