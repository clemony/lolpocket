<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore'
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
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
                <CardHeader class="pt-4">
                    <CardTitle
                        class="text-3 flex w-full items-center gap-4 font-normal">
                        <p
                            class="flex grow items-center gap-3 text-[1.075rem] font-medium">
                            <icon
                                icon="icon-park-solid:ranking-list"
                                class="size-7"
                                :class="{
                                    'text-resolve':
                                        match.playerOutcome == 'win',
                                    'text-domination':
                                        match.playerOutcome == 'loss',
                                }" />
                            {{ match.type }}
                        </p>

                        <p class="text-3 !font-normal">
                            {{ match.gameTime }}
                        </p>

                        <Badge
                            variant="resolve"
                            class="!text-3 !font-medium !tracking-wide text-white capitalize">
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
