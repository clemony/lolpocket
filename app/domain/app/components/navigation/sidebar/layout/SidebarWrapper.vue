<script lang="ts" setup>
import type { PageHeaderProps } from "@nuxt/ui"
import { useScroll } from "@vueuse/core"
const {
  overlay = undefined,
  title,
  headline,
} = defineProps<{
  overlay?: "vertical" | "bottom" | "top"
  header?: PageHeaderProps
  title?: string
  headline?: string
}>()
const emit = defineEmits(["openPopover"])

const el = shallowRef<HTMLElement>()

const { style, arrivedState } = useScrollShadow(el)

const useStyle = computed(() =>
  overlay /* === "vertical"
    ? style
    : !arrivedState?.bottom && overlay === "bottom" */
    ? {
        maskImage:
          "linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0) calc(100% - 80px), transparent)",
      }
    : undefined
)
</script>

<template>
  <UCard
    ref="el"
    :style="useStyle"
    :ui="{
      header: 'inline-flex w-full shrink-0 items-center px-5.5! align-baseline',
      root: cn(
        'static! z-auto! grid h-screen max-h-screen w-full max-w-full grid-rows-[max-content_1fr_max-content] divide-y-0 overflow-hidden bg-transparent p-0! ring-p4/50'
      ),
      body: cn(
        'size-ful1 relative inset-0 z-1 flex size-full max-h-full max-w-full flex-1 grow scrollbar-none flex-col gap-0 overflow-y-auto p-0!',
        {
          'mask-t-from-86%  mask-t-to-98%': overlay,
        }
      ),
      footer: cn({
        'sticky bottom-0 flex max-h-12 w-full max-w-full translate-y-1 flex-nowrap items-center justify-between p-3!':
          !overlay,
      }),
    }">
    <template #header>
      <!-- header -->
      <slot name="header">
        <UPageHeader
          v-bind="header"
          :headline
          :title
          :ui="{
            root: cn('w-full border-b-0 pb-0', {
              'absolute! z-3 px-5.5 top-0 left-0 -mt-px right-0 before:w-full before:absolute before:inset-0 before:h-[150%] before:pointer-events-none before:bg-linear-to-b before:from-p1/90 to-transparent':
                overlay,
            }),
            links: 'pr-1',
            title: 'pl-1',
            container: 'items-center justify-between',
            description: 'h-max! w-full',
          }">
          <template #links>
            <slot name="subtitle" />
          </template>
          <template #description>
            <slot name="description" />
          </template>
        </UPageHeader>
      </slot>
    </template>

    <template #default>
      <div
        :class="
          cn('absolute inset-0 size-full overflow-y-auto px-5.5! pt-6! pb-0', {
            'pb-10': overlay,
          })
        ">
        <slot @open-popover="emit('openPopover', $event)" />
      </div>
    </template>

    <template #footer>
      <!-- footer -->
      <slot name="footer" />
    </template>
  </UCard>
</template>
