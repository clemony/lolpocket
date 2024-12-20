<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore'
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
const ds = useDataStore()
const match = {
    type: ['Ranked', 'Solo/Duo'],
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
    <Card class="px-5 py-4">
        <Collapsible class="group">
            <div class="flex gap-5">
                <div class="flex flex-col items-start justify-center gap-0">
                    <Badge
                        :class="{
                            'bg-resolve': match.playerOutcome == 'win',
                            'bg-domination': match.playerOutcome == 'loss',
                        }"
                        class="!text-2 mb-2 items-center gap-2 pl-2 !font-medium !tracking-wide text-white capitalize">
                        <icon icon="uis:graph-bar" class="size-3.5" />

                        {{ match.playerOutcome }}
                    </Badge>

                    <p>{{ match.type[0] }}</p>
                    <p v-if="match.type[1]">{{ match.type[1] }}</p>

                    <p class="">
                        {{ match.gameTime }}
                    </p>
                </div>
                <div>
                    <div class="flex gap-4">
                        <div class="size-18 overflow-hidden rounded-lg">
                            <img
                                :src="`/img/champions/Sona.webp`"
                                class="size-18 scale-114" />
                        </div>
                    </div>

                    <div class="flex gap-1">
                        <template v-for="index in 6" :key="index">
                            <ShadowedPlaceholder class="size-10" />
                        </template>
                    </div>
                </div>

                <CollapsibleTrigger
                    as-child
                    class="group bg-base-200/30 grid h-full w-10 place-items-center">
                    <ExpandIndicator
                        class="[&_svg]:!size-5 [&_svg]:!shrink-0" />
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent as-child>
                <CardContent></CardContent>
            </CollapsibleContent>
        </Collapsible>
    </Card>
</template>
<style scoped></style>
