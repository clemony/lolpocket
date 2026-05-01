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
  () => pocketActions(pocket, toggleEdit).value as ContextMenuItemProps[]
)

const role = computed(() => pocket.value._role || pocket.value.positions?.[0])
console.log("🥸 - role:")
</script>

<template>
  <PerspectiveCard class="w-full hover-3d-shine">
    <UContextMenu
      size="sm"
      :items="actions"
      :ui="{ content: 'min-w-44', itemLeadingIcon: '**:stroke-[2.3]' }">
      <UCard
        :ui="{
          root: 'divide w-full divide-y transition-transform duration-200 ease-out',
          header: 'p-3!'
        }">
        <template #header>
          <UBlogPost
            orientation="horizontal"
            size="sm"
            variant="naked"
            :title="pocket.name"
            :ui="{
              root: 'h-24 w-full items-start! gap-4! p-0 lg:grid-cols-[10rem_auto]',
              description: 'mt-0',
              header: 'overflow-visible',
              body: 'h-full grow justify-between! gap-y-0.5 pt-1! pb-1.5',
              date: 'justify-bewtween flex items-center',
              meta: 'mb-0',
              title: 'truncate text-nowrap',
              authors: 'px-px pt-1'
            }">
            <template #header>
              <div class="relative size-full bg-p2">
                <NuxtImg
                  :src="
                    pocket.splash || pocket._champion
                      ? getSplash(String(pocket._champion), 'tile')
                      : pocket.champions?.[0]
                        ? getSplash(String(pocket.champions?.[0]), 'tile')
                        : ''
                  "
                  class="z-0 size-full overflow-hidden rounded-xl object-cover" />
                <div
                  v-if="pocket.champions"
                  class="absolute -bottom-4 -left-1.25 z-2 size-max rounded-tr-5xl bg-p0 px-1.25 py-1">
                  <PocketChampions :champions="pocket.champions" />
                </div>
              </div>
            </template>
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
        </template>
      </UCard>
    </UContextMenu>
  </PerspectiveCard>
</template>
