<script setup lang="ts">
const { id } = defineProps<{
  id: ItemId
}>()


const { data } = await useFetch(`/api/items/${id}.json`)
const { data: description } = await useFetch(`/api/lists/item-effects.json`)
const item = computed (() => data.value as Item)
console.log("💠 - description:", description)

/* const itemPrice = computed (() => {
  if (!item.cost)
  return

  return typeof item.cost === 'number' ? `${ item.cost} G` : typeof  item.cost === 'string' ? `<span>${ item.cost.toString().replace('=>', '')}</span>` : null
}) */
console.log('💠 - item:', item.value)
const stats = computed (() => formatItemStats(item.value.stats))
</script>

<template>
  <div class="px-3 py-2 **:text-nc max-h-151 overflow-hidden flex flex-col **:select-text">
    <div class="flex gap-4 ">
      <div class="!size-14 rounded-lg aspect-square shrink-0 shadow-sm drop-shadow-sm">
        <Image
          v-if="item"
          :key="item.name"
          :image="`/img/item/${item.id}.webp`"
          :alt="`${item.name} Image`"
          class="!size-full rounded-lg" />
      </div>
      <div class="flex flex-col  text-4 w-full">

      <div class=" flex items-center  gap-1">
        {{ item.name || '' }}
        <Grow />
        <ItemDataLinkMenuButtons :id="item.id" :name="item.name" />
      </div>

<div class="flex gap-1 ">
        <ItemTier :ranks="item.rank" />
        <Grow />
        <div v-if=" item.shop.prices.total" class="flex items-end gap-0.5 *:!text-nc text-2">
          <icon v-if="typeof   item.shop.prices.total != 'number'" name="lets-icons:up" class="shrink-0 !text-nc size-4.25 " />
     <!--      <span v-html="itemPrice"></span> -->
           {{`${  item.shop.prices.total} G` }}
        </div>
        </div>
      </div>
    </div>

    <div class="  pt-3    relative overflow-y-auto    flex flex-col ">

<div class="">
  {{item.simpleDescription}}
</div>
      <div v-if="item.stats && Object.entries(item.stats).length" class="pb-1">
 <!--        <ItemStats :stats="item.stats" /> -->
      </div>

  
          <Separator v-if="item.passives.length || item.active.name" class="bg-nc/10   my-3"  />

        <div v-if="item.passives.length  && item.noEffects != true">
          <ItemEffect
            v-for="(passive, i) in item.passives" :key="i"
            :data="passive" type="Passive" :description="description[item.id].passives[i]"/>
        </div>

        <div v-if="item.active.name && item.noEffects != true">


          <LazyItemEffect
            :data="item.active" type="Active" :description="description[item.id].active"/>
        </div>

        <LazyItemFrom v-if="item.buildsFrom.length" :from="item.buildsFrom" />
        <LazyItemTo v-if="item.buildsInto.length" :to="item.buildsInto" />
   <!--      <div v-if="item.itemlimit || item.req">
          <div class="divider divider-end before:h-px mb-2 mt-6 before:bg-nc/30">
            LIMITS / REQS
          </div>

          <p v-if="item.itemlimit" class="w-full flex flex-wrap text-wrap leading-normal">
            Limited to one {{ item.itemlimit }} item.
          </p>
          <ItemRequirements :item="item" />
        </div> -->

        <div class="items-end self-end">
          <div class="flex items-center px-2">
          <!--       <p
                    v-if="id"
                    class="flex grow items-end gap-3 pt-2 leading-none">
                    <span class="">Item ID:</span>
                    <span class="">{{ id }}</span>
                </p> -->
          </div>
        </div>
      </div>

  </div>
</template>

<style scoped>
</style>