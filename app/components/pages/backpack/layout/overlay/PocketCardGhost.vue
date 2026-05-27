<script lang="ts" setup>
import { parseAbsoluteToLocal } from "@internationalized/date"
import { useItemDisplaySet } from "~/domain/pocket/display/itemDisplaySet"
import { getSplash, getSplashFromSkinKey } from "~/domain/utils/img"

const props = defineProps<{
  pocket: Pocket
  style?: HTMLAttributes["style"]
}>()

const emit = defineEmits(["update:is-dragging"])

const pocket = safeObject(computed(() => props.pocket))
console.log("🥸 - pocket:", pocket)

const userStore = user()
const { account } = storeToRefs(userStore)
const accountId = computed(() => account.value?.uuid)
const isPickedPocket = computed(
  () => Boolean(accountId.value) && pocket.value.ouuid !== accountId.value
)
const date = computed(() => {
  if (!pocket.value || (!pocket.value?.updated && !pocket.value?.created))
    return
  const dateValue = parseAbsoluteToLocal(
    String(pocket.value.updated || pocket.value.created)
  )
  return getPatchForDate(dateValue)
})

const champion = computed(
  () => pocket.value?._champion || pocket.value?.champions?.[0]
)
function championImage(type: SplashType) {
  return champion.value ? getSplash(String(champion.value), type) : undefined
}
const image = computed(() => {
  if (!pocket.value?.skin && !champion?.value) return null
  else {
    return pocket.value?.skin
      ? getSplashFromSkinKey(pocket.value?.skin, "centered")
      : championImage("centered")
  }
})

const splash = computed(() => championImage("centered"))

const position = computed(() => {
  return pocket.value?._position || pocket.value?.positions?.[0]
})

const itemSet = computed(() => {
  if (!pocket.value) return null
  else return useItemDisplaySet(pocket.value, position)?.value
})

const runes = computed(() => {
  if (!pocket.value || !pocket.value.runes?.length) return
  if (pocket.value._runes) {
    const a = pocket.value.runes.find((set) => set.id === pocket.value._runes)
    return {
      keystone: a?.keystone,
      secondary: a?.secondary.path
    }
  } else if (pocket.value.runes[0]?.keystone)
    return {
      keystone: pocket.value.runes[0]?.keystone,
      secondary: pocket.value.runes[0]?.secondary.path
    }
  else return null
})
</script>

