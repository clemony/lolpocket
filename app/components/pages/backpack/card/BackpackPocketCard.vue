<script lang="ts" setup>
import { parseAbsoluteToLocal } from "@internationalized/date"
import type { ContextMenuItemProps } from "reka-ui"
import { pocketActions } from "~/domain/pocket/ui/contextActions"
import { getSplash, getSplashFromSkinKey } from "~/domain/utils/img"
import { pathIndex } from "~~/shared/constants/runes/pathIndex"

const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed(() => {
  return safeObject(props.pocket)
})

const { account, summoner } = storeToRefs(user())
const acc = safeObject(account.value)
const sum = safeObject(summoner.value)
const date = computedOnce(() => {
  const dateValue = parseAbsoluteToLocal(
    String(pocket.value.updated || pocket.value.created)
  )
  return getPatchForDate(dateValue)
})
const newLabel = shallowRef<string>("")
const editing = shallowRef<boolean>(false)
const toggleEditing = useToggle(editing)

function toggleEdit() {
  newLabel.value = props.pocket.name || ""
  toggleEditing()
}

const actions = computed(
  () => pocketActions(pocket.value, toggleEdit)?.value as ContextMenuItemProps[]
)

const image = computed(() => {
  if (
    !pocket.value.skin &&
    !pocket.value._champion &&
    !pocket.value.champions?.[0]
  )
    return null
  else {
    function champion(type: SplashType) {
      return pocket.value._champion
        ? getSplash(String(pocket.value._champion), type)
        : pocket.value.champions?.[0]
          ? getSplash(String(pocket.value.champions?.[0]), type)
          : null
    }
    const splash = pocket.value.skin
      ? getSplashFromSkinKey(pocket.value.skin, "centered")
      : champion("centered")
    return {
      splash,
      champion: champion("tile")
    }
  }
})
</script>

<template>
  <PerspectiveCard class="w-full">
    <UContextMenu
      size="sm"
      disabled
      :items="actions"
      :ui="{ content: 'min-w-44', itemLeadingIcon: '**:stroke-[2.3]' }">
      <UCard
        :ui="{
          root: 'divide w-full divide-y drop-shadow-md transition-transform duration-200 ease-out',
          header: 'min-h-28 p-0!',
          body: 'relative pt-10! pb-6!'
        }">
        <template #header>
          <div class="relative size-full grow bg-p2">
            <div
              class="relative isolate aspect-20/9 size-full overflow-hidden object-cover">
              <FoilLayer>
                <UAvatar
                  v-if="image?.splash"
                  :src="image.splash"
                  :ui="{
                    root: 'z-0 size-full rounded-none',
                    image:
                      'translate-y-5 scale-180 rounded-none transition-all duration-500 ease-spring-soft group-hover/hover-card:scale-190!'
                  }" />
              </FoilLayer>
            </div>
            <div
              class="absolute -bottom-8 left-4 z-2 size-max rounded-lg bg-p0 px-1.25 py-1">
              <div
                v-if="image?.champion"
                class="relative isolate size-20 overflow-hidden rounded-lg">
                <FoilLayer>
                  <UAvatar
                    icon="i-lp-champ"
                    :src="image?.champion ?? undefined"
                    :ui="{
                      root: 'z-0 size-full rounded-none! *:rounded-none',
                      image:
                        'translate-y-5 scale-180 transition-all duration-500 ease-spring-soft group-hover/hover-card:scale-190!'
                    }" />
                </FoilLayer>
              </div>
              <UAvatar
                v-else
                :ui="{
                  root: 'size-20 overflow-hidden rounded-lg'
                }" />
            </div>
          </div>
        </template>
        <UBlogPost
          orientation="vertical"
          size="sm"
          variant="naked"
          :title="pocket.name"
          :ui="{
            root: 'w-full grow items-start! gap-4! px-5! py-0',
            description: 'mt-1 flex w-full grow justify-between',
            header: 'overflow-visible',
            body: 'size-full grow justify-between! gap-y-0.5 pt-1! pb-1.5',
            date: 'inline-flex w-full items-center justify-between',
            meta: 'mb-0 w-full',
            title: 'truncate text-nowrap',
            authors: 'px-px pt-0.5'
          }">
          <template #date>
            <span class="text-xs font-semibold text-nowrap">
              Patch {{ date ?? "Hazy" }}
            </span>
          </template>

          <template #description>
            <PocketItemSet :pocket />
            <Grow />
            <PocketRunes :pocket />
          </template>
          <template #authors>
            <div
              class="inline-flex flex-nowrap items-center gap-1 align-middle text-xs">
              <PocketAuthor
                :pocket="pocket"
                :author-id="user().account?.uuid" />
              <template
                v-if="
                  user().account?.uuid && pocket.ouuid !== user().account?.uuid
                ">
                picked
                <PocketAuthor :pocket="pocket" :author-id="pocket.ouuid" />
              </template>
              pocket
            </div>
          </template>
        </UBlogPost>
      </UCard>
    </UContextMenu>
  </PerspectiveCard>
</template>
