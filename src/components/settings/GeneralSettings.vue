<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
import { useAccountStore } from '@stores/accountStore'

const as = useAccountStore()
const motion = ref()
const sidebar = ref(as.defaultSidebarState)
=======
import { useGeneralStore } from '@/stores/generalStore'
<<<<<<< HEAD
=======
import { useAccountStore } from '@stores/accountStore'
>>>>>>> 404a531d (update 84 files and delete 4 files)

const as = useAccountStore()
const motion = ref()
<<<<<<< HEAD
const sidebar = ref(gs.defaultSidebarState)
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
const sidebar = ref(as.defaultSidebarState)
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======

const gs = useGeneralStore()
const motion = ref()
const sidebar = ref(gs.defaultSidebarState)
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
const toggleSetting = (model) => {
    useToggle(model)
}

const settingsData = {
    general: [
        {
            title: 'Reduce Motion',
            description: 'Reduce the wobblies.',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
            model: as.reducedMotion,
            text: as.reducedMotion == false ? 'Wigglies On' : 'Less Wobblies',
=======
            model: gs.reducedMotion,
            text: gs.reducedMotion == false ? 'Wigglies On' : 'Less Wobblies',
<<<<<<< HEAD
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
            model: as.reducedMotion,
            text: as.reducedMotion == false ? 'Wigglies On' : 'Less Wobblies',
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
        },
        {
            title: 'Suppress Pocket Preview',
            description:
                'The little pocket that slides down in the sidebar and is annoying sometimes.',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
            model: as.pocketPreview,
            text:
                as.pocketPreview == false ?
=======
            model: gs.pocketPreview,
            text:
                gs.pocketPreview == false ?
<<<<<<< HEAD
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
            model: as.pocketPreview,
            text:
                as.pocketPreview == false ?
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
                    'Previews Visible'
                :   'Previews Hidden',
        },
        {
            title: 'Colorblind Mode',
            description: 'Changes many of the green shades to blue.',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
            model: as.colorBlindMode,
            text:
                as.colorBlindMode == false ? 'Colorblind Off' : 'Colorblind On',
=======
            model: gs.colorBlindMode,
            text:
                gs.colorBlindMode == false ? 'Colorblind Off' : 'Colorblind On',
<<<<<<< HEAD
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
            model: as.colorBlindMode,
            text:
                as.colorBlindMode == false ? 'Colorblind Off' : 'Colorblind On',
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
        },
        {
            title: 'Sidebar Default State',
            description:
                'Upon login, should your sidebar be expanded or collapsed?.',
            model: sidebar.value,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            text: as.defaultSidebarState == false ? 'Collapsed' : 'Expanded',
=======
            text: gs.defaultSidebarState == false ? 'Collapsed' : 'Expanded',
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
            text: as.defaultSidebarState == false ? 'Collapsed' : 'Expanded',
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
            text: as.defaultSidebarState == false ? 'Collapsed' : 'Expanded',
=======
            text: gs.defaultSidebarState == false ? 'Collapsed' : 'Expanded',
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
        },
    ],
}
</script>
<template>
    <main class="w-full">
        <LayoutSpacer class="col-span-full h-40!" />
        <div class="grid w-full grid-cols-3 gap-6 px-2 *:size-full">
            <DisplayCard
                v-for="item in settingsData.general"
                class="relative !h-56 grid-rows-2 **:tracking-tight">
                <template #header>
                    <h4>{{ item.title }}</h4>
                </template>
                <template #description>
                    <div class="grow">
                        {{ item.description }}
                    </div>
                </template>

                <label
                    class="absolute bottom-0 left-0 flex w-full cursor-pointer items-end gap-4 p-6"
                    @click="toggleSetting(item.model)">
                    <Switch v-model:checked="item.model" />
                    <span class="label-text w-full text-left">
                        {{ item.text }}
                    </span>
                </label>
            </DisplayCard>
        </div>

        <div class="border-t-b2 mt-8 flex border-t pt-6">
            <Button size="md">Save</Button>
            <Grow />
        </div>
    </main>
</template>
<style scoped></style>
