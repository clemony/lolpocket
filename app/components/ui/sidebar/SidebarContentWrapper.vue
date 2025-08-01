<script lang="ts" setup>
const { title, class: className } = defineProps<{
  title: string
  class?: HTMLAttributes['class']
  dropdown?: boolean
}>()
</script>

<template>
  <div class="size-full ">
    <SidebarHeader
      :class="cn('gap-0 border-b  border-b-b3/80 px-3 w-full', className)">
      <DropdownMenu>
        <DropdownMenuTrigger
          :disabled="!dropdown"
          class="flex w-full items-center justify-between  disabled:**:text-bc disabled:hover:drop-shadow-none disabled:opacity-100 disabled:hover:border-transparent disabled:hover:shadow-none disabled:hover:bg-transparent px-2  h-[35.5px] h-14 data-[state=open]:inset-shadow-xxs data-[state=open]:shadow-xs data-[state=open]:!bg-b3/50 data-[state=open]:border-b3"
          as-child>
          <SidebarMenuButton
            class=" ">
            <h2 class="dst font-bold">
              {{ title }}
            </h2>
            <slot name="header"></slot>
            <Label
              v-show="dropdown"
              class="flex items-center gap-2 ">

              <icon name="more" />

            </Label>
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuPopContent>
          <slot name="dropdown-menu" />
        </DropdownMenuPopContent>
      </DropdownMenu>
      <div class="flex relative items-center gap-1 w-full ">
        <slot name="subheader" />
      </div>
    </SidebarHeader>

    <SidebarContent class="size-full">
      <SidebarGroup class="px-0 size-full">
        <slot />
      </SidebarGroup>
    </SidebarContent>
  </div>
</template>