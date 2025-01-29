<script lang="ts" setup>
// Form fields
const props = defineProps<{
  pocket: pocket
}>()
const ts = useTempStore()
const pocket = ref(props.pocket)
</script>

<template>
  <PocketSheetContent v-if="pocket" title="Edit Pocket" description="Some mistakes you <em>can</em> make twice. Through trying times of intense struggle, you can <strong>update your pocket's details here</strong>.">
    <template #name>
      <input
        v-model="pocket.name"
        type="text"
        name="pocket-name"
        placeholder="optional"
        class="size-full"
      />
    </template>

    <template #tags>
      <TagsInput
        v-model="pocket.tags"
        class="flex-col p-2"
      >
        <div class="*:text-3 flex w-full flex-row flex-wrap justify-start gap-2">
          <template v-if="pocket.tags.length">
            <TransitionGroup name="pop">
              <TagsInputItem
                v-for="tag in pocket.tags"
                :key="tag"
                :value="tag"
              >
                <TagsInputItemText />
                <TagsInputItemDelete />
              </TagsInputItem>
            </TransitionGroup>
          </template>

          <template v-else>
            <TagsInputItem value="# your">
              <TagsInputItemText />
            </TagsInputItem>
            <TagsInputItem value="# tags">
              <TagsInputItemText />
            </TagsInputItem>
            <TagsInputItem value="# here">
              <TagsInputItemText />
            </TagsInputItem>
          </template>
        </div>

        <TagsInputInput
          placeholder="optional"
          class="text-3 min-h-10 w-full rounded-md border-0 focus:border-0"
          name="pocket-tags "
        />
      </TagsInput>
    </template>

    <SelectIcon v-model:selected-icon="pocket.icon" :pocket="pocket" @update:selected-icon="(e) => pocket.icon = e" />

    <template #button>
      <Label
        variant="neutral"
        type="button"
        size="md"
        class=""
      >
        Update
      </Label>
    </template>
  </PocketSheetContent>
</template>

<style scoped></style>
