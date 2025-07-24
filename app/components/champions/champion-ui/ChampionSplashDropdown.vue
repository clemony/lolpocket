<script setup lang="ts">
const { pocket: p, champion } = defineProps<{
  pocket: Pocket
  champion: ChampionKey
}>()
const ix = useIndexStore()

const pocket = computed (() => p)

watch(
  () => pocket.value.card.splash,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)

// TODO FIX
</script>

<template>
  <Popover>
    <PopoverTrigger class="btn btn-ghost btn-circle btn size-11 hover:bg-b2 hover:border-b3">
      <div
        v-if="champion"
        :key="champion"
        class="size-8   rounded-full  overflow-hidden"
        :class="{ }">
        <Image
          :image="`/img/champion/${champion}.webp`"
          :alt="champion"
          class=" !size-8 scale-114" />
      </div>
    </PopoverTrigger>

    <PopoverContent
      align="start"
      :side-offset="6"
      :align-offset="-12"
      class="grid grid-cols-4 gap-2 w-fit min-w-90">
      <!-- <Label v-for="splash in ix.skins" :key="splash.name">
        <PopoverClose as-child>
          <ChampionSplash :url="getSplash(splash.tilePath)" class="size-20 min-h-20 shadow-sm drop-shadow-sm" />

        </PopoverClose>
        <input v-model="pocket.card.splash" type="radio" :value="splash.splashPath" class="peer hidden" />
      </Label> -->
    </PopoverContent>
  </Popover>
</template>

<style scoped></style>
