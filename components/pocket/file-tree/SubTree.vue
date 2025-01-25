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
      v-for="(pocket, i) in folder.items"
      class="!mr-5"
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
          <icon
            :name="pocket.icon"
            class="shrink-0"
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
            <label>
              <icon name="fa-regular:address-card" />
              View Card
            </label>
          </li>
          <ChampionSubTree
            :pocket="pocket"
            :folder="folder"
          />
        </ul>
      </details>
    </li>
  </div>
</template>

<style scoped></style>
