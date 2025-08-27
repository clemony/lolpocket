<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'
import type { LinkProp } from './mails'

interface NavProps {
  isCollapsed: boolean
}

const { links, items: i } = defineProps<{
  links?: RouteRecordRaw[]
  items?: DataObject[]
  isCollapsed: boolean
}>()
</script>

<template>
  <div
    :data-collapsed="isCollapsed"
    class="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
    <nav class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
      <template v-for="(link, index) of links">
        <Tooltip
          v-if="isCollapsed"
          :key="`1-${index}`"
          :delay-duration="0">
          <TooltipTrigger as-child>
            <a
              href="#"
              :class="cn(
                buttonVariants({ variant: link.meta?.variant as any, size: 'icon' }),
                'h-9 w-9',
                link.meta?.variant === 'default'
                  && 'dark:bg-muted dark:text-bc/60 dark:hover:bg-muted dark:hover:text-white',
              )">
              <icon
                :name="String(link.meta.icon)"
                class="size-4" />
              <span class="sr-only">{{ link.meta?.title || link.name }}</span>
            </a>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            class="flex items-center gap-4 capitalize">
            {{ link.meta?.title || link.name }}
            <span
              v-if="link.components?.label"
              class="ml-auto text-bc/60">
              {{ link.components?.label }}
            </span>
          </TooltipContent>
        </Tooltip>

        <a
          v-else
          :key="`2-${index}`"
          href="#"
          :class="cn(
            buttonVariants({ variant: link.meta.variant as any, size: 'md' }),
            link.meta.variant === 'default',
            'justify-start capitalize rounded-md px-3.5 font-normal',
          )">
          <icon
            :name="String(link.meta.icon)"
            class="mr-2 size-4.75 **:stroke-1.2" />
          {{ link.meta?.title || link.name }}
          <span
            v-if="link.components?.label"
            :class="cn(
              'ml-auto text-bc',
            )">
            {{ link.components?.label }}
          </span>
        </a>
      </template>
    </nav>
  </div>
</template>