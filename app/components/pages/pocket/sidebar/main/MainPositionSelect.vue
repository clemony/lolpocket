<script lang="ts" setup>
import { HeadingTip } from '#components'
import { championPositions } from '#shared/appdata'
import { SelectTrigger, } from 'reka-ui'

const {
  side = 'bottom',
  sideOffset,
  align = 'start',
  class: className,
  pocket: p,
  type = 'card',
} = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
  type?: 'card' | 'btn'
  side?: Side
  sideOffset?: number
  align?: Align
  alignOffset?: number
}>()

const emit = defineEmits(['update:select'])
const pocket = computed(() => p)
const select = ref('All')

const color = computed(
  () => championPositions.find(p => p.name === pocket?.value?.main?.role).twColor
).value

const gradientClass = computed (() => `bg-${color} bg-clip-text `)
const open = ref(false)

const trigger = useTemplateRef<HTMLElement>('trigger')
</script>

<template>
  <Select
    v-model:model-value="pocket.main.role"
    v-model:open="open">
    <Card
      v-if="type === 'card'"
      ref="trigger"
      class="flex basis-1/5  items-center pr-0">
      <CardContent
        as="button"
        :disabled="!pocket?.main?.role"
        class="flex gap-2 py-3 px-4 items-center grow group/c cursor-pointer **:pointer-events-none  disabled:pointer-events-none">
        <span
          :class="cn('size-9.5 dst grid place-items-center ', gradientClass)">
          <component
            :is="pocket?.main?.role ? `i-lol-${pocket?.main?.role}` : 'all'"
            class="!size-9.5  text-bc  absolute dst z-2" />
          <span :class="cn('absolute z-2 -mask-linear-55 mask-linear-from-40%', { 'mask-linear-155': pocket.main?.role === 'Top' })">
            <component
              :is="pocket?.main?.role ? `i-lol-${pocket?.main?.role}` : 'all'"
              :style="{
                color: championPositions.find(p => p.name === pocket?.main?.role).color,
              }"
              class="!size-9.5 dst" />
          </span>
        </span>
        <div class=" @6xl:block @6xl:animate-in @6xl:slide-in-from-right @6xl:fade-in hidden px-1 flex flex-col overflow-hidden shrink">
          <h3
            v-memo="[pocket.main.role]"
            :class="cn('truncate', {
              'dss group-hover/c:underline': pocket.main.role,
              '!font-normal  opacity-10': !pocket.main.role,
            })">
            {{ pocket.main.role || "Role" }}
          </h3>

          <p
            v-memo="[pocket.roles]"
            :class="cn('text-3 truncate italic', {
              'font-medium': pocket.roles.length,
              '!font-normal  opacity-20': !pocket.roles.length,
            })">
            <template v-if="pocket.roles.length">
              & <span
                v-for="role, i in pocket.roles"
                :key="role"
                class="inline not-last-of-type:after:content-[', ']">
                {{ `${role}${i !== pocket.roles.length - 1 ? ', ' : ''}` }}
              </span>
            </template>
          </p>
        </div>
      </CardContent>

      <JoinSelectTrigger />
    </Card>

    <!-- button trigger -->
    <SelectTrigger
      v-else-if="type === 'btn'"
      class="grid place-items-center h-22  group/btn  z-10  pointer-events-auto **:pointer-events-none cursor-pointer !outline-none">
      <Element
        variant="base"
        shape="circle"
        :style="{
          background: `linear-gradient(155deg,  #FFFFFF -20%, ${championPositions.find(p => p.name === pocket?.main?.role).color} 50%, #FFFFFF 120%)`,
          backgroundSize: '140%',
        }"
        class="!size-14 inset-shadow-sides shadow-xs">
        <component
          :is="pocket?.main?.role ? `i-lol-${pocket?.main?.role}` : 'all'"
          class="!size-8.5  text-white/80  absolute dss z-2" />
      </Element>
    </SelectTrigger>

    <LazySelectContent
      :side
      :side-offset
      :align
      :reference="trigger"
      :align-offset
      position="popper"
      class="p-0 w-[var(--reka-select-trigger-width)] top-[calc(var(--reka-select-trigger-height)+2px)] min-w-54">
      <SelectGroup>
        <SelectLabel>Select main position</SelectLabel>
        <SelectItem
          v-for="position in championPositions"
          :key="position.name"
          :value="position.name">
          <PositionBadge :position="position.name" />
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>
