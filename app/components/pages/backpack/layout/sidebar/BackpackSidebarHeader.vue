<script lang="ts" setup>
const { sidebarCollapsed } = defineProps<{
  sidebarCollapsed: ComputedRef<boolean>
}>()
</script>

<template>
  <div
    :class="
      cn(
        'flex w-full flex-col',
        sidebarCollapsed.value ? 'items-center gap-1' : 'gap-0.5 px-2'
      )
    ">
    <div :class="cn('w-full py-2')">
      <LazyBackpackPocketSearch
        variant="outline"
        :ui="{
          leading: '-left-1.5',
          root: 'relative h-13! min-h-13! w-full p-0!'
        }"
        :size="sidebarCollapsed.value ? 'md' : 'lg'"
        :sidebar-collapsed="sidebarCollapsed.value">
        <template #leading>
          <label class="grid h-full w-10 cursor-pointer place-items-center">
            <NewOptionsMenu
              icon="i-more"
              square
              :label="undefined"
              :menu="{
                color: 'base',
                content: {
                  align: 'start',
                  side: sidebarCollapsed.value ? 'right' : 'bottom'
                },
                ui: {
                  content: cn('w-(--reka-popper-anchor-width)', {
                    'min-w-64': sidebarCollapsed.value
                  }),
                  item: 'gap-2.5'
                }
              }"
              :variant="sidebarCollapsed.value ? 'ghost' : 'ghost'"
              :color="sidebarCollapsed.value ? 'primary' : 'primary'"
              :size="sidebarCollapsed.value ? 'md' : 'sm'"
              :ui="{
                base: cn('', {}),
                leadingIcon: cn('size-4.5 rotate-90 **:stroke-[10%]!')
              }" />
          </label>
        </template>
      </LazyBackpackPocketSearch>
    </div>
  </div>
</template>
