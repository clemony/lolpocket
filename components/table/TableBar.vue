<script lang="ts" setup>
import ColumnDisplay from 'components/table/panels/ColumnDisplay.vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const ts = useTempStore()

const isChecked = ref(false)

const component = ref()

watchEffect(() => {
  console.log('💠 - component:', component)
})
</script>

<template>
  <div class=" flex pr-3 transition-all duration-400 overflow-hidden" >
    <div class="  flex  items-center gap-4 *:pointer-events-auto **:[&_svg]:shrink-0">
      <PocketBarButton class="mt-1">
        <input type="checkbox" class="hidden" />
        <input v-model="component" type="radio" class="hidden" value="search" />
        <icon name="search" class="size-5" />
      </PocketBarButton>

      <PocketBarButton>
        <input v-model="isChecked" type="checkbox" class="hidden" @change="emit('update:modelValue', isChecked)" />
        <input v-model="component" type="radio" class="hidden" :value="ColumnDisplay" />
        <icon name="gear" class="size-6" />
      </PocketBarButton>

      <PocketBarButton>
        <input v-model="isChecked" type="checkbox" class="hidden" @change="emit('update:modelValue', isChecked)" />
        <icon name="trash" class="size-6" />
      </PocketBarButton>

      <PocketBarButton>
        <input v-model="isChecked" type="checkbox" class="hidden" @change="emit('update:modelValue', isChecked)" />
        <input v-model="component" type="radio" class="hidden" value="" />
        <icon name="folders" class="size-5.5 overflow-hidden " />
      </PocketBarButton>
      <NeutralButton
class=""
        @click="ts.pocketSheetTrigger = true"
      >
        <icon name="add-sm" class="shrink-0 size-6" />
      </NeutralButton>
    </div>

    <component :is="component" class="opacity-0 transition-all duration-400" :class="{ 'opacity-100': isChecked }" />
  </div>
</template>

<style scoped>

</style>
