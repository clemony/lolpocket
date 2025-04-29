<script setup lang="ts">
const props = defineProps<{
  params: {
    data: {
      name: string
      items: Item[]
      pinned: boolean
      key: string
      runes: {
        runes: Rune[]
        starred: number
      }
    }
    api: any
    node: any
  }
}>()
const as = useAccountStore()

const ps = usePocketStore()
const pocket = getPocket(props.params.data.key)
const runeSet = computed(() => {
  if (!pocket) {
    return
  }
  return pocket.runes[0].runeSets[pocket.runes[0].starred]
})

const keystone = computed(() => {
  if (runeSet.value && keystone) {
    const stone = runeSet.value.primary.keystone

    return stone
  }
})
</script>

<template>
  <!------------------------⟢ runes ⟣------------------------->
  <PocketMenu
    v-if="pocket"
    :pocket="pocket"
    type="context"
  >
    <div class="flex size-full items-center justify-center gap-3">
      <template v-if="keystone && keystone.name != 'empty' && runeSet">
        <NuxtLink
          :to="`/pocket/${pocket.key}/runes`"
          class="relative grid aspect-square size-14! shrink-0 cursor-pointer place-items-center items-center rounded-full bg-linear-to-br from-transparent to-75% shadow-xs"
          :class="{}"
        >
          <div class="from-b1/90 to-b1/40 grid size-full place-items-center rounded-full bg-linear-to-br p-1 backdrop-blur-md">
            <img
              :src="keystone.icon"
              class="drop-shadow-softer shrink-0 object-contain transition-all duration-200 hover:drop-shadow-sm"
            />
          </div>
        </NuxtLink>
      </template>
      <Placeholder
        v-else
        class="size-14"
      />

      <!-- <template
                    v-if="
                        runeSet.secondary != 'empty' &&
                        runeSet.secondary != 'undefined' &&
                        runeSet
                    ">
                    <div
                        class="relative flex aspect-square size-14! shrink-0 cursor-pointer items-center rounded-full bg-linear-to-br from-transparent to-75% shadow-xs"
                        :class="runeColors(runeSet)"">
                        <KinesisContainer
                            :disabled="as.reducedMotion == true"
                            :perspective="100"
                            :duration="200"
                            class="group flex size-full items-center">
                            <KinesisElement
                                type="depth"
                                :strength="5"
                                class="group flex size-full items-center">
                                <div
                                    class="aspect-square! size-14! cursor-pointer overflow-clip rounded-full bg-b1/70 p-2.5 backdrop-blur-md group-hover:scale-90">
                                    <img
                                        :src="`/img/runes/${runeSet.secondary}.webp`"
                                        class="size-full object-contain! drop-shadow-softest transition-all duration-200 hover:opacity-80" />
                                </div>
                            </KinesisElement>
                        </KinesisContainer>
                    </div>
                </template> -->
      <Placeholder
        v-else
        :size="41"
      />
    </div>

    <!--   <CmOptionRunes :pocket="pocket" /> -->
  </PocketMenu>
</template>

<style scoped></style>
