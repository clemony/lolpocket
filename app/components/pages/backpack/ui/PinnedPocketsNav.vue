<script lang="ts" setup>
const { isCollapsed, pinned } = defineProps<{
  isCollapsed: boolean
  pinned: Pocket[]
}>()
</script>

<template>
  <Collapsible
    v-if="!isCollapsed"
    v-model:open="as().toggles.backpack.pinned"
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
          class="font-semibold grow tracking-normal opacity-40 text-md capitalize">
          Pinned Pockets
        </span>
        <CaretRotate />
      </Button>
    </CollapsibleTrigger>

    <CollapsibleContent
      menu
      class="CollapsibleContent **:duration-0 group w-full flex flex-col gap-4 relative">
      <nav
        class="grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        <div
          v-for="link of pinned"
          :key="link.name"
          class="flex group/tag w-full max-h-9 py-1 pr-2 items-center flex-nowrap">
          <BtnLink
            variant="ghost"
            :size="isCollapsed ? 'icon' : 'md'"
            :to="`/${link.key}`"
            class="px-2 !duration-0 text-sm justify-start grow !gap-3 flex items-center">
            <PocketIcon
              size="sm"
              :img="link.icon"
              class="size-6 rounded-full" />

            <span
              v-show="!isCollapsed"
              class="capitalize font-medium">
              {{ link.name }}
            </span>
          </BtnLink>
          <Label
            v-show="!isCollapsed"
            v-tippy="'Unpin'"
            for="toggle-pin"
            variant="ghost"
            class="size-10 *:transition-opacity *:duration-200 hover:*:last:opacity-100 hover:*:first:opacity-0 place-items-center grid relative cursor-pointer"
            @click.stop>
            <icon
              name="pin"
              class="**:stroke-[1.84] absolute size-4" />
            <input
              v-model="link.location.pinned"
              name="toggle-pin"
              type="checkbox"
              class="peer hidden" />
            <icon
              name="unpin"
              class="**:stroke-[1.84] opacity-0 absolute size-4" />
          </Label>
        </div>
      </nav>
    </CollapsibleContent>
  </Collapsible>

  <nav
    v-else
    class="flex flex-col gap-1 items-center justify-center">
    <BtnLink
      v-for="link of pinned"
      :key="link.name"
      class="size-12"
      :to="`/${link.key}`"
      variant="ghost">
      <PocketIcon
        size="sm"
        :img="link.icon"
        class="size-9 rounded-full" />
    </BtnLink>
  </nav>
</template>
