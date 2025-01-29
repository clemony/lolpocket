<script lang="ts" setup>
import { icons } from 'assets/img/pocketIcons'

const props = defineProps<{
  pocket?: pocket
  selectedIcon: string
}>()

const emit = defineEmits(['update:selectedIcon'])

const iconStore = icons

const pocket = ref(props.pocket)

const selectIcon = ref()
function handleChange(icon) {
  if (pocket.value) {
    pocket.value.icon = selectIcon.value
  }
  emit('update:selectedIcon', selectIcon)
}

onMounted (() => {
  if (props.selectedIcon) {
    selectIcon.value = props.selectedIcon
  }
  else {
    selectIcon.value = 'teenyicons:folder-outline'
  }
})
</script>

<template>
  <div

    value="symbols"
    class="max-h-inherit bg-b2/30 border-b2/70 max-h-inherit flex h-[45%] w-full flex-row flex-wrap justify-evenly gap-2 overflow-y-scroll rounded-lg border px-2 py-4 inset-shadow-xs"
  >
    <Label
      v-for="icon in iconStore"
      :key="icon"
      variant="ghost"
      class="has-checked:bg-b2/60 has-checked:shadow-standard aspect-square size-14 self-center rounded-md border-transparent p-3.5"
    >
      <input
        v-if="pocket && pocket.icon"
        v-model="pocket.icon"
        type="radio"
        name="iconPicker"
        :value="icon"
        class="peer hidden"
        @change="handleChange(icon)"
      />

      <input
        v-else
        v-model="selectIcon"
        type="radio"
        name="iconPicker"
        :value="icon"
        class="peer hidden"
        @change="handleChange(icon)"
      />

      <icon
        v-if="icon"
        :name="icon"
        class="text-bc size-full shrink-0 drop-shadow-sm"
      />
    </Label>
  </div>
</template>

<style scoped>

</style>
