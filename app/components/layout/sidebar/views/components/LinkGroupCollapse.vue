<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

const { i, parentRoute } = defineProps<{
  parentRoute: RouteRecordRaw
  i: number
}>()

const emit = defineEmits(['close-sidebar'])
const route = useRoute()
</script>

<template>
  <Collapsible
    class="pr-2">
    <CollapsibleTrigger
      class="my-1 gap-4 w-full text-start  focus-visible:outline-0 items-center">
      <span class="grow text-2 capitalize font-bold text-bc/50">
        {{ parentRoute?.meta?.title || parentRoute?.name }}
      </span>

      <CaretRotate />
    </CollapsibleTrigger>

    <CollapsibleContent
      class="after:top-3 gap-1 relative flex flex-col justify-items-center"
      menu>
      <BtnLink
        v-for="child in parentRoute?.children"
        :key="child?.name"
        :to="child.path"
        variant="ghost"
        size="lg"
        :class="
          cn(
            ' flex-nowrap overflow-hidden hover:!text-bc gap-2.75 pl-4 w-full !duration-0 h-10 text-3 capitalize text-nowrap justify-start',
            { 'btn-active': route.name === child.name },
          )
        "
        @click="emit('close-sidebar')">
        <span class="size-4.5 shrink-0 grid place-items-center relative">
          <hicon
            :name="String(child.meta?.icon) "
            :class="cn('size-4.5 absolute', child?.meta?.listClass)" />
        </span>
        {{ child.meta?.title || child.name }}
      </BtnLink>
    </CollapsibleContent>
  </Collapsible>
</template>