<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD:src/components/home/MatchCard.vue
import { useDataStore } from '@/stores/dataStore'
<<<<<<< HEAD
<<<<<<< HEAD
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
=======
<<<<<<< HEAD
import { useGeneralStore } from '@/stores/generalStore'
const gs = useGeneralStore()
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
import { useDataStore } from '@/client/stores/dataStore'
import { useGeneralStore } from '@/client/stores/generalStore'
=======
import { useDataStore } from '@/stores/dataStore'
<<<<<<< HEAD
import { useGeneralStore } from '@/stores/generalStore'
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
const gs = useGeneralStore()
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/MatchCard.vue
<<<<<<< HEAD
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
const ds = useDataStore()
const match = {
    type: 'Ranked Solo/Duo',
    playerOutcome: 'win',
    KDA: '1/3/17',
    gameTime: '24:06',
    summoners: [
        { blueTeam: [] },
        {
            redTeam: [],
        },
    ],
}
</script>
<template>
    <Card>
        <Collapsible class="group">
            <CollapsibleTrigger as-child>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <CardHeader class="pt-4">
=======
                <CardHeader>
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                <CardHeader class="pt-4">
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
=======
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
<<<<<<< HEAD:src/components/home/MatchCard.vue
                <CardHeader class="pt-4">
=======
                <CardHeader>
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/MatchCard.vue
<<<<<<< HEAD
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
                <CardHeader class="pt-4">
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
                    <CardTitle
                        class="text-3 flex w-full items-center gap-4 font-normal">
                        <p
                            class="flex grow items-center gap-3 text-[1.075rem] font-medium">
                            <icon
                                icon="icon-park-solid:ranking-list"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                                class="size-7"
=======
                                class="size-7 drop-shadow-sm"
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                                class="size-7"
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
=======
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
<<<<<<< HEAD:src/components/home/MatchCard.vue
                                class="size-7"
=======
                                class="size-7 drop-shadow-sm"
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/MatchCard.vue
<<<<<<< HEAD
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
                                class="size-7"
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
                                :class="{
                                    'text-resolve':
                                        match.playerOutcome == 'win',
                                    'text-domination':
                                        match.playerOutcome == 'loss',
                                }" />
                            {{ match.type }}
                        </p>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        <p class="text-3 !font-normal">
=======
                        <p>
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                        <p class="text-3 !font-normal">
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
=======
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
<<<<<<< HEAD:src/components/home/MatchCard.vue
                        <p class="text-3 !font-normal">
=======
                        <p>
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/MatchCard.vue
<<<<<<< HEAD
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
                        <p class="text-3 !font-normal">
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
                            {{ match.gameTime }}
                        </p>

                        <Badge
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
<<<<<<< HEAD:src/components/home/MatchCard.vue
>>>>>>> 2c930845 (update 38 files and delete 54 files)
                            variant="resolve"
                            class="!text-3 !font-medium !tracking-wide text-white capitalize">
=======
                            size="sm"
                            variant="resolve"
                            class="!tracking-wide text-white capitalize">
<<<<<<< HEAD
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                            variant="resolve"
                            class="!text-3 !font-medium !tracking-wide text-white capitalize">
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/MatchCard.vue
<<<<<<< HEAD
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
                            variant="resolve"
                            class="!text-3 !font-medium !tracking-wide text-white capitalize">
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
                            {{ match.playerOutcome }}
                        </Badge>

                        <ExpandIndicator
                            class="[&_svg]:!size-7 [&_svg]:!shrink-0" />
                    </CardTitle>
                    <CardDescription class="flex gap-4 pt-3">
                        <div class="flex gap-4">
                            <div class="size-18 overflow-hidden rounded-lg">
                                <img
                                    :src="`/img/champions/Sona.webp`"
                                    class="size-18 scale-114" />
                            </div>
                        </div>

                        <div class="flex gap-3">
                            <template v-for="index in 6" :key="index">
                                <ShadowedPlaceholder class="size-18" />
                            </template>
                        </div>
                    </CardDescription>
                </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent as-child>
                <CardContent></CardContent>
            </CollapsibleContent>
        </Collapsible>
    </Card>
</template>
<style scoped></style>
