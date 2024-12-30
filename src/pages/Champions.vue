<script setup lang="ts">
import { useDataStore } from '@stores/oldDataStore'
</script>

<template>
    <div>
        <Header>Champions</Header>
        <LayoutSpacer />
        <main class="size-full px-12">
            <Card class="h-[calc(100%-9rem)]">
                <CardContent class="px-8 py-5">
                    <ScrollArea class="overflow-y-scroll">
                        <ChampionList drag-disabled class="gap-5" />
                    </ScrollArea>
                </CardContent>
            </Card>
        </main>
    </div>
</template>

<style scoped></style>
