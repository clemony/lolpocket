<script lang="ts" setup>
import { parseAbsoluteToLocal } from "@internationalized/date"
import type { ContextMenuItemProps } from "reka-ui"
import { pocketActions } from "~/domain/pocket/ui/contextActions"
import { getSplash, tileSplash } from "~/domain/utils/img"

const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed(() => safeObject(props.pocket))

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

const role = computed(() => pocket.value._role || pocket.value.positions?.[0])

const image = computed(() => {
  if (
    !pocket.value.splash &&
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
    const splash = pocket.value.splash
      ? pocket.value.splash.replace("tile", "centered")
      : champion("uncentered")
    return {
      splash,
      champion: champion("tile")
    }
  }
})
console.log("🥸 - image:", image)
</script>

<template>
  <PerspectiveCard class="w-full hover-3d-shine">
    <UContextMenu
      size="sm"
      :items="actions"
      :ui="{ content: 'min-w-44', itemLeadingIcon: '**:stroke-[2.3]' }">
      <UCard
        :ui="{
          root: 'divide w-full divide-y drop-shadow-md transition-transform duration-200 ease-out',
          header: 'min-h-28 p-0!',
          body: 'px-4! pt-10! pb-6!'
        }">
        <template #header>
          <div class="relative size-full grow bg-p2">
            <div class="aspect-20/9 size-full overflow-hidden object-cover">
              <SplashCard
                v-if="image?.splash"
                :src="image.splash"
                sync-perspective
                :ui="{
                  root: 'z-0 size-full',
                  image:
                    'translate-y-5 scale-180 transition-all duration-500 ease-spring-soft group-hover/hover-card:scale-200!',
                  container: 'rounded-none! *:rounded-none'
                }" />
            </div>
            <div
              class="absolute -bottom-8 left-3 z-2 size-max rounded-full bg-p0 px-1.25 py-1">
              <UAvatar
                :src="image?.champion ?? undefined"
                icon="i-lp-champ"
                :ui="{
                  root: 'size-22 overflow-hidden',
                  image: 'translate-y-4 scale-180'
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
            root: 'w-full items-start! gap-4! p-0',
            description: 'mt-0',
            header: 'overflow-visible',
            body: 'h-full grow justify-between! gap-y-0.5 pt-1! pb-1.5',
            date: 'justify-bewtween flex items-center',
            meta: 'mb-0',
            title: '',
            authors: 'px-px pt-1'
          }">
          <template #date>
            <span class="text-xs font-semibold">
              Patch {{ date ?? "Hazy" }}
            </span>
            <Icon
              :name="`i-lp-${role.toLowerCase() || 'i-hexagon'}`"
              class="" />

            <Icon
              :name="`i-lp-${pocket._position.toLowerCase() || 'i-hexagon'}`"
              class="" />
          </template>
          <template #authors>
            <UUser
              v-if="pocket.ouuid !== acc.uuid"
              size="xs"
              :name="sum.name || acc.username"
              :avatar="{ src: tileSplash(acc.splash) }" />
            <div v-else class="flex flex-nowrap items-center gap-1">
              <span class="text-xs italic">pocket picked from</span>

              <UUser
                size="2xs"
                :name="sum.name || acc.username"
                :to="`/${acc.username}_${acc.tag}/pockets/${pocket.key}`"
                :ui="{
                  root: 'cursor-pointer',
                  name: 'pointer-events-auto! group-hover/user:underline hover:underline',
                  wrapper: 'gap-0!'
                }"
                :avatar="{ src: tileSplash(acc.splash) }" />
            </div>
          </template>
        </UBlogPost>
      </UCard>
    </UContextMenu>
  </PerspectiveCard>
</template>
