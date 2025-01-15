<script setup lang="ts">
  import { icons } from 'assets/img/pocketIcons'

  const ds = useDataStore()
  const iconStore = icons

  const props = defineProps<{
    selectedIcon: string
    bgColor: string
    iconColor: string
    pocketKey?: string
    isShown?: boolean
  }>()

  const selectedIcon = ref('teenyicons:folder-outline')
  const bgColor = ref('')
  const iconColor = ref('')

  const emit = defineEmits(['update:selectedIcon', 'update:isShown'])

  const pocket = getPocket(props.pocketKey)

  const modelValue = ref('symbols')
  watch(
    () => props.bgColor,
    (newVal) => {
      bgColor.value = newVal
    },
    { immediate: true }
  )

  watch(
    () => props.iconColor,
    (newVal) => {
      iconColor.value = newVal
    },
    { immediate: true }
  )

  function handleChange(icon) {
    if (pocket) {
      pocket.icon = icon
    }
    emit('update:selectedIcon', icon)
  }

  const isShown1 = props.isShown

  const regex = /\.webp/g
  const iconImg = computed(() => {
    const match = selectedIcon.value.match(regex) ? true : false
    return match
  })
</script>

<template>
  <div class="mt-3 mb-3 flex items-center gap-12">
    <h4 class="!text-4 grow pt-3 pl-1">
      Create
      <br />
      Icon
    </h4>
    <div class="grid gap-3 pr-0">
      <Label class="mb-px">Preview</Label>
      <Button
        size="icon"
        class="size-14.5 overflow-hidden">
        <div
          v-if="iconImg"
          class="grid size-full place-items-center">
          <img
            :src="selectedIcon"
            class="scale-[115%]" />
        </div>

        <div
          v-else
          class="grid size-full place-items-center !p-3"
          :style="{
            backgroundColor: bgColor,
            color: iconColor,
          }">
          <icon
            v-if="selectedIcon"
            :style="{ color: iconColor }"
            :name="`${selectedIcon}`"
            class="size-full object-contain" />
        </div>
      </Button>
    </div>
    <div class="grid gap-3 justify-self-end overflow-y-auto">
      <Label class="">Colors</Label>
      <div class="flex gap-4">
        <DropdownMenu>
          <Tooltip
            :disabled="!iconImg"
            dark
            align="center"
            side="top"
            content="Color not available for image type">
            <DropdownMenuTrigger
              class="rounded-md"
              :disabled="iconImg">
              <Button
                :disabled="iconImg"
                variant="outline"
                size="icon"
                class="hover:border-neutral/60 group size-15 inset-shadow-sm transition-colors duration-300"
                :style="{
                  backgroundColor: bgColor,
                  color: bgColor,
                }">
                <icon
                  name="mingcute:color-picker-fill"
                  class="size-7 contrast-[600%] grayscale invert saturate-0 group-disabled:opacity-60" />
              </Button>
            </DropdownMenuTrigger>
          </Tooltip>
          <DropdownMenuContent>
            <ColorPicker v-model:bg-color="bgColor" />
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <Tooltip
            :disabled="!iconImg"
            dark
            align="center"
            side="top"
            content="Color not available for image type">
            <DropdownMenuTrigger
              class="rounded-md"
              :disabled="iconImg">
              <Button
                variant="outline"
                size="icon"
                :disabled="iconImg"
                class="hover:border-neutral/60 group size-15 inset-shadow-sm transition-colors duration-300"
                :style="{
                  backgroundColor: iconColor,
                  color: iconColor,
                }">
                <icon
                  name="mingcute:color-picker-fill"
                  class="size-7 contrast-[600%] grayscale invert saturate-0 group-disabled:opacity-60" />
              </Button>
            </DropdownMenuTrigger>
          </Tooltip>
          <DropdownMenuContent>
            <ColorPicker v-model:icon-color="iconColor" />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </div>

  <Tabs
    v-model="modelValue"
    default-value="Icons"
    class="flex w-full flex-col items-start">
    <div class="flex w-full pr-0">
      <TabsList class="">
        <TabsTrigger value="symbols">Symbols</TabsTrigger>
        <TabsTrigger value="champions">Champions</TabsTrigger>
      </TabsList>
    </div>
  </Tabs>
  <div
    v-if="modelValue == 'symbols'"
    value="symbols"
    class="max-h-inherit bg-b2/30 border-b2/70 max-h-inherit flex h-[45%] w-full flex-row flex-wrap justify-evenly gap-2 overflow-y-scroll rounded-lg border px-2 py-4 inset-shadow-xs">
    <Label
      v-for="icon in iconStore"
      variant="ghost"
      class="has-checked:bg-b2/60 has-checked:shadow-standard aspect-square size-14 self-center rounded-md border-transparent p-3.5">
      <input
        v-if="pocket && pocket.icon"
        v-model="pocket.icon"
        type="radio"
        name="iconPicker"
        :value="icon"
        class="peer hidden" />

      <input
        v-else
        v-model="selectedIcon"
        type="radio"
        name="iconPicker"
        :value="icon"
        class="peer hidden"
        @change="handleChange(icon)" />

      <icon
        v-if="icon"
        :name="icon"
        class="text-bc size-full shrink-0 drop-shadow-sm" />
    </Label>
  </div>

  <div
    v-if="modelValue == 'champions'"
    value="champions"
    class="max-h-inherit bg-b2/30 border-b2/70 max-h-inherit flex h-[45%] w-full flex-row flex-wrap justify-evenly gap-2 overflow-y-scroll rounded-lg border px-2 py-4 inset-shadow-xs">
    <Label
      v-for="champion in ds.champions"
      variant="outline"
      class="shadow-warm has-checked:bg-b2/60 border-b2 grid aspect-square size-14 place-items-center self-center overflow-hidden rounded-lg border">
      <input
        v-if="pocket"
        v-model="pocket.icon"
        type="radio"
        name="iconPicker"
        :value="`/img/champions/${champion.apiname}.webp`"
        class="peer hidden" />

      <input
        v-else
        v-model="selectedIcon"
        type="radio"
        name="iconPicker"
        :value="`/img/champions/${champion.apiname}.webp`"
        class="peer hidden"
        @change="handleChange(`/img/champions/${champion.apiname}.webp`)" />

      <img
        :src="`/img/champions/${champion.apiname}.webp`"
        class="size-14 scale-110" />
    </Label>
  </div>
</template>

<style scoped></style>
