<script lang="ts" setup>
import { skinIndex } from "~~/shared/indexes";

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const emit = defineEmits(["dialog:close", "update:splash"]);

const champQuery = ref<string | null>("");
const selectedChampion = ref<string | null>(null);

const searchQuery = ref<string>("");
const { results: championResult } = useSimpleSearch(
  ix().champions, // array or ref
  searchQuery,
);

const result = computed(() => {
  const values = championResult?.value?.length
    ? championResult.value
    : ix().champions;
  return [...values].sort((a, b) => a.name.localeCompare(b.name));
});

function reset() {
  champQuery.value = "";
  selectedChampion.value = null;
}
</script>

<template>
  <ResponsiveDialog v-bind="$attrs">
    <ResponsiveDialogTrigger
      :class="
        cn(
          `
            group/icon pointer-events-auto relative z-0 grid aspect-square
            size-fit shrink-0 cursor-pointer place-items-center self-center
            rounded-full shadow-xs ring ring-transparent ring-offset-3
            ring-offset-transparent drop-shadow-sm transition-colors
            duration-300
            hover:ring-b4 hover:ring-offset-neutral
          `,
          className,
        )
      "
    >
      <slot />
    </ResponsiveDialogTrigger>
    <LazyResponsiveDialogContent
      class="h-164 w-250 min-w-250 overflow-hidden rounded-xl border-n3/70 p-0 shadow-xs shadow-b4/30 drop-shadow-md"
    >
      <HiddenDialogHeader
        title="Select a custom profile splash."
        desc="Personalize your profile with your favorite champion!"
      />
      <article
        class="grid size-full auto-rows-auto grid-cols-[1fr_6fr] overflow-hidden rounded-lg inset-shadow-shade-sm inset-shadow-black/40"
      >
        <header
          class="col-span-full row-start-1 flex h-14.5 items-center gap-2 border-b border-b-b3/60 bg-b4/40 pt-1 pr-3 pl-3"
        >
          <button
            v-tippy="{ content: 'Reset to Automatic', placement: 'top' }"
            class="btn grid btn-square place-items-center btn-ghost"
          >
            <icon name="refresh" class="absolute size-3.75 dst" />
          </button>

          <button
            v-tippy="{ content: 'Randomize', placement: 'top' }"
            class="btn grid btn-square place-items-center btn-ghost"
          >
            <icon name="shuffle" class="size-3.5 stroke-[1.5] dst" />
          </button>

          <Input v-model:model-value="searchQuery" class="-mt-px h-11">
            <icon name="search" />
          </Input>
          <Button
            v-tippy="{ content: 'Close', placement: 'top' }"
            variant="ghost"
            shape="square"
          >
            <icon name="x" class="absolute size-4 shrink-0 dst" />
          </Button>
        </header>

        <RadioGroup
          v-model:model-value="selectedChampion"
          :multiple="false"
          as="div"
          selection-behavior="replace"
          class="relative h-150 h-full max-h-150 w-60 overflow-y-auto border-r border-r-b3 bg-b2/30 p-1 transition-all duration-200"
        >
          <Label
            v-for="item in result"
            :key="item.key"
            variant="ghost"
            :class="
              cn('w-full overflow-hidden', {
                'btn-active': item.key === selectedChampion,
              })
            "
          >
            <ChampionIcon
              :id="item.id"
              for="item-key"
              :alt="item.name"
              class="size-10 rounded-lg bg-black **:text-white"
            />
            <span class="grow truncate text-start">
              {{ item.name }}
            </span>
            <RadioGroupItem name="item-key" :value="item.key">
              <icon name="right" />
            </RadioGroupItem>
          </Label>
        </RadioGroup>

        <transition-fade
          as="section"
          group
          class="col-start-2 size-full max-h-150 overflow-hidden inset-shadow-sm"
        >
          <transition-slide
            v-if="selectedChampion"
            group
            class="grid size-full h-inherit h-min max-h-150 w-full grid-cols-3 gap-6 overflow-y-auto p-8"
          >
            <LazySplashCard
              v-for="skin in skinIndex[selectedChampion]"
              :key="skin.name"
              :text="skin.name"
              :alt="skin.name"
              :skin-url="getSplash(selectedChampion, 'tile', skin)"
              @click="
                emit(
                  'update:splash',
                  getSplash(selectedChampion, 'centered', skin),
                )
              "
            />
          </transition-slide>

          <div v-else class="grid size-full place-items-end p-6">
            <Badge variant="neutral" class="font-medium **:text-2">
              Select or search a champion...
            </Badge>
          </div>
        </transition-fade>
      </article>
    </LazyResponsiveDialogContent>
  </ResponsiveDialog>
</template>
