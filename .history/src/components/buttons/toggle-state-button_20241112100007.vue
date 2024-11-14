<script setup lang="ts">
const props = defineProps<{
    data: any
    icon1?: string
    icon2?: string
}>()

const data = ref(props.data)
</script>

<template>
    <Button :variant="data ? 'neutral' : 'outline'" size="icon" class='join-item [&_input]:hidden relative'
    @click="data++; data == 3 ? data = 0 : ''" :class="{ '': data }">

    <icon v-if="data == 2" :icon="props.icon1" class='size-6 absolute' />
    <icon v-else :icon="props.icon2" class='size-6 absolute' :class="{ 'opacity-60': !data }" />

    <input type="radio" v-model="data" value="0" />
    <input type="radio" v-model="data" value="1" />
    <input type="radio" v-model="data" value="2" />
</Button>
</template>

<style scoped></style>