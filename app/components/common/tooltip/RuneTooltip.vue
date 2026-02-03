<script setup lang="ts">
import type { BadgeProps } from '@nuxt/ui'
import type { VariantProps } from 'tailwind-variants'
import { OnClickOutside } from '@vueuse/components'

const { id, class: className } = defineProps<{
  id: number
  class?: HTMLAttributes['class']
}>()

const rune = shallowRef<Rune>(null)
const status = shallowRef<'idle' | 'loading' | 'success' | 'error'>('idle')

watchEffect(async () => {
  console.log('🥸 - id:', id)
  if (!id) return

  status.value = 'loading'
  try {
    const module = await import(`#layers/patch/shared/records/runes/${id}.ts`)
    rune.value = module.default || null
    console.log('🥸 - mod:', module)

    status.value = 'success'
  }
  catch (e) {
    status.value = 'error'
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
        className,
      )
    "
    @trigger="close()"
  >
    <div
      class="flex size-full py-2 items-center gap-2 px-3 **:select-none  "
    >
      <Img
        v-if="rune"
        :key="rune.name"
        loading-type="spinner"
        :src="`/img/runes/${rune.id}.webp`"
        :alt="`${rune.name} Image`"
        :class="cn(' size-12 shrink-0 *:scale-110 *:object-contain rounded-full shadow-sm drop-shadow-sm', {
          '[&_img]:size-14 [&_img]:-translate-y-1': rune.tier === 0,
          '[&_img]:size-12': rune.tier !== 0,
        })"
      />

      <h2 class="dst grow text-xl leading-none font-bold tracking-tight text-bc/80">
        {{ rune.name }}
      </h2>
    </div>

    <USeparator class="mb-3" color="nc" />
    <div
      :key="rune.id"
      class="flex size-full max-h-full max-w-full flex-col w-full  gap-3 overflow-y-scroll px-4"
    >
      <div class="flex gap-2 items-center">
        <UBadge size="sm" :color="rune.tier === 0 ? 'gold' : 'b2'" :trailing-icon="rune.tier === 0 ? 'lucide:key' : 'lucide:diamond'" :label=" rune.tier === 0 ? 'Keystone' : `Slot ${rune.tier} - ${rune.tierLabel}` " />

        <UBadge
          size="sm"
          :color="(rune.path.toLowerCase() as BadgeProps['color'])"
          :label="rune.path"
          :ui="{ trailingIcon: 'scale-110 translate-x-0.5 text-white' }"
          :trailing-icon="`path:${rune.path}`"
        />
      </div>

      <span class="text-pretty whitespace-pre-line text-2 font-medium" v-html="rune.description" />
    </div>
  </OnClickOutside>
</template>
