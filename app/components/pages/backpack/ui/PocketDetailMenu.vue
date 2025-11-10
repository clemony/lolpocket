<script lang="ts" setup>
const { pocketKey } = defineProps<{
  pocketKey: string | null
}>()

const isDisabled = computed(() => pocketKey === null)

const pocket = computed(() => {
  if (!pocketKey)
    return

  return pocketKey ? ps().getPocket(pocketKey) : null
})

const pinned = computed (() => ps().pinned.includes(pocket.value.key))
</script>

<template>
  <div
    class="flex items-center px-2 h-[45px] border-box"
    :class="cn('', { 'pointer-events-none opacity-50': isDisabled })">
    <div class="flex items-center gap-2">
      <!-- pin -->
      <Label
      base="btn"  v-tippy="'Pin to sidebar'"
        :variant="pinned ? 'outline' : 'ghost'"
        :class="
          cn('size-11 relative grid place-items-center *:absolute', {
            'bg-b2/30': pinned,
          })
        ">
        <input :value="pocket.key" type="checkbox" v-model="ps().pinned" class="peer hidden" />
        <icon
          v-if="!pinned"
          name="pin"
          class="size-4.75 **:stroke-[2]" />

        <icon
          v-else
          name="unpin"
          class="size-4.75 **:stroke-[2]" />
      </Label>

      <!-- archive -->
      <Label
      base="btn"
        v-tippy="'Move to archive'"
        :variant="ps().archive.includes(pocket.key) ? 'outline' : 'ghost'"
        :class="cn('size-11 relative grid place-items-center *:absolute', {
            'bg-b2/30': pinned,
          })
        ">
        <input :value="pocket.key" type="checkbox" v-model="ps().pinned" class="peer hidden" />
        <icon name="archive" />
      </Label>

      <!-- trash -->
      <Button
      base="btn"
        v-tippy="'Move to trash'"
        :variant="ps().trash.includes(pocket.key) ? 'outline' : 'ghost'"
        :class="cn('size-11 relative grid place-items-center *:absolute', {
            'bg-b2/30': pinned,
          })
        ">
        <icon name="trash" />
      </Button>

      <Separator
        orientation="vertical"
        class="mx-1 h-6" />

      <!-- tags -->

      <PocketTagsDropdown :pocket></PocketTagsDropdown>
      <!-- edit -->
      <BtnLink
        v-if="pocket && pocket?.key"
        :to="`/pocket/${pocket.key}`"
        variant="ghost"
        class="size-11">
        <icon name="edit-line" />
      </BtnLink>
    </div>

    <div class="ml-auto flex items-center gap-2">
      <!-- share -->
      <Button
        v-tippy="'Share'"
        variant="ghost"
        class="size-11">
        <icon name="send" />
      </Button>

      <!-- export -->
      <Button
        v-tippy="'Export to LoL'"
        :disabled="!as().account.puuid"
        variant="ghost"
        class="size-11">
        <icon name="export" />
      </Button>
    </div>
    <Separator
      orientation="vertical"
      class="mx-2 h-6" />

    <!-- more -->
    <DropdownMenu>
      <DropdownMenuTrigger
        variant="neutral"
        class="size-11">
        <icon name="more-vertical" />
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
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
  <Separator />
</template>
