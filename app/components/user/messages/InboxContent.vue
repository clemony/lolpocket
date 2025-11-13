<script lang="ts" setup>
const { title, class: className } = defineProps<{
  title: string;
  class?: HTMLAttributes["class"];
  dropdown?: boolean;
}>();

const tabs = ref("MessageView");
const inboxes: Record<string, DataObject> = {
  news: {
    name: "News",
    component: "NewsView",
    icon: {
      name: "lucide:newspaper",
      class: "**:stroke-[1.5] ",
    },
    value: 0,
  },
};
</script>

<template>
  <div class="size-full">
    <div :class="cn('w-full gap-0 border-b border-b-b3/80 px-3', className)">
      <div class="flex w-full items-center justify-between">
        <DropdownMenu
          v-model:open="ui().sidebarStates.inboxDropdown"
          class="z-0"
        >
          <DropdownMenuTrigger
            :disabled="!dropdown"
            class="flex h-[35.5px] w-fit items-center justify-between px-2 disabled:opacity-100 disabled:**:text-bc disabled:hover:border-transparent disabled:hover:bg-transparent disabled:hover:shadow-none disabled:hover:drop-shadow-none data-[state=open]:border-b3 data-[state=open]:bg-b3/50! data-[state=open]:shadow-xs data-[state=open]:inset-shadow-xxs"
            as-child
          >
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

        <Tabs v-model:model-value="tabs" class="z-1">
          <TabsList base="indicator" class="h-9 grid-cols-3">
            <TabsTrigger
              v-for="item in inboxes"
              :key="item.name"
              class="h-full px-3"
              :value="item.component"
            >
              <icon :name="item.icon.name" />
            </TabsTrigger>
            <TabIndicator class="bg-b1" />
          </TabsList>
        </Tabs>
      </div>
      <div class="relative flex w-full items-center gap-1">
        <slot name="subheader" />
      </div>
    </div>

    <div class="size-full px-0">
      <component :is="tabs"></component>
    </div>
  </div>
</template>
