<script setup lang="ts">
import { ref } from 'vue';
import { useSessionStore } from '../../stores/sessionStore';

const sn = useSessionStore();


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


</script>

<template>
  <div id="menu" class="!overflow-y-scroll mx-0.5" :class="{ 'minimize': isMinimized == true }" data-tauri-drag-region>


    <ul
      class="menu border-none  [&_svg]:size-4 space-y-3 text-xs [&_a]:flex [&_a]:gap-3 [&_a]:-ml-1 [&_a]:font-medium [&_ul]:before:opacity-20 [&_ul]:ml-5">

      <li class="flex h-6 mb-2 -ml-1 rounded-full group/name"
        :class="{ 'overflow-hidden  !aspect-square bg-neutral text-neutral-content/80 !size-9 ml-[2px] !mb-2 ': isMinimized == true }">
        <label :class="{ ' size-full ml-0 p-2': isMinimized == true }"
          class="flex items-center content-center justify-start gap-3 transition-all duration-700 !outline-transparent toggle-btn">
          <input type="checkbox" v-model="isMinimized" class="hidden" @change="handleChange" />

          <div class="relative -ml-0.5 size-4 " :class="{ 'hidden': isMinimized == true }">

            <icon icon="teenyicons:left-outline" class="absolute stroke-[1.5] mt-0.5 !size-3" />
          </div>

          <div class="relative size-full " :class="{ '*:size-full': isMinimized == true }">
            <h1 class="text-base font-semibold !duration-200 transition-translate"
              :class="{ '!font-light absolute -mt-[1px] ml-[5px] group-hover/name:opacity-0 group-hover/name:-translate-x-10': isMinimized == true }">
              {{ appName }}
            </h1>
            <icon icon="teenyicons:right-outline" :class="{ 'hidden': isMinimized == false }"
              class="absolute transition-translate !duration-200 translate-x-10 opacity-0 group-hover/name:opacity-100 group-hover/name:translate-x-0 mt-[2px] ml-1.5 " />
          </div>
        </label>

      </li>

      <!-----------------------------⟢ HOME  ⟣------------------------------>

      <li>
        <a @click="sn.navigateTo('/home')" class="tooltip tooltip-right" title="hello">
          <Icon icon="teenyicons:home-outline" />
          <span>Home</span>
        </a>
      </li>

      <!-----------------------------⟢ pockets ⟣------------------------------>

      <li id="pockets" @click="toggleShow(0)">
        <a :class="{ 'menu-dropdown-show': showDropdowns[0] }" class="pointer-events-auto menu-dropdown-toggle"
          @click="sn.navigateTo('/pockets/pockets')">

          <Icon icon="teenyicons:folders-outline" />
          <span class="grow">Pockets</span>

        </a>
        <ul :class="{ 'menu-dropdown-show': showDropdowns[0] }" class="menu-dropdown">
          <li>
            <a @click="sn.navigateTo('')"><span>Submenu 1</span></a>
          </li>
          <li>
            <a><span>Submenu 2</span></a>
          </li>
        </ul>
      </li>

      <!-----------------------------⟢ CALC ⟣------------------------------>

      <li>
        <a @click="sn.navigateTo('/hi')">
          <Icon icon="teenyicons:calculator-outline" />
          <span>Calculator</span>
        </a>
      </li>

      <!-----------------------------⟢ LIKES ⟣------------------------------>

      <li id="faves">
        <a @click="sn.navigateTo('/likes')">
          <Icon icon="teenyicons:heart-outline" />
          <span>Likes</span>
        </a>


      </li>

      <!-----------------------------⟢ BROWSE ⟣------------------------------>
      <VDropdown theme="detail" :triggers="['hover', 'click']" :popperTriggers="['hover', 'click']"
        :placement="'right-start'" distance="-12" :disabled="isMinimized == false" class="">
        <li id="browse">
          <a :class="{ 'menu-dropdown-show': showDropdowns[2] }" @click="toggleShow(2)"
            class="pl-3 menu-dropdown-toggle">
            <Icon icon="teenyicons:sd-card-outline" class="mr-1" />
            <span class="grow">Database</span>
          </a>



          <ul :class="{ 'menu-dropdown-show': showDropdowns[2] }" class="-ml-0 menu-dropdown">
            <li>
              <a @click="sn.navigateTo('/champions/champions')">
                <Icon icon="teenyicons:ghost-outline" /><span>Champions</span>
              </a>
            </li>
            <li>
              <a @click="sn.navigateTo('/items')">
                <i-ui-icons-witchHat class="!size-5  text-base-content" />

                <span>Items</span>
              </a>
            </li>
            <li>
              <a @click="sn.navigateTo('/runes/runes')"> <i-ui-icons-atom /><span>Runes</span> </a>
            </li>
          </ul>
        </li>

        <template #popper>
          <div class='w-full  font-medium opacity-80 px-3.5 pt-1.5 pb-1 border-b border-base-300 '> Database
          </div>
          <div id="popper"
            class="[&_button]:grid  [&_button]:grid-cols-[20px_auto] [&_button]:justify-start  [&_button]:gap-2 p-1.5 grid">
            <button @click="sn.navigateTo('/champions/champions')">
              <Icon icon="teenyicons:ghost-outline" class="size-4" /><span>Champions</span>

            </button>
            <button @click="sn.navigateTo('/items')">
              <i-ui-icons-witchHat class="!size-5 -ml-0.5 " />

              <span>Items</span>

            </button>
            <button @click="sn.navigateTo('/runes/runes')" class="justify-start"> <i-ui-icons-atom class="size-4" />
              <span>Runes</span>
            </button>

          </div>
        </template>

      </VDropdown>


      <li>
        <a class="">
          <Icon icon="teenyicons:at-outline" />
          <span>Account</span>
        </a>
      </li>
      <li>
        <a @click="sn.navigateTo('/about')">
          <Icon icon="teenyicons:info-outline" />
          <span>About</span>
        </a>
      </li>
      <li>
        <a @click="sn.navigateTo('/settings')">
          <Icon icon="teenyicons:cog-outline" />
          <span>Settings</span>
        </a>
      </li>

    </ul>
  </div>
</template>

<style scoped>
/* beautify ignore:start */

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

.minimize {
  @apply !max-w-[50px] w-[50px] transition-all duration-500 -ml-0.5;

  .toggle-btn {
    @apply -ml-1;
  }

  .menu {
    @apply w-[50px] transition-all duration-700 justify-center overflow-hidden;

    a {
      @apply flex size-[40px] p-0 m-0 justify-center place-items-center  rounded-md hover:!border-neutral/20 hover:!border hover:bg-transparent ;
      /*-----------------------------⟢    hover:!border-neutral/20 hover:!border hover:shadow-[1px_1px_3px_0px_#00000010] hover:shadow-[-1px_-1px_3px_0px_#00000010] hover:bg-transparent ⟣------------------------------*/ 

      svg {
        @apply size-4.5;
      }

      span {
        @apply opacity-0 w-0 hidden;
      }
    }




    #pockets,
    #faves,
    #browse {
      & a::after {
        @apply opacity-0 h-0 w-0 hidden;
      }
    }

  
    #browse a {
      @apply hover:cursor-default;
    }

    #browse {
      @apply place-content-center rounded-full transition-all duration-300 -mt-1 mb-2;


      svg {
        @apply ml-[1px];
      }



    }
  }

  li:not(:first-child) {
    @apply my-1 py-1;
  }
}</style>
