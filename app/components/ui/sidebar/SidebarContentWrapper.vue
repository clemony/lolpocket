<script lang="ts" setup>
const { title, class: className } = defineProps<{
  title: string
  class?: HTMLAttributes['class']
  dropdown?: boolean
}>()
</script>

<template>
  <Paper
    side="left"
    class="z-9 left-16 border-l-0 flex flex-col ">
    <SheetHeader
      :class="cn('gap-0 !h-16 border-b  px-3 w-full', className)">
      <DropdownMenu>
        <DropdownMenuTrigger
          :disabled="!dropdown"
          class="flex w-full items-center justify-between bg-transparent disabled:bg-transparent disabled:!border-transparent disabled:**:text-bc disabled:hover:drop-shadow-none disabled:opacity-100  disabled:hover:shadow-none disabled:hover:bg-transparent px-2 h-11 data-[state=open]:inset-shadow-xxs data-[state=open]:shadow-xs data-[state=open]:!bg-b3/50 data-[state=open]:border-b3"
          as-child>
          <Button
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
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuPopContent>
          <slot name="dropdown-menu" />
        </DropdownMenuPopContent>
      </DropdownMenu>
    </SheetHeader>

    <div class="px-0  h-full">
      <slot />
    </div>
  </Paper>
</template>