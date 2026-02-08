<script lang="ts" setup>
definePageMeta({
  title: 'Backpack',
  icon: 'backpack',
  layout: 'tab-mini',
  order: 4,
  redirect: '/backpack/pockets',
})
const isCollapsed = ref(false)
const route = useRoute()
const pinned = computed(() =>
  ps().pockets.filter(p => ps().pinned.includes(p.key))
)
</script>

<template>
  <!--  <div>
    <BoxLayout
      :is-collapsed
      :accounts
      :mails
      class="space-y-2"
      @toggleCollapse="(e) => (isCollapsed = !e)"
      @expand="isCollapsed = true"
      @collapse="isCollapsed = false">
      <template #nav> -->
  <div class="flex size-full h-16 w-full items-center border-b p-1">
    <UDropdownMenu>
      <UButton
        class="group data-[state=open]:fx-noise w-full justify-start gap-3! pr-5 pl-4.5 open:border-p3/80 open:shadow-sm open:inset-shadow-xs open:shadow-black/8 hover:bg-transparent"
        variant="ghost"
        hover="base"
        size="lg">
        <SummonerIcon class="size-7 rounded-full" />
        <span
          class="w-full items-center truncate text-xl font-semibold dst *:first:capitalize">
          <SummonerName class="inline" />
          's Backpack
        </span>
        <icon
          name="up-down"
          :class="cn('size-4.5 text-pc/60')" />
      </UButton>
      <!--       <LazyDropdownMenuContent>
        <DropdownMenuItem>Edit pins</DropdownMenuItem>
        <DropdownMenuItem>Edit tags</DropdownMenuItem>
      </LazyDropdownMenuContent> -->
    </UDropdownMenu>
  </div>
  <!--         <BoxNav
          :is-collapsed
          :links="
            route.matched[0].children.sort(
              (a, b) => Number(a.meta?.order) - Number(b.meta?.order),
            )
          " /> -->

  <!-- pinned -->
  <!--         <TransitionExpand v-if="pinned.length">
          <PinnedPocketsNav
            :pinned
            :is-collapsed />
        </TransitionExpand>

        <Separator />
 -->
  <!-- tags -->
  <!--         <div class="flex flex-col gap-4 px-0 pb-1">
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

        <Separator /> -->

  <!-- roles -->
  <!--         <div class="flex flex-col gap-4 px-0 pb-1">
          <template v-if="isCollapsed">
            <Popover>
              <PopoverTrigger as-child>
                <Button
                  variant="ghost"
                  size="icon">
                  <Icon name="role:all" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <BackpackRoleFilter />
              </PopoverContent>
            </Popover>
          </template>
          <BackpackRoleFilter v-else />
        </div>
      </template> -->

  <NuxtPage />
  <!--    </BoxLayout>
  </div> -->
</template>
