<script lang="ts" setup>
import { HeadingTip } from '#components'
import { SelectTrigger } from 'reka-ui'

const {
  side = 'bottom',
  sideOffset,
  align = 'start',
  class: className,
  type = 'card',
} = defineProps<{
  class?: HTMLAttributes['class']
  type?: 'card' | 'btn'
  side?: Side
  sideOffset?: number
  align?: Align
  alignOffset?: number
}>()

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

const open = ref(false)

const trigger = useTemplateRef<HTMLElement>('trigger')
</script>

<template>
  <Select
    v-model:model-value="pocket.main.champion"
    v-model:open="open">
    <slot :open>
      <Card
        v-if="type === 'card'"
        ref="trigger"
        :class="cn('flex basis-1/5  items-center pr-0', className)">
        <CardContent
          as="button"
          :disabled="!pocket.main.champion"
          class="flex gap-3 py-3 px-4 items-center grow group/c cursor-pointer **:pointer-events-none  disabled:pointer-events-none"
          @click="pocket.main.champion ? navigateTo(`/chamions/${pocket.main.champion}`) : null">
          <Element
            variant="btn"
            shape="square"
            class="overflow-hidden shadow-sm drop-shadow-sm relative after:bg-black/70 after:inset-0 after:z-1  after:absolute after:opacity-0 group-hover/c:after:opacity-100 after:transition-opacity after:duration-300 size-16">
            <icon
              v-if="!pocket?.main?.champion"
              name="lp:champ"
              class="text-bc/20 size-10" />
            <Champion
              v-else
              v-memo="[pocket.main?.champion]"
              class="*:scale-160"
              :img="ix().getSplash(pocket.main?.champion, 'tile')" />

            <icon
              name="open"
              class="absolute place-self-center text-white/60 z-2 size-6 transition-opacity duration-300 group-hover/c:opacity-100 opacity-0" />
          </Element>

          <div class=" @6xl:block @6xl:animate-in @6xl:slide-in-from-right @6xl:fade-in hidden flex gap-2 flex-col overflow-hidden shrink">
            <h3
              v-memo="[pocket.main?.champion]"
              :class="cn('truncate leading-7', {
                'dss group-hover/c:underline': pocket.main?.champion,
                '!font-normal  opacity-10': !pocket.main?.champion,
              })">
              {{ ix().champNameByKey(pocket.main?.champion) || "Champion" }}
            </h3>

            <p
              v-memo="[pocket.main?.champion]"
              :class="cn('text-3 truncate italic leading-none', {
                'font-medium': pocket.main?.champion,
                '!font-normal  opacity-20': !pocket.main?.champion,
              })">
              {{ ix().getChampionTitle(pocket.main?.champion) || 'None Selected' }}
            </p>
          </div>
        </CardContent>

        <JoinSelectTrigger />
      </Card>

      <!-- button trigger -->
      <SelectTrigger
        v-else-if="type === 'btn'"
        class="grid place-items-center h-22  group/btn  z-10  pointer-events-auto **:pointer-events-none cursor-pointer !outline-none">
        <Button
          v-tippy="{ content: !open ? h(HeadingTip, { subheading: 'Main Champion', heading: ix().champNameByKey(pocket?.main?.champion) || 'None Selected', class: 'py-1 min-w-44' }) : null, theme: 'base', placement: 'left' }"
          shape="circle"
          placement="right"
          variant="outline"
          class=" bg-b1/80 dss shadow-sm  !size-16  shadow-black/10 ">
          <span
            v-if="!pocket?.main?.champion"
            class="relative size-full grid place-items-center *:transition-opacity *:duration-200">
            <icon
              name="lp:champ"
              class="text-bc/20 size-full group-hover/btn:opacity-0" />
            <icon
              name="select"
              class="size-8 text-bc/60 absolute opacity-0 group-hover/btn:opacity-100" />
          </span>
          <ChampionIcon
            v-else
            v-memo="[pocket.main?.champion]"
            :k="pocket.main?.champion"
            class="relative">
            <span class="size-full absolute z-11 top-0 opacity-0 left-0 grid group-hover/btn:opacity-100 place-items-center transition-all duration-300 **:text-white/40 bg-black/70">
              <icon
                name="select"
                class="size-8" />
            </span>
          </ChampionIcon>
        </Button>
      </SelectTrigger>
    </slot>
    <LazySelectContent
      :reference="trigger"
      :align
      :side
      class="p-0 w-[var(--reka-select-trigger-width)] top-[calc(var(--reka-select-trigger-height)+2px)] min-w-54">
      <SelectItem
        v-for="champion in pocket.champions"
        :key="champion"
        class="*:flex *:gap-3 *:items-center"
        :value="champion">
        <ChampionIcon
          :k="champion"
          class="size-12" />
        <span class="font-medium">
          {{ ix().champNameByKey(champion) }}
        </span>
      </SelectItem>
    </LazySelectContent>
  </Select>
</template>
