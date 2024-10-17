<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useSessionStore } from '../../stores/sessionStore';
import { usePocketStore } from '../../stores/pocketStore';
import { useItemStore } from '../../stores/itemStore';
import { useRuneStore } from '../../stores/runeStore';
import { useChampStore } from '../../stores/champStore';

const sn = useSessionStore();

const cs = useChampStore();
const ps = usePocketStore();

const props = defineProps<{
  isMinimized: boolean;
}>();

const isMinimized = ref(props.isMinimized);
const appName = ref('lolpocket');

const emit = defineEmits(['update:isMinimized']);


const showDropdowns = ref([true, true, true]);

function toggleShow(index: number) {
  if (isMinimized.value == false) {
    showDropdowns.value[index] = !showDropdowns.value[index];
  }
}

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement | null;
  if (target) {
    emit('update:isMinimized', target.checked);
  }

  if (isMinimized.value == true) {
    showDropdowns.value = [false, false, false];
    appName.value = "LP";
  } else {
    showDropdowns.value = [true, true, true]
    appName.value = "lolpocket";
  }
}

onMounted(() => {

  const sn = useSessionStore();
  if (sn.openTabs.length == 0) {
    sn.navigateTo('/');
  }
});


watch(() => cs.likedChamps, (newVal) => {
  console.log('likedChamps changed:', newVal);
}, { immediate: true });
</script>

<template>
  <div id="menu" class="w-full h-full " :class="{ 'minimize': isMinimized == true }" data-tauri-drag-region>


    <div
      class="menu border-none flex w-full  flex-col h-inherit  flex-nowrap gap-1 py-2 pl-2 pr-1 [&_svg]:size-4 text-xs font-medium [&_ul]:before:opacity-20 *:w-full">

      <div class="flex rounded-full group/name"
        :class="{ 'overflow-hidden  !aspect-square bg-neutral text-neutral-content/80 !size-9 ml-[2px] !mb-2 ': isMinimized == true }">

        <label :class="{ ' size-full ml-0 p-2': isMinimized == true }"
          class="flex items-center w-[97%] transition-all duration-700 toggle-btn">

          <input type="checkbox" v-model="isMinimized" class="hidden" @change="handleChange" />





          <div class="relative flex items-center justify-center w-full gap-3 group"
            :class="{ '*:size-full': isMinimized == true }">
            <h1 class="text-base text-start align-end font-semibold !duration-200 transition-translate grow"
              :class="{ '!font-light absolute left-[5px] -top-[10px] text-[currentColor] invert  group-hover/name:opacity-0 group-hover/name:-translate-x-10': isMinimized == true }">
              {{ appName }}
            </h1>
            <icon icon="teenyicons:send-left-outline"
              class="group-hover:opacity-100 transition-all duration-300 !size-4 opacity-30"
              :class="{ 'hidden': isMinimized == true }" />

            <icon icon="teenyicons:send-right-outline" :class="{ 'hidden': isMinimized == false }"
              class="absolute text-[currentColor] invert transition-translate !duration-200 translate-x-10 opacity-0 group-hover/name:opacity-100 group-hover/name:translate-x-0 left-[8px] -top-[7px] " />
          </div>
        </label>

      </div>

      <!-----------------------------⟢ HOME  ⟣------------------------------>

      <button @click="sn.navigateTo('/home')" class="">
        <Icon icon="teenyicons:home-outline" />
        <span>Home</span>

      </button>

      <!-----------------------------⟢ pockets ⟣------------------------------>

      <button :class="{ 'menu-dropdown-show': showDropdowns[0] }" class=" menu-dropdown-toggle"
        @click="sn.navigateTo('/pockets/pockets')">

        <Icon icon="teenyicons:folders-outline" />
        <span>Pockets</span>
        <span class='grow'></span>

        <div v-if="ps.pockets.length > 0" class="flex gap-2 badge badge-sm badge-primary  px-1.5 opacity-80 ">{{
          ps.pockets.length }}
        </div>

        <button @click.stop="toggleShow(0)"
          class="btn btn-toggle grid !content-center !btn-xs !h-6 !w-6  absolute !p-1.5 right-11">
          <icon v-if="showDropdowns[0] == false" icon="teenyicons:down-outline" class="stroke-2 " />
          <icon v-if="showDropdowns[0] == true" icon="teenyicons:up-outline" class="stroke-2 mt-[2px]" />
        </button>
      </button>


      <div id="pockets" class="-mt-1 overflow-y-scroll pointer-events-auto scrollbar-hide max-h-inherit">

        <ul class="overflow-y-scroll max-h-inherit">
          <li class=''>


            <ul :class="{ 'menu-dropdown-show': showDropdowns[0] }"
              class="flex overflow-y-scroll max-h-inherit menu-dropdown auto-rows-min">

              <li v-for="pocket in ps.pinnedTopRowData">
                <button class="flex flex-row items-center whitespace-nowrap text-nowrap flex-nowrap">
                  <icon :icon="pocket.icon" />
                  <span class='text-start truncate grow max-w-[65%]'>{{ pocket.name }}</span>

                  <icon icon="iconoir:pin-solid" class="!size-3.5 absolute right-3" />
                </button>
              </li>

              <li v-for="pocket in ps.rowData">
                <button>
                  <icon :icon="pocket.icon" />
                  {{ pocket.name }}
                </button>
              </li>
            </ul>



          </li>

        </ul>
      </div>

      <!------------------------⟢ trash ⟣------------------------->
      <ContextMenu>
        <ContextMenuTrigger>
          <button @click="sn.navigateTo('/pockets/trash')" class="w-full">
            <div class='grid size-4 overflow-clip place-items-center' :class="{ 'size-5': isMinimized == true }">
              <icon icon="iconoir:bin-full" class="!size-4.5 -ml-[1px] -mt-[1px]"
                :class="{ 'scale-110 mt-0 ml-0': isMinimized == true }" />
            </div>
            <span>Trash</span>
            <span class='grow'></span>
            <div v-if="ps.trashPockets.length > 0" class="px-1.5 badge badge-secondary badge-sm opacity-80">
              {{
                ps.trashPockets.length }}</div>
          </button>
        </ContextMenuTrigger>
        <ContextMenuContent class="!w-36 !min-w-36">
          <ContextMenuItem @click="sn.navigateTo('/pockets/trash')">
            <icon icon="teenyicons:arrow-right-outline" class="!size-4" />
            Go To Trash
          </ContextMenuItem>
          <ContextMenuSeparator class="w-full" />
          <ContextMenuItem @click="ps.trashPockets.length = 0">
            <icon icon="iconoir:bin" class="!size-4" />
            Empty Trash
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <!------------------------⟢ archive ⟣------------------------->

      <button @click="sn.navigateTo('/pockets/archive')">
        <div class='grid size-4 overflow-clip place-items-center' :class="{ 'size-5': isMinimized == true }">
          <icon icon="fluent:archive-20-regular" class="!size-5 -ml-0.5 -mt-0.5"
            :class="{ 'scale-110 mt-0 ml-0': isMinimized == true }" />
        </div>
        <span>Archive</span>
        <span class='grow'></span>
        <div v-if="ps.archivePockets && ps.archivePockets.length > 0"
          class="px-1.5 badge badge-sm badge-accent opacity-80 ">
          {{
            ps.archivePockets.length }}</div>
      </button>

      <!-----------------------------⟢ CALC ⟣------------------------------>

      <button @click="sn.navigateTo('/calculator/calculator')">
        <Icon icon="teenyicons:calculator-outline" />
        <span>Calculator</span>

      </button>

      <!-----------------------------⟢ LIKES ⟣------------------------------>

      <button @click="sn.navigateTo('/likes')">
        <Icon icon="teenyicons:heart-outline" />
        <span>Likes</span>
      </button>

      <!-----------------------------⟢ database ⟣------------------------------>


      <div>
        <button :class="{ 'menu-dropdown-show': showDropdowns[2] }" class="w-full pl-3 menu-dropdown-toggle"
          @click.stop="toggleShow(2)">
          <Icon icon="teenyicons:sd-card-outline" class="" />
          <span> Database</span>
          <span class="grow"></span>
          <button
            class="btn grid hover:!bg-transparent !content-center !btn-xs !h-6 !w-6  absolute !p-1.5 right-1 btn-toggle">
            <icon v-if="showDropdowns[2] == false" icon="teenyicons:down-outline" class="stroke-2 " />
            <icon v-if="showDropdowns[2] == true" icon="teenyicons:up-outline" class="stroke-2 mt-[2px]" />
          </button>
        </button>

        <ul :class="{ 'menu-dropdown-show': showDropdowns[2] }" class="ml-4 menu-dropdown">

          <li>
            <button @click="sn.navigateTo('/champions/champions')">
              <Icon icon="teenyicons:ghost-outline" />
              <span> Champions</span>
            </button>
          </li>

          <li>
            <button @click="sn.navigateTo('/items')">
              <i-ui-icons-witchHat class="!size-5  text-base-content" />
              <span> Items</span>
            </button>
          </li>

          <li>
            <button @click="sn.navigateTo('/runes/runes')">
              <i-ui-icons-atom />
              <span>Runes</span>
            </button>
          </li>

        </ul>

      </div>

      <button>
        <icon icon="teenyicons:at-outline" />
        <span>Account</span>
      </button>

      <button @click="sn.navigateTo('/about')">
        <Icon icon="teenyicons:info-outline" />
        <span>Info</span>
      </button>


      <button @click="sn.navigateTo('/settings')">
        <Icon icon="teenyicons:cog-outline" />
        <span>Settings</span>
      </button>

    </div>
  </div>

