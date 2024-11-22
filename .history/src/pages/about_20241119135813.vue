<script setup lang="ts">
const icon = [
    'fontisto:vuejs',
    'tabler:brand-vite',
    'devicon-plain:tauri',
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
            class="mockup-code w-2/5 min-w-[200px0] font-normal leading-loose *:whitespace-nowrap">
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
            <div class="divider divider-start mt-12">MADE WITH</div>
            <div class="grid grid-cols-2">
                <div
                    class="card grid h-20 auto-cols-max grid-flow-col place-items-center gap-5 rounded-box *:size-6 *:text-base-content/85">
                    <img
                        class="brightness-50 contrast-200 grayscale"
                        src="/img/ui/daisyui.svg" />

                    <icon
                        class="brightness-[80%] contrast-200 grayscale"
                        icon="logos:pinia" />

                    <VTooltip
                        theme="tta"
                        :popperTriggers="['hover']"
                        class="arrow flex items-center">
                        <icon icon="simple-icons:nounproject" />
                        <template #popper>
                            <div
                                class="mb-1 w-full border-b border-b-neutral-500 pb-1">
                                <a
                                    href="https://thenounproject.com/"
                                    class="italic">
                                    @ thenounproject
                                </a>
                            </div>

                            <ul class="list-inside list-disc">
                                <li>
                                    <a
                                        href="https://thenounproject.com/creator/roseicon/">
                                        Puspitaningdyah
                                    </a>
                                </li>
                            </ul>
                        </template>
                    </VTooltip>
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
                        class="mt-2 inline-flex items-center gap-1 underline transition-all duration-300 hover:font-bold">
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

<style scoped>
a {
    @apply hover:underline;
}
</style>
