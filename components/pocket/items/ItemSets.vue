<script setup lang="ts">
  import { VueDraggable } from 'vue-draggable-plus';

  import ItemSetItems from './ItemSetItems.vue';

  const ts = useTempStore();
  const ps = usePocketStore();

  const props = defineProps<{
    pocketKey: string;
  }>();

  const pocketKey = props.pocketKey;

  const pocket = getPocket(pocketKey);

  const items = ref<any[]>([]);

  if (pocket) {
    watch(
      pocket.items[0],
      (newPocket) => {
        pocket.items[0].itemSets = newPocket.itemSets || [];
      },
      { immediate: true }
    );

    watch(items, (newItemSets) => {
      if (pocket) {
        pocket.items[0].itemSets = newItemSets;
      }
    });
  }

  function updateStarredIndex(evt) {
    const { oldIndex, newIndex } = evt;

    if (!pocket) {
      return;
    }

    if (pocket.items[0].starred === oldIndex) {
      pocket.items[0].starred = newIndex;
    } else if (pocket.items[0].starred > oldIndex && pocket.items[0].starred <= newIndex) {
      pocket.items[0].starred--;
    } else if (pocket.items[0].starred < oldIndex && pocket.items[0].starred >= newIndex) {
      pocket.items[0].starred++;
    }
  }

  const prevIndex = 0;
</script>

<template>
  <VueDraggable
    v-if="pocket"
    tag="div"
    v-model="pocket.items[0].itemSets"
    :delay="0"
    :animation="300"
    :group="{ name: 'sets' }"
    :prevent-on-filter="true"
    ghostClass="ghost"
    :force-fallback="true"
    @end="updateStarredIndex"
    :fallbackTolerance="0"
    fallbackClass="drag-clone"
    :fallbackOnBody="true"
    class="z-0 flex h-full w-full flex-col items-center gap-8 px-6">
    <TransitionGroup name="pop">
      <DisplayCard
        v-for="(set, index) in pocket.items[0].itemSets"
        dragClass="setDrag"
        :key="set.key"
        headerClass="pb-2! [&_.description]:hidden"
        :cardClass="{
          '@container/set relative w-[calc(100%-48px)]  inset-0 before:absolute before:bg-transparent before:border  before:w-full before:h-full  before:pointer-events-none before:border-transparent before:z-50  mx-[24px] before:rounded-xl ':
            set,
          ' before:border-neutral/50 before:shadow-inner': set == ts.selectedItemSet,
        }">
        <template #header>
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
              v-model:modelValue="set.name"
              :defaultValue="set.name"
              class="focus-within:border-b2 hover:border-b2 text-3 min-w-24truncate w-fit border-transparent text-start align-baseline font-medium capitalize transition-all duration-300 @[230px]/set:flex">
              <Button
                variant="simple"
                size="xs"
                class="h-full rounded-l-none px-0">
                <icon
                  name="teenyicons:x-small-outline"
                  class="size-5.5 shrink-0" />
              </Button>
              <Button
                variant="simple"
                class="mr-1 h-full px-0"
                size="xs"
                @click.stop="set.name = generateRandomName() + ' Set'">
                <icon
                  name="qlementine-icons:shuffle-16"
                  class="size-4 shrink-0" />
              </Button>
            </InputEditable>
          </div>

          <span class="grow self-center"></span>

          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button
                variant="ghost"
                size="icon">
                <icon
                  name="ph:gear-six"
                  class="size-4.5 shrink-0 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Set Type</DropdownMenuLabel>

              <!-- <DdSetType :pocket="pocket" :set="set" /> -->

              <DropdownMenuItem alt="Clear Items">
                <icon
                  name="qlementine-icons:eraser-16"
                  class="-ml-1 size-4" />
                Clear Items
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem alt="Delete Set">
                <icon
                  name="teenyicons:bin-outline"
                  class="-ml-1 size-4" />
                Delete Set
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <label class="group absolute top-0 right-2 h-full w-7 shrink-0">
            <input
              type="radio"
              name="itemset"
              v-model="ts.selectedItemSet"
              :value="set"
              class="hidden" />
          </label>
        </template>

        <ItemSetItems
          :pocketKey="pocketKey"
          :set="set" />
      </DisplayCard>
    </TransitionGroup>
    <Card
      class="border-b2 bg-b2/10 hover:bg-b2/60 hover:shadow-inset-sm mb-12 grid h-[60px] w-full cursor-pointer items-center justify-center opacity-80 shadow-xs! transition-all duration-300 hover:opacity-100"
      @click="newItemSet(pocket.key)">
      <icon
        name="teenyicons:add-outline"
        class="size-6 opacity-40" />
    </Card>
  </VueDraggable>
</template>

<style scoped>
  .v-popper--shown {
    .i1 {
      opacity: 0;
    }

    .i2 {
      opacity: 0.8;
    }
  }

  .ghost {
    margin: 1rem;
    width: 96%;
    background: var(--b2);
    border-radius: 0.75rem;
  }
</style>
