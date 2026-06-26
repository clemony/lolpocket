<script lang="ts" setup>
import { getSummonerIcon } from "~/domain/utils/img"

const emit = defineEmits(["update:sidebar"])
const { settings, hotkeys, account, summoner } = storeToRefs(user())
const query = defineModel<string | undefined>("query", { default: "" })
const sidebar = shallowRef<HTMLElement>()
const accountOpen = shallowRef<boolean>(false)
</script>

<template>
  <div ref="sidebar" class="flex grow gap-4 px-px">
    <UPopover
      v-model:open="accountOpen"
      arrow
      :ui="{
        arrow: '-translate-x-3',
        content:
          'w-[calc((var(--reka-popper-anchor-width)+var(--reka-popper-available-width))-1rem)] min-w-54 -translate-x-2.5 rounded-4xl p-1.5',
      }"
      :content="{
        collisionBoundary: sidebar,
        align: 'end',
        sideOffset: 12,
      }">
      <button
        class="group flex grow cursor-pointer flex-nowrap items-center justify-start gap-3">
        <UAvatar
          size="3xl"
          :src="summoner?.icon ? getSummonerIcon(summoner?.icon) : undefined"
          :ui="{
            root: 'w-fit self-center',
            image: cn(
              'transition-transform duration-300 ease-spring group-hover:scale-108',
              {
                'scale-130 hover:scale-130': accountOpen,
              }
            ),
          }" />
        <div
          class="flex h-14 w-full grow items-center gap-2 rounded-5xl bg-p0 px-3.5 ring ring-p2 group-hover:ring-pc/60">
          <div class="flex grow flex-col">
            <div class="flex grow items-center gap-2">
              <h6 class="text-md font-semibold text-pc/94">
                {{ summoner?.name ?? "Not Connected" }}
              </h6>
              <span
                v-if="summoner?.tag"
                class="inline-flex items-center gap-px align-baseline text-xs! text-n5">
                <Icon name="i-hash" class="size-3 align-icon text-n5" />
                {{ summoner?.tag }}
              </span>
            </div>
          </div>
          <Icon
            name="i-up-down"
            class="size-4.5 opacity-50 group-hover:opacity-100" />
        </div>
      </button>

      <template #content>
        <MatchStatus
          size="xl"
          :avatar="{
            size: '2xl',
          }"
          tag
          :trailing-icon="null"
          component="user"
          :summoner />
      </template>
    </UPopover>
  </div>
</template>
