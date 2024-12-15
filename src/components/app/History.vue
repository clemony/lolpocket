<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
import { useAccountStore } from '@stores/accountStore'
=======
<<<<<<<< HEAD:src/client/components/app/History.vue
import { useAccountStore } from '@stores/accountStore'
========
import { useGeneralStore } from '@stores/generalStore'
<<<<<<< HEAD
>>>>>>>> 4634f11e (update 8 files and delete 426 files):src/components/app/History.vue
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useAccountStore } from '@stores/accountStore'
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>>> 5132f0ce (update 8 files and delete 426 files):src/components/app/History.vue
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
import { useAccountStore } from '@stores/accountStore'
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
import { useParallax } from '@vueuse/core'
import { CSSProperties } from 'vue'

const as = useAccountStore()

const wrapper = ref(null)
const parallax = reactive(useParallax(wrapper))

const wrapperStyle: CSSProperties = {
    minHeight: '500px',
    transition: '.3s ease-out all',
}

const containerStyle: CSSProperties = {
    //margin: '3em auto',
    perspective: '700px',
}

const pageStyle = computed(() => ({
    transition: '.3s ease-out all',
    transform: `rotateX(${parallax.roll * 1}deg) rotateY(${
        parallax.tilt * 5
    }deg)`,
}))
</script>
<template>
    <!--      <MainMenubar :class="{ 'z-0!': state == 'open' }" class="menubar" />
    <SidebarProvider
        class="page bg-b1/95 relative size-full transition-all duration-1000"
        :class="
            cn({
                /*base */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<<< HEAD:src/client/components/app/History.vue
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
=======
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
=======
<<<<<<<< HEAD:src/client/components/app/History.vue
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
                'bg-b1 top-1/2 z-0': as.commandOpen,

                /* styling */
                'shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px,_2px_1px_0px_1px_rgba(221,_221,_221,_0.4),_0_2px_0px_rgba(204,_204,_204,_0.4)] after:absolute after:z-50 after:size-full after:bg-black/5':
                    as.commandOpen,
<<<<<<< HEAD
=======
========
                'bg-b1 top-1/2 z-0': gs.commandOpen,

                /* styling */
                'shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px,_2px_1px_0px_1px_rgba(221,_221,_221,_0.4),_0_2px_0px_rgba(204,_204,_204,_0.4)] after:absolute after:z-50 after:size-full after:bg-black/5':
                    gs.commandOpen,
<<<<<<< HEAD
>>>>>>>> 4634f11e (update 8 files and delete 426 files):src/components/app/History.vue
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                'bg-b1 top-1/2 z-0': as.commandOpen,

                /* styling */
                'shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px,_2px_1px_0px_1px_rgba(221,_221,_221,_0.4),_0_2px_0px_rgba(204,_204,_204,_0.4)] after:absolute after:z-50 after:size-full after:bg-black/5':
                    as.commandOpen,
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>>> 5132f0ce (update 8 files and delete 426 files):src/components/app/History.vue
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
                'bg-b1 top-1/2 z-0': as.commandOpen,

                /* styling */
                'shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px,_2px_1px_0px_1px_rgba(221,_221,_221,_0.4),_0_2px_0px_rgba(204,_204,_204,_0.4)] after:absolute after:z-50 after:size-full after:bg-black/5':
                    as.commandOpen,
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
            })
        ">   <main vaul-drawer-wrapper class="size-full p-0" :key="state">
          </main>
    <History></History> -->
    <div
        v-show="as.commandOpen"
        class="command margin-auto animate-in fade-in-100 slide-in-from-bottom z-100 mt-24 overflow-hidden rounded-lg delay-100">
        <Command />
    </div>
    <div
        ref="wrapper"
        :style="as.commandOpen ? wrapperStyle : ''"
        :class="{
            'absolute top-[38%] size-full items-end justify-center':
                as.commandOpen,
        }">
        <div
            :style="containerStyle"
            :class="{
                'inset-0 m-0 flex size-full flex-col items-center justify-center -space-y-[42%]':
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/app/History.vue
                    as.commandOpen,
========
=======
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/app/History.vue
                    as.commandOpen,
========
=======
>>>>>>> 12d6db59 (update 38 files and delete 54 files)
>>>>>>> 4634f11e (update 8 files and delete 426 files)
                    gs.commandOpen,
>>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/app/History.vue
=======
                    as.commandOpen,
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
=======
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)
<<<<<<<< HEAD:src/components/app/History.vue
                    as.commandOpen,
========
=======
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/app/History.vue
                    as.commandOpen,
========
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files)
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
                    gs.commandOpen,
>>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/app/History.vue
<<<<<<< HEAD
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
=======
                    as.commandOpen,
>>>>>>> c29d3eca (update 84 files and delete 4 files)
<<<<<<< HEAD
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
=======
=======
<<<<<<<< HEAD:src/components/app/History.vue
                    as.commandOpen,
========
                    gs.commandOpen,
>>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/app/History.vue
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)
            }">
            <template v-if="as.commandOpen">
                <div
                    v-for="(page, index) in as.routeHistory"
                    ref="page"
                    :style="pageStyle"
                    :class="
                        cn(
                            /*base */
                            'bg-b1 top-1/2 z-0 size-3/4 overflow-hidden rounded-2xl',

                            /* children */
                            '[&_nth-child(2)]:-top-10',

                            /* animation */
                            'animate-in animate-out zoom-out-[0.75] slide-in-from-bottom-1/2 slide-out-to-bottom-1/2 delay-200',

                            /* styling */
                            'shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px,_2px_1px_0px_1px_rgba(221,_221,_221,_0.4),_0_2px_0px_rgba(204,_204,_204,_0.4)] after:absolute after:z-50 after:size-full after:bg-black/5'
                        )
                    ">
                    <div class="flex h-18 items-center px-10">
                        <h1 class="capitalize">{{ page }}</h1>
                    </div>
                </div>
            </template>
            <label
                class="flex size-full justify-center"
                :class="{
                    absolute: as.commandOpen,
                }"
                :style="as.commandOpen ? pageStyle : ''">
                <input
                    type="checkbox"
                    v-model="as.commandOpen"
                    class="hidden"
                    name="history"
                    :disabled="!as.commandOpen ? true : false" />

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<<< HEAD:src/client/components/app/History.vue
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
=======
<<<<<<<< HEAD:src/client/components/app/History.vue
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
<<<<<<<< HEAD:src/client/components/app/History.vue
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)
<<<<<<<< HEAD:src/components/app/History.vue
                <slot />
========
                <SidebarProvider
                    class="page bg-b1/95 relative size-full transition-all duration-1000"
                    :class="
                        cn({
                            /*base */
                            'bg-b1 top-1/2 z-0': gs.commandOpen,

                            /* styling */
                            'shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px,_2px_1px_0px_1px_rgba(221,_221,_221,_0.4),_0_2px_0px_rgba(204,_204,_204,_0.4)] after:absolute after:z-50 after:size-full after:bg-black/5':
                                gs.commandOpen,
                        })
                    ">
                    <slot />
                </SidebarProvider>
>>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/app/History.vue
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
========
                <slot />
>>>>>>>> 4634f11e (update 8 files and delete 426 files):src/components/app/History.vue
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
=======
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)
=======
========
                <slot />
>>>>>>>> 5132f0ce (update 8 files and delete 426 files):src/components/app/History.vue
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)
            </label>
        </div>
    </div>
</template>
<style scoped></style>
