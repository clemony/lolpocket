<script setup lang="ts">
  const ps = usePocketStore();
  const props = defineProps<{
    pocket: pocket;
  }>();
  const pocket = ref(props.pocket);
  /* const start = ref(pocket.items[0].start[0])
const core = ref(pocket.items[0].core[0])
const final = ref(pocket.items[0].final[0]) */

  const DdItemset = defineAsyncComponent({
    loader: () => import('components/menu/dropdown/dd-itemset.vue'),
    delay: 200,
  });
  //console.log(pocket);

  const startIsOpen = ref(false);

  const cardWidth = ref();
  const cardHeight = ref();

  const card = ref(null);

  onMounted(async () => {
    await card.value;
    const { width } = useElementSize(card);
    cardWidth.value = width.value;

    const { height } = useElementSize(card);
    cardHeight.value = height.value;
  });
</script>

<template>
  <div
    class="max-h-inherit flex w-full flex-col gap-10"
    ref="card">
    <InfoCard
      title="Starter Items"
      description="Your early game items. What are you starting with or buying first back?"
      cardClass="max-h-inherit relative  pl-6 pt-3  pb-5  has-[aria-expanded=true]:invisible has-[aria-expanded=true]:opacity-0 transition-all duration-500"
      v-model:cardWidth="cardWidth"
      v-model:cardHeight="cardHeight">
      <Dialog>
        <Popover>
          <DialogTrigger aschild>
            <PopoverTrigger aschild>
              <Button
                variant="ghost"
                class="ring-b2 relative -ml-2.5 h-fit justify-start hover:bg-transparent hover:ring-1">
                <!--        <ItemsetModel
                                    :pocket="props.pocket"
                                    :model="start"
                                    @update:model="(set) => (start = set)" /> -->

                <span class="h-full w-8"></span>
                <icon
                  name="fluent-mdl2:scroll-up-down"
                  class="absolute right-4 size-4" />
              </Button>
            </PopoverTrigger>
          </DialogTrigger>

          <!-- <DdItemset
                        @update:model="
                            (model) => (pocket.items[0].start[0] = model)
                        "
                        v-model:model="start"
                        :sets="pocket.items[0].itemSets"
                        :cardWidth="cardWidth"
                        :cardHeight="cardHeight"
                        :pocket="pocket" /> -->
        </Popover>
      </Dialog>
    </InfoCard>

    <InfoCard
      title="Core Items"
      description="Your champion's core. What should you work towards first? "
      cardClass="max-h-inherit relative  pl-6 pt-3  pb-5  has-[aria-expanded=true]:invisible has-[aria-expanded=true]:opacity-0 transition-all duration-500"
      v-model:cardWidth="cardWidth"
      v-model:cardHeight="cardHeight">
      <Dialog>
        <Popover>
          <DialogTrigger>
            <PopoverTrigger>
              <Button
                variant="ghost"
                class="justify-core ring-b2 relative -ml-2.5 h-fit hover:bg-transparent hover:ring-1">
                <!--    <ItemsetModel
                                    :pocket="props.pocket"
                                    :model="core" /> -->

                <span class="h-full w-8"></span>
                <icon
                  name="fluent-mdl2:scroll-up-down"
                  class="absolute right-4 size-4" />
              </Button>
            </PopoverTrigger>
          </DialogTrigger>
          <!-- 
                    <DdItemset
                        @update:model="
                            (model) => (pocket.items[0].core[0] = model)
                        "
                        v-model:model="core"
                        :sets="pocket.items[0].itemSets"
                        :cardWidth="cardWidth"
                        :cardHeight="cardHeight"
                        :pocket="pocket" /> -->
        </Popover>
      </Dialog>
    </InfoCard>

    <InfoCard
      title="Final Build"
      description="The pinnacle. What's your game plan if you don't stomp the enemy team TOO quickly?  The first six items in a set are considered your final build. Other items can be used as alternates."
      cardClass="max-h-inherit relative  px-6 pt-3  pb-5 has-[aria-expanded=true]:invisible has-[aria-expanded=true]:opacity-0 transition-all duration-500"
      v-model:cardWidth="cardWidth"
      v-model:cardHeight="cardHeight">
      <Dialog>
        <Popover>
          <DialogTrigger>
            <PopoverTrigger>
              <Button
                variant="ghost"
                class="justify-final ring-b2 relative -ml-2.5 h-fit hover:bg-transparent hover:ring-1">
                <!--    <ItemsetModel
                                    :pocket="props.pocket"
                                    :model="final" /> -->

                <span class="h-full w-8"></span>
                <icon
                  name="fluent-mdl2:scroll-up-down"
                  class="absolute right-4 size-4" />
              </Button>
            </PopoverTrigger>
          </DialogTrigger>

          <!--    <DdItemset
                        @update:model="
                            (model) => (pocket.items[0].final[0] = model)
                        "
                        v-model:model="final"
                        :sets="pocket.items[0].itemSets"
                        :cardWidth="cardWidth"
                        :cardHeight="cardHeight"
                        :pocket="pocket" /> -->
        </Popover>
      </Dialog>
    </InfoCard>
  </div>
</template>

<style scoped></style>
