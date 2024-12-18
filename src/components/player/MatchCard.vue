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
                    <icon
                        icon="icon-park-solid:ranking-list"
                        class="size-7"
                        :class="{
                            'text-resolve': match.playerOutcome == 'win',
                            'text-domination': match.playerOutcome == 'loss',
                        }" />

                    <p>{{ match.type[0] }}</p>
                    <p v-if="match.type[1]">{{ match.type[1] }}</p>

                    <p class="">
                        {{ match.gameTime }}
                    </p>

                    <Badge
                        variant="resolve"
                        class="!text-2 !font-medium !tracking-wide text-white capitalize">
                        {{ match.playerOutcome }}
                    </Badge>
                </div>
                <div>
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
                </div>

                <CollapsibleTrigger as-child class="group">
                    <ExpandIndicator
                        class="[&_svg]:!size-7 [&_svg]:!shrink-0" />
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent as-child>
                <CardContent></CardContent>
            </CollapsibleContent>
        </Collapsible>
    </Card>
</template>
<style scoped></style>
