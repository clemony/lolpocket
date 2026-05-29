<script setup lang="ts">
import { addRuneSet } from "~/domain/pocket/utils/manage/addPocketModules"

definePageMeta({
  name: "pocket-runes",
  title: "runes",
  order: 3,
  path: "/backpack/:id/:pocket_key/runes",
  props: true,
  search: false
})

const route = useRoute("pocket-runes")
const store = pocketStore()
const pocket = computed(() => store.getPocket(String(route.params.pocket_key)))

function handleAdd() {
  const runes = pocket.value?.runes
  if (!runes || !pocket.value) return
  const l = runes.length - 1
  addRuneSet(pocket.value)
}
</script>

<template>
  <div
    class="z-auto flex size-full max-h-full flex-col items-center -space-y-6 overflow-y-scroll pt-10 pr-16 pl-10 *:max-w-400">
    <!-- thumbnails -->
    <UCarousel
      v-slot="{ item }"
      class="sticky -top-10 z-1 flex w-full shrink items-center justify-center gap-2 bg-p0/60 mask-x-from-transparent mask-x-from-0% mask-x-to-black mask-x-to-10% py-4 backdrop-blur-md"
      prev-icon="i-right"
      dots
      wheel-gestures
      :slides-to-scroll="3"
      next-icon="i-left"
      :opts="{
        loop: true
      }">
      <CarouselContent
        class="ml-0 w-fit max-w-full scrollbar-none overflow-x-scroll overscroll-auto scroll-smooth"
        as-child>
        <div
          v-for="(thumbSet, index) in pocket?.runes ?? []"
          :key="index"
          :class="
            cn(
              'grow basis-1 cursor-pointer p-1',
              index === 0 ? '' : 'opacity-50'
            )
          ">
          <UCard class="h-22 w-40" as-child>
            <KeystoneAndPath :set="thumbSet" />
          </UCard>
        </div>

        <!-- add button -->

        <CarouselItem
          :class="
            cn(
              'w-min grow basis-1 cursor-pointer p-1 opacity-60 has-disabled:cursor-not-allowed has-disabled:opacity-40 has-[not-disabled]:opacity-100'
            )
          ">
          <UCard
            label="{
                content:
                  (pocket?.runes?.length ?? 0) >= 10
                    ? 'Max amount of sets reached'
                    : 'Add rune set',
                theme: 'basic',
                arrow: false,
              }"
            as-child>
            <UButton
              class="grid h-22 w-40 place-items-center"
              hover="btn"
              :disabled="(pocket?.runes?.length ?? 0) >= 10"
              @click="handleAdd()">
              <icon name="add" />
            </UButton>
          </UCard>
        </CarouselItem>
      </CarouselContent>
    </UCarousel>
    <!-- main page -->

    <Carousel
      v-slot="{ item }"
      class="size-full"
      prev-icon="i-right"
      wheel-gestures
      :slides-to-scroll="3"
      next-icon="i-left"
      :opts="{
        loop: true
      }">
      <CarouselItem
        v-for="(set, index) in pocket?.runes ?? []"
        :key="index"
        class="size-full pb-14">
        <PocketRunesLayout :set="set" />
      </CarouselItem>
    </Carousel>
  </div>
</template>
