<route lang="json">{
  "name": "About",
  "meta": {
    "title": "About",
    "icon": "teenyicons:info-outline"
  }
}</route>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="p-8">
    <div class="card text-xs rounded-box grid grid-cols-2 h-20 leading-loose *:font-mono">
      <code
        class="col-start-1 grid grid-cols-1 [&_p]:[&_button]: bg-neutral text-neutral-content rounded-box max-w-96 p-6 shadow-warm">
      <p>const CatTax: cat&#60;image: popUp&#62; = {</p>
      <p>
        &nbsp; 'Clem': { image:
        <button
          class="hover:underline hover:bg-base-content/15"
          onclick="catModal.showModal()"
        >
          1</button
        >,
        <button
          class="hover:underline hover:bg-base-content/15"
          onclick="catModal.showModal()"
        >
          2</button
        >,
        <button
          class="hover:underline hover:bg-base-content/15"
          onclick="catModal.showModal()"
        >
          3
        </button>
        },
      </p>
      <p>
        &nbsp; 'Nell': { image:
        <button
          class="hover:underline hover:bg-base-content/15"
          onclick="catModal.showModal()"
        >
          1</button
        >,
        <button
          class="hover:underline hover:bg-base-content/15"
          onclick="catModal.showModal()"
        >
          2
        </button>
        }
      </p>
      <p>};<span class="animate-[blink-1_1s_infinite_both] text-lg">|</span></p>
    </code>
    </div>

    <div class="absolute bottom-0 left-0 p-8 w-full">
      <div class="divider divider-start mt-12 text-xs">MADE WITH</div>
      <div class="grid grid-cols-2">
        <div
          class="card rounded-box grid h-20 auto-cols-max gap-5 grid-flow-col place-items-center *:text-base-content/85 *:size-6">
          <Icon icon="fontisto:vuejs" />

          <Icon icon="tabler:brand-vite" />
          <Icon icon="devicon-plain:tauri" />
          <Icon icon="file-icons:typescript" />
          <Icon icon="codicon:vscode-insiders" />
          <Icon icon="simple-icons:nodedotjs" />
          <Icon icon="simple-icons:tailwindcss" />
          <img class="grayscale contrast-200 brightness-50" src="/img/ui/daisyui.svg" />
        </div>

        <div class="grid col-start-2 items-top text-xs font-mono justify-items-end">
          <p class="">thanks for trying the app</p>
          <p class="inline-flex gap-1 items-center">
            <Icon icon="typcn:heart-outline" class="size-3" />
            from
            <Icon icon="teenyicons:arrow-right-outline" class="size-3" />
            clem's human
          </p>
          <a href="https://github.com/clemony/lolpocket"
            class="inline-flex gap-1 hover:font-bold hover:italic transition-all duration-300 underline items-center mt-2">
            <Icon icon="ph:github-logo" />
            <Icon icon="ph:at" />
            clemony
          </a>
        </div>
      </div>
    </div>

  </div>
  <!-- Open the modal using ID.showModal() method -->

  <dialog id="catModal" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click outside to close</p>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
