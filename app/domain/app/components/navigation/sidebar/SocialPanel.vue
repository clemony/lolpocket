<script lang="ts" setup>
import type { ListboxItem, UserProps } from "@nuxt/ui"
import { getSummonerIcon } from "~/domain/utils/img"

interface SocialGroup {
  icon?: string
  label: string
  ui?: {
    leadingIcon?: string
  }
  items: ListboxItem[]
}

const query = shallowRef<string>()
const selectedPuuid = shallowRef<string>()

function onBlur() {}

const { summoner } = storeToRefs(user())
const groups = computed<Record<string, SocialGroup>>(() => {
  return {
    pinned: {
      icon: "i-pin",
      label: "Pinned",
      ui: {
        leadingIcon: "size-3.5 **:stroke-[11%]!",
      },
      items: ([summoner.value] as Summoner[])
        ?.map((s: Summoner) => ({
          label: s?.name ?? "Unknown Summoner",
          description: s?.tag ?? "",
          avatar: { src: getSummonerIcon(s?.icon), size: "sm" },
          value: s?.puuid ?? "",
        }))
        .filter((s) => s.value)
        .filter(Boolean) as ListboxItem[],
    },
    friends: {
      icon: undefined,
      label: "Friends",
      items: [],
    },
    favorites: {
      icon: "i-proicons-heart",
      label: "Following",
      ui: {
        leadingIcon: "size-3.5 **:stroke-[11%]!",
      },
      items: [],
    },
  }
})
</script>

<template>
  <SidebarWrapper title="Social">
    <template #subtitle>
      <div class="flex items-center justify-end gap-2">
        <div class="inline-flex items-center align-baseline">
          <h5 class="text-sm font-bold">
            {{ summoner?.name }}
          </h5>
          <span class="ml-1 align-baseline text-sm! text-n5"
            ><Icon name="i-hash" class="inline size-3 align-middle" />{{
              summoner?.tag
            }}</span
          >
        </div>
        <HoverIcon
          type="summoner"
          :summoner="summoner"
          size="md"
          :ui="{ root: 'rounded-full' }" />
      </div>
    </template>
    <template #description>
      <div class="flex h-13 w-full shrink-0 items-center justify-start">
        <UInput
          v-model:model-value="query"
          variant="soft"
          color="neutral"
          :ui="{
            base: 'rounded-4xl! ring-1! inset-ring-0 ring-n5',
          }"
          :model-modifiers="{ trim: true }"
          icon="i-search"
          @blur="onBlur">
          <template #trailing>
            <LazyInputClear
              color="neutral"
              variant="outline"
              :ui="{
                base: 'ring-0 inset-ring-0 group-hover/label:**:text-nc! hover:bg-transparent! hover:fx-0!',
              }"
              @clear-input="query = ''" />
          </template>
        </UInput>
      </div>
    </template>

    <div class="w-full">
      <UCollapsible
        v-for="(group, i) in Object.values(groups)"
        :key="i"
        :default-open="true"
        :ui="{ root: 'group w-full', content: 'px-1 pb-2' }">
        <UButton
          size="lg"
          variant="link"
          leading-icon="i-up"
          :label="group.label"
          :icon="group?.icon"
          :ui="{
            leadingIcon:
              'transition-rotate size-4 opacity-70 duration-200 ease-spring-soft group-open/collapse:rotate-180 group-hover/btn:opacity-100',
            trailingIcon: 'trailing-rotate',
            base: 'justify-end! gap-2 rounded-none px-3 text-end',
            label: 'group-hover/btn:underline',
          }"
          block>
        </UButton>
        <!-- group.ui?.leadingIcon -->
        <template #content>
          <UListbox
            v-model="selectedPuuid"
            :ui="{
              root: 'p-2 ring-0',
            }"
            label-key="name"
            value-key="value"
            :items="group.items"
            virtualize
            class="w-full">
            <template #empty>
              <UBadge
                label="None"
                variant="outline"
                color="base"
                class="px-2.5 text-pc/60" />
            </template>
          </UListbox>
        </template>
      </UCollapsible>
    </div>
  </SidebarWrapper>
</template>