</template>

<style scoped>
/* beautify ignore:start */

.context-menu {
  @apply !w-32 !min-w-32;
}
.menu-dropdown-toggle::after {
  @apply hidden;
}
button,
label:not(.minimize .toggle-btn) {
  @apply btn btn-ghost btn-sm justify-start gap-3 text-xs !font-medium hover:bg-neutral/5 pr-2;
}

.v-popper--shown a {
  @apply !border-neutral/20 !border bg-transparent;
}

  .menu-dropdown {
    @apply block h-0 invisible transition-height;

    li {
      @apply opacity-0 h-0 transition-[opacity_200,_height_300] ease-in;
    }

    &.menu-dropdown-show {
      @apply h-full visible;

      li {
        @apply opacity-100 h-8;
      }
    }
  }

#popper button {
  @apply pl-2 py-1.5 pr-5 rounded-btn items-center;
  &:hover {
  @apply bg-base-200 cursor-pointer ;
}
}

/*------------------------⟢ minimize ⟣-------------------------*/ 


.minimize {
  @apply !max-w-[50px] w-[50px] transition-all duration-500 -ml-0.5;

  .toggle-btn {
    @apply -ml-1;
  }

  .menu {
    @apply w-[50px] transition-all duration-700 justify-start overflow-hidden gap-2;

    button {
      @apply flex size-[40px] p-0 m-0 justify-center place-items-center  rounded-md hover:!border-neutral/20 hover:!border hover:bg-transparent ;


      svg {
        @apply size-4.5;
      }

      span,
      .badge,
      .btn-toggle  {
        @apply opacity-0 w-0 hidden;
      }
    }




  }
}</style>
