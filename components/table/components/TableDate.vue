<script setup lang="ts">
const props = defineProps<{
  params: any
}>()
const ps = usePocketStore()
const ds = useDataStore()

const pocket = getPocket(props.params.data.key)

const patch = computed(() => {
  if (!pocket) {
    return
  }
  if (props.params.type == 'created') {
    return pocket.dateCreated[0].patch
  }
  else {
    return pocket.dateUpdated[0].patch
  }
})

const date = computed(() => {
  if (!pocket) {
    return
  }

  if (props.params.type == 'created') {
    return pocket.dateCreated[0].date
  }
  else {
    return pocket.dateUpdated[0].date
  }
})

const time = computed(() => {
  if (!pocket) {
    return
  }

  if (props.params.type == 'created') {
    return pocket.dateCreated[0].time
  }
  else {
    return pocket.dateUpdated[0].time
  }
})

const lastUpdated = pocket.dateUpdated[0].patch
const currentPatch = ds.currentPatch

const getStyles = computed(() => {
  if (!pocket) {
    return
  }
  if (props.params.type == 'updated') {
    // Slice off the third part (hotfix patch) and only keep the first two parts
    const [lastMajor, lastMinor] = lastUpdated.split('.').slice(0, 2).map(Number)
    const [currentMajor, currentMinor] = currentPatch.split('.').slice(0, 2).map(Number)

    // Success: exact same major and minor version
    if (lastMajor === currentMajor && lastMinor === currentMinor) {
      return 'checkbox-success [--chkfg:var(--b1)]'
    }

    // Warning: same major version and lastMinor is within two versions (e.g., 14.18, 14.17) of the currentMinor (e.g., 14.19)
    if (lastMajor === currentMajor && currentMinor - lastMinor <= 2 && currentMinor - lastMinor > 0) {
      return 'checkbox-warning '
    }

    // Error: any other case
    return 'checkbox-error '
  }
  else {
    return 'checkbox-ghost'
  }
})

const dateObjects = [
  {
    name: 'Date',
    // icon: "radix-icons:calendar",
    // iconClass: " size-3.5",
    data: date,
  },
  {
    name: 'Patch',
    icon: '',
    iconClass: 'size-[12px]',
    data: patch,
  },
  {
    name: 'Time',
    // icon: "fluent-mdl2:alarm-clock",
    // iconClass: " size-3.5",
    data: time,
  },
]
</script>

<template>
  <div class="max-h-inherit group grid size-full overflow-hidden rounded-sm px-2">
    <PocketMenu
      v-if="pocket"
      :pocket="pocket"
      type="context"
      class="grid size-full place-content-between justify-center gap-1"
    >
      <div
        v-for="(object, index) in dateObjects"
        class="group"
      >
        <div class="text-2 flex items-center justify-center gap-2">
          <template v-if="object.name != 'Patch'">
            <span class="text-2 text-right tracking-wide! opacity-0 transition-all duration-500 group-hover:opacity-80">
              {{ object.data }}
            </span>
          </template>

          <template v-else>
            <input
              v-if="object.name == 'Patch' && props.params.type == 'updated'"
              type="checkbox"
              class="checkbox checkbox-xs pointer-events-none"
              :class="getStyles"
              :checked="lastUpdated == currentPatch"
            />
            <span class="text-2! justify-self-center tracking-wider! opacity-100">
              {{ object.data }}
            </span>
          </template>
        </div>
      </div>

      <template #first>
        <ContextMenuItem
          disabled
          class="-mb-1 h-4.5 self-end"
        >
          Set all to...
        </ContextMenuItem>
        <ContextMenuSeparator />
        <context-menu-item>
          <icon
            name="simple-icons:riotgames"
            class="opacity-70"
          />
          <span class="flex items-center gap-1">Patch</span>
        </context-menu-item>

        <context-menu-item>
          <icon name="radix-icons:calendar" />
          <span class="flex items-center gap-1">Date</span>
        </context-menu-item>

        <context-menu-item>
          <icon name="fluent-mdl2:alarm-clock" />
          <span class="flex items-center gap-1">Time</span>
        </context-menu-item>

        <ContextMenuSeparator />
      </template>
    </PocketMenu>
  </div>
</template>

<style scoped></style>
