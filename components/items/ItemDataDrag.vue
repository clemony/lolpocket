<script lang="ts" setup>
import { UseDraggable } from '@vueuse/components'

const ts = useTempStore()
const as = useAccountStore()
const item = ref(ts.selectedItem)

watch(
  () => ts.selectedItem,
  (newVal) => {
    if (newVal) {
      item.value = newVal
    }
  },
)

const check = ref(false)
</script>

<template>
  <UseDraggable :initial-value="{ x: 700, y: 100 }" class="absolute inset-shadow-sm bg-[var(--fx-noise)] z-70 pointer-events-auto cursor-move select-none shadow-smooth">
    <div class="absolute w-80 left-0 z-81 top-0 flex items-center h-18 justify-center w-5 ">
      <div class="absolute left-1.5 top-6">
        <icon name="teenyicons:drag-vertical-outline" class="size-5 text-bc/40 shrink-0 dst" />
      </div>
    </div>
    <div class="collapse bg-b1/92  backdrop-blur-md overflow-hidden border rounded-xl border-b3  w-110 z-0">
      <input v-model="check" type="checkbox" />
      <div class="collapse-title  rounded-xl pl-8  text-start justify-start flex-nowrap font-semibold h-18 flex gap-3 items-center pr-4">
        <img
          :key="item.name"
          :src="`/img/item/${item.id}.webp`"
          :alt="`${item.name} Image`"
          class="border-b3/90 shadow-warm-2 pointer-events-none size-12 rounded-lg border"
        />

        <div class="grow">
          <h3 class="flex flex-wrap items-start pt-1 leading-none tracking-tighter drop-shadow-sm ">
            {{ item.name }}
          </h3>
          <template v-if="item.type">
            <p class="group ml-0.5 font-semibold opacity-50">
              {{ item.type }}
              <span class="group-last:hidden">,&nbsp;</span>
            </p>
          </template>
        </div>
        <button class="btn btn-square btn-xs place-items-center opacity-80">
          <PlusMinusExpand v-model:check="check" class="size-6  [&_svg]:size-6" />
        </button>
      </div>
      <div class="collapse-content rounded-xl">
        <ItemInfo :drag-float="true">
          <LittleTip
            content="Add Favorite"
            class="rating size-fit mr-2 group"
          >
            <input
              v-model="as.favoriteItems"
              type="checkbox"
              :value="item"
              name="favorite-item"
              :aria-label="`favorite ${item.name}`"
              class="mask mask-heart bg-[#dd5f61] brightness-90 drop-shadpw-sm"
              :class="{ 'group-hover:opacity-40 transition-all duration-300': !as.favoriteItems.includes(item) }"
            />
          </LittleTip>
        </ItemInfo>
      </div>
    </div>
  </UseDraggable>
</template>

<style scoped>

</style>