<script lang="ts" setup>
import type { CommandPaletteItem } from "@nuxt/ui"
import { internalInputProps } from "./useCommand"
import type { CommandGroup, CommandItem } from "./useCommandGroups"
import { useCommandGroups } from "./useCommandGroups"

const { reference } = defineProps<{
  reference: HTMLElement | null
}>()
const selected = ref<CommandItem["value"] | null>(null)

const hotkeysOpen = shallowRef<boolean>(false)
const inSubmenu = ref<boolean>(false)
const selectedName = shallowRef<string[]>([""])
const menuLevel = shallowRef<number>(0)
const { defaultGroups } = useCommandGroups(menuLevel, selectedName)

const route = useRoute()

const routeComponent = computed(() => route.matched[0]?.meta?.command ?? null)

function onBackClick(_event: MouseEvent): void {
  //inSubmenu.value = false
  menuLevel.value = menuLevel.value - 1
}

watch(
  () => menuLevel.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
    if (v === 0) {
      selectedName.value = [""]
    }
  },
)

function asCommandItem(item: unknown): CommandItem {
  return item as CommandItem
}

function openHotkeys(): void {
  menuLevel.value += 1
}
watch(
  () => selected.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  },
)
const { account, inbox } = storeToRefs(user())

onMounted(() => {
  menuLevel.value = 0
})
</script>

