<script setup lang="ts">
import * as locales from "@nuxt/ui/locale"
import type Locale from "@nuxtjs/i18n"
import type { LocaleOptions } from "~~/shared/types"

const { locale, setLocale } = useI18n()
</script>

<template>
  <ULocaleSelect
    :model-value="locale"
    :locales="Object.values(locales)"
    @update:model-value="setLocale($event as LocaleOptions)" />
</template>
