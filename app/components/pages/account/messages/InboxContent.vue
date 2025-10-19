<script lang="ts" setup>
const { title, class: className } = defineProps<{
  title: string
  class?: HTMLAttributes['class']
  dropdown?: boolean
}>()

const tabs = ref('MessageView')
const inboxes: Record<string, DataObject> = {
  news: {
    name: 'News',
    component: 'NewsView',
    icon: {
      name: 'lucide:newspaper',
      class: '**:stroke-[1.5] ',
    },
    value: 0,
  },
}
</script>

<template>
  <div class="size-full">
    <div :class="cn('gap-0 border-b  border-b-b3/80 px-3 w-full', className)">
      <div class="w-full flex justify-between items-center">
        <DropdownMenu
          v-model:open="ui().sidebarStates.inboxDropdown"
          class="z-0">
          <DropdownMenuTrigger
            :disabled="!dropdown"
            class="flex w-fit items-center justify-between disabled:**:text-bc disabled:hover:drop-shadow-none disabled:opacity-100 disabled:hover:border-transparent disabled:hover:shadow-none disabled:hover:bg-transparent px-2 h-[35.5px] data-[state=open]:inset-shadow-xxs data-[state=open]:shadow-xs data-[state=open]:!bg-b3/50 data-[state=open]:border-b3"
            as-child>
            <SidebarMenuButton class="flex gap-2">
              <icon name="gallery" />
              <h2 class="dst font-bold">
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
          <TabsList
            base="indicator"
            class="grid-cols-3 h-9">
            <TabsTrigger
              v-for="item in inboxes"
              :key="item.name"
              class="h-full px-3"
              :value="item.component">
              <icon :name="item.icon.name" />
            </TabsTrigger>
            <TabIndicator class="bg-b1" />
          </TabsList>
        </Tabs>
      </div>
      <div class="flex relative items-center gap-1 w-full">
        <slot name="subheader" />
      </div>
    </div>

    <div class="px-0 size-full">
      <component :is="tabs"></component>
    </div>
  </div>
</template>
