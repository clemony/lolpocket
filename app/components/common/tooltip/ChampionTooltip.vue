<script setup lang="ts">
import { OnClickOutside } from "@vueuse/components"

const { id } = defineProps<{
  id: number
}>()

const idRef = computed(() => id ?? 0)

const { data: champion, status } = useFetch<Champion>(
  () => `/cdn/champions/${idRef.value}.json`,
  {
    server: false,
    lazy: true,
    immediate: false,
    key: () => `champion-${idRef.value}`,
    watch: [idRef],
  }
)
</script>

<template>
  <div v-if="champion" class="flex w-full flex-col justify-self-center">
    <div class="flex h-fit w-full gap-4">
      <!-- IMG -->

      <Champion
        v-if="champion"
        :id="champion.id"
        class="size-13"
        :alt="`${champion.name} Image`" />

      <div class="flex w-full flex-col">
        <div class="champions-center flex w-full justify-between gap-1">
          <!-- NAME / LINK -->
          <a v-if="champion.name" :href="`/champions/${champion.key}`">
            <h2 class="text-xl leading-4 font-semibold">
              {{ champion.name }}
            </h2>
          </a>

          <!--
          :style="{ '--position-color': position?.color }"       <a
            v-if="champion.name"
            :title="`Official LoL Wiki - ${champion.name}`"
            target="_blank"
            :href="wikiLink(champion.name)"
          >
            <img
              class="size-5 shrink-0 rounded-sm"
              src="/img/logos/wiki.webp"
              alt="wiki"
            >
          </a> -->
        </div>

        <span class="grow text-sm font-normal italic">
          {{ championToTitle[champion?.key] }}
        </span>
      </div>
    </div>

    <div class="relative grid w-full auto-rows-auto overflow-y-auto pb-2">
      <!-- component OF -->

      <Separator
        size="xs"
        class="my-1.5"
        label="ABILITIES"
        placement="end"
        color="neutral" />
    </div>
  </div>
</template>
