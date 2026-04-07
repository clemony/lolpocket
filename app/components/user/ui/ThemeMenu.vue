<script lang="ts" setup>
import { themeMenu } from "./buildThemeMenu"

const themePreference = useThemePreference()
const systemTheme = useSystemThemeValue()
const command = inject<Record<string, () => void>>("command")

const themeAccent = useThemeAccentPreference()
function previewTheme(mode: string) {
  return mode === "system" ? systemTheme.value : mode
}

function getThemeItemValue(item: string | { label?: string; value?: string }) {
  if (typeof item === "string") return item

  return item.value ?? item.label ?? "system"
}

function getThemeItemLabel(item: string | { label?: string; value?: string }) {
  if (typeof item === "string") return item

  return item.label ?? item.value ?? "system"
}

const currentThemePreview = computed(() =>
  themePreference.value === "system" ? systemTheme.value : themePreference.value
)

const safeItems = computed(() => themeMenu.value.items.map((v) => v[0]))
</script>

<template>
  <UPopover :items="themeMenu.items" :highlight="false">
    <CommandButton
      :label="themeMenu.trigger.label"
      :icon="themeMenu.trigger.icon">
      <!--  -->
    </CommandButton>
    <template #content>
      <template v-for="item in safeItems" :key="item?.label">
        <div class="w-full">
          {{ item?.label }}
        </div>
      </template>
    </template>
    <!--      <template #trailing>
         <UBadge
        :trailing-icon="
          getThemeItemValue(item) === themePreference ? 'i-tick' : ''
        "
        :data-theme="previewTheme(getThemeItemValue(item))"
        :ui="{
          base: cn(
            'group-hover:noise size-full justify-between bg-p0 px-3 duration-0 group-hover:border-p4 group-hover:bg-p1',
            getThemeItemValue(item) === themePreference
              ? ' border-p4 ring ring-pc/50'
              : ''
          ),
          trailingIcon: '**:stroke-[2.5]',
          label: 'font-semibold text-pc capitalize'
        }"
        :label="getThemeItemLabel(item)" />
      </template> <template #accent="{ item }">
      <UTooltip
        as-child
        :text="item.label"
        :ui="{ content: 'h-max!' }"
        :content="{ side: 'bottom', align: 'start', alignOffset: 14 }">
        <div class="absolute inset-0 grid place-items-center">
          <UBadge
            :data-theme="currentThemePreview"
            :data-accent="item.value"
            :icon="item.value === themeAccent ? 'i-tick' : ''"
            :ui="{
              base: cn(
                'absolute aspect-square size-8 justify-center border-pc/8 bg-accent inset-shadow-xs duration-0 group-hover:border-accent group-hover:brightness-110',
                {
                  'ring  ring-pc/60': item.value === themeAccent
                },
                twBg[item.value]
              ),
              leadingIcon: 'text-white **:stroke-[2.5]'
            }" />
        </div>

        <template #content>
          <div class="p-1">
            <div class="text-sm font-semibold text-nc">
              {{ item.label }}
            </div>
            <p class="my-1 text-xs font-normal! opacity-70">
              "{{ item.description }}"
            </p>
            <div class="mb-1 flex items-center justify-end gap-2 text-end">
              <span class="text-xs font-normal! italic opacity-70">
                —{{ item.champion }}
              </span>
              <UAvatar
                icon="i-riot"
                :ui="{
                  icon: 'size-3.5 text-nc'
                }"
                :src="`/img/champion/${champIdByName(item.champion)}.webp`"
                size="2xs" />
            </div>
          </div>
        </template>
      </UTooltip>
    </template> -->
  </UPopover>
</template>
