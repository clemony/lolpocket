<script setup lang="ts">
const target = ref(null)
const tab1 = ref(null)
const tab2 = ref(null)
const tab3 = ref(null)
const dinger = ref(null)
const tab1isHovered = useElementHover(tab1)

const tab2isHovered = useElementHover(tab2)

const tab3isHovered = useElementHover(tab3)

function onChange() {
    const { x, y, width } = useElementBounding(dinger)
}

const tabModel = ref('Spells')
</script>

<template>
    <ul
        ref="target"
        class="mt-6 flex h-9 items-center px-1 [&_li]:z-10 [&_li]:w-20 [&_li]:px-2">
        <div
            ref="dinger"
            class="border-b2 bg-b1 absolute h-9 w-[55px] rounded-md border opacity-90 shadow-xs" />

        <li>
            <label ref="tab1">
                <input
                    type="radio"
                    name="tabs"
                    value="Spells"
                    class=""
                    @onChange="onChange()"
                    v-model="tabModel" />
                Spells
            </label>
        </li>
        <li>
            <label ref="tab2">
                <input
                    type="radio"
                    name="tabs"
                    value="Runes"
                    class=""
                    @onChange="onChange()"
                    v-model="tabModel" />
                Runes
            </label>
        </li>
        <li>
            <label ref="tab3">
                <input
                    type="radio"
                    name="tabs"
                    value="Notes"
                    class="hidden"
                    v-model="tabModel" />
                Notes
            </label>
        </li>
    </ul>
</template>

<style scoped></style>
