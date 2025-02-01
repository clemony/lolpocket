<script lang="ts" setup>
const props = defineProps<{
  folder: Folder
}>()

const folderSub = ref()
const eventAt = ref()
</script>

<template>
  <div>
    <li
      v-for="pocket in folder.items"
      :key="pocket.key"
      class="!mr-5 odd:bg-b2/30"
    >
      <details
        :key="pocket.key"
        @toggle="
          /* prettier-ignore */
          folderSub = $event.newState;

          eventAt = pocket.key
        "
      >
        <summary class="capitalizeflex w-full after:hidden items-center hover:bg-b2/60 flex-nowrap">
          <PocketIcon
            :image="pocket.icon"
            class="shrink-0 size-7"
          />
          <span class="w-full truncate"> {{ pocket.name }}</span>

          <PlusMinusExpand :check="folderSub == 'open' && eventAt == pocket.key ? true : false" />
        </summary>

        <ul>
          <li>
            <NuxtLink
              :to="`/pocket/${pocket.key}`"
              class="w-full flex gap-3 items-center grow"
            >
              <icon name="iconamoon:edit-light" />
              Edit Pocket
            </NuxtLink>
          </li>
          <li>
            <LazyCardPop :pocket="pocket">
              <icon name="fa-regular:address-card" />
              <span class="ml-0.5">View Card</span>
            </LazyCardPop>
          </li>
          <ChampionSubTree
            :pocket="pocket"
            :folder="folder"
          />

          <ItemSubTree
            :pocket="pocket"
            :folder="folder"
          />

          <RuneSubTree
            :pocket="pocket"
            :folder="folder"
          />
        </ul>
      </details>
    </li>
  </div>
</template>

<style scoped></style>
