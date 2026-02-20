<script setup lang="ts">
const { locale, setLocale } = useI18n()
</script>

<template>
  <USelect
    v-model:model-value="locale"
    size="sm"
    :content="{
      sideOffset: 3,
    }"
    :items="localeOptions"
    value-key="code"
    :icon="`i-i18n-${locale}`"
    :ui="{
      base: 'w-44 font-medium',
      leadingIcon: '**:text-n3 size-4.5',
      itemLabel: 'font-medium',
    }"
    label-key="name"
    @update:model-value="setLocale($event as LocaleCode)">
    <template #item-leading="{ item }">
      <span class="grid place-items-center place-self-center">
        <Icon
          :name="`i-i18n-${item.code.toLowerCase()}`"
          :class="
            cn('size-4.5 **:text-n3', {
              'scale-110': ['en', 'es', 'zh_TW'].includes(item.code),
            })
          " />
      </span>
    </template>
  </USelect>
</template>
