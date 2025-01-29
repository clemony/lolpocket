<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
  selectedIcon: string
}>()

const emit = defineEmits(['update:selectedIcon'])

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
    value="champions"
    class="max-h-inherit bg-b2/30 border-b2/70 max-h-inherit flex h-[45%] w-full flex-row flex-wrap justify-evenly gap-2 overflow-y-scroll rounded-lg border px-2 py-4 inset-shadow-xs"
  >
    <Label
      v-for="champion in ds.champions"
      :key="champion.apiname"
      variant="outline"
      class="shadow-warm has-checked:bg-b2/60 border-b2 grid aspect-square size-14 place-items-center self-center overflow-hidden rounded-lg border"
    >
      <input
        v-if="pocket"
        v-model="pocket.icon"
        type="radio"
        name="iconPicker"
        :value="`/img/champions/${champion.apiname}.webp`"
        class="peer hidden"
      />

      <input
        v-else
        v-model="selectIcon"
        type="radio"
        name="iconPicker"
        :value="`/img/champions/${champion.apiname}.webp`"
        class="peer hidden"
        @change="handleChange(`/img/champions/${champion.apiname}.webp`)"
      />

      <img
        :src="`/img/champions/${champion.apiname}.webp`"
        class="size-14 scale-110"
      />
    </Label>
  </div>
</template>

<style scoped>

</style>
