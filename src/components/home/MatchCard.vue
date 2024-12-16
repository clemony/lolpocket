<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore'
<<<<<<< HEAD
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
=======
import { useGeneralStore } from '@/stores/generalStore'
const gs = useGeneralStore()
>>>>>>> 4634f11e (update 8 files and delete 426 files)
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
                <CardHeader class="pt-4">
=======
                <CardHeader>
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                <CardHeader class="pt-4">
>>>>>>> 83f9266d (update 42 files and delete 17 files)
                    <CardTitle
                        class="text-3 flex w-full items-center gap-4 font-normal">
                        <p
                            class="flex grow items-center gap-3 text-[1.075rem] font-medium">
                            <icon
                                icon="icon-park-solid:ranking-list"
<<<<<<< HEAD
<<<<<<< HEAD
                                class="size-7"
=======
                                class="size-7 drop-shadow-sm"
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                                class="size-7"
>>>>>>> 83f9266d (update 42 files and delete 17 files)
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
                        <p class="text-3 !font-normal">
=======
                        <p>
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                        <p class="text-3 !font-normal">
>>>>>>> 83f9266d (update 42 files and delete 17 files)
                            {{ match.gameTime }}
                        </p>

                        <Badge
<<<<<<< HEAD
<<<<<<< HEAD
                            variant="resolve"
                            class="!text-3 !font-medium !tracking-wide text-white capitalize">
=======
                            size="sm"
                            variant="resolve"
                            class="!tracking-wide text-white capitalize">
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                            variant="resolve"
                            class="!text-3 !font-medium !tracking-wide text-white capitalize">
>>>>>>> 83f9266d (update 42 files and delete 17 files)
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
