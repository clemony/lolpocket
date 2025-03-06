<script lang="ts" setup>
const props = defineProps<{
  set: RuneSet
  pocket?: pocket
}>()

const pocket = ref(props.pocket)
const set = ref(props.set)
const rs = useRuneStore()
const ds = useDataStore()
const paths = [...ds.paths]

const primaryPath = ref(set.value.primary.path || 'Resolve')
const secondaryPath = ref(set.value.secondary.path || 'Inspiration')

function handlePrimary(e: string) {
  console.log('💠 - e:', e)
  if (e === secondaryPath.value) {
    const index = paths.findIndex(path => path.name === e)
    resetSecondaryPath(set.value)
    secondaryPath.value = paths[index === paths.length - 1 ? 0 : index + 1].name
    set.value.secondary.path = secondaryPath.value
  }
  resetPrimaryPath(set.value)
  primaryPath.value = e
  set.value.primary.path = primaryPath.value
}

function handleSecondary(e: string) {
  console.log('💠 - handleSecondary - e:', e)
  resetSecondaryPath(set.value)
  secondaryPath.value = e
  set.value.secondary.path = secondaryPath.value
}
onMounted(async () => {
  await nextTick()
  Object.assign(set.value, props.set || rs.selectedRuneSet || pocket.value?.runes.sets[0] || {})
  primaryPath.value = set.value.primary.path ?? 'Resolve'
  secondaryPath.value = set.value.secondary.path ?? 'Inspiration'
})
</script>

<template>
  <div class="flex gap-18 px-12 pt-[7vh] flex-wrap justify-center w-full">
    <div class="flex flex-col gap-6 w-1/2 min-w-90 flex   w-114 max-w-114 ">
      <Field :title="`Primary Path > ${primaryPath}`">
        <RunePanel
          :pocket="pocket" :set="set" :model-value="primaryPath"
          @update:path="handlePrimary($event)" />
      </Field>
      <Field title="Keystone">
        <Keystones :path="primaryPath" :set="set" />
      </Field>
      <Field :key="primaryPath">
        <LazyPocketRuneSelect
          :set="set"
          :pocket="pocket"
          :path="primaryPath"
          type="primary" />
      </Field>
    </div>

    <div class="flex flex-col gap-6 w-1/2 min-w-90 flex   w-114 max-w-114">
      <Field :title="secondaryPath == 'empty' ? 'Secondary Path' : `Secondary Path > ${secondaryPath}`">
        <RunePanel
          :pocket="pocket" :set="set" :model-value="secondaryPath" :type="2" @update:path="handleSecondary($event)" />
      </Field>

      <Field :key="secondaryPath" class=" ">
        <LazyPocketRuneSelect

          :set="set"
          :pocket="pocket"
          :path="secondaryPath"
          type="secondary" />
      </Field>
      <Field title="Shards">
        <RuneShards :pocket="pocket" :rune-set="set" />
      </Field>
    </div>
  </div>
</template>

<style>

</style>
