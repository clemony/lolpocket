<script lang="ts" setup>
import { backpackItem } from "~/domain/app/utils/menuItems"
import type { CommandRouteItem } from "~/types/route.types"

const { activeComponent } = defineProps<{
  activeComponent: string | null
}>()

const emit = defineEmits(["update:component", "close"])
const { summoner, settings } = safeObject(storeToRefs(user()))

function navigate(to: string) {
  if (!to) return
  navigateTo(to)
  emit("close")
}

const menu = computed(() => backpackItem(() => emit("close")).value)
</script>

<template>
  <div
    class="flex max-h-180 min-h-0 w-[inherit] shrink-0 grow flex-col justify-start overflow-y-auto pt-44">
    <CommandSidebarHeader />
    <div class="z-0 flex w-full grow flex-col items-center">
      <div class="w-full space-y-0.5 p-3">
        <MailIndicatorButton
          :active-component
          @update:component="emit('update:component', $event)" />
        <!--  <template v-for="item in menu" :key="item.value">
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
                base: 'h-9! max-h-9! min-h-9! capitalize'
              }"
              @click.stop.prevent="navigate(ix.to)">
              <template v-if="ix?.badge" #trailing>
                <UBadge v-bind="ix.badge" />
              </template>
            </UButton>
          </div>
        </template> -->
      </div>
    </div>
    <div class="absolute bottom-0 left-0 z-3 w-full">
      <AccountMenu
        trigger-style="user"
        :content="{
          side: 'top'
        }"
        :user="{
          size: 'lg',
          ui: {
            name: 'text-lg! leading-4.5 font-bold!',
            description: 'text-xs! mb-px leading-4',
            wrapper: 'justify-center align-center flex flex-col'
          }
        }"
        :ui="{
          base: 'pr-2.5',
          trailingIcon: 'size-5'
        }"
        size="xl"
        block />
    </div>
  </div>
</template>
