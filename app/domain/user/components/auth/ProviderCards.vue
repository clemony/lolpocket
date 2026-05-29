<script lang="ts" setup>
import { providers as prov } from "~/domain/about/external/authProviders"
const { orientation = "horizontal" } = defineProps<{
  orientation?: "vertical" | "horizontal"
}>()
const { identities } = storeToRefs(user())

const safeId = computed(() => safeObject(identities.value))

const providers = computed(() => safeObject(prov))

const pkeys = ref<Map<string, boolean>>()
function hasId(key: string) {
  return pkeys.value?.get(key)
}
function map() {
  pkeys.value = new Map(
    Object.keys(providers.value).map((p) => [
      p,
      !!safeId.value?.[p as ProviderKey<string>]
    ])
  )
}

onMounted(() => {
  map()
})

watch(
  () => safeId.value,
  (v) => {
    if (v) map()
  }
)
</script>

<template>
  <label
    v-for="(provider, i) in providers"
    :key="i"
    class="group h-max w-full cursor-pointer"
    :for="provider.label">
    <UCard
      color="base"
      variant="outline"
      :ui="{
        root: 'h-max! w-full rounded-xl group-hover:ring-pc/70!',
        body: cn(
          'pointer-events-none grid w-full items-center gap-3 overflow-hidden p-4!',
          {
            ' grid-cols-[36px_auto_24px] px-3!': orientation === 'vertical'
          }
        )
      }">
      <div class="relative size-full">
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
      <div class="grid gap-0.75">
        <h3
          class="truncate text-lg leading-none font-bold text-pc/80 capitalize">
          {{ provider.label }}
        </h3>

        <div class="w-full space-x-1 truncate align-baseline *:inline">
          <h6 v-if="hasId(provider.label)">
            {{ safeId[provider.label]?.name }}
          </h6>
          <span class="inline w-full truncate text-xs text-n5">{{
            hasId(provider.label)
              ? safeId[provider.label]?.description
              : `Connect with ${capitalize(provider.label)}`
          }}</span>
        </div>
      </div>
      <UButton
        v-if="orientation === 'horizontal'"
        :id="provider.label"
        size="xs"
        :color="hasId(provider.label) ? 'base' : 'neutral'"
        :variant="hasId(provider.label) ? 'outline' : 'solid'"
        :label="hasId(provider.label) ? 'Disconnect' : 'Connect'"
        :ui="{
          leadingIcon: cn('size-4 **:stroke-[1.6]'),
          label: cn('text-xs'),
          base: hasId(provider.label)
            ? 'self-start shadow-none drop-shadow-none'
            : ''
        }" />
      <div v-else class="pointer-events-auto grid h-full self-start pt-1">
        <HintTooltip :label="hasId(provider.label) ? 'Disconnect' : 'Connect'">
          <USwitch :model-value="pkeys?.get(provider.label)" size="sm" />
        </HintTooltip>
      </div>
    </UCard>
  </label>
</template>
