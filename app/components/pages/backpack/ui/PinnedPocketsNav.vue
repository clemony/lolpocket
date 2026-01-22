<script lang="ts" setup>
import type { Pocket } from '@types'

const { isCollapsed, pinned } = defineProps<{
  isCollapsed: boolean
  pinned: Pocket[]
}>()
</script>

<template>
  <Collapsible
    v-if="!isCollapsed"
    v-model:open="ui().toggles.backpack.pinned"
    :data-collapsed="isCollapsed"
    class="px-3 pb-2 data-[collapsed=true]:py-2">
    <CollapsibleTrigger
      as-child
      class="group/collapse">
      <Button
        as="button"
        variant="ghost"
        class="w-full"
        size="md">
        <span
          class="
            grow text-lg font-semibold tracking-normal capitalize opacity-40
          ">
          Pinned Pockets
        </span>
        <CaretRotate />
      </Button>
    </CollapsibleTrigger>

    <CollapsibleContent
      menu
      class="
        CollapsibleContent group relative flex w-full flex-col gap-4
        **:duration-0
      ">
      <nav
        class="
          grid gap-1 group-data-[collapsed=true]:justify-center
          group-data-[collapsed=true]:px-2
        ">
        <div
          v-for="link of pinned"
          :key="link.name"
          class="
            group/tag flex max-h-9 w-full flex-nowrap items-center py-1 pr-2
          ">
          <BtnLink
            variant="ghost"
            :size="isCollapsed ? 'icon' : 'md'"
            :to="`/${link.key}`"
            class="
              text-md flex grow items-center justify-start gap-3! px-2
              duration-0!
            ">
            <PocketIcon
              size="sm"
              :src="link.icon"
              class="size-6 rounded-full" />

            <span
              v-show="!isCollapsed"
              class="font-medium capitalize">
              {{ link.name }}
            </span>
          </BtnLink>
          <Label
            v-show="!isCollapsed"
            v-tippy="'Unpin'"
            for="toggle-pin"
            variant="ghost"
            class="
              relative grid size-10 cursor-pointer place-items-center
              *:transition-opacity *:duration-200 hover:*:first:opacity-0
              hover:*:last:opacity-100
            "
            @click.stop>
            <icon
              name="pin"
              class="absolute size-4 **:stroke-[1.84]" />
            <input
              v-model="ps().pinned"
              name="toggle-pin"
              type="checkbox"
              class="peer hidden" />
            <icon
              name="unpin"
              class="absolute size-4 opacity-0 **:stroke-[1.84]" />
          </Label>
        </div>
      </nav>
    </CollapsibleContent>
  </Collapsible>

  <nav
    v-else
    class="flex flex-col items-center justify-center gap-1">
    <BtnLink
      v-for="link of pinned"
      :key="link.name"
      class="size-12"
      :to="`/${link.key}`"
      variant="ghost">
      <PocketIcon
        size="sm"
        :src="link.icon"
        class="size-9 rounded-full" />
    </BtnLink>
  </nav>
</template>
