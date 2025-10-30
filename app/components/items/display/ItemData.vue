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
    const module = await import(`#shared/appdata/records/items/${id}.ts`)
    item.value = module.default || null
  }
  catch (err) {
    console.error(`Failed to load champion for ${id}`, err)
    item.value = null
  }
})
</script>

<template>
  <div
    v-if="item"
    class="flex max-h-[404px] flex-col overflow-hidden px-4 py-3 **:select-text">
    <div class="flex h-fit gap-4 ">
      <div class="aspect-square !size-14 shrink-0 rounded-lg shadow-sm drop-shadow-sm ">
        <Item
          v-if="item"
          :id="item.id"
          :alt="`${item.name} Image`"
          class="!size-full overflow-hidden rounded-lg" />
      </div>

      <div class="text-4 flex  w-full flex-col">
        <div class=" flex items-center justify-between  gap-1">
          <BtnLink
            v-if="item.name"
            external
            variant="link"
            :to="getWikiLink(item.name)"
            target="_blank"
            size="8"
            class="text-4 h-7 font-bold"
            :title="`Official LoL Wiki - ${item.name}`">
            <h4 class="leading-4">
              {{ item.name }}
            </h4>
            <icon
              name="link-lg"
              class="dst size-3.75" />
          </BtnLink>
        </div>

        <div class="flex gap-1 ">
          <div v-if="item.rank">
            {{ item.rank }}
          </div>

          <Grow />

          <div
            v-if="item && item.shop?.prices?.total"
            class="text-3 flex items-end gap-1 font-medium ">
            <Img
              img="/img/icons/gold-coin.webp"
              alt="coin"
              class="ml-1 size-4 self-center opacity-80" />
            {{ item.shop.prices.total }}
          </div>
        </div>
      </div>

      <div
        v-if="item.requiredChampion"
        class="my-2 -mt-2">
        <i>Unique to <b>{{ item.requiredChampion }}.</b></i>
      </div>
    </div>

    <div class="    relative flex    flex-col overflow-y-auto ">
      <div
        v-if="item.stats && Object.entries(item.stats).length"
        class="pt-2 pb-1">
        <ItemStats
          :stats="item.stats"
          :base="base" />
      </div>

      <div v-if="item.passives?.length && item.noEffects !== true">
        <Separator
          class=" mt-2 mb-2 !bg-white opacity-10" />
        <ItemEffect
          v-for="(passive, i) in item.passives"
          :key="i"
          :data="passive"
          type="Passive" />
      </div>

      <div v-if="item.active?.[0] && item.noEffects !== true">
        <Separator
          class=" mt-2 mb-2 !bg-white opacity-10 " />
        <ItemEffect
          :data="item.active[0]"
          type="Active" />
      </div>

      <LazyItemFrom
        v-if="item.buildsFrom?.length"
        :from="item.buildsFrom"
        :gold=" item.shop?.prices?.combined" />

      <LazyItemTo
        v-if="item.buildsInto?.length"
        :to="item.buildsInto" />

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