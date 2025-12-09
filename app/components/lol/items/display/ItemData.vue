<script setup lang="ts">
const { id, map } = defineProps<{
  id: number
  map?: number
}>()

const item = ref<Item>()

const open = shallowRef<boolean>(true)

watchEffect(async () => {
  if (!id)
    return

  try {
    const module = await import(`#shared/records/items/${id}.ts`)
    item.value = module.default || null
  }
  catch (err) {
    console.error(`Failed to load champion for ${id}`, err)
    item.value = null
  }
})

const filteredFrom = computed (() =>
  item.value.buildsFrom.filter(i => map ? mapToItem[map].includes(i.id) : i)
)

const filteredInto = computed (() =>
  item.value.buildsInto.filter(i => map ? mapToItem[map].includes(i.id) : i)
)
const itemImgClass
  = 'hover:ring-nc/90   hover:ring-offset-neutral/80 size-8 rounded-md  transition-all  duration-200 *:rounded-md  *:pointer-events-none hover:ring-1 hover:ring-offset-2'

const disabled = computed (() => !item.value || (!item.value?.stats?.length && !item.value?.requiredChampion && !item.value?.passives?.length && !item.value?.active?.length && !item.value?.buildsFrom?.length && !item.value?.buildsInto?.length))
</script>

<template>
  <Collapsible
    v-if="item"
    v-model:open="open"
    :disabled
    class="h-full w-80 overflow-x-hidden">
    <slot
      :open
      :disabled />
    <CollapsibleContent class="relative grid h-full max-h-34 w-full auto-rows-auto overflow-x-hidden overflow-y-scroll px-4">
      <!-- separator -->
      <Separator
        v-if="item?.stats && Object.entries(item?.stats).length"
        :size="2"
        class="px-4"
        color="neutral" />

      <!-- REQ CHAMP -->
      <div
        v-if="item?.requiredChampion"
        class="my-2 -mt-2">
        <i>Unique to <b>{{ item.requiredChampion }}.</b></i>
      </div>
      <!-- STATS -->
      <div
        v-if="item?.stats && Object.entries(item?.stats).length"
        class="pt-2 pb-1">
        <ItemStats :stats="item?.stats" />
      </div>

      <!-- EFFECTS -->
      <template v-if="item?.passives?.length && item?.noEffects !== true">
        <Separator
          :size="2"
          color="neutral" />
        <ItemEffect
          v-for="(passive, i) in item.passives"
          :key="i"
          :data="passive"
          type="Passive" />
      </template>

      <!-- ACTIVES -->
      <template v-if="item?.active?.[0] && item?.noEffects !== true">
        <Separator
          :size="2"
          color="neutral" />
        <ItemEffect
          :data="item.active[0]"
          type="Active" />
      </template>

      <!-- RECIPE -->

      <template v-if="item?.buildsFrom?.length">
        <Separator
          :size="4"
          label="RECIPE"
          color="neutral" />
        <div class="group flex items-center gap-3 p-1">
          <template
            v-for="(fromItem, i) in filteredFrom"
            :key="i">
            <Item
              :id="fromItem.id"
              spinner
              :title="`${fromItem.name} ‑ ${fromItem.gold}g`"
              :class="itemImgClass" />

            <icon
              v-if="i !== item.buildsFrom.length - 1"
              name="dashicons:plus"
              class="size-3.5 opacity-80" />
          </template>

          <div
            v-if="item?.shop?.prices?.combined"
            class="flex items-center">
            <icon
              name="dashicons:plus"
              class="size-3.5 opacity-80" />

            <img
              src="/img/icons/gold-coin.webp"
              alt="coin"
              class="mr-1 ml-3 size-4.25 opacity-80" />
            {{ item.shop?.prices?.combined }}
          </div>
        </div>
      </template>

      <!-- component OF -->

      <template v-if="item.buildsInto?.length">
        <Separator
          :size="4"
          label="BUILDS INTO"
          color="neutral" />

        <div
          :class="
            cn('group flex flex-wrap items-center gap-3 px-1', {
              'justify-start': item.buildsInto.length > 7,
            })
          ">
          <Item
            v-for="(buildItem, i) in filteredInto"
            :id="buildItem.id"
            :key="i"
            spinner
            :title="`${buildItem.name} ‑ ${buildItem.gold}g`"
            :class="itemImgClass" />
        </div>
      </template>
    </CollapsibleContent>
  </Collapsible>
</template>