<template>
  <label
    v-if="pocket"
    :style="props.style"
    class="relative grid size-full rounded-4xl p-3">
    <UCard
      :ui="{
        root: 'group/card relative w-full drop-shadow-md transition-transform duration-200 ease-out',
        header: 'px-3!!',
        body: 'z-auto w-full gap-0! bg-transparent px-0! pt-0! pb-2!',
        footer:
          'pointer-events-auto! flex w-full items-center justify-between gap-1 border-t border-border px-3! py-1!'
      }">
      <div class="relative h-34 w-full cursor-move bg-p1 *:pointer-events-none">
        <div class="h-34 overflow-hidden rounded-none!">
          <NuxtImg
            v-if="image"
            :src="image"
            width="500"
            height="300"
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            format="webp"
            fetchpriority="high"
            loading="eager"
            decoding="async"
            preload
            class="z-1 size-full shrink-0 translate-y-5 scale-184! rounded-none object-cover brightness-110" />
        </div>
        <div
          class="group/card absolute -bottom-9 left-4 z-2 size-18! overflow-hidden rounded-full ring-5 ring-p0">
          <UAvatar
            icon="i-lp-champ"
            :src="
              champion
                ? `/img/champion/${champIdByKey(String(champion))}.webp`
                : undefined
            "
            width="80"
            height="80"
            sizes="80px"
            :ui="{
              root: 'fx-noise z-0 size-full rounded-full! *:rounded-full',
              icon: 'size-5.5 opacity-60',
              image: 'shadow-sm brightness-110 drop-shadow-sm'
            }" />
        </div>
      </div>

      <div class="w-full grow items-start! gap-4! px-3 pt-10">
        <div class="flex w-full max-w-full flex-col overflow-hidden pb-0.5">
          <h4 class="w-full truncate text-lg text-nowrap">
            {{ pocket?.label ?? "Entitled Pocket" }}
          </h4>
          <div class="size-full grow justify-between! gap-y-0.5 pt-1! pb-1.5">
            <div
              class="flex w-full grow items-center justify-between overflow-visible">
              <div class="flex items-center -space-x-0.5">
                <UAvatar
                  v-if="
                    position === 'bot' &&
                    [0, 11, 'all'].includes(pocket?._map ?? 0)
                  "
                  type="item"
                  size="lg"
                  :src="itemSet?.src ?? undefined"
                  :icon="itemSet?.icon ?? ''"
                  :ui="{
                    root: cn(
                      'pointer-events-auto! border border-p2 bg-p2 group-hover/card:border-p1 group-hover/card:bg-p1/90',
                      itemSet?.quest ? '' : ''
                    ),
                    image:
                      'pointer-events-none shadow-sm brightness-110 drop-shadow-sm'
                  }" />
                <div
                  class="pointer-events-none relative isolate z-1 -ml-0.5 flex w-max shrink-0 overflow-visible rounded-lg">
                  <UAvatarGroup
                    :max="6"
                    size="lg"
                    :ui="{
                      root: 'shrink-0 gap-1 overflow-visible p-0.5',
                      base: 'pointer-events-auto! relative z-2 overflow-visible border border-p2 bg-p2 ring-3 brightness-110'
                    }">
                    <UAvatar
                      v-for="item in itemSet?.set"
                      :key="item"
                      :src="item ? `/img/item/${item}.webp` : undefined"
                      icon="i-ui-none" />
                  </UAvatarGroup>
                </div>
              </div>
              <Grow />

              <UAvatarGroup
                :max="6"
                size="lg"
                :ui="{
                  root: 'gap-0.5 overflow-visible p-0.5',
                  base: 'pointer-events-auto! relative z-2 overflow-visible'
                }">
                <UAvatar
                  :src="
                    runes?.keystone
                      ? `/img/rune/${runes?.keystone}.webp`
                      : undefined
                  "
                  :ui="{
                    image: 'brightness-110 drop-shadow-xs',
                    root: cn(
                      'border border-p2',
                      runes?.secondary
                        ? 'bg-neutral/90 p-1'
                        : ' border border-p2 bg-p2  0'
                    )
                  }"
                  size="lg" />
                <UAvatar
                  :src="
                    runes?.secondary
                      ? `/img/path/${runes?.secondary.toString()}.webp`
                      : undefined
                  "
                  :ui="{
                    image: 'brightness-110',
                    root: cn(
                      'shrink-0 border border-p2 p-2',
                      runes?.secondary
                        ? 'bg-neutral/90'
                        : ' border border-p2 bg-p2 '
                    )
                  }"
                  icon=" i-lp-rune"
                  size="lg" />
              </UAvatarGroup>
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <div
          class="inline-flex flex-nowrap items-center gap-1 px-px align-middle text-xs">
          <PocketAuthor :pocket="pocket" :author-id="accountId" />
          <template v-if="pocket && isPickedPocket && pocket?.ouuid">
            picked
            <PocketAuthor
              :pocket="pocket"
              :author-id="pocket?.ouuid ?? accountId" />
          </template>
          pocket
        </div>
        <div class="inline-flex items-center gap-1 align-middle">
          <div
            class="relative size-3.25 after:absolute after:inset-0 after:size-full after:scale-200">
            <Icon
              :name="`i-lp-${position}`"
              class="size-3.25! scale-110 text-pc" />
          </div>

          <span class="text-xs font-semibold text-nowrap">
            {{ date ?? "???" }}
          </span>
        </div>
      </template>
    </UCard>
  </label>
</template>
