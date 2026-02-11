<script setup lang="ts">
import type { BadgeProps, SeparatorProps } from "@nuxt/ui"
import { OnClickOutside } from "@vueuse/components"

const { id, class: className } = defineProps<{
  id: number
  class?: HTMLAttributes["class"]
}>()

const rune = shallowRef<Rune | null>(null)
const status = shallowRef<"idle" | "loading" | "success" | "error">("idle")

watchEffect(async () => {
  console.log("🥸 - id:", id)
  if (!id) return

  status.value = "loading"
  try {
    const module = await import(`#layers/patch/shared/records/runes/${id}.ts`)
    rune.value = module.default || null
    console.log("🥸 - mod:", module)

    status.value = "success"
  } catch (e) {
    status.value = "error"
    console.error(e)
  }
})

const toast = useToast()
const spell = computed(() => spells[id])
function close() {
  toast.remove(`rune-${id}`)
}
</script>

<template>
  <OnClickOutside
    v-if="rune"
    :class="
      cn(
        'relative flex size-full cursor-default flex-col justify-center pb-3',
        className
      )
    "
    @trigger="close()">
    <div class="flex size-full items-center gap-2 px-3 py-2 **:select-none">
      <Img
        v-if="rune"
        :key="rune.name"
        loading-type="spinner"
        :src="`/img/runes/${rune.id}.webp`"
        :alt="`${rune.name} Image`"
        :class="
          cn(
            'size-12 shrink-0 rounded-full shadow-sm drop-shadow-sm *:scale-110 *:object-contain',
            {
              '[&_img]:size-14 [&_img]:-translate-y-1': rune.tier === 0,
              '[&_img]:size-12': rune.tier !== 0,
            }
          )
        " />

      <h2
        class="grow text-xl leading-none font-bold tracking-tight text-pc/80 dst">
        {{ rune.name }}
      </h2>
    </div>

    <USeparator class="mb-3" :color="'p3' as SeparatorProps['color']" />
    <div
      :key="rune.id"
      class="flex size-full max-h-full w-full max-w-full flex-col gap-3 overflow-y-scroll px-4">
      <div class="flex items-center gap-2">
        <UBadge
          size="sm"
          :color="(rune.tier === 0 ? 'gold' : 'p2') as BadgeProps['color']"
          :trailing-icon="rune.tier === 0 ? 'lucide:key' : 'lucide:diamond'"
          :label="
            rune.tier === 0 ?
              'Keystone'
              : `Slot ${rune.tier} - ${rune.tierLabel}`
          " />

        <UBadge
          size="sm"
          :color="rune.path.toLowerCase() as BadgeProps['color']"
          :label="rune.path"
          :ui="{ trailingIcon: 'scale-110 translate-x-0.5 text-white' }"
          :trailing-icon="`path:${rune.path}`" />
      </div>

      <span
        class="text-2 font-medium text-pretty whitespace-pre-line"
        v-html="rune.description" />
    </div>
  </OnClickOutside>
</template>
