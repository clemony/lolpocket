<script lang="ts" setup>
import type { UseSlidebar } from "~/domain/app/types/layout.types"
import type { ButtonRouteItem, RouteGroup } from "~/types/route.types"

const props = defineProps<{
  group: RouteGroup<ButtonRouteItem>
}>()

const slidebar = inject<UseSlidebar>("slidebar")
</script>

<template>
  <div class="w-full">
    <RouteDescription :folder="group" />
    <div v-if="group" class="grid w-full gap-x-0.5 gap-y-1 pr-1">
      <template v-for="item in group.items" :key="item.label">
        <SlidebarButton
          v-if="item.children"
          :ui="{ base: 'group/parent', label: 'grow' }"
          :item="item"
          @click="slidebar?.close({ to: item?.to, onClick: item?.onClick })">
          <template #trailing>
            <UTooltip
              v-for="child in item.children"
              :key="child.label"
              as-child
              :content="{ side: 'top' }"
              :text="child.description">
              <UButton
                variant="outline"
                size="sm"
                :ui="{
                  base: 'justify-center rounded-lg shadow-none fx-0! **:text-pc! group-hover/slide-btn:bg-p0 group-hover/slide-btn:inset-ring-n5 hover:bg-p2 hover:inset-shadow-sm hover:fx-1!',
                  label: 'w-full text-center text-xs font-semibold text-pc!',
                }"
                :label="child.label"
                :item="asRouteButton(child)"
                :icon="false"
                @click.stop="
                  slidebar?.close({ to: child.to, onClick: child?.onClick })
                " />
            </UTooltip>
          </template>
        </SlidebarButton>
        <UTooltip
          v-else
          :content="{ side: 'left' }"
          :text="item.description"
          as-child
          class="group">
          <SlidebarButton
            :item="item"
            @click="
              slidebar?.close({ to: item?.to, onClick: item?.onClick })
            " />
        </UTooltip>
      </template>
    </div>
  </div>
</template>
