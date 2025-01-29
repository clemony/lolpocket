<script lang="ts" setup>
const props = defineProps<{
  selectedIcon?: string
  pocket?: pocket
  champNames: string[]
}>()

const ts = useTempStore()
const open = ref(false)

function selectRandomChamp() {
  ts.drawerChampSelectDropdown = useRandom(props.champNames)
}


</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-54 justify-between h-11"
      >
        {{ ts.drawerChampSelectDropdown || 'Champion' }}
        <icon name="select" class="size-4.5" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-54 p-0 isolate z-80">
      <CommandRoot v-model="ts.drawerChampSelectDropdown">
        <CommandInput placeholder="Search...">
          <button v-tippy="'Clear'" variant="ghost" size="icon" class="btn btn-xs size-6  aspect-square" @click="ts.drawerChampSelectDropdown = null">
            <icon name="x" class="size-3 shrink-0" />
          </button>
          <span class="size-2"></span>
          <button v-tippy="'Random Champ'" variant="ghost" size="icon" class="btn size-6 btn-xs aspect-square" @click="selectRandomChamp">
            <icon name="qlementine-icons:shuffle-16" class="size-3.5 shrink-0" />
          </button>
        </CommandInput>
        <CommandEmpty>No champions found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="champion in champNames" :key="champion"
              :value="champion"
              @select="ts.drawerChampSelectDropdown = champion"
            >
              <icon
                name="tick-sm"
                :class="cn(
                  'mr-2 h-4 w-4',
                  ts.drawerChampSelectDropdown === champion ? 'opacity-100' : 'opacity-0',
                )"
              />
              {{ champion}}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandRoot>
    </PopoverContent>
  </Popover>
</template>

<style scoped>

</style>
