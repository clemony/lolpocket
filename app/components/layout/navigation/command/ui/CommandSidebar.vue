<script lang="ts" setup>
import type { ButtonProps, ChipProps } from "@nuxt/ui"
import { newPocket } from "~/domain/pocket/newPocket"
import type { CommandGroup, CommandItem } from "../build/useCommandGroups"

const { activeComponent } = defineProps<{
  activeComponent: string | null
}>()

const emit = defineEmits(["update:component", "close"])
const { summoner, settings } = safeObject(storeToRefs(user()))
const menu = computed<CommandItem[]>(
  () =>
    [
      summoner.value
        ? {
            label: "Profile",
            type: "label",
            value: "profile-label",
            items: summonerNav(summoner.value)
          }
        : {},
      {
        label: "Pockets",
        type: "label",
        value: "backpack-label",
        items: [
          {
            label: "Backpack",
            icon: "i-folders",
            value: "backpack-pocket",
            trailingIcon: "",
            to: "/backpack/folders"
          },
          {
            label: "New Pocket",
            icon: "i-lucide-plus", //"i-ui-none",
            value: "new-pocket",
            ui: {
              trailingIcon: "**:stroke-[2.8]"
            },
            onSelect(event: Event) {
              newPocket()
              emit("close")
            }
          }
        ]
      },
      settings.value?.favorite_summoners
        ? {
            label: "Following",
            type: "label",
            icon: "i-heart",
            value: "following-label",
            items: settings.value?.favorite_summoners.map((puuid: string) => {
              const summoner = async () =>
                await summonerStore().resolveOrFetch(puuid)
              return {}
            })
          }
        : {}
    ].filter(Boolean) as CommandItem[]
)

function navigate(to: string) {
  if (!to) return
  navigateTo(to)
  emit("close")
}
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
                base: 'h-9! max-h-9! min-h-9! capitalize'
              }"
              @click.stop.prevent="navigate(ix.to)">
              <template v-if="ix?.badge" #trailing>
                <UBadge v-bind="ix.badge" />
              </template>
            </UButton>
          </div>
        </template>
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
