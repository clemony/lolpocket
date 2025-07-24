<script setup lang="ts">
import { getRoleColor } from '~/data/formatting/getRoleColor'

const { pocketKey, side, align, class: className, wrapperClass } = defineProps<{
  pocketKey?: string
  side?: Side
  align?: Align
  class?: HTMLAttributes['class']
  wrapperClass?: HTMLAttributes['class']
}>()

const ps = usePocketStore()

const pocket = computed<Pocket | null>(() => {
  if (!pocketKey)
    return null

  return ps.pockets.find(p => p.key == pocketKey)
})
const ix = useIndexStore()

const wrapper = 'rounded-full  !grid !place-items-center   !p-0 shadow-sm drop-shadow-sm !shrink-0 overflow-hidden'
</script>

<template>
  <div :class="cn('w-full h-fit draggable', wrapperClass)">
    <ContextMenu v-if="pocket">
      <ContextMenuTrigger :class="cn(className)">
        <slot />
      </ContextMenuTrigger>

      <LazyContextMenuContent
        :align="align"
        :side="side"
        class=" isolate z-126  p-3  size-max  overflow-hidden !origin-top-left ">
        <!-- <ContextMenuArrow class="**:bg-b1 **:fill-b1 **:stroke-b1 z-100 **:text-b1 visible" /> -->

        <div class="avatar-group items-center -space-x-3">
          <!-- champ -->

          <div class="avatar !border-shade-6">
            <Placeholder :class="cn(wrapper, 'size-15 ')">
              <ChampionIcon
                v-if="pocket.champions[0]"
                :id="ix.champIdByKey(pocket.champions[0])"
                class="size-full" />
            </Placeholder>
          </div>
          <!-- role -->

          <div class="avatar !border-shade-6 size-12">
            <div :class="cn(' p-0.5 size-10 bg-n1', wrapper)">
              <component
                :is="`i-roles-${pocket.roles[0].toLowerCase() ?? 'all'}`"
                :class="cn('!size-4 text-nc shrink-0')" />
            </div>
          </div>
          <!-- rune -->

          <div class="avatar !border-shade-6 size-12">
            <div :class="cn(' p-0.5 size-10 bg-n1', wrapper)">
              <Img
                v-if="pocket.runes[0].keystone"
                :img="`/img/runes/${ix.runeKeyById(pocket.runes[0].keystone)}.webp`"
                :alt="ix.runeNameById(pocket.runes[0].keystone).toString()"
                class="shrink-0 wrapper" />
            </div>
          </div>

          <div class="avatar !border-shade-6 size-12">
            <div :class="cn(' p-0.5 size-10 bg-n1', wrapper)">
              <Img
                v-if="pocket.runes[0][1].path"
                :img="`/img/runes/${pocket.runes[0][1].path}.webp`"
                :alt="pocket.runes[0][1].path"
                class="!h-4.5 !w-auto z-1" />
            </div>
          </div>
        </div>

        <!-- items -->

        <div class="grid grid-cols-6 place-items-center gap-1">
          <Placeholder
            v-for="i in 6"
            :key="i"
            :class="cn(' size-12 ', wrapper)">
            <Item
              v-if="pocket.items[0].items[i - 1]"
              :id="pocket.items[0].items[i - 1]"
              class="rounded-full size-full *:rounded-full" />
          </Placeholder>
        </div>
      </LazyContextMenuContent>
    </ContextMenu>
  </div>
</template>