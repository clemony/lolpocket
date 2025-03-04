<script setup lang="ts">
import { useFuse } from '@vueuse/integrations/useFuse'

const ps = usePocketStore()
const ds = useDataStore()
const ts = useTempStore()

const keys = useMagicKeys()

if (getDevice() == 'MacOS') {
  whenever(keys.meta_k, () => {
    ts.commandOpen = true
  })
}
else if (getDevice() == 'Windows') {
  whenever(keys.ctrl_k, () => {
    ts.commandOpen = true
  })
}

const els = [
  {
    name: 'pockets',
    data: ps.pockets,
    // comp: ,
  },
  {
    name: 'items',
    data: ds.SRitems,
    // comp: ,
  },
  {
    name: 'champions',
    data: ds.champions,
    // comp: ,
  },
  {
    name: 'runes',
    data: ds.paths,
    // comp: ,
  }, // ,{
  // name: 'summoners',
  // data: ,
  // comp: ,
  // },
]

const list = ref()
const input = ref()
const query = ref('')
const category = ref()

function search() {
  const data = ref()
  const options = {
    keys: ref(),
  }
  if (category.value) {
    data.value = category.value
    options.keys.value = ['name', 'nickname']
  }

  const { results } = useFuse(input, data.value)
}

function handleClick(item) {}
</script>

<template>
  <CommandDialog v-model:open="ts.commandOpen" :overlay-opacity="60" class=" ">
    <div class="py-1 px-2 size-full **:text-3 inset-shadow-sm border !border-b3 !rounded-xl">
      <CommandInput
        v-model:model-value="input"
        v-model:search-term="query"
        placeholder="Type a search term or browse..." class="pl-1 !h-12 pt-3.5 bg-transparent"
      />
      <CommandList ref="list">
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Suggestions" class="*:flex *:items-center *:gap-4 *:[&_span]:nth-of-type-[2]:opacity-70">
          <CommandItem value="pockets" @click="category = ps.pockets">
            <div class="grow flex gap-4 group i-c  text-start cursor-pointer">
              <icon name="folders" class="size-4 text-bc ml-px shrink-0 dst" />

              <span class=" grow group-hover:underline underline-offset-2">Pockets</span>

              <span class="px-2">{{ getDeviceKey() }} P</span>
            </div>
          </CommandItem>

          <CommandItem value="champions" @click="category = ds.champions">
            <div class="grow group text-start cursor-pointer i-c flex gap-4">
              <i-no-champ class="size-7 shrink-0 dst  -ml-1.25 -mr-1.25" />

              <span class="grow">
                Champions
              </span>
              <span class="px-2">{{ getDeviceKey() }} C</span>
            </div>
          </CommandItem>

          <CommandItem value="items" @click="category = ds.SRitems">
            <div class="grow group  i-c text-start cursor-pointer flex gap-4  i-c">
              <icon name="bow" class="size-5 dst -mr-px" />
              <div class="grow group text-start cursor-pointer">
                <span class="grow">
                  Items
                </span>
              </div>
              <span class="px-3 tracking-wider">{{ getDeviceKey() }} I</span>
            </div>
          </CommandItem>

          <CommandItem value="runes" @click="category = ds.paths">
            <div class="grow group text-start cursor-pointer flex gap-4">
              <i-rune-icon class="size-6 dst -ml-0.75 -mr-0.5" />
              <span class="grow">
                Runes
              </span>
              <span class="px-2">{{ getDeviceKey() }} R</span>
            </div>
          </CommandItem>

          <CommandItem value="summoners" @click="handleClick('summoners')">
            <div class="grow group text-start cursor-pointer flex  gap-3.5 i-c">
              <icon name="material-symbols-light:person-play-outline" class="size-6  -ml-0.75 dst" />
              <span class="grow">
                Summoners
              </span>
              <span class="px-2">{{ getDeviceKey() }} S</span>
            </div>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem v-for="item in settingLinks" :key="item.name" :value="item.name" @click="handleClick(item.name)">
            <div class="grow group text-start cursor-pointer">
              <NuxtLink :to="item.link" class="w-full gap-4 flex items-center capitalize">
                <icon :name="item.icon" class="size-5" />
                {{ item.name }}
              </NuxtLink>
            </div>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </div>
  </CommandDialog>
</template>

<style scoped></style>
