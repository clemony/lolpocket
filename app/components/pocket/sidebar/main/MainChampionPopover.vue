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
      <SelectTrigger as-child>
        <Button
          variant="ghost"
          class="overflow-hidden relative *:transition-scale *:duration-300 size-20 hover:*:scale-110  grid place-items-center   **:pointer-events-none ">
          <icon
            v-if="!pocket?.main?.champion"
            name="lp:champ"
            class="text-bc/20 size-10" />
          <ChampionIcon
            v-else
            v-memo="[pocket.main?.champion]"
            class="size-14 rounded-full"
            :k="pocket.main?.champion" />

          <!--           <icon
            name="select"
            class=" size-4 absolute right-1.5" /> -->
        </Button>
      </SelectTrigger>
    </slot>
    <LazySelectContent
      :reference="trigger"
      :align
      :side
      class="p-0 w-[var(--reka-select-trigger-width)]  min-w-54">
      <div class="flex gap-3">
        <ChampionIcon
          :k="pocket.main?.champion"
          class="size-12" />
        <div class=" flex gap-1 flex-col k">
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
      </div>
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
