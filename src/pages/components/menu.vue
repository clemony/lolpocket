<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useSessionStore } from '../../stores/sessionStore';
import { usePocketStore } from '../../stores/pocketStore';
import { useItemStore } from '../../stores/itemStore';
import { useRuneStore } from '../../stores/runeStore';
import { useChampStore } from '../../stores/champStore';
import { useGeneralStore } from '../../stores/generalStore';

const sn = useSessionStore();
const gs = useGeneralStore();
const cs = useChampStore();
const ps = usePocketStore();



const showDropdowns = computed(() => {
  if (gs.isMinimized == true) {
    return [false, false, false];
  } else {
    return [true, true, true];
  }
});

function toggleShow(index: number) {
  if (gs.isMinimized == false) {
    showDropdowns.value[index] = !showDropdowns.value[index];
  }
}

function handleChange() {

  if (gs.isMinimized == true) {
    gs.firstPane = 3;
    gs.secondPane = 97;
  } else {
    gs.firstPane = 16;
    gs.secondPane = 84;
  }
}



watch(() => cs.likedChamps, (newVal) => {
  console.log('likedChamps changed:', newVal);
}, { immediate: true });
</script>

<template>
  <div id="menu" class="w-full h-full " :class="{ 'minimize': gs.isMinimized == true }" data-tauri-drag-region>


    <div
      class="menu border-none flex w-full  flex-col h-inherit  flex-nowrap gap-1 py-2 pl-2 pr-1 [&_svg]:size-4 text-xs font-medium [&_ul]:before:opacity-20 *:w-full">

      <div class="z-0 flex rounded-full cursor-pointer group/name"
        :class="{ 'overflow-hidden  !aspect-square bg-neutral text-neutral-content/80 !size-9 ml-[2px] !mb-2 ': gs.isMinimized == true }">

        <label :class="{ ' size-full ml-0 p-2': gs.isMinimized == true }"
          class="flex items-center w-[97%] transition-all duration-700 cursor-pointer toggle-btn">

          <input type="checkbox" v-model="gs.isMinimized" class="hidden" @change="handleChange" />





          <div class="relative z-20 flex items-center justify-start gap-3 size-full group">

            <h1 v-if="gs.isMinimized == true"
              class=" font-light !duration-200 transition-translate text-neutral-content size-full  group-hover/name:opacity-0 group-hover/name:-translate-x-10">
            </h1>

            <h1 v-else class="text-base font-semibold text-start grow">
              lolpocket
            </h1>




            <icon icon="teenyicons:send-right-outline" v-if="gs.isMinimized == true"
              class="transition-translate text-neutral-content !size-4 !duration-200 translate-x-10 opacity-0 group-hover/name:opacity-100 group-hover/name:translate-x-0 left-[8px]  " />

            <icon v-else icon="teenyicons:send-left-outline"
              class="group-hover:opacity-100 transition-all duration-300 !size-4 opacity-30" />

          </div>
        </label>

      </div>

      <!-----------------------------⟢ HOME  ⟣------------------------------>

      <button @click="sn.navigateTo('/home')" class="!cursor-pointer">
        <Icon icon="teenyicons:home-outline" />
        <span>Home</span>

      </button>

      <!-----------------------------⟢ pockets ⟣------------------------------>

      <button :class="{ 'menu-dropdown-show': showDropdowns[0] }" class="!cursor-pointer  menu-dropdown-toggle"
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

              <li v-for="pocket in ps.pinnedTopRowData" @click="sn.navigateTo('/pocket/pocket.key')">
                <button class="flex flex-row items-center whitespace-nowrap text-nowrap flex-nowrap">
                  <icon :icon="pocket.icon" />
                  <span class='text-start truncate grow max-w-[65%]'>{{ pocket.name }}</span>

                  <icon icon="iconoir:pin-solid" class="!size-3.5 absolute right-3" />
                </button>
              </li>

              <li v-for="pocket in ps.rowData" @click="sn.navigateTo(`/pocket/${pocket.key}/`)">
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
            <div class='grid size-4 overflow-clip place-items-center' :class="{ 'size-5': gs.isMinimized == true }">
              <icon icon="iconoir:bin-full" class="!size-4.5 -ml-[1px] -mt-[1px]"
                :class="{ 'scale-110 mt-0 ml-0': gs.isMinimized == true }" />
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
        <div class='grid size-4 overflow-clip place-items-center' :class="{ 'size-5': gs.isMinimized == true }">
          <icon icon="fluent:archive-20-regular" class="!size-5 -ml-0.5 -mt-0.5"
            :class="{ 'scale-110 mt-0 ml-0': gs.isMinimized == true }" />
        </div>
        <span>Archive</span>
        <span class='grow'></span>
        <!--         <div v-if="ps.archivePockets && ps.archivePockets.length > 0"
          class="px-1.5 badge badge-sm badge-accent opacity-80 ">
          {{
            ps.archivePockets.length }}</div> -->
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
            class="btn grid hover:!bg-transparent !content-center !btn-xs !h-6 !w-6  absolute !p-1.5 right-2 btn-toggle">
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

:root{
  *{
    @apply flex-nowrap truncate;
  }
}
.context-menu {
  @apply !w-32 !min-w-32;
}
.menu-dropdown-toggle::after {
  @apply hidden;
}
button,
label:not(.minimize .toggle-btn) {
  @apply btn btn-ghost btn-sm justify-start gap-3 text-xs !font-medium cursor-pointer hover:bg-neutral/5 pr-2 flex-nowrap;
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
