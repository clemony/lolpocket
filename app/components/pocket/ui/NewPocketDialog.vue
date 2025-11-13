<script lang="ts" setup>
const emit = defineEmits(["update:name"]);

// Form fields
const name = ref("");
const tags = ref([]);
const selectedIcon = ref("/img/lp/192.webp");

watch(
  () => tags.value,
  (newVal) => {
    console.log(newVal);
  },
);

function clearForm() {
  name.value = "";
  selectedIcon.value = "";
  tags.value = [""];
}

function submitForm() {
  console.log("hi");
  clearForm();

  console.log("pocket added!", ps().pockets);
}

defineExpose({
  name,
  clearForm,
});
</script>

<template>
  <Dialog>
    <MotionDialogContent class="w-110 rounded-xl! px-7 pt-8 pb-6">
      <DialogHeader>
        <DialogTitle class="text-6 dst"> New Pocket </DialogTitle>

        <DialogDescription class="mt-1 mb-5 leading-6 dst">
          Choose a pocket name, tag your pocket (for easier searching), and
          create your pocket icon.
          <span class="font-semibold">All items can be left blank</span>
          and edited later.
        </DialogDescription>
      </DialogHeader>

      <div class="field-box grid size-full gap-4">
        <IconPopover
          v-model:selected-icon="selectedIcon"
          side="right"
          :side-offset="70"
          align="start"
          :align-offset="-136"
          class="size-30 cursor-pointer place-self-center"
          @update:selected-icon="(e) => (selectedIcon = e)"
        />

        <div
          class="flex h-full w-full flex-col justify-start gap-6 px-0.5 pt-4 [&_label]:text-3"
        >
          <div class="flex flex-col gap-1">
            <div class="input w-full shrink-0">
              <div class="grow">
                <input
                  v-model="name"
                  type="text"
                  name="pocket-name"
                  placeholder="Pocket Name"
                  class="size-full text-3"
                />
              </div>

              <span class="flex gap-2">
                <CloseButton />

                <RandomButton
                  v-tippy="'No brain? Meet Button.'"
                  @click.stop="name = generateName()"
                />
              </span>
            </div>

            <TagsInput v-model="tags" class="mt-6 flex-col p-2">
              <div
                class="flex w-full flex-row flex-wrap justify-start gap-2 *:text-3"
              >
                <template v-if="tags.length">
                  <TransitionGroup name="pop">
                    <TagsInputItem v-for="tag in tags" :key="tag" :value="tag">
                      <TagsInputItemDelete>
                        <TagsInputItemText />
                      </TagsInputItemDelete>
                    </TagsInputItem>
                  </TransitionGroup>
                </template>

                <template v-else>
                  <TagsInputItem value="# optional">
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
                class="min-h-10 w-full rounded-md border-0 text-3 focus:border-0"
                name="pocket-tags "
              />
            </TagsInput>
          </div>

          <div class="relative inset-0 h-full">
            <slot />
          </div>
        </div>
      </div>

      <DialogFooter class="mt-1 justify-start">
        <button
          type="submit"
          class="btn px-6 text-3! font-medium! btn-md btn-neutral"
          @click="submitForm"
        >
          Create
        </button>
      </DialogFooter>
    </MotionDialogContent>
  </Dialog>
</template>

<style scoped></style>
