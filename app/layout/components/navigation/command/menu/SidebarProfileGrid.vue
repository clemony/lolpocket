<script lang="ts" setup>
const emit = defineEmits(["close"])
const { summoner } = storeToRefs(user())
const nav = computed(() =>
  summoner.value ? summonerNav(summoner.value) : undefined
)

function handleClose(to: string) {
  emit("close", false)
  navigateTo(to)
}
</script>

<template>
  <div class="w-full">
    <UUser
      size="xl"
      :ui="{ root: 'mb-2 px-1.25 py-2', name: 'mb-1', wrapper: 'pr-6' }"
      description="Take a deep dive into your personal summoner data."
      name="Profile" />
    <div v-if="nav" class="grid w-full grid-cols-2 gap-x-1.5 gap-y-2 pr-7 pl-1">
      <UButton
        v-for="item in nav"
        :key="item.label"
        color="neutral"
        :label="item.label"
        :icon="item.icon"
        :ui="{
          base: cn(
            'noise relative flex size-full h-11! w-full justify-start gap-2.5! overflow-hidden rounded-xl border-0 bg-neutral p-3! text-nc shadow-sm **:text-nc! hover:bg-neutral/80'
          ),
          label: 'flex text-lg leading-none font-bold',
          leadingIcon: cn('fill-icon size-4.5!', item.ui?.leadingIcon, {})
        }"
        @click="handleClose(item.to)" />
    </div>
  </div>
</template>
