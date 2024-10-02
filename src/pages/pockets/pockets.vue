<route lang="json">{
  "name": "pockets",
  "alias": [
    "/pockets"
  ],
  "meta": {
    "title": "Pockets",
    "icon": "teenyicons:folders-outline"
  }
}</route>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { usePocketStore } from '../../stores/pocketStore';
import { ModalsContainer, useModal } from 'vue-final-modal'
import PocketForm from './pocketModal.vue'
import { useSessionStore } from '../../stores/sessionStore';
import { useRouter } from 'vue-router';
import { useChampStore } from '../../stores/champStore';
import { useItemStore } from '../../stores/itemStore';
import { useDataStore } from '../../stores/dataStore';

const router = useRouter();

const is = useItemStore();
const ss = useSessionStore();
const ps = usePocketStore();
const cs = useChampStore();
const ds = useDataStore();

const newPocketModal = useModal({
  component: PocketForm,
  attrs: {
    title: 'New Pocket',
    button: 'Create',
    onSubmit() {
      newPocketModal.close();
    },
  },
})

const selectedPocketKey = ref<number | null>(null);

const modalAttrs = reactive({
  title: 'Edit Pocket',
  button: 'Save',
  pocketKey: selectedPocketKey.value ?? undefined,
});

const editPocketModal = useModal({
  component: PocketForm,
  attrs: modalAttrs,
});

function openEditPocketModal(pocketKey: number) {
  selectedPocketKey.value = pocketKey; // Set the reactive pocketKey
  modalAttrs.pocketKey = pocketKey ?? undefined; // Update reactive attrs
  console.log(pocketKey);
  editPocketModal.open(); // Open the modal
}

const pocketID = ref();
function handleCheck() {
  setTimeout(() => { console.log('World!'); }, 2000)
};




function navigateToPocket(pocket) {
  console.log('Navigating to pocket:', pocket.key);
  console.log(router.getRoutes());

  router.push({
    name: 'pocket',
    params: {
      pocketKey: String(pocket.key) // Convert to string if it's a number
    }
  }).catch((err) => {
    console.error('Error navigating to pocket:', err);
  });
}


