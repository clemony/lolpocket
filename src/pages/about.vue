<route lang="json">
{
    "name": "About",
    "meta": {
        "title": "About",
        "icon": "teenyicons:info-outline"
    }
}
</route>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
    <div class="p-8">
        <div
            class="mockup-code font-normal text-xs w-2/5 min-w-[200px0] leading-loose *:whitespace-nowrap">
            <pre
                data-prefix="$"><code class="h-20 ">const CatTax: cat&#60;image: popUp&#62; = {</code></pre>
            <pre
                data-prefix=">"
                class="flex"><code class="flex">&nbsp; 'Clem':&nbsp;{ image:
          <button
            class="hover:underline hover:bg-base-content/15"
            onclick="catModal.showModal()" >&nbsp;1</button>,

          <button class="hover:underline hover:bg-base-content/15"
            onclick="catModal.showModal()">&nbsp;2</button >,
          <button class="hover:underline hover:bg-base-content/15"
            onclick="catModal.showModal()"
          >&nbsp;3&nbsp;</button>
          },
      </code></pre>

            <pre
                data-prefix=">"
                class="flex"><code class="flex">&nbsp; 'Nell':&nbsp;{ image:
        <button
          class="hover:underline hover:bg-base-content/15"
          onclick="catModal.showModal()" >&nbsp;1</button>,

        <button class="hover:underline hover:bg-base-content/15"
          onclick="catModal.showModal()">&nbsp;2</button >,
        <button class="hover:underline hover:bg-base-content/15"
          onclick="catModal.showModal()"
        >&nbsp;3&nbsp;</button>
        },
    </code></pre>

            <pre
                data-prefix=" "
                class="flex"><code class="flex">&nbsp; };<span class="animate-[blink-1_1s_infinite_both] text-lg">|</span>
  </code></pre>
        </div>

        <div class="absolute bottom-0 left-0 w-full p-8">
            <div class="mt-12 text-xs divider divider-start">MADE WITH</div>
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
                    <img
                        class="grayscale contrast-200 brightness-50"
                        src="/img/ui/daisyui.svg" />

                    <icon
                        class="grayscale contrast-200 brightness-[80%]"
                        icon="logos:pinia" />

                        <icon icon="simple-icons:nounproject" />

                        <icon icon="simple-icons:iconify" />

                        <icon icon="nonicons:prettier-16" />

                        <icon icon="teenyicons:eslint-outline" />

                        <icon icon="simple-icons:shadcnui" />
                </div>

                <div
                    class="grid col-start-2 font-mono text-xs items-top justify-items-end">
                    <p class="">thanks for trying the app</p>
                    <p class="inline-flex items-center gap-1">
                        <Icon icon="typcn:heart-outline" class="size-3" />
                        from
                        <Icon
                            icon="teenyicons:arrow-right-outline"
                            class="size-3" />
                        clem's human
                    </p>
                    <a
                        href="https://github.com/clemony/lolpocket"
                        class="inline-flex items-center gap-1 mt-2 underline transition-all duration-300 hover:font-bold hover:italic">
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
