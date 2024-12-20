<script setup lang="ts">
const icons = [
    'fontisto:vuejs',
    'tabler:brand-vite',
    'file-icons:typescript',
    'codicon:vscode-insiders',
    'simple-icons:nodedotjs',
    'simple-icons:tailwindcss',
    'simple-icons:iconify',
    'nonicons:prettier-16',
    'teenyicons:eslint-outline',
    'simple-icons:shadcnui',
]
</script>

<template>
    <div class="p-8 pt-20">
        <div
            class="mockup-code bg-neutral text-nc *:ws-nowrap w-2/5 min-w-[200px] rounded-xl leading-loose font-normal">
            <pre
                data-prefix="$"><code class="h-20 scale-x-110">const CatTax: cat&#60;image: popUp&#62; = {</code></pre>
            <pre data-prefix=">" class="flex">
                <code class="flex">&nbsp; 'Clem':&nbsp;{ image:
          <button
            class="hover:underline hover:bg-b3/15" >&nbsp;1</button>,

          <button class="hover:underline hover:bg-b3/15">&nbsp;2</button>,
          <button class="hover:underline hover:bg-b3/15"
          >&nbsp;3&nbsp;</button>
          },
      </code></pre>

            <pre
                data-prefix=">"
                class="flex items-center"><code class="flex">&nbsp; 'Nell':&nbsp;{ image:
        <button
          class="hover:underline hover:bg-b3/15" >&nbsp;1</button>,

        <button class="hover:underline hover:bg-b3/15">&nbsp;2</button >,
        <button class="hover:underline hover:bg-b3/15"
        >&nbsp;3&nbsp;</button>
        },
    </code></pre>

            <pre
                data-prefix=" "
                class="flex"><code class="flex">&nbsp; };<span class="animate-[blink-1_1s_infinite_both] text-4">|</span>
  </code></pre>
        </div>

        <div class="absolute bottom-0 left-0 w-full p-8">
            <div class="divider divider-start mt-12">MADE WITH</div>
            <div class="grid grid-cols-2">
                <div
                    class="card *:text-bc/85 plb3e-items-center grid h-20 auto-cols-max grid-flow-col gap-5 rounded-xl *:size-6">
                    <icon v-for="icon in icons" :icon="icon" />
                    <img
                        class="brightness-50 contrast-200 grayscale"
                        src="/img/ui/daisyui.svg" />

                    <icon
                        class="brightness-[80%] contrast-200 grayscale"
                        icon="logos:pinia" />
                </div>

                <div
                    class="items-top col-start-2 grid justify-items-end font-mono">
                    <p class="">thanks for trying the app</p>
                    <p class="inline-flex items-center gap-1">
                        <Icon icon="typcn:heart-outline" class="size-3" />
                        from
                        <Icon
                            icon="teenyicons:arrow-right-outline"
                            class="size-3" />
                        <span class="italic">clem's human</span>
                    </p>
                    <a
                        href="https://github.com/clemony/lolpocket"
                        class="mt-2 inline-flex items-center gap-1 underline transition-all duration-300 hover:font-bold hover:underline">
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
            <h3 class="text-4 font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" class="modal-bb3kdrop">
            <button>close</button>
        </form>
    </dialog>
</template>

<style scoped></style>
