<script lang="ts" setup>
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
  <Select v-model:model-value="pocket._champion" v-model:open="open">
    <slot :open>
      <SelectTrigger as-child>
        <Button
          class="*:transition-scale relative grid size-20 place-items-center overflow-hidden *:duration-300 **:pointer-events-none hover:*:scale-110"
          variant="ghost"
        >
          <icon
            v-if="!pocket?._champion"
            class="size-10 text-bc/20"
            name="lp:champ"
          />
          <ChampionIcon
            v-else
            v-memo="[pocket._champion]"
            class="size-14 rounded-full"
            :k="pocket._champion"
          />

          <!--           <icon
            name="up-down"
            class=" size-4 absolute right-1.5" /> -->
        </Button>
      </SelectTrigger>
    </slot>
    <LazySelectContent
      class="w-(--reka-select-trigger-width) min-w-54 p-0"
      :reference="trigger"
      :align
      :side
    >
      <div class="flex gap-3">
        <ChampionIcon class="size-12" :k="pocket._champion" />
        <div class="k flex flex-col gap-1">
          <h3
            v-memo="[pocket._champion]"
            :class="
              cn('truncate leading-7', {
                'dss group-hover/c:underline': pocket._champion,
                'font-normal! opacity-10': !pocket._champion,
              })
            "
          >
            {{ champNameByKey(pocket._champion) || "Champion" }}
          </h3>

          <p
            v-memo="[pocket._champion]"
            :class="
              cn('truncate text-md leading-none italic', {
                'font-medium': pocket._champion,
                'font-normal! opacity-20': !pocket._champion,
              })
            "
          >
            {{ championToTitle[pocket._champion] || "None Selected" }}
          </p>
        </div>
      </div>
      <SelectItem
        v-for="champion in pocket.champions"
        :key="champion"
        class="*:flex *:items-center *:gap-3"
        :value="champion"
      >
        <ChampionIcon class="size-12" :k="champion" />
        <span class="font-medium">
          {{ champNameByKey(champion) }}
        </span>
      </SelectItem>
    </LazySelectContent>
  </Select>
</template>
