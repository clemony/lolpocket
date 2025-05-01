<script setup lang="ts">
const props = defineProps<{
  item?: Item
  class?: HTMLAttributes['class']
}>()

const { data, refresh, error, status, clear } = await useItemData('posts/1')


const item = computed (() => {
  return props.item
})

const itemPrice = computed (() => {
  return typeof item.value?.buy === 'number' ? `${item.value.buy} G` : typeof item.value?.buy === 'string' ? `<span>${item.value.buy.toString().replace('=>', '')}</span>` : null
})
console.log('💠 - item:', item)
const stats = computed (() => formatItemStats(item.value.stats))
const effects = computed (() => item.value.effects ? item.value.effects : null)
</script>

<template>
  <div class="**:text-nc max-h-151 overflow-hidden flex flex-col **:select-text">
    <div class="flex gap-4 px-2.5 pt-1 ">
      <div class="!size-16 rounded-lg aspect-square shrink-0 shadow-sm drop-shadow-sm">
        <Image
          v-if="item"
          :key="item.name"
          :image="`/img/item/${item.id}.webp`"
          :alt="`${item.name} Image`"
          class="!size-full rounded-lg" />
      </div>
      <div class="flex flex-col  text-4 w-full">
        {{ item.name || '' }}

        <ItemTier :item="item" />
      </div>
    </div>

    <div class=" !ml-0 pr-3 py-3 pl-3  ml-4  relative overflow-hidden   flex flex-col ">
      <div class="w-full flex items-center  gap-3">
        <div v-if="item.buy" class="flex gap-0.5 *:!text-nc">
          <icon v-if="typeof item.buy != 'number'" name="lets-icons:up" class="shrink-0 !text-nc size-4.25 " />
          <span v-html="itemPrice"></span>
        </div>
        <Grow />

        <ItemDataLinkMenuButtons :item="item" />
      </div>

      <div v-if="stats" class="mb-3">
        <div class="divider divider-end  before:h-px my-4 before:bg-nc">
          STATS
        </div>

        <ItemStats :stats="stats" />
      </div>

      <div class="overflow-y-auto relative">
        <div v-if="effects && effects.pass">
          <div class="divider divider-end before:h-px mb-2 mt-0 before:bg-nc">
            PASSIVES
          </div>
          <p v-if="typeof effects.pass === 'string'"></p>
          <ItemEffect
            v-if="effects.pass"
            :data="effects.pass" />
          <ItemEffect
            v-if="effects.pass2"
            :data="effects.pass2"
            class="mt-5" />
          <ItemEffect
            v-if="effects.pass3"
            :data="effects.pass3" />
        </div>

        <div v-if="effects && effects.act">
          <div class="divider divider-end before:h-px my-4 before:bg-nc">
            ACTIVES
          </div>

          <p v-if="typeof effects.act === 'string'"></p>
          <ItemEffect
            v-if="effects.act"
            :data="effects.act" />
        </div>

        <ItemFrom :item="item" />
        <ItemTo :item="item" />
        <div v-if="item.itemlimit || item.req">
          <div class="divider divider-end before:h-px mb-2 mt-6 before:bg-nc">
            LIMITS / REQS
          </div>

          <p v-if="item.itemlimit" class="w-full flex flex-wrap text-wrap leading-normal">
            Limited to one {{ item.itemlimit }} item.
          </p>
          <ItemRequirements :item="item" />
        </div>

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
  </div>
</template>

<style scoped>
</style>