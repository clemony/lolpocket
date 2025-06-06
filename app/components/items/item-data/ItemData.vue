<script setup lang="ts">
const { id, base } = defineProps<{
  id: ItemId
  base?: boolean
}>()

const item = ref<Item>()


watchEffect(async () => {
  if (!id)
    return

  try {
    const module = await import(`data/records/items/${id}.ts`)
    item.value = module.default || null
  }
  catch (err) {
    console.error(`Failed to load champion for ${id}`, err)
    item.value = null
  }
})
</script>

<template>
  <div v-if="item" class="px-3 py-2 bg-blend-darken max-h-[404px] overflow-hidden flex flex-col **:select-text" :class="{ '**:text-bc': base, '**:text-nc': !base }">
    <div class="flex gap-4 pb-3 ">
      <div class="!size-14 rounded-lg aspect-square shrink-0 shadow-sm drop-shadow-sm ">
        <Img
          v-if="item"
          :key="item.name"
          :img="`/img/item/${id}.webp`"
          :alt="`${item.name} Image`"
          class="!size-full rounded-lg" />
      </div>

      <div class="flex flex-col  text-4 w-full">
        <div class=" flex items-center justify-between  gap-1">
          <a
            v-tippy="'Official Wiki'"
            v-if="item.name"
            :href="getWikiLink(item.name)"
            target="_blank"
            alt="link to league wiki"
            class=" flex items-center  w-full gap-1.5">
            {{ item.name || '' }}
            <icon name="link-lg" class="size-3.75 dst" />
            <Grow />
          </a>
        </div>
        <div class="flex gap-1 ">
          <div v-if="item.rank">{{item.rank}}</div>
          <Grow />
          <div v-if="item && item.shop?.prices?.total" class="flex items-end gap-1 text-2 !text-nc">
            <Img img="/img/icons/gold-coin.webp" alt="coin" class="size-4 ml-1 self-center opacity-80" />
            {{ item.shop.prices.total }}
          </div>
        </div>
      </div>
      <div v-if="item.requiredChampion" class="my-2 -mt-2">
        <i>Unique to <b>{{ item.requiredChampion }}.</b></i>
      </div>
    </div>
    <div class="  py-2    relative overflow-y-auto    flex flex-col ">
      <div v-if="item.stats && Object.entries(item.stats).length" class="pb-1">
        <ItemStats :stats="item.stats" :base="base" />
      </div>

      <Separator v-if="!item.noEffects" class=" mt-2 mb-2 bg-nc/10" />

      <div v-if="item.passives?.length && item.noEffects != true">
        <ItemEffect
          v-for="(passive, i) in item.passives" :key="i"
          :data="passive" type="Passive" />
      </div>

      <div v-if="item.active?.[0] && item.noEffects != true">
        <ItemEffect
          :data="item.active[0]" type="Active" />
      </div>

      <LazyItemFrom v-if="item.buildsFrom?.length" :from="item.buildsFrom" :gold=" item.shop?.prices?.combined" />
      <LazyItemTo v-if="item.buildsInto?.length" :to="item.buildsInto" />

      <!-- <Separator v-if="item.passives.length || item.active.name" class=" mt-3 mb-2 bg-nc/10" />

      <p
        v-if="id"
        class="flex flex-nowrap text-nowrap grow items-center  text-2">
        <icon name="mage:hash" class="size-3.75 " />{{ id }}
      </p> -->
    </div>
  </div>
</template>

<style scoped>
</style>