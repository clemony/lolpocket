<script setup lang="ts">
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
watch(
    () => isOutside.value,
    (newVal) => {
        console.log(newVal)
    }
)

const tabs = [
 {
    id: tab1
    ref: ref(null),
    pos: () =>
        computed(() => {
            const { x, y, width } = useElementBounding(tab1.value.ref)
            return { x, y, width }
        }),
},

tab2: {
    ref: ref(null),
    pos: () =>
        computed(() => {
            const { x, y, width } = useElementBounding(tab2.ref)
            return { x, y, width }
        }),
},

tab3: {
    ref: ref(null),
    pos: () =>
        computed(() => {
            const { x, y, width } = useElementBounding(tab3.ref)
            return { x, y, width }
        }),
}
]

const tabModel = ref(tabs.valuetab1)
const dinger = ref(null)
</script>

<template>
    <ul
        ref="target"
        class="mt-6 flex h-9 items-center px-1 [&_li]:z-10 [&_li]:w-20 [&_li]:px-2">
        <div
            ref="dinger"
            class="absolute h-9 w-[55px] rounded-md border border-base-200 bg-base-100 opacity-90 shadow-sm" />
        <li>
            <label id="tab1" :ref="tab1.ref">
                <input
                    type="radio"
                    name="tabs"
                    value="tab1"
                    class="hidden"
                    v-model="tabModel" />
                Spells
            </label>
        </li>
        <li>
            <label ref="tab2">
                <input
                    type="radio"
                    name="tabs"
                    value="tab2"
                    class="hidden"
                    v-model="tabModel" />
                Runes
            </label>
        </li>
        <li>
            <label ref="tab3">
                <input
                    type="radio"
                    name="tabs"
                    value="tab3"
                    class="hidden"
                    v-model="tabModel" />
                Notes
            </label>
        </li>
    </ul>
</template>

<style scoped></style>
