<script lang="ts" setup>
const { champions } = storeToRefs(sData())
const store = matchFilter()
const { filter } = storeToRefs(store)

const model = computed({
  get: () => filter?.value.champion,
  set: (val) => store.setFilter("champion", val)
})
const championList = computed(() => [...(champions.value?.values?.() ?? [])])
</script>

<template>
  <UCollapsible
    :default-open="true"
    :ui="{
      root: 'relative w-full',
      content: 'relative w-full overflow-hidden open:border-b'
    }">
    <UButton
      trailing-icon="i-up"
      label="Champions"
      variant="ghost"
      size="md"
      block
      :ui="{
        base: 'justify-between border-0 open:rounded-b-none open:border-b open:border-b-p3/80 open:bg-transparent! open:fx-0!',
        label: 'grow-0 font-semibold! text-pc/50 group-hover/btn:text-pc',
        trailingIcon:
          'transition-rotate size-4.5 text-pc/70 duration-200 **:stroke-[2.2] group-open/collapse:-rotate-180 group-hover/btn:**:text-pc'
      }" />

    <template #content>
      <Listbox v-model:model-value="model" :multiple="false">
        <ListboxContent
          :class="
            cn(
              'i9 z-auto h-100 max-h-100 w-full space-y-1 overflow-y-auto rounded-xl px-1.5 py-3'
            )
          ">
          <template v-if="!sMatches().loading && sMatches.length">
            <ListboxItem
              v-for="item in championList"
              :key="item.championId"
              as-child
              :class="cn('', { 'sticky top-0 z-2': item.championId === model })"
              :value="item.championId">
              <UButton
                variant="ghost"
                :active="item.championId === model"
                :ui="{
                  base: cn(
                    'grid! w-full max-w-full shrink-0 grid-flow-col grid-cols-[30px_0.8fr_1fr_0.6fr]! justify-start gap-3 overflow-hidden rounded-xl px-3'
                  )
                }"
                size="xl">
                <UAvatar
                  size="xl"
                  :src="`/img/champion/${item.championId}.webp`"
                  icon="i-lol-champ"
                  :ui="{
                    root: 'col-start-1',
                    image: cn(
                      'shadow-xs shadow-black/10 drop-shadow-xs drop-shadow-black/30 on:duration-800',
                      model && item.championId !== model
                        ? 'grayscale opacity-90'
                        : ''
                    )
                  }" />
                <div class="grid justify-start text-start">
                  <span class="font-semibold text-pc">
                    {{ item.championName }}
                  </span>
                  <span class="text-xs! text-n5">
                    {{ item.kp?.average ?? 0 }}% kp
                  </span>
                </div>

                <div class="grid justify-start text-start">
                  <span class="font-semibold"> {{ item.kda }} kda </span>
                  <span class="text-xs! text-n5">
                    {{ item.kills?.average ?? 0 }} /
                    {{ item.deaths?.average ?? 0 }} /
                    {{ item.assists?.average ?? 0 }}
                  </span>
                </div>

                <template v-if="item.games">
                  <div
                    class="grid justify-end justify-self-end text-end text-xs!">
                    <span class="font-bold">
                      {{ roundDecimalToPercent(item.win, item.games) }}%
                    </span>
                    <span class="text-xs! text-n5">
                      {{ item.games }} games
                    </span>
                  </div>
                </template>
              </UButton>
            </ListboxItem>
          </template>
          <LazyLilKrug v-else />
        </ListboxContent>
      </Listbox>
    </template>
  </UCollapsible>
</template>
