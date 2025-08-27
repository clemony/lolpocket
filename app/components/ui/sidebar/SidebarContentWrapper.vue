<script lang="ts" setup>
const { title, class: className } = defineProps<{
  title: string
  class?: HTMLAttributes['class']
  dropdown?: boolean
  basicLayout?: boolean
}>()
</script>

<template>
  <SidebarContent
    :class="cn('overflow-hidden h-screen w-full flex flex-col max-w-full')">
    <SidebarHeader
      :class="cn('gap-0 !h-[44.5px] border-b  px-3 w-full', className)">
      <DropdownMenu>
        <DropdownMenuTrigger
          :disabled="!dropdown"
          class="flex w-full items-center justify-between bg-transparent disabled:bg-transparent disabled:!border-transparent disabled:**:text-bc disabled:hover:drop-shadow-none disabled:opacity-100  disabled:hover:shadow-none disabled:hover:bg-transparent px-2 h-11 data-[state=open]:inset-shadow-xxs data-[state=open]:shadow-xs data-[state=open]:!bg-b3/50 data-[state=open]:border-b3"
          as-child>
          <SidebarMenuButton
            class=" ">
            <h2 class="dst font-bold pt-1">
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
    </SidebarHeader>

    <SidebarGroup class="px-0  h-full">
      <SidebarGroupContent class="h-full">
        <slot />
      </SidebarGroupContent>
    </SidebarGroup>
  </SidebarContent>
</template>