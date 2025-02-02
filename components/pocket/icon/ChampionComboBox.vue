<script lang="ts" setup>
const ds = useDataStore()
const props = defineProps<{
  selectedIcon?: string
  pocket?: pocket
}>()

const ts = useTempStore()
const open = ref(false)

function selectRandomChamp() {
  ts.drawerChampSelectDropdown = useRandom(ds.championNames)
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

          <span class="flex gap-1">
          <CloseButton @click="ts.drawerChampSelectDropdown = null" />
          <RandomButton v-tippy="'Random Champ'" @click="selectRandomChamp" />
          </span>

        </CommandInput>
        <CommandEmpty>No champions found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="champion in ds.championNames" :key="champion"
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
              {{ champion }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandRoot>
    </PopoverContent>
  </Popover>
</template>

<style scoped>

</style>
