<script lang="ts" setup>
import { mapPositions } from "#shared/constants/misc/positions"
import { useMatchRoles } from "~/domain/match/useMatchRoles"

const { class: className, orientation = "horizontal" } = defineProps<{
  class?: HTMLAttributes["class"]
  orientation?: DataOrientation
}>()

const { summoner } = storeToRefs(sSession())
const store = matchFilter()
const { filter } = storeToRefs(store)

const roles = computed(() => {
  if (!sMatches().matches || !summoner?.value) return []

  const matchRoles = useMatchRoles(summoner?.value?.puuid, sMatches().matches)

  return mapPositions.map((p) => {
    const find = matchRoles?.find((r) => r.name === p.label)
    return {
      ...p,
      icon: `i-lp-${p.label.toLowerCase()}`,
      disabled: p.label === "all" ? false : !find?.games,
    }
  })
})

const roleModel = computed({
  get: () => filter?.value.role ?? "all",
  set: (val) => store.setFilter("role", val ?? "all"),
})
</script>

<template>
  <!--   <UTabs
    v-model:model-value="roleModel"
    size="lg"
    variant="neumorphic"
    :ui="{
      root: 'w-full',
      label: 'hidden',
      leadingIcon: 'size-5',
    }"
    :items="roles"
    value-key="label"
    default-value="all" /> -->

  <URadioGroup
    v-model:model-value="roleModel"
    :ui="{
      root: String(className),
      fieldset: 'gap-5',
      item: cn(
        'hover:inset-shadow-morphic-sm relative h-10 basis-1/4 cursor-pointer items-center rounded-lg border transition-all duration-0 hover:border-p3! hover:bg-p1 has-not-checked:border-transparent',

        'has-checked:border-p3 has-checked:shadow-sm has-checked:drop-shadow-sm has-checked:drop-shadow-black/5 has-checked:duration-300',

        'has-checked:hover:border-p3! has-checked:hover:bg-transparent! has-checked:hover:shadow-sm! has-checked:hover:inset-shadow-none! has-checked:hover:drop-shadow-sm!',

        'has-disabled:hover:border-transparent! has-disabled:hover:bg-transparent! has-disabled:hover:inset-shadow-none!',
      ),
    }"
    orientation="horizontal"
    variant="card"
    size="sm"
    indicator="hidden"
    class="w-full"
    :items="roles"
    value-key="label"
    default-value="all">
    <template #label="{ item }">
      <Tooltip
        :side="item.disabled ? 'top' : 'bottom'"
        class="absolute inset-0 grid size-full place-items-center"
        :ui="{ content: 'capitalize' }"
        :label="item.label">
        <Icon :name="item.icon" :class="{ 'opacity-20': item.disabled }" />
      </Tooltip>
    </template>
  </URadioGroup>
</template>
