<script lang="ts" setup>
const props = defineProps<{
modelValue: boolean
}>()
const emit = defineEmits(['update:modelValue'])

const isChecked = ref(false)
</script>

<template>
<div class="size-full">


   <div class=" w-16 h-screen bg-b1 flex flex-col py-4 items-center gap-3.5 *:pointer-events-auto **:[&_svg]:shrink-0">
        <PocketBarButton >
          <input type="checkbox" v-model="isChecked" class="hidden" @change="emit('update:modelValue', isChecked)"/>
          <icon name="infinity" class="size-6.5 " />
        </PocketBarButton>

        <PocketBarButton >
          <input type="checkbox" v-model="isChecked" class="hidden" @change="emit('update:modelValue', isChecked)"/>
          <icon name="search" class="size-5" />
        </PocketBarButton>

        <PocketBarButton >
          <input type="checkbox" v-model="isChecked" class="hidden" @change="emit('update:modelValue', isChecked)"/>
          <icon name="filter" class="size-5" />
        </PocketBarButton>

        <PocketBarButton >
          <input type="checkbox" v-model="isChecked" class="hidden" @change="emit('update:modelValue', isChecked)"/>
          <icon name="heart" class="size-5.5" />
        </PocketBarButton>

        <PocketBarButton >
          <input type="checkbox" v-model="isChecked" class="hidden" @change="emit('update:modelValue', isChecked)"/>
          <icon name="folders" class="size-5.5 overflow-hidden " />
        </PocketBarButton>
      </div>
</div>
</template>

<style scoped>

</style>