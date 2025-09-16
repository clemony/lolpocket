<script lang="ts" setup>
const ix = useIndexStore()

/* const shuffled = [...ix.champions.sort(() => 0.5 - Math.random())]
const selectedChamps = computed (() => {
  console.log('💠 - selectedChamps - ix.champions:', ix.champions)
  return shuffled.slice(0, 6)
})
 */
const currentItems = ref()

const champModel = ref(null)
const champComplete = ref(false)
const isChampVisible = ref(true)

const itemModel = [
  {
    item: ref(null),
    visible: ref(false),
    complete: ref(false),
  },
  {
    item: ref(null),
    visible: ref(false),
    complete: ref(false),
  },
  {
    item: ref(null),
    visible: ref(false),
    complete: ref(false),
  },
  {
    item: ref(null),
    visible: ref(false),
    complete: ref(false),
  },
  {
    item: ref(null),
    visible: ref(false),
    complete: ref(false),
  },
  {
    item: ref(null),
    visible: ref(false),
    complete: ref(false),
  },
]

const itemIndex = ref(0)

function setTimer(timer, i?, item?) {
  // getRandomItems()
  setTimeout(() => {
    if (timer == 'champ') {
      isChampVisible.value = false
      champComplete.value = true
      itemModel[0].visible.value = true
      console.log('💠 - setTimeout - itemModel:', itemModel[0].visible.value)
      console.log('💠 - itemIndex:', itemIndex)
    }
    else if (timer == 'item') {
      itemModel[i].item.value = item
      itemModel[i].visible.value = false
      getRandom(ix.items)
      itemIndex[i + 1].visible.value = true
    }
  }, 2000)
}

onMounted(async () => {
  currentItems.value = getRandom(ix.items)
})
</script>

<template>
  <div
    class="size-full relative flex flex-col gap-6 items-center justify-center">
    <div class="flex gap-4 absolute top-5 h-16">
      <div
        v-if="champModel && champComplete"
        v-tippy="champModel.name"
        class="size-16 hover:scale-110 hover:ring-1 hover:ring-neutral rounded-lg shadow-sm drop-shadow-sm transition-all duration-400 animate-in slide-in-from-bottom-10 hover:ring-offset-2 hover:ring-offset-b2">
        <ChampionIcon
          :id="champModel"
          class="overflow-hidden size-16 rounded-lg" />
      </div>
      <!--
      <template v-for="(item, i) in itemModel">
        <div v-if="itemModel[i].item && itemModel[i].complete.value == true" :key="i" v-tippy="itemModel[i].item.value.name" class="size-16   hover:scale-110 hover:ring-1 hover:ring-neutral rounded-lg shadow-sm drop-shadow-sm transition-all duration-400 animate-in slide-in-from-bottom-10 hover:ring-offset-2 hover:ring-offset-b2">
          <div class="overflow-hidden size-16 rounded-lg">
            <img :src="`/img/champion/${itemModel[i].item.value.id}.webp`" class="size-full scale-115" />
          </div>
        </div>
      </template> -->
    </div>

    <template v-if="isChampVisible">
      <Transition name="puff">
        <p
          v-if="!champModel"
          class="f-sb text-md f-tt">
          Select a Champion...
        </p>
      </Transition>

      <transition-slide
        group
        :offset="[8, 0]"
        :duration="1000"
        class="flex items-center justify-center gap-4">
        <!--  <template v-for="champion in selectedChamps" :key="champion.name">
          <ChampionIcon v-if="champModel ? champion == champModel : selectedChamps.includes(champion)" :id="champion.id" v-tippy="champion.name" class="size-16 cursor-pointer hover:scale-110 hover:ring-1 hover:ring-neutral rounded-lg shadow-sm drop-shadow-sm transition-all duration-200 hover:ring-offset-2 hover:ring-offset-b2" :class="{ hidden: champModel != null && champion != champModel }">
            <input v-model="champModel" name="champion" type="radio" class="peer hidden" :value="champion" @change="setTimer('champ')" />
          </ChampionIcon>

          <h1
            v-if="champion == champModel" class="flex gap-3 items-center ">
            {{ champion.name }}
            <icon name="line-md:confirm-circle" class="size-7" />
          </h1>
        </template> -->
      </transition-slide>
    </template>

    <template v-if="itemModel[itemIndex].visible">
      <Transition name="puff">
        <p
          v-if="!itemModel[itemIndex].item"
          class="f-sb text-md f-tt">
          Select your first item...
        </p>
      </Transition>

      <transition-slide
        group
        :offset="[8, 0]"
        :duration="1000"
        class="flex items-center justify-center gap-4">
        <template
          v-for="item in currentItems"
          :key="item.name">
          <label
            v-if="
              itemModel[itemIndex].item
                ? item == itemModel[itemIndex]
                : currentItems.includes(item)
            "
            v-tippy="item.name"
            class="size-16 cursor-pointer hover:scale-110 hover:ring-1 hover:ring-neutral rounded-lg shadow-sm drop-shadow-sm transition-all duration-300 hover:ring-offset-2 hover:ring-offset-b2"
            :class="{
              hidden:
                itemModel[itemIndex].item != null
                && item != itemModel[itemIndex].item,
            }">
            <input
              v-model="itemModel[itemIndex].item"
              name="item"
              type="radio"
              class="peer hidden"
              :value="item"
              @change="setTimer('item', itemIndex, item)" />

            <div class="overflow-hidden size-16 rounded-lg">
              <img
                :src="`/img/items/${item.id}.webp`"
                class="size-full s" />
            </div>
          </label>

          <h1
            v-if="item == itemModel[itemIndex].item"
            class="flex gap-3 items-center">
            {{ item.name }}
            <icon
              name="line-md:confirm-circle"
              class="size-7" />
          </h1>
        </template>
      </transition-slide>
    </template>
  </div>
</template>

<style scoped></style>
