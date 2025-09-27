<script lang="ts" setup>
import { accounts, mails } from '~/components/layout/box/mails'

definePageMeta({
  name: 'backpack',
  icon: 'backpack',
  order: 4,
  redirect: '/backpack/pockets',
})
const isCollapsed = ref(false)
const route = useRoute()
const pinned = computed(() => ps().pockets.filter(p => p.location.pinned))
</script>

<template>
  <div>
    <BoxLayout
      :is-collapsed
      :accounts
      :mails
      class="space-y-2"
      @toggle:collapse="(e) => (isCollapsed = !e)"
      @expand="isCollapsed = true"
      @collapse="isCollapsed = false">
      <template #nav>
        <div class="size-full h-[45px] p-1 w-full flex items-center border-b">
          <DropdownMenu>
            <DropdownMenuTrigger
              variant="ghost"
              hover="shadow"
              size="md"
              class="justify-start w-full group pl-4.5 pr-5 !gap-3 data-[state=open]:fx-noise data-[state=open]:shadow-sm data-[state=open]:border-b3/80 data-[state=open]:shadow-black/8 data-[state=open]:inset-shadow-xs hover:bg-transparent">
              <SummonerIcon class="rounded-full size-7" />
              <span
                class="w-full truncate text-4 dst font-semibold *:first:capitalize items-center">
                <SummonerName class="inline" />
                's Backpack
              </span>
              <icon
                name="select"
                :class="cn('size-4.5 text-bc/60')" />
            </DropdownMenuTrigger>
            <LazyDropdownMenuContent>
              <DropdownMenuItem>Edit pins</DropdownMenuItem>
              <DropdownMenuItem>Edit tags</DropdownMenuItem>
            </LazyDropdownMenuContent>
          </DropdownMenu>
        </div>
        <BoxNav
          :is-collapsed
          :links="
            route.matched[0].children.sort(
              (a, b) => Number(a.meta?.order) - Number(b.meta?.order),
            )
          " />

        <!-- pinned -->
        <TransitionExpand v-if="pinned.length">
          <PinnedPocketsNav
            :pinned
            :is-collapsed />
        </TransitionExpand>

        <Separator />

        <!-- tags -->
        <div class="px-0 pb-1 flex flex-col gap-4">
          <template v-if="isCollapsed">
            <Popover>
              <PopoverTrigger as-child>
                <Button
                  variant="ghost"
                  size="icon">
                  <icon name="tag" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PocketTagsInput />
              </PopoverContent>
            </Popover>
          </template>
          <PocketTagsInput v-else />
        </div>

        <Separator />

        <!-- roles -->
        <div class="px-0 pb-1 flex flex-col gap-4">
          <template v-if="isCollapsed">
            <Popover>
              <PopoverTrigger as-child>
                <Button
                  variant="ghost"
                  size="icon">
                  <hicon name="i-roles-all" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <BackpackRoleFilter />
              </PopoverContent>
            </Popover>
          </template>
          <BackpackRoleFilter v-else />
        </div>
      </template>

      <NuxtPage />
    </BoxLayout>
  </div>
</template>
