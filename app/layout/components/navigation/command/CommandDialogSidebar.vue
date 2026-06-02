<script lang="ts" setup>
import { summonerMenu } from "~/layout/utils/summonerMenu"
import type { CommandRouteItem } from "~/types/route.types"

const emit = defineEmits<{
  close: []
}>()
const menu = computed(
  () => summonerMenu(() => emit("close")).value as CommandRouteItem[]
)

const { useRouteGroups } = routeStore()
const groupMap = safeObject(computed(() => useRouteGroups().value))

const helpGroup = computed(() => [
  groupMap.value?.docs,
  groupMap.value?.external,
  groupMap.value?.settings
])

function navigate(to: string) {
  if (!to) return
  navigateTo(to)
  emit("close")
}
</script>

<template>
  <div
    class="grid max-h-fit min-h-0 flex-1 items-end overflow-x-hidden overflow-y-auto overscroll-contain px-3">
    <template v-for="item in menu" :key="item.value">
      <h6
        v-if="item.type === 'label'"
        class="ml-1.25 py-1 text-sm not-first:mt-4">
        {{ item.label }}
      </h6>
      <div class="w-full space-y-0.5">
        <UButton
          v-for="ix in item.items"
          :key="ix.value"
          v-bind="ix"
          block
          variant="ghost"
          :ui="{
            ...ix.ui,
            base: 'capitalize'
          }"
          @click.stop.prevent="navigate(ix.to)">
          <template v-if="ix?.badge" #trailing>
            <UBadge v-bind="ix.badge" />
          </template>
        </UButton>
      </div>
    </template>
    <RouteGroup
      v-if="groupMap?.nexus"
      :items="groupMap.nexus"
      class="border-y-0" />
    <SidebarProfileGrid />

    <RouteGroup
      v-if="groupMap?.tools"
      :items="groupMap.tools"
      class="border-y-0" />

    <RouteGroup
      v-if="groupMap?.library"
      class="w-full items-start"
      :ui="{
        itemTrailingIcon: 'size-3.25! -translate-y-px **:stroke-[2.4]'
      }"
      :items="groupMap?.library" />
    <UUser
      size="xl"
      :ui="{
        root: cn('mb-1 ml-1.25 py-2'),
        name: 'mb-1',
        wrapper: 'pr-6'
      }"
      name="Help & Resources"
      description="Find answers, research external data, and customize your lolpocket." />

    <CommandCollapse v-for="(group, i) in helpGroup" :key="i" :group />
  </div>
</template>
