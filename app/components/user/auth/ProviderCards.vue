<script lang="ts" setup>
import { providers as prov } from "~/domain/lp/external/authProviders"

const { identities } = storeToRefs(user())

const safeId = computed(() => safeObject(identities.value))

const providers = computed(() => safeObject(prov))
</script>

<template>
  <label
    v-for="(provider, i) in providers"
    :key="i"
    class="h-max w-full cursor-pointer"
    :for="provider.label">
    <UCard
      color="base"
      variant="outline"
      :ui="{
        root: 'pointer-events-none h-max! rounded-xl hover:inset-ring-pc/60',
        body: 'flex items-center gap-3 p-4!'
      }">
      <div class="relative">
        <UAvatar
          :icon="String(provider.icon)"
          :src="safeId[provider.label]?.avatar"
          size="3xl" />
        <div
          v-if="safeId[provider.label]"
          class="absolute -right-1.5 -bottom-0.5 z-1 grid size-6 shrink-0 place-items-center rounded-full bg-p0">
          <UAvatar
            :icon="String(provider.icon)"
            size="2xs"
            :ui="{
              icon: cn('drop-shadow-none **:text-white/90!', provider.class),
              root: cn(twBg[provider.label])
            }" />
        </div>
      </div>
      <div class="flex w-full flex-col gap-0.5">
        <h3
          class="truncate text-lg leading-none font-bold text-pc/80 capitalize">
          {{ provider.label }}
        </h3>

        <div class="inline-flex w-full items-center gap-1 align-baseline">
          <h6 v-if="safeId[provider.label]">
            {{ safeId[provider.label]?.name }}
          </h6>
          <span class="grow text-xs text-n5">{{
            safeId[provider.label]
              ? safeId[provider.label]?.description
              : `Connect with ${capitalize(provider.label)}`
          }}</span>
        </div>
      </div>
      <UButton
        :id="provider.label"
        size="xs"
        :color="safeId[provider.label] ? 'base' : 'neutral'"
        :variant="safeId[provider.label] ? 'outline' : 'solid'"
        :label="safeId[provider.label] ? 'Disconnect' : 'Connect'"
        :ui="{
          label: 'text-xs',
          base: safeId[provider.label]
            ? 'self-start shadow-none drop-shadow-none'
            : ''
        }" />
    </UCard>
  </label>
</template>
