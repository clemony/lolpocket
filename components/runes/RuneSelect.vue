<script setup lang="ts">
  const ds = useDataStore();

  const props = defineProps<{
    pocketKey?: string;
    pathSet?: number;
    runeSet?: number;
    pocket?: pocket;
    selectedRune?: string;
    modelValue?: string;
  }>();

  //const pocket = ref(props.pocket)

  //const pathSet = ref(props.pathSet == 1 ? 'primary' : 'secondary')
  const paths = [...ds.paths];
  const selectedPath = ref(props.modelValue);

  const selectedPathData = computed(() => {
    return paths.find((path) => path.name === selectedPath.value);
  });
  const selectedRunes = ref(selectedPathData ? Array(selectedPathData.value.slots.length).fill(null) : []);

  watch(
    () => props.modelValue,
    (newVal) => {
      selectedPath.value = newVal;
      selectedRunes.value = [];
    }
  );

  const runeWatcher = [];
  function handleSelection(slotIndex, rune) {
    selectedRunes.value[slotIndex] = rune;
    console.log('💠 - pathSet:', props.pathSet);

    props.pathSet == 2 ? handleSecondaryRunes(slotIndex.toString()) : '';
  }

  function handleSecondaryRunes(slot) {
    const index = runeWatcher.findIndex((slotNum) => slotNum == slot);

    if (index > -1) {
      runeWatcher.splice(index, 1);
      runeWatcher.push(slot);
    } else {
      runeWatcher.push(slot);
    }
    //push()
    if (runeWatcher.length > 2) {
      selectedRunes.value[runeWatcher[0]] = null;
      runeWatcher.splice(0, 1);
    }
  }

  onMounted(() => {
    selectedPath.value = props.modelValue;
  });
</script>
<template>
  <div
    class="ease gradient border-b3 shadow-smooth relative size-full h-fit w-120 max-w-120 rounded-xl bg-clip-border transition-all duration-500"
    :data-path="selectedPath">
    <div class="from-b1/20 via-b1/90 to-b1 flex size-full flex-col justify-center gap-16 justify-self-center rounded-xl bg-linear-to-b via-25% py-12">
      <div
        v-for="(slot, i) in selectedPathData.slots"
        :key="i"
        class="animate-in animate-out fade-out fade-in flex h-16 justify-evenly gap-3 transition-all duration-500"
        :class="{
          'h-22 w-auto justify-between': slot === selectedPathData.slots[0],

          hidden: slot === selectedPathData.slots[0] && props.pathSet == 2,
        }">
        <label
          v-for="rune in slot.runes"
          :data-path="selectedPath"
          @click.right="useDrawer('RuneDrawer', null, null, null, rune)"
          :key="rune.id"
          class="h-full rounded-full opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          :class="{
            'scale-115 opacity-100 grayscale-0': selectedRunes[i] === rune,
            'shadow-pretty': slot != selectedPathData.slots[0] && selectedRunes[i] === rune,
            'scale-125': slot == selectedPathData.slots[0] && selectedRunes[i] === rune,
            'gradient shadow-standard border-2 border-transparent [&_img]:rounded-full [&_img]:inset-shadow-sm [&_img]:inset-shadow-black': slot != selectedPathData.slots[0],
            '[&_img]:drop-shadow-md': slot == selectedPathData.slots[0],
          }">
          <input
            type="radio"
            :name="`slot-${i}`"
            :value="rune"
            v-model="selectedRunes[i]"
            @change="handleSelection(i, rune)"
            class="absolute hidden" />
        <!--   <Tooltip
            :content="rune.name"
            name="ph:mouse-right-click-fill"
            no-wrap> -->
            <img
              :alt="rune.name"
              class="size-full" />
        
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
