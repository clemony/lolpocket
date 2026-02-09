<script lang="ts" setup>
const { title, class: className } = defineProps<{
  title: string
  class?: HTMLAttributes['class']
  dropdown?: boolean
}>()

const tabs = ref('MessageView')
const inboxes: Record<string, InboxType> = {
  news: {
    name: 'News',
    component: 'NewsView',
    value: 0,
    icon: {
      name: 'lucide:newspaper',
      class: '**:stroke-[1.5] ',
    },
  },
}
</script>

<template>
  <div class="size-full">
    <div :class="cn('w-full gap-0 border-b border-b-p3/80 px-3', className)">
      <div class="flex w-full items-center justify-between">
        <DropdownMenu
          v-model:open="ui().sidebarStates.inboxDropdown"
          class="z-0">
          <DropdownMenuTrigger
            class="flex h-[35.5px] w-fit items-center justify-between px-2 disabled:opacity-100 disabled:**:text-pc disabled:hover:border-transparent disabled:hover:bg-transparent disabled:hover:shadow-none disabled:hover:drop-shadow-none data-[state=open]:border-p3 data-[state=open]:bg-p3/50! data-[state=open]:shadow-xs data-[state=open]:inset-shadow-xxs"
            :disabled="!dropdown"
            as-child>
            <SidebarMenuButton class="flex gap-2">
              <icon name="gallery" />
              <h2 class="font-bold dst">
                {{ title }}
              </h2>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuPopContent :modal="false">
            <slot name="dropdown-menu" />
          </DropdownMenuPopContent>
        </DropdownMenu>

        <Tabs
          v-model:model-value="tabs"
          class="z-1">
          <TabsList class="h-9 grid-cols-3">
            <TabsTrigger
              v-for="item in inboxes"
              :key="item.name"
              class="h-full px-3"
              :value="item.component">
              <icon :name="item.icon?.name ?? ''" />
            </TabsTrigger>
            <TabIndicator class="bg-p0" />
          </TabsList>
        </Tabs>
      </div>
      <div class="relative flex w-full items-center gap-1">
        <slot name="subheader" />
      </div>
    </div>

    <div class="size-full px-0">
      <component :is="tabs" />
    </div>
  </div>
</template>
