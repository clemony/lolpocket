<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'

const props = defineProps<{
  pocket: pocket
}>()
const ts = useTempStore()

const pocket = ref(props.pocket)

const items = ref<any[]>([])

if (pocket.value) {
  watch(
    pocket.value.items[0],
    (newPocket) => {
      pocket.value.items[0].itemSets = newPocket.itemSets || []
    },
    { immediate: true },
  )

  watch(items, (newItemSets) => {
    if (pocket.value) {
      pocket.value.items[0].itemSets = newItemSets
    }
  })
}

function updateStarredIndex(evt) {
  const { oldIndex, newIndex } = evt

  if (!pocket.value) {
    return
  }

  if (pocket.value.items[0].starred === oldIndex) {
    pocket.value.items[0].starred = newIndex
  }
  else if (pocket.value.items[0].starred > oldIndex && pocket.value.items[0].starred <= newIndex) {
    pocket.value.items[0].starred--
  }
  else if (pocket.value.items[0].starred < oldIndex && pocket.value.items[0].starred >= newIndex) {
    pocket.value.items[0].starred++
  }
}
</script>

<template>
  <div class="min-h-90vh 90vh">
    <VueDraggable
      v-if="pocket"
      v-model="pocket.items[0].itemSets"
      tag="div"
      :delay="0"
      :animation="300"
      :group="{ name: 'sets' }"
      :prevent-on-filter="true"
      ghost-class="ghost"
      :force-fallback="true"
      :fallback-tolerance="0"
      fallback-class="drag-clone"
      :fallback-on-body="true"
      class="z-0 h-full w-full pt-8 px-8"
      @end="updateStarredIndex"
    >
      <transition-slide group class="w-full flex-col items-center gap-10 flex">
        <Card
          v-for="set, in pocket.items[0].itemSets"
          :key="set.key"
          drag-class="setDrag"
          class="relative w-full !shadow-sm shadow-b2/70"
        >
          <CardHeader class="flex w-full flex-row items-center gap-2 pb-3">
            <!--                <label class="group/star items-center cursor-pointer  *:transition-all *:duration-300  size-3 relative">
                    <input type="radio" name="starSet" :value="index" class="peer hidden"
                        v-model="pocket.items[0].starred" @change="prevIndex = pocket.items[0].starred"
                        :checked="pocket.items[0].starred == index" />
                    <icon name="iconoir:star-dashed" class="absolute z-10 opacity-30 group-hover/star:opacity-15 " />
                    <icon v-if="pocket.items[0].starred == index" name="iconoir:star-solid"
                        class="absolute   text-yellow-300 group-hover/star:opacity-70  animate-in zoom-in-0 spin-in-90  duration-300"
                        :class="{
                            'slide-in-from-bottom-60': prevIndex > index,
                            'slide-in-from-top-60': prevIndex < index
                        }" />
                </label> -->

            <div class="-mt-1 flex w-fit items-center gap-1 overflow-hidden **:items-center">
              <InputEditable
                v-model:model-value="set.name"
                :default-value="set.name"
                class="focus-within:border-b2 hover:border-b2 text-3 min-w-24truncate w-fit border-transparent text-start align-baseline font-medium capitalize transition-all duration-300 @[230px]/set:flex"
              >
                <Button
                  variant="simple"
                  size="xs"
                  class="h-full rounded-l-none px-0"
                >
                  <icon
                    name="teenyicons:x-small-outline"
                    class="size-5.5 shrink-0"
                  />
                </Button>
                <Button
                  variant="simple"
                  class="mr-1 h-full px-0"
                  size="xs"
                  @click.stop="set.name = `${generateRandomName()} Set`"
                >
                  <icon
                    name="qlementine-icons:shuffle-16"
                    class="size-4 shrink-0"
                  />
                </Button>
              </InputEditable>
            </div>
            <Grow />
            <Button
              v-tippy="'Clear Items'"
              variant="ghost"
              size="icon"
            >
              <icon
                name="qlementine-icons:eraser-16"
                class="size-4"
              />
            </Button>

            <Button
              v-tippy="'Delete Set'"
              variant="ghost"
              size="icon"
            >
              <icon
                name="teenyicons:bin-outline"
                class="size-4"
              />
            </Button>

            <label class="group absolute top-0 right-2 h-full w-7 shrink-0">
              <input
                v-model="ts.selectedItemSet"
                type="radio"
                name="itemset"
                :value="set"
                class="hidden"
              />
            </label>
          </CardHeader>
          <CardContent class="px-7">
            <ItemSetItems
              :pocket="pocket"
              :set="set"
            />
          </CardContent>
        </Card>
      </transition-slide>
    </VueDraggable>
  </div>
</template>

<style scoped></style>
