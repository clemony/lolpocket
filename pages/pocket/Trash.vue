<script setup lang="ts">
const ps = usePocketStore()

function clearOldPockets() {
  const now = new Date()
  const thirtyDays = 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds

  // Filter out pockets that are older than 30 days
  ps.trashFolder = ps.trashFolder.filter((pocket) => {
    // const age = now.getTime() - new Date(pocket.deletedAt).getTime();
    // return age < thirtyDays; // Keep pockets that are younger than 30 days
  })
}
</script>

<template>
  <div class="h-full w-full px-3 py-4">
    <div class="mb-4 grid h-fit w-full gap-4 px-4">
      <div class="flex items-center gap-3">
        <div class="breadcrumbs text-2 flex grow items-center">
          <ul class="">
            <li>
              <a>Pockets</a>
            </li>
            <li>Trash</li>
          </ul>
        </div>

        <div class="join">
          <button
            class="btn join-item btn-sm relative flex items-center justify-center *:absolute *:size-4 *:transition-all *:duration-300 after:size-5"
            alt="Trash"
            title="Trash"
          >
            <icon
              name="iconoir:bin"
              class=""
            />
            <icon
              name="iconoir:bin-full"
              class="opacity-0"
            />
          </button>

          <button
            class="btn join-item btn-sm"
            alt="Archive"
            title="Archive"
          >
            <icon
              name="fluent:archive-20-regular"
              class="size-5"
            />
          </button>
        </div>
        <LayoutSpacer />
        <Button
          variant="ghost"
          size="lg"
          class="border-error bg-error text-3 hover:bg-error disabled:border-inspiration disabled:bg-inspiration disabled:text-bc justify-center border px-5 text-white shadow-xs hover:opacity-80"
          :disabled="ps.trashFolder.length == 0"
          @click="ps.trashFolder.length = 0"
        >
          <span
            v-if="ps.trashFolder.length > 0"
            class="flex items-center gap-2 font-medium"
          >
            <icon
              name="ant-design:fire-outlined"
              class="-ml-0.5 size-6"
            />

            Delete Forever
          </span>
          <span
            v-else
            class="-ml-1 flex items-center gap-2 font-medium"
          >
            <icon
              name="bi:droplet"
              class="size-4"
            />
            Trash is Empty
          </span>
        </Button>
      </div>
      <div class="flex w-full items-center">
        <h2 class="text-5 grow font-semibold tracking-tight">
          Trash
        </h2>
      </div>
    </div>

    <ul class="h-64 overflow-scroll border">
      <li v-for="pocket in ps.trashFolder">
        {{ pocket.name }}
      </li>
    </ul>

    <!--  <div v-if="ps.trashFolder.length > 0"
            class="relative flex flex-col h-auto pt-3 overflow-x-auto overflow-y-hidden tabs-lifted tabs scrollbar-hide ">

            <div
                class="flex flex-col justify-end grow mt-[15px]  overflow-y-auto border-y   border-b3 after:shadow-[inset_0px_0px_6px_3px_var(--b1)/0] after:size-full after:absolute relative after:top-0 after:z-10 after:brightness-[97%]  after:pointer-events-none">
                <PocketGrid :pocketArray="ps.trashFolder" arrayName="trashFolder" class="overflow-auto" />
            </div>

        </div> -->
  </div>
</template>

<style scoped></style>
