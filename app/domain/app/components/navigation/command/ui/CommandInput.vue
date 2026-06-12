<script lang="ts" setup>
import type { InputProps } from "@nuxt/ui"
import type { ShallowRef } from "vue"

const props = defineProps<
  Omit<InputProps, "defaultValue"> & {
    open?: boolean
  }
>()
const emit = defineEmits(["update:open"])

const route = useRoute()

const delegated = reactiveOmit(props, "class", "open")

const modelValue = defineModel<string>("query", { default: "" })

const commandInput = useTemplateRef<{ inputRef: HTMLInputElement | null }>(
  "commandInput"
)

const inputRef = computed(() => commandInput.value?.inputRef ?? undefined)

const routeTitle = computed(() => {
  if (props.open) return "search lp..."
  else if (route.meta?.prefix === "summoner") {
    const { summoner } = storeToRefs(sSession())
    return `${summoner.value?.name ?? "Summoner"} - ${route.meta?.title}`
  }

  return String(route.meta?.title) || String(route.name)
})

onStartTyping(() => {
  if (props.open) inputRef.value?.focus()
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
    v-bind="delegated"
    ref="commandInput"
    :model-value="query"
    placeholder="search..."
    icon="i-search"
    :autofocus="false"
    aria-describedby="app-command-search"
    :ui="{
      root: cn('group/i flex w-190 shrink-0 grow', props.ui?.root),
      base: cn(
        'w-full grow rounded-xl! bg-p0/70 px-4 pr-16 text-center ring inset-shadow-sm ring-p3/80 placeholder:text-pc/60 hover:ring-n0/50 focus-visible:ring-1 focus-visible:ring-p3/80! focus-visible:placeholder:opacity-0!',
        props.ui?.base
      ),
      leadingIcon:
        'ml-1 size-4.75 justify-self-start text-n5/80 **:stroke-[2.4] group-hover/i:text-n4'
    }"
    @focus="emit('update:open', true)"
    @keydown.esc.stop.prevent="emit('update:open', false)">
    <template #trailing>
      <KbdClear
        :model-value="modelValue"
        :kbds="['meta', 'K']"
        @clear-input="handleClear()" />
    </template>
  </UInput>
</template>
