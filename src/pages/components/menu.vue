<script setup lang="ts">
import { ref } from 'vue';
import { useSessionStore } from '../../stores/sessionStore';

const sn = useSessionStore();
const showDropdowns = ref([false, true, true]); // Track visibility for each dropdown (index-based)
const isMinimized = ref(false);
function toggleMinimize() {
  if (isMinimized.value == false) {
    isMinimized.value = true;
    sn.minimized = true;
  } else {
    isMinimized.value = false;
    sn.minimized = false;
  }
}

// Toggle visibility for the dropdown at a specific index
function toggleShow(index: number) {
  showDropdowns.value[index] = !showDropdowns.value[index];
}
</script>

<template>
  <div id="menu" class="!overflow-y-scroll mx-0.5">
    <div data-tauri-drag-region
      class="grid items-center content-center grid-cols-1 col-start-1 gap-4 ml-4 select-none justify-self-start self-base">
      <!-- <button id="logo" class="rounded-full size-5">
                <Icon icon="ci:house-02"
                    class="p-0.5 rotate-180  pt-[1px] rounded-full text-base-100 bg-neutral/90 size-5" />
            </button> -->

      <h1 class="text-base font-semibold">lolpocket</h1>

      <!--      <input type="checkbox" class="toggle toggle-xs rounded-[5px] bg-neutral opacity-80 ml-1" /> -->
    </div>

    <ul
      class="menu border-none mt-2 [&_svg]:size-4 space-y-3 text-xs [&_a]:flex [&_a]:gap-3 [&_a]:-ml-1 [&_a]:font-medium [&_ul]:before:opacity-20 [&_ul]:ml-5">
      <li>
        <a @click="sn.navigateTo('/home')" class="tooltip tooltip-right" title="hello">
          <Icon icon="teenyicons:home-outline" />
          <span>Home</span>
        </a>
      </li>
      <li id="builds">
        <span :class="{ 'menu-dropdown-show': showDropdowns[1] }" @click="toggleShow(0)" class="menu-dropdown-toggle">
          <a>
            <Icon icon="teenyicons:folders-outline" />
            <span>Pockets</span>
          </a>
        </span>
        <ul :class="{ 'menu-dropdown-show': showDropdowns[1] }" class="menu-dropdown">
          <li>
            <a @click="sn.navigateTo('/build')"><span>Submenu 1</span></a>
          </li>
          <li>
            <a><span>Submenu 2</span></a>
          </li>
        </ul>
      </li>
      <li>
        <a @click="sn.navigateTo('/hi')">
          <Icon icon="teenyicons:calculator-outline" />
          <span>Calculator</span>
        </a>
      </li>
      <li id="faves">
        <span class="">
          <a>
            <Icon icon="teenyicons:heart-outline" />
            <span>Favorites</span>
          </a>
        </span>
        <!--  <ul :class="{ 'menu-dropdown-show': showDropdowns[1] }" class="menu-dropdown">
          <li>
            <a @click="sn.navigateTo('Champions')">
              <Icon icon="teenyicons:ghost-outline" /><span>Champions</span>
            </a>
          </li>
          <li>
            <a @click="sn.navigateTo('/items')">
              <Icon icon="teenyicons:wand-outline" /><span>Items</span>
            </a>
          </li>
        </ul> -->
      </li>
      <li id="browse">
        <span :class="{ 'menu-dropdown-show': showDropdowns[2] }" @click="toggleShow(2)" class="menu-dropdown-toggle">
          <a>
            <Icon icon="teenyicons:sd-card-outline" />
            <span>Database</span>
          </a>
        </span>
        <ul :class="{ 'menu-dropdown-show': showDropdowns[2] }" class="menu-dropdown">
          <li>
            <a @click="sn.navigateTo('/champions/champions')">
              <Icon icon="teenyicons:ghost-outline" /><span>Champions</span>
            </a>
          </li>
          <li>
            <a @click="sn.navigateTo('/items')">
              <i-ui-icons-witchHat class="!size-5 -ml-1 text-base-content" />

              <span>Items</span>
            </a>
          </li>
          <li>
            <a @click="sn.navigateTo('/runes/runes')"> <i-ui-icons-atom /><span>Runes</span> </a>
          </li>
        </ul>
      </li>
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
  /* beautify ignore:end */

a::before,
a::after {
  @apply invisible;
}

.minimize {
  @apply !max-w-[60px] w-[60px] transition-all duration-500;

  #logo {
    @apply ml-[2px] p-0 scale-[1.4] mt-1 w-[35px];
  }

  #logo+h1 {
    @apply w-0 opacity-0 hidden;
  }

  a::before,
  a::after {
    @apply visible z-50 absolute;
  }

  .menu {
    @apply w-[60px] transition-all duration-700 justify-center;

    a,
    li span {
      @apply flex size-[35px] rounded-full p-0 m-0 justify-center place-items-center;

      svg {
        @apply size-5;
      }

      span {
        @apply opacity-0 w-0 hidden;
      }
    }

    #builds,
    #faves {
      ul {
        @apply hidden;
      }
    }

    #builds,
    #faves,
    #browse {
      & span::after {
        @apply opacity-0 h-0 w-0 hidden;
      }
    }

    #browse {
      @apply -ml-1.5 place-content-center rounded-full transition-all duration-300;

      span {
        @apply size-[30px];
      }

      ul {
        @apply h-0 ml-0 w-[30px] flex flex-col place-items-center rounded-full shadow-[inset_1px_1px_3px_1px_#00000010] ring-neutral/0 ring-1 ring-offset-1 ring-offset-neutral/15;
      }

      a svg {
        @apply size-4;
      }

      &:has(.menu-dropdown-show) {
        span {
          @apply bg-neutral/90 text-base-100/80 mb-1;
        }

        ul {
          @apply h-full my-2 px-0 py-1;

          &::before {
            @apply invisible opacity-0;
          }
        }
      }
    }
  }

  li {
    @apply my-1 py-1;
  }
}
</style>
