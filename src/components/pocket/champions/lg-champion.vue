<script setup lang="ts">
import type { pocket } from 'types';
import { clean } from '@lib/utils'

const props = defineProps<{
    pocket: pocket
}>()
</script>

<template>
<KinesisContainer :perspective="100" class="shadow-inset-sm  size-full overflow-hidden">

    <KinesisElement v-if="pocket.champions[0].starred" type="depth" :strength="1"
        class='  relative z-0 size-full bg-auto bg-[50%_15%]' :style="{
            backgroundImage: `url(\'/img/champions/splash/${clean(pocket.champions[0].starred)}_0.webp\'`,
        }">
    </KinesisElement>

    <KinesisElement v-else type="depth" :strength="1"
        class="grayscale brightness-110 contrast-150 opacity-70 relative z-0 size-full bg-auto bg-[50%_15%] bg-[url(/img/art/spiritblossom.webp)]">
    </KinesisElement>


    <div v-if="pocket.champions[0].starred" class=' absolute bottom-1 right-2'>
        <div class='badge  badge-ghost badge-md font-semibold tracking-tighter antialiased opacity-80 font-cursive'>
            {{
                pocket.champions[0].starred }}
        </div>
    </div>
</KinesisContainer>
</template>

<style scoped></style>