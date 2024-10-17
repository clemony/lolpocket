<script setup lang="ts">
import { ref } from 'vue';


const show = ref(false)

function confirm() {
    show.value = false
}
</script>

<template>



    <!--       <button class="btn btn-sm self-center relative *>:transition-all *>:duration-300"
        :class="{ 'group/load': isClicked, active: isActive }" alt="Create export for League Client"
        title="Create export for League Client" @click="handleExport()">
        <Icon icon="teenyicons:upload-outline" alt="Export" class="group-even/load:opacity-0" />
        <icon icon="eos-icons:three-dots-loading"
          class="opacity-0 left-1.5 absolute group-even/load:opacity-100 size-5 delay-150 drop-shadow-md" />
        <span class="text-xs font-normal">Export</span>
      </button>

      <dialog id="my_modal_2" class="modal">
        <div class="m-auto modal-box">
          <h3 class="text-lg font-bold">Hello!</h3>
          <p class="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog> -->

</template>
