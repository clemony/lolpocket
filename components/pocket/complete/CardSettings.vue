<script lang="ts" setup>
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui'

const props = defineProps<{
  pocket: pocket
}>()
const emit = defineEmits(['download'])

const pocket = computed (() => {
  return props.pocket
})
const ts = useTempStore()

const align = ref('0')

watch(
  () => align.value,
  (newVal) => {
    pocket.value.card.align = newVal
  },
)

const isSliderOpen = ref(false)
onMounted (() => {
  ts.isSettingsOpen = true
})
</script>

<template>
  <Field class=" w-18 !overflow-auto">
    <CollapsibleRoot v-model:open="ts.isSettingsOpen" as-child>
      <div class="flex flex-col w-full !p-0 items-center ">
        <CollapsibleTrigger class="btn btn-lg btn-square ">
          <icon name="up-sm" class="size-6 transition-all duration-300" :class="{ 'rotate-180': !ts.isSettingsOpen }" />
        </CollapsibleTrigger>
        <CollapsibleContent class="CollapsibleContent flex flex-col w-full items-center gap-3   transition-all duration-600 *:transition-all !overflow-auto *duration-200">
          <FontSelect v-model:model-value="pocket.card.font[0]" tip="Title Font" :pocket="pocket" :model="0" @update:model-value="e => pocket.card.font[0] = e" />

          <FontSelect v-model:model-value="pocket.card.font[1]" tip="Text Font" :pocket="pocket" :model="1" @update:model-value="e => pocket.card.font[1] = e" />

          <label v-tippy="pocket.card.filter == true ? 'Filter: Color' : 'Filter: Grayscale'" class="swap swap-rotate btn btn-xl btn-square has-disabled:shadow-inset-sm group has-disabled:bg-b3/40 ">
            <input v-model="pocket.card.filter" type="checkbox" class="peer" :disabled="!pocket.card.splash" />
            <icon name="hugeicons:monocle" class="size-7.5 dst swap-off peer-disabled:text-bc/20" />
            <icon name="streamline:rainbow" class="swap-on dst size-7.5 peer-disabled:text-bc/20" />

          </label>

          <Popover>
            <PopoverTrigger>
              <button v-tippy="'Background Align'" class="btn btn-square btn-ghost btn-xl ">
                <icon name="ph:arrows-out-line-horizontal-light" class="size-8 dst shrink-0" />
              </button>
            </PopoverTrigger>
            <PopoverContent align="start" :side-offset="10" side="left" class=" w-44 PopoverContent slide bg-b2  border border-b3">
              <input v-model="align" type="range" min="0" max="100" class="range range-neutral range-xs" />
            </PopoverContent>
          </Popover>

          <ThemeCollapse :pocket="pocket" />

          <button v-tippy="'Add Note'" class="btn btn-square btn-ghost btn-xl ">
            <icon name="teenyicons:text-outline" class="size-5.5 dst stroke-[1.2]" />
          </button>

          <button v-tippy="'Share'" class="btn btn-square btn-xl btn-ghost">
            <icon name="teenyicons:send-outline" class="size-6 dst" />
          </button>

          <button v-tippy="'Export Set to League'" class="btn btn-square btn-xl btn-ghost 7">
            <icon name="teenyicons:upload-outline" class="size-6 dst stroke-[1.2]" />
          </button>

          <button v-tippy="'Download Image'" class="btn btn-square btn-xl btn-ghost" @click="emit('download')">
            <icon name="system-uicons:push-down" class="size-8 dst stroke-[1.2]" />
          </button>
        </CollapsibleContent>
      </div>
    </CollapsibleRoot>
  </Field>
</template>

<style scoped>

</style>