</script>
<template>

  <div class="grid w-full px-3 py-4">

    <div class="grid w-full gap-4 px-4 mb-4">
      <div class="flex items-center gap-3">
        <div class="flex items-center text-sm breadcrumbs grow">
          <ul class="">
            <li><a>Pockets</a></li>
            <li>All</li>
          </ul>
        </div>



        <div class="join">
          <button
            class="relative join-item btn btn-sm *:size-[21px] after:size-5 items-center flex justify-center  *:absolute *:transition-all *:duration-300"
            alt="Trash" title="Trash">
            <icon icon="iconoir:bin" class="" />
            <icon icon="iconoir:bin-full" class="opacity-0" />

          </button>

          <button class="join-item btn btn-sm" alt="Archive" title="Archive">
            <icon icon="fluent:archive-20-regular" class="size-6" />
          </button>
        </div>


        <button class="text-xs !font-bold btn btn-sm btn-neutral pr-4 mr-3" @click="() => newPocketModal.open()">
          <icon icon="teenyicons:folder-plus-outline" class="size-5 mr-0.5 pr-0.5 overflow-auto" />
          <span>
            New Pocket
          </span>
        </button>

      </div>
      <div class="flex items-center w-full">
        <h2 class="text-xl font-semibold tracking-tight grow ">
          Pockets
        </h2>
        <button @click="is.items.splice(0)"> clear</button>
        <button @click="is.items = ref([...ds.items])"> logr</button>

      </div>

    </div>




    <div
      class="grid  grid-cols-[30px_1.5fr_1.5fr_3fr_1fr_repeat(2,30px)]  gap-x-3  *:text-xs items-center mt-1 mx-3 py-1 border-b border-b-base-300 *:flex *:gap-1 [&_svg]:mt-0.5">
      <!-- head -->


      <div></div>
      <div class="font-semibold">Pocket
        <icon icon="teenyicons:down-small-solid" />
      </div>
      <div class="font-semibold">Champions
        <icon icon="teenyicons:down-small-solid" />
      </div>
      <div class="font-semibold">Items
        <icon icon="teenyicons:down-small-solid" />
      </div>
      <div class="font-semibold">Runes
        <icon icon="teenyicons:down-small-solid" />
      </div>

      <div class="w-10 font-semibold"></div>
      <div class="w-12">
        <input type="checkbox" class="checkbox checkbox-xs" />
      </div>
    </div>

    <div class="grid h-full grid-cols-1 py-2 border-b border-b-base-300">
      <div v-for="pocket in ps.pockets" :key="pocket.key"
        class=" even:bg-gradient-to-r rounded-md even:bg-base-200/60 grid grid-cols-[30px_1.5fr_1.5fr_3fr_1fr_repeat(2,30px)] gap-x-2  *:text-xs items-center mx-1 px-2 py-1">

        <!------------------------⟢ pin ⟣------------------------->
        <label
          class="  relative *:size-full p-2 flex items-center cursor-pointer hover:transition-all hover:duration-500 justify-center">
          <input type="checkbox" class="hidden peer" @change="handleCheck" :key="'check' + pocket.key"
            :v-model="pocket.key" />
          <icon icon="iconoir:pin" class="absolute peer-checked:opacity-0" />
          <icon icon="iconoir:pin-solid"
            class="absolute opacity-0 pinned peer-checked:opacity-100 peer-checked:animate-bounce peer-checked:duration-700  peer-checked:[cubic-bezier(0,1.08,.71,.97)]  peer-checked:repeat-[1.5] fill-mode-both " />

          <icon :class="{ 'visible': true }" :checked="pocket.key" icon="iconoir:pin-slash-solid"
            class="absolute invisible transition-all duration-300 delay-200 opacity-0 hover:peer-checked:opacity-100 unpin size-full animate-out spin-out-90" />
        </label>



        <!------------------------⟢ name ⟣------------------------->

        <div
          class="grid grid-cols-[40px_auto] items-center gap-3 p-2 cursor-pointer *:pointer-events-none rounded-lg group/name overflow-clip"
          @click="openEditPocketModal(pocket.key); console.log(pocket.key);">

          <div class="grid rounded-full place-items-center text-neutral-content size-10 bg-neutral">
            <icon :icon="pocket.icon" />
          </div>
          <div class="grid">
            <div class="grid text-sm font-bold text-left truncate group-hover/name:underline">{{
              pocket.name }}</div>
            <div class="truncate opacity-50">{{ pocket.description }}</div>
          </div>
        </div>

        <!------------------------⟢ champions ⟣------------------------->

        <div class="grid items-center w-full h-full cursor-pointer" @click="() => navigateToPocket(pocket)">
          <ChampionAvatars :pocketKey="pocket.key" :pocket="pocket" />
        </div>

        <!------------------------⟢ items ⟣------------------------->
        <div></div>

        <!------------------------⟢ runes ⟣------------------------->
        <div>Purple </div>




        <div class="w-10 ">
          <VDropdown theme="detail" placement="left-start" class="arrow ">

            <button class="relative flex items-center justify-center group/menu size-4">
              <icon icon='teenyicons:cog-outline' class="absolute opacity-50 i1 size-3 group-hover/menu:opacity-0" />
              <icon icon='teenyicons:cog-solid' class="absolute opacity-0 i2 size-3 group-hover/menu:opacity-80" />
            </button>

            <template #popper>
              <div
                class="relative items-center text-xs rounded-lg text-baseline shadow-[inset_1px_1px_10px_10px,_rgba(255,_255,_255,_0.9)] p-1 ">
                <div class="grid items-center gap-1 flex-nowrap">

                  <button
                    class="flex items-center gap-3   !justify-start  px-3 btn btn-xs text-xs btn-ghost hover:bg-base-200"
                    alt="Clear Items" @click="">
                    <icon icon='ph:eraser' class="-ml-1 size-4" />
                    <span>Clear Items</span>
                  </button>
                  <div class="border-b border-base-200"></div>
                  <button
                    class="relative flex !justify-start items-center gap-3  px-3  btn btn-xs text-xs btn-ghost group/trash disabled:bg-transparent  disabled:cursor-not-allowed  hover:bg-base-200"
                    alt="Delete Set" @click="ps.deletePocket(pocket.key)" :disabled="ps.pockets.length == 1">
                    <icon icon='iconoir:bin-full' class="object-center -ml-1 group-disabled/trash:opacity-0 size-4" />
                    <icon icon="iconoir:bin" class="absolute -ml-1 opacity-0 group-disabled/trash:opacity-60 size-4" />
                    <span> Delete Set</span>
                  </button>
                </div>
              </div>
            </template>

          </VDropdown>
        </div>

        <div class="h-full flex items-center content-center !self-center w-12  gap-2">
          <input type="checkbox" class="checkbox checkbox-xs" />

        </div>

      </div>

    </div>


  </div>

  <div class="grid w-full place-items-center">
    <div class=" *:text-xs  join join-horizontal">
      <button class="join-item btn btn-sm">«</button>
      <button class="join-item btn btn-sm">Page 1</button>
      <button class="join-item btn btn-sm">»</button>
    </div>
  </div>
</template>