<template>
  <UCommandPalette
    v-model:model-value="selected"
    value-key="value"
    :autofocus="false"
    :multiple="false"
    :highlight-on-hover="false"
    selection-behavior="replace"
    :input="{ ...internalInputProps, disabled: true }"
    :placeholder="selectedName[menuLevel] || 'Menu'"
    :content="{
      input: {
        icon: false,
      },
    }"
    :back="{
      size: '2xs',
      variant: 'solid',
      color: 'neutral',
      onClick: onBackClick,
    }"
    back-icon="i-arrow-left"
    :groups="defaultGroups"
    :ui="{
      root: 'h-max max-h-180 w-full [&_svg]:size-4.25 [&_svg]:**:stroke-[2.4]',
      back: '',
      input: cn(
        'h-10! border-b border-b-p3 p-0 ring-0! [&_input]:pl-12! [&_input]:opacity-100 [&_input]:placeholder:font-semibold [&_input]:placeholder:capitalize [&_input]:disabled:placeholder:text-n5 [&_span]:w-full [&_span]:px-4',
        menuLevel ? '' : 'hidden  [&_svg]:hidden!',
      ),
      label: cn('after:hidden', menuLevel ? 'hidden ' : 'absolute -top-10'),
      item: cn('px-2! py-0!', menuLevel ? 'px-3!' : ' '),
      itemLabelSuffix:
        'inline align-middle text-xs leading-none font-normal! text-n5 normal-case',
      group: cn(
        'col-span-2 w-full overflow-x-hidden border-0 px-4 pt-2 [&:nth-child(3)]:col-span-1 [&:nth-child(3)]:pr-2 [&:nth-child(4)]:col-span-1 [&:nth-child(4)]:pl-2',
        menuLevel ? 'px-2' : ' ',
      ),
      itemLabelBase: 'inline-flex items-center align-middle leading-none',
      viewport: cn(
        'grid grid-cols-2 overflow-y-auto p-0!',
        hotkeysOpen ? 'h-172' : ' ',
      ),
      content: cn(
        'grid h-max w-full flex-1 auto-rows-max items-start overflow-y-auto p-0!',
      ),
      itemTrailingIcon: 'opacity-40 group-hover/item:opacity-100',
    }">
    <template #route="{ item }">
      <component
        :is="routeComponent"
        v-if="routeComponent"
        :item="asCommandItem(item)" />
    </template>

    <template #item-trailing="{ item }">
      <Icon
        :name="asCommandItem(item).trailingIcon ?? 'i-ui-none'"
        :class="
          cn(
            '-translate-y-px opacity-70 group-hover/item:opacity-100',
            asCommandItem(item).ui?.itemTrailingIcon,
          )
        " />
    </template>
    <template #label="{ item }">
      <div
        class="flex h-max! w-full -translate-x-1 flex-col gap-1 pt-6 pb-2 before:absolute before:top-0 before:w-5/4 before:-translate-x-6 before:border-t before:border-p3">
        <h6
          :class="
            cn('text-sm leading-none font-semibold text-pc', {
              'opacity-0': asCommandItem(item).id === 'browse',
            })
          ">
          {{ asCommandItem(item).label }}
        </h6>
        <p class="text-start leading-6 font-normal! text-n4 normal-case!">
          {{ asCommandItem(item).suffix }}
        </p>
      </div>
    </template>
    <template #library-item-leading="{ item }">
      <div class="relative mr-1 grid size-4 place-items-center">
        <span
          class="grid size-5! -translate-y-px place-items-center rounded-full bg-neutral shadow-xs drop-shadow-xs">
          <Icon
            :name="
              asCommandItem(item).label === 'Items'
                ? 'i-streamline-sharp-sword-attack-solid'
                : asCommandItem(item).label === 'Spells'
                  ? 'i-tdesign-address-book-filled'
                  : asCommandItem(item).icon
            "
            :class="
              cn('scale-80 text-nc!', asCommandItem(item).ui?.itemLeadingIcon, {
                '-scale-x-80 scale-y-80': asCommandItem(item).label === 'Items',
                'scale-105 drop-shadow-[2_2_0_var(--color-p0)]':
                  asCommandItem(item).label === 'Runes',
              })
            " />

          <!--     <LazyUAvatar
            :src="
              asCommandItem(item).label === 'Items'
                ? `/img/items/${getRandom(itemIndex.map((v) => v.id))}.webp`
                : asCommandItem(item).label === 'Spells'
                  ? `/img/spells/${getRandom(Object.values(spellIndex).map((v) => v.id))}.webp`
                  : asCommandItem(item).label === 'Runes'
                    ? `/img/runes/${getRandom(runeIndex.map((v) => v.id))}.webp`
                    : asCommandItem(item).label === 'Champions'
                      ? `/img/champions/${getRandom(championIndex.map((v) => v.id))}.webp`
                      : ''
            "
            :alt="asCommandItem(item).label"
            size="2xs" /> -->
        </span>
      </div>
    </template>
    <template #library-item-label="{ item }">
      <span class="font-medium">{{ asCommandItem(item).label }}</span>
    </template>
    <template #library-item-trailing>
      <Icon
        name="link"
        class="size-3.5 text-n5 **:stroke-2! group-hover/item:text-pc" />
    </template>
    <template #link-trailing>
      <Icon
        name="link"
        class="size-3.5 text-n5 **:stroke-2! group-hover/item:text-pc" />
    </template>
    <template #inbox-label="{ item }">
      <span
        v-if="asCommandItem(item).label === 'Inbox'"
        class="inline-flex w-full grow items-center gap-1">
        <span class="grow font-medium! text-pc!">{{
          asCommandItem(item).label
        }}</span>
        <UBadge
          size="xs"
          variant="outline"
          class="inline-block align-middle text-xs text-n5 normal-case!">
          {{ inbox?.messages.filter((m) => !m.read).length ?? 0 }}
          unread</UBadge
        >
      </span>
    </template>

    <!-- item-command -->
    <template #item-command="{ item }">
      <LazyItemCommand :id="(item as CommandPaletteItem).id" />
    </template>
    <!-- spell-command -->
    <template #spell-command="{ item }">
      <LazySpellCommand :id="(item as CommandPaletteItem).id" />
    </template>

    <!-- footer -->

    <template #footer>
      <CommandFooter
        :reference="reference"
        @update:open-hotkeys="(e) => (hotkeysOpen = e)" />
    </template>
  </UCommandPalette>
</template>
