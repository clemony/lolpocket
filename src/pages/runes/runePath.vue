<script setup lang="ts">
import { useRuneStore } from '../../stores/runeStore';
const rs = useRuneStore();

const props = defineProps<{
  data: any[];
  index?: PropertyKey;
  selectIdentifier: string;
}>();
</script>
<template>
  <div class="z-0 w-full transition-all duration-500 bg-clip-border">
    <div
      class="flex h-16 items-end [&_img]:h-[1.5rem] z-10 relative after:absolute after:w-full after:h-16 after:top-0 after:left-0 after:rounded-t-box">
      <label v-if="data" v-for="(path, index) in data" :key="index"
        class="flex grow overflow-hidden py-1 items-center border-b-transparent border-b-0 border-base-100 bg-clip-padding transition-all duration-500 has-[:checked]:-translate-y-2.5 justify-center z-30 disabled:hidden has-[:disabled]:size-0 has-[:disabled]:opacity-0 cursor-pointer"
        :ref="path">
        <input class="hidden peer" type="radio" v-model="rs.selectedPaths[props.selectIdentifier]"
          :name="props.selectIdentifier" :aria-label="path" :value="path"
          :disabled="(props.selectIdentifier === 'pathselect2' && rs.selectedPaths.pathselect1 === path) || path == 'none'"
          @change="
            rs.setPath(props.selectIdentifier, rs.selectedPaths[props.selectIdentifier]);
          console.log('sets: ', rs.runeSets);
          " />

        <div
          class="flex items-center justify-center mx-2 grayscale brightness-75 peer-checked:brightness-100 peer-checked:grayscale-0 hover:brightness-100 drop-shadow-sm hover:grayscale-0 size-10 aspect-square">
          <img :src="'/img/runes/' + path + '.webp' || '/img/ui/RunesIcon.svg'" class="drop-shadow-softest" />
        </div>
        <div
          class="capitalize opacity-0 w-0 peer-checked:w-32 peer-checked:opacity-100 transition-all duration-500 font-light mt-1.5 text-lg">
          {{ path }}
        </div>
      </label>
    </div>
  </div>
</template>

<style scoped>
.gradient {
  background: linear-gradient(90deg, rgba(227, 195, 85, 1) 0%, rgba(215, 95, 95, 1) 25%, rgba(159, 139, 209, 1) 50%, rgba(144, 182, 137, 1) 75%, rgba(153, 215, 225, 1) 100%);
}

.border-gradient {
  border-image: linear-gradient(to right, oklch(var(--b1)), rgba(0, 0, 0, 0), oklch(var(--b1))) 2;
}
</style>
