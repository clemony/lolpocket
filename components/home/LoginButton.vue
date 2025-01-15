<script setup lang="ts">
const props = defineProps<{
    viewLogin: boolean
}>()

const viewLogin = ref(false)
const emit = defineEmits(['update:login'])
</script>
<template>
    <div class="mt-4 flex w-full justify-end px-2">
        <Label
            :button="true"
            variant="outline"
            size="lg"
            class="hover:bg-neutral hover:text-nc !font-sans">
            <input
                type="checkbox"
                v-model="viewLogin"
                class="peer hidden"
                @change="emit('update:login', viewLogin)" />
            {{ viewLogin ? 'Log In' : 'Back' }}
        </Label>
    </div>
</template>
<style scoped></style>
