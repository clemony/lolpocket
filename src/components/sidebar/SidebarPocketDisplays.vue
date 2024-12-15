<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<<< HEAD:src/client/components/sidebar/SidebarPocketDisplays.vue
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
>>>>>>> 2c930845 (update 38 files and delete 54 files)
<<<<<<<< HEAD:src/components/sidebar/SidebarPocketDisplays.vue
import { usePocketStore } from '@/stores/pocketStore'
========
import { usePocketStore } from '@/client/stores/pocketStore'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>> 12d6db59 (update 38 files and delete 54 files):src/client/components/sidebar/SidebarPocketDisplays.vue
=======
<<<<<<< HEAD
>>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/sidebar/SidebarPocketDisplays.vue
=======
>>>>>>>> 12d6db59 (update 38 files and delete 54 files):src/client/components/sidebar/SidebarPocketDisplays.vue
>>>>>>> 12d6db59 (update 38 files and delete 54 files)
========
import { usePocketStore } from '@/stores/pocketStore'
>>>>>>>> 4634f11e (update 8 files and delete 426 files):src/components/sidebar/SidebarPocketDisplays.vue
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
>>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/sidebar/SidebarPocketDisplays.vue
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
import { usePocketStore } from '@/stores/pocketStore'
>>>>>>> 9bb9b9a6 (update src/client/assets/css/index.css)
=======
>>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/sidebar/SidebarPocketDisplays.vue
>>>>>>> 2c930845 (update 38 files and delete 54 files)

const ps = usePocketStore()
</script>
<template>
    <SidebarGroup>
        <SidebarGroupLabel>
            Pockets

            <!--    <SidebarGroupAction as-child>
                <Button
                    size="icon"
                    variant="default"
                    class="text-2 right-10.75 flex size-5.5">
                    <icon
                        icon="teenyicons:add-small-outline"
                        class="shrink-0" />
                </Button>
            </SidebarGroupAction> -->
        </SidebarGroupLabel>

        <SidebarPockets
            :data="ps.pinned"
            title="Pinned"
            key="pinned"
            icon="teenyicons:attach-outline" />

        <SidebarPockets
            :data="ps.general"
            title="Unsorted"
            key="general"
            icon="formkit:folder"
            iconClass="size-[13px]!" />

        <SidebarMenu>
            <SidebarLink
                to="trash"
                icon="teenyicons:bin-outline"
                :badge="ps.trashPockets.length" />

            <SidebarLink
                to="archive"
                icon="teenyicons:archive-outline"
                :badge="ps.archivePockets.length" />
        </SidebarMenu>
    </SidebarGroup>
</template>
<style scoped></style>
