<script lang="ts" setup>
import { PopoverClose } from 'reka-ui'

const props = defineProps<{
  selectedIcon?: string
  pocket?: pocket
}>()
const ds = useDataStore()
const ts = useTempStore()
const open = ref(false)

function selectRandomChamp() {
  ts.championSplashDropdown = getRandom(ds.championNames)
}

onMounted (() => {
  selectRandomChamp()
})
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <button
        role="combobox"
        :aria-expanded="open"
        class="w-54 text-3 border-neutral/20 justify-between h-11 btn btn-outline rounded-lg inset-shadow-sm hover:bg-b2/30"
      >
        {{ ts.championSplashDropdown || 'Champion' }}
        <icon name="select" class="size-4.5" />
      </button>
    </PopoverTrigger>
    <PopoverContent class="w-54 p-0 isolate z-80">
      <Command v-model="ts.championSplashDropdown">
        <CommandInput placeholder="Search...">
          <span class="flex gap-1">
            <CloseButton @click="ts.championSplashDropdown = null" />
            <RandomButton v-tippy="'Random Champ'" @click="selectRandomChamp" />
          </span>
        </CommandInput>
        <CommandEmpty>No champions found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="champion in ds.championNames" :key="champion"
              :value="champion"
              as-child
              @select="ts.championSplashDropdown = champion"
            >
              <PopoverClose class="w-full">
                <icon
                  name="tick-sm"
                  :class="cn(
                    'mr-2 h-4 w-4',
                    ts.championSplashDropdown === champion ? 'opacity-100' : 'opacity-0',
                  )"
                />
                {{ champion }}
              </PopoverClose>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>

<style scoped>

</style>
