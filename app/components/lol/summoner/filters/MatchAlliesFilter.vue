<script lang="ts" setup>
import { getSummonerIcon } from "~/domain/utils/img"

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const store = matchFilter()
const { filter } = storeToRefs(store)

const model = computed({
  get: () => filter?.value.ally,
  set: (val) => store.setFilter("ally", val),
})
const { allies } = storeToRefs(sData())
const alliesList = computed(() =>
  (allies.value ?? []).sort((a, b) => b.games - a.games)
)
</script>

<template>
  <UCollapsible :default-open="true" class="w-full">
    <UButton variant="link" block>
      <Separator size="md" label="Allies" underline :ui="{ label: '' }">
        <template #leading>
          <Icon
            name="right"
            class="group-hover/btn:**:text-80 size-4 text-pc/40 **:stroke-[2.6] open:rotate-90" />
        </template>
      </Separator>
    </UButton>

    <template #content>
      <Listbox v-model:model-value="model" :multiple="false">
        <ListboxContent
          class="border-b-b3 h-100 max-h-100 w-full space-y-1 overflow-y-auto border-b px-1.5 py-1">
          <template v-if="!sMatches().loading && sMatches.length">
            <ListboxItem
              v-for="item in alliesList"
              :key="item.name"
              as-child
              :value="item.puuid ?? ''">
              <UButton
                variant="ghost"
                :ui="{
                  base: cn(
                    'w-full max-w-full shrink-0 justify-start gap-3 overflow-hidden px-2',
                    {
                      'opacity-74 grayscale': model && item.puuid !== model,
                    }
                  ),
                }"
                size="xl">
                <UUser
                  size="lg"
                  :name="item.name"
                  :description="`#${item.tag}`"
                  :ui="{
                    root: 'grow ',
                    wrapper: 'text-start items-center',
                  }"
                  :avatar="{
                    src: getSummonerIcon(item.icon),
                    icon: 'lol:champ',
                  }" />
                <template v-if="item.games">
                  <div
                    class="col-start-2 grid justify-end justify-self-end text-end text-xs! text-pc">
                    <span> {{ item.win }} win </span>
                    <span>
                      {{ Number(item.games) - Number(item.win) }} loss
                    </span>
                  </div>
                  <div class="size-12">
                    <ChampWinrate v-if="item.games" :ally="item" :size="32" />
                  </div>
                </template>
              </UButton>
            </ListboxItem>
          </template>

          <template v-else-if="sMatches().loading">
            <div
              v-for="i in 5"
              :key="i"
              class="pointer-events-none ml-3 grid w-[94%] grid-cols-[22px_1fr] items-center gap-4 self-center py-1.5 opacity-60 btn-ghost">
              <Skeleton class="size-8.5 rounded-full" />

              <Skeleton class="h-9 w-full" />
            </div>
          </template>

          <LilKrug v-else />

          <!--              <Icon
                  v-if="
                    ally === allies.sort((a, b) => b.synergy - a.synergy)[0]
                  "
                  class="ml-1 inline size-3.5 align-bottom ds-2xs **:text-pc/80!"
                  name="ion:star" /> -->
        </ListboxContent>
      </Listbox>
    </template>
  </UCollapsible>
</template>
