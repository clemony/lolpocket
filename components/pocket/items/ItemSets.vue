<script setup lang="ts">
import { vDraggable } from 'vue-draggable-plus'

const props = defineProps<{
  pocket: pocket
}>()
const ts = useTempStore()

const pocket = ref(props.pocket)

const items = ref<any[]>([])

watch(items, (newItemSets) => {
  if (pocket.value) {
    pocket.value.items.sets = newItemSets
  }
})

/* function updatecChildIndex(evt) {
  const { oldIndex, newIndex } = evt

  if (!pocket.value) {
    return
  }

  if (pocket.value.items.default === oldIndex) {
    pocket.value.items.default = newIndex
  }
  else if (pocket.value.items.default > oldIndex && pocket.value.items.default <= newIndex) {
    pocket.value.items.default--
  }
  else if (pocket.value.items.default < oldIndex && pocket.value.items.default >= newIndex) {
    pocket.value.items.default++
  }
} */
</script>

<template>
  <div class="min-h-90vh 90vh pr-12 pl-1 relative z-20">
            
    <div
      v-draggable="[
        pocket.items.sets,
        {
          'group': {
            name: 'sets',
          },
          'sort': true,
          'bubbleScroll': false,
          'scroll': false,
          'delay': 0,
          'animation': 300,
          'force-fallback': true,
          'fallbackTolerance': 0,
          'fallbackOnBody': true,
          'prevent-on-filter': true,
          'ghostClass': 'set-ghost',
          'dragClass': 'set-drag',
        },
      ]"
      group
      class="z-0 h-full w-full pt-8 flex-col items-center gap-10 flex"
    >
      <Card
        v-for="set, in pocket.items.sets"
        :key="set.name"
        drag-class="setDrag"
        class="relative w-full !shadow-smooth "
      >
        <CardHeader class="flex w-full flex-row items-center  pb-3 px-4">
          <!--                <label class="group/star items-center cursor-pointer  *:transition-all *:duration-300  size-3 relative">
                    <input type="radio" name="starSet" :value="index" class="peer hidden"
                        v-model="pocket.items[0].default" @change="prevIndex = pocket.items[0].default"
                        :checked="pocket.items[0].default == index" />
                    <icon name="iconoir:star-dashed" class="absolute z-10 opacity-30 group-hover/star:opacity-15 " />
                    <icon v-if="pocket.items[0].default == index" name="iconoir:star-solid"
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
                @click.stop="set.name = `${generateMediumString()} Set`"
              >
                <icon
                  name="qlementine-icons:shuffle-16"
                  class="size-4 shrink-0"
                />
              </Button>
            </InputEditable>
          </div>
          <Grow />

          <div class="join self-start ">
            <button
              v-tippy="'Clear Items'"
              class="join-item btn  btn-ghost aspect-square size-8 border-0 group"
            >
              <icon
                name="qlementine-icons:eraser-16"
                class="size-4 shrink-0 opacity-40 group-hover:opacity-100"
              />
            </button>

            <button
              v-tippy="'Delete Set'"
              class="join-item btn  btn-ghost aspect-square size-8 border-0 group"
            >
              <icon
                name="teenyicons:bin-outline"
                class="size-4 shrink-0  opacity-40 group-hover:opacity-100"
              />
            </button>
          </div>
        </CardHeader>
        <CardContent class="px-7">
          <ItemSetItems
            :pocket="pocket"
            :set="set"
          />
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.set-drag {
  display: flex;
  width: 100%;

  & div {
    display: flex;
    width: 100%;
  }
}

.set-ghost {
  display: flex;
  width: 100%;
}
</style>
