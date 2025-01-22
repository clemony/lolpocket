<script lang="ts" setup>
  import { stats } from 'shared/data/item'
  import { types } from 'shared/data/item'

  const props = defineProps<{
    pocket: pocket
  }>()

  const sortItemsAZ = ref(0)
  const sortPrice = ref(0)

  const classObject = 'w-68 h-88 border-b2 px-3'

  const { counter, reset, pause, resume } = useInterval(2000, { controls: true })

  const statImgs = [['lux'], ['ezreal'], ['braum'], ['ashe']]
  const catImgs = [['shopkeeper'], ['heimer-tools'], ['sera'], ['sg-soraka']]
  watch(
    () => counter.value,
    (newVal) => {
      if (newVal > 3) {
        reset()
      }
    }
  )
</script>

<template>
  <div class="w-full flex items-center flex-nowrap gap-4 !h-20 px-6">
    <ItemSearch
      placeholder="Items"
      input-class="text-5 text-bc "
      class="!h-full [&_svg]:size-6 shadow-none border-0 px-0 **:[&_svg]:!pb-2.5" />
    <Grow />

    <div class="flex gap-3">
      <ToggleStateButton
        class="tracking-tight btn-ghost btn-md font-normal"
        @click.stop
        v-model:model="sortItemsAZ"
        @update:model="(v) => (ts.sortItemsAZ = v)">
        <span class="dst">Aa</span>
      </ToggleStateButton>

      <ToggleStateButton
        @click.stop
        class="tracking-tight btn-ghost btn-md px-4 !text-3"
        :model="sortPrice"
        @update:model="(v) => (ts.sortPrice = v)">
        <span class="">$</span>
      </ToggleStateButton>
    </div>

    <NavigationMenu disable-click-trigger>
      <NavigationMenuList class="gap-0">
        <NavigationMenuItem>
          <NavigationMenuTrigger class="text-3 !mx-0 dst font-normal !h-16 !px-4 dst">Stats</NavigationMenuTrigger>

          <NavigationMenuContent class="!pr-0">
            <div
              :class="classObject"
              class="grid relative">
              <div class="bg-b1/20 backdrop-contrast-95 backdrop-blur-sm absolute z-10 h-12 w-full flex items-center pl-6 !pr-0 left-0">Stats</div>

              <ul class="grid w-full overflow-y-auto h-full **:tracking-tight relative z-0 [&_label]:text-nowrap !pr-0 [&_label]:truncate pt-12">
                <li v-for="stat in stats">
                  <Label
                    variant="ghost"
                    size="sm"
                    :for="stat.id"
                    class="flex gap-4 items-center cursor-pointer hover:bg-b3/50 font-normal text-bc">
                    <input
                      type="checkbox"
                      class="checkbox checked:bg-neutral checked:text-white checkbox-sm rounded-sm"
                      :id="stat.id" />
                    {{ stat.displayName }}
                  </Label>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
          <!-- <NavigationMenuViewport class="right-39 top-0.5" /> -->
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger class="!text-3 dst !mx-0 !px-4 font-normal h-16">Categories</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div
              :class="classObject"
              class="grid">
              <div class="w-full pl-5 absolute h-12 flex z-10 items-center right-0 dst">Categories</div>

              <ul class="py-4 pt-12 **:tracking-tight">
                <li v-for="type in types">
                  <Label
                    variant="ghost"
                    size="sm"
                    :for="type"
                    class="flex gap-4 items-center cursor-pointer hover:bg-b2 font-normal text-bc">
                    <input
                      type="checkbox"
                      class="checkbox checked:bg-neutral checked:text-white checkbox-sm rounded-sm"
                      :id="type" />
                    {{ type }}
                  </Label>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuViewport class="right-2 top-0.5" />
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</template>

<style scoped></style>
