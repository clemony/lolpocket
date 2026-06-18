<script lang="ts" setup>
import type { UseSidebar } from "~/domain/app/types/layout.types"
import type {
  ButtonRouteItem,
  RouteGroup,
  RouteItem,
} from "~/types/route.types"

const props = defineProps<{
  group: RouteGroup<ButtonRouteItem>
}>()

const sidebar = inject<UseSidebar>("sidebar")
</script>

<template>
  <div class="w-full">
    <RouteDescription :folder="group" />
    <div v-if="group" class="grid w-full grid-cols-2 gap-x-1.5 gap-y-2 pr-1">
      <UTooltip
        v-for="item in group.items"
        :key="item.label"
        :content="{ side: 'top' }"
        :text="item.description"
        as-child
        class="group">
        <UButton
          variant="outline"
          size="xl"
          :label="item.label"
          :ui="{
            base: cn(
              'group card-button relative flex h-max! w-full justify-center gap-2.5! overflow-hidden rounded-xl px-3! py-6! inset-ring-p4/60 hover:bg-n2 hover:inset-ring-n5 hover:**:text-nc!'
            ),
          }"
          @click="sidebar?.close({ to: item.to })">
          <div class="flex flex-col items-center gap-4">
            <Icon
              v-if="!item.avatar?.src"
              :name="String(item.icon)"
              :class="cn('size-5.5!', item.class, {})" />
            <UAvatar
              v-else
              :src="item.avatar.src"
              size="lg"
              :ui="{ image: 'scale-110', root: 'overflow-hidden' }" />
            <h4
              class="flex text-lg leading-none font-bold antialiased drop-shadow-none">
              {{ item.label }}
            </h4>
          </div>
        </UButton>
      </UTooltip>
    </div>
  </div>
</template>
