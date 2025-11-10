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
          class="
            *:transition-scale *:duration-300
            relative grid size-20 place-items-center overflow-hidden
            **:pointer-events-none
            hover:*:scale-110
          ">
          <icon
            v-if="!pocket?.main?.champion"
            name="lp:champ"
            class="size-10 text-bc/20" />
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
      class="w-[var(--reka-select-trigger-width)] min-w-54 p-0">
      <div class="flex gap-3">
        <ChampionIcon
          :k="pocket.main?.champion"
          class="size-12" />
        <div class="k flex flex-col gap-1">
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
            :class="cn('truncate text-3 leading-none italic', {
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
        class="*:flex *:items-center *:gap-3"
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
