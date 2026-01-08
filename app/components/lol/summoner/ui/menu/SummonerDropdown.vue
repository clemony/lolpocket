<script lang="ts" setup>
const {
  base = 'btn',
  class: className,
  data: s,
  hover = 'base',
  on = 'base',
  size,
  variant = 'ghost',
} = defineProps<{
  class?: HTMLAttributes['class']
  data: MaybeRef<Summoner>
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
  base?: ButtonVariants['base']
  on?: ButtonVariants['on']
  hover?: ButtonVariants['hover']
}>()

const summoner = computed (() => toValue(s))

const open = shallowRef<boolean>(false)

function handleBlock() {
  open.value = false
  ui().blockDialog = true
}
</script>

<template>
  <tippy
    :interactive="true"
    animation="shift-toward"
    theme="base clean">
    <Button
      size="9"
      :class="
        cn('relative flex gap-2 overflow-hidden p-0',
           buttonVariants({ size, hover, variant, base, on }),
           { 'btn-active': open,
             'w-full-pl-0 rounded-full': !size,
           },
           className,
        )
      ">
      <LazySummonerIcon
        v-if="summoner"
        :summoner
        class="size-8 rounded-full shadow-sm drop-shadow-sm" />

      <SummonerName
        :summoner
        class="w-full truncate text-5 font-semibold" />
    </Button>

    <template #content>
      <div class="w-64! p-1.5">
        <div
          class="
          grid auto-rows-fr grid-cols-2 items-center gap-y-1 py-2 pr-4 pl-3
          *:odd:opacity-50 *:even:justify-self-end
        ">
          <span class="flex items-center gap-1.5 font-medium opacity-60">
            <icon
              name="lucide:user"
              class="size-3.5 **:stroke-[2.1]" />name:
          </span>
          <SummonerName
            :summoner
            class="" />

          <span class="flex items-center gap-1.5 font-medium opacity-60">
            <icon
              name="hash"
              class="size-3.5 **:stroke-[2.1]" />tag:
          </span>
          <SummonerTag
            :summoner
            no-tag
            class="" />
          <span class="flex items-center gap-1.5 font-medium opacity-60">
            <icon
              name="at"
              class="size-3.5 **:stroke-[2.1]" />region:
          </span>
          <SummonerRegion
            class="opacity-80"
            :summoner
            no-icon />

          <span class="flex items-center gap-1.5 font-medium opacity-60">
            <span
              class="relative grid size-3.5 place-items-center overflow-hidden">
              <icon
                name="gg:loadbar-sound"
                class="absolute size-5.5" /></span>
            level:
          </span>
          <SummonerLevel
            no-tag
            class="-mt-px opacity-80"
            :summoner />
        </div>
        <Separator />
        <SummonerToolbar
          :summoner
          warning
          update />
      </div>
    </template>
  </tippy>
  <LazyBlockDialog
    :summoner />
</template>
