<script lang="ts" setup>
import type { ShallowRef } from "vue"

const { open } = defineProps<{
  open: boolean
}>()
const emit = defineEmits(["update:open"])

const route = useRoute()

const modelValue = defineModel<string>({ default: "" })

const commandInput = useTemplateRef<{ inputRef: HTMLInputElement | null }>(
  "commandInput"
)

const inputRef = computed(() => commandInput.value?.inputRef ?? undefined)

const routeTitle = computed(() => {
  if (open) return "search lp..."
  else if (route.meta?.prefix === "summoner") {
    const { summoner } = storeToRefs(sSession())
    return `${summoner.value?.name ?? "Summoner"} - ${route.meta?.title}`
  }

  return String(route.meta?.title) || String(route.name)
})

onStartTyping(() => {
  if (open) inputRef.value?.focus()
})

interface ExposeProps {
  inputRef: ShallowRef<HTMLInputElement | undefined>
}
defineExpose<ExposeProps>({ inputRef })
function handleClear() {
  modelValue.value = ""
  emit("update:open", true)
}
</script>

<template>
  <UInput
    ref="commandInput"
    v-model:model-value="modelValue"
    placeholder="search..."
    icon="i-search"
    :autofocus="false"
    aria-describedby="app-command-search"
    :ui="{
      root: 'group/i flex w-190 max-w-190 shrink-0 grow',
      base: cn(
        'h-10 w-full grow rounded-xl! bg-p0/70 px-4 pr-16 text-center ring inset-shadow-sm ring-p3/80 placeholder:text-pc/60 hover:ring-n0/50 focus-visible:ring-1 focus-visible:ring-p3/80! focus-visible:placeholder:opacity-0!',
        {
          '': open
        }
      ),
      leadingIcon:
        'ml-1 size-4.75 justify-self-start text-n5/80 **:stroke-[2.4] group-hover/i:text-n4'
    }"
    @focus="emit('update:open', true)"
    @keydown.esc.stop.prevent="emit('update:open', false)">
    <template #trailing>
      <div
        v-if="!modelValue"
        v-auto-animate
        class="flex items-center -space-x-px">
        <UKbd
          v-for="k in ['meta', 'K']"
          :key="k"
          class="text-md! text-n5 group-hover/i:text-n1!"
          variant="subtle"
          size="lg"
          square
          :value="k" />
      </div>
      <div v-else v-auto-animate class="flex items-center">
        <LazyInputClear
          variant="ghost"
          :ui="{
            base: 'rounded-lg border border-transparent hover:border-p5 hover:shadow-xs [&_svg]:hover:opacity-60'
          }"
          color="transparent"
          @clear-input="handleClear()" />
      </div>
    </template>
  </UInput>
</template>
