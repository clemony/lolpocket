<script lang="ts" setup>
import type { ShallowRef } from "vue"

const { open } = defineProps<{
  open: boolean
}>()
const emit = defineEmits(["update:open"])

const route = useRoute()

const modelValue = defineModel<string>({ default: "" })

const commandInput = useTemplateRef<{ inputRef: HTMLInputElement | null }>(
  "commandInput",
)

const inputRef = computed(() => commandInput.value?.inputRef ?? undefined)

const routeTitle = computed(() => {
  if (open) return "search LP..."
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
    :placeholder="routeTitle"
    icon="i-search"
    :autofocus="false"
    aria-describedby="app-command-search"
    :ui="{
      base: cn(
        'h-10 w-180 rounded-xl! bg-p0/50 px-4 pr-16 text-center ring inset-shadow-sm ring-p3/80 placeholder:text-pc/60 placeholder:lowercase hover:ring-n0/60 focus-visible:ring-1 focus-visible:ring-p3/80!',
        { 'placeholder:italic placeholder:text-pc/40': open },
      ),
      leadingIcon:
        'ml-1 size-4.5 justify-self-start text-n5 opacity-80 **:stroke-[2.3] group-hover/btn:opacity-100',
    }"
    @focus="emit('update:open', true)"
    @keydown.esc.stop.prevent="emit('update:open', false)">
    <template #trailing>
      <div v-if="!modelValue" v-auto-animate class="flex items-center">
        <UKbd
          v-for="k in ['meta', 'K']"
          :key="k"
          class="text-n5"
          variant="ghost"
          square
          :value="k" />
      </div>
      <div v-else v-auto-animate class="flex items-center">
        <LazyInputClear
          size="2xs"
          variant="ghost"
          :ui="{
            base: 'rounded-lg border border-transparent hover:border-p5 hover:shadow-xs hover:[&_svg]:opacity-60',
          }"
          color="transparent"
          @clear-input="handleClear()" />
      </div>
    </template>
  </UInput>
</template>
