<script lang="ts" setup>
import { getSplashFromSkinKey } from "~/domain/utils/img"

const { isCollapsed, pinned } = defineProps<{
  isCollapsed: boolean
  pinned: Pocket[]
}>()
</script>

<template>
  <Collapsible
    v-if="!isCollapsed"
    v-model:open="session().toggles.backpack.pinned"
    class="px-3 pb-2 data-[collapsed=true]:py-2"
    :data-collapsed="isCollapsed">
    <CollapsibleTrigger class="group/collapse" as-child>
      <UButton class="w-full" as="button" variant="ghost" size="md">
        <span
          class="grow text-lg font-semibold tracking-normal capitalize opacity-40">
          Pinned Pockets
        </span>
        <CaretRotate />
      </UButton>
    </CollapsibleTrigger>

    <CollapsibleContent
      class="CollapsibleContent group relative flex w-full flex-col gap-4 **:duration-0"
      menu>
      <nav
        class="grid gap-1 group-data-[collapsed=true]:justify-center group-data-[collapsed=true]:px-2">
        <div
          v-for="link of pinned"
          :key="link.label"
          class="group/tag flex max-h-9 w-full flex-nowrap items-center py-1 pr-2">
          <UButton
            class="flex grow items-center justify-start gap-3! px-2 text-md duration-0!"
            variant="ghost"
            :to="`/${link.key}`">
            <PocketIcon
              class="size-6 rounded-full"
              size="sm"
              :src="getSplashFromSkinKey(link.skin, 'tile')" />

            <span v-show="!isCollapsed" class="font-medium capitalize">
              {{ link.label }}
            </span>
          </UButton>
          <Label
            v-show="!isCollapsed"
            label="'Unpin'"
            class="relative grid size-10 cursor-pointer place-items-center *:transition-opacity *:duration-200 hover:*:first:opacity-0 hover:*:last:opacity-100"
            for="toggle-pin"
            variant="ghost"
            @click.stop>
            <icon class="absolute size-4 **:stroke-[1.84]" name="pin" />
            <input
              v-model="pocketStore().pinned"
              class="peer hidden"
              name="toggle-pin"
              type="checkbox" />
            <icon
              class="absolute size-4 opacity-0 **:stroke-[1.84]"
              name="unpin" />
          </Label>
        </div>
      </nav>
    </CollapsibleContent>
  </Collapsible>

  <nav v-else class="flex flex-col items-center justify-center gap-1">
    <UButton
      v-for="link of pinned"
      :key="link.label"
      class="size-12"
      :to="`/${link.key}`"
      variant="ghost">
      <PocketIcon
        class="size-9 rounded-full"
        size="sm"
        :src="getSplashFromSkinKey(link.skin, 'tile')" />
    </UButton>
  </nav>
</template>
