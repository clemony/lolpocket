<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui"
import { useFollowSummoner } from "~/domain/summoner/composables/useFollowSummoner"
import { buildSummonerProfileRoutes } from "~/domain/summoner/utils/profileRoutes"
import { getSummonerIcon } from "~/domain/utils/img"
import { asChipColor } from "~/types/typeAssert"

const { collapsed } = defineProps<{
  collapsed?: boolean
}>()
const session = sSession()
const { summoner, account } = storeToRefs(session)
console.log("🥸 - account:", account.value)
const { isFavorite, isSelf, tooltipText, update } = useFollowSummoner(summoner)
const route = useRoute("summoner-profile")
const activeRoute = shallowRef<string>(String(route.name))

watch(
  () => activeRoute.value,
  (v) => {
    navigateTo({ name: v })
  }
)
onMounted(() => {
  activeRoute.value = String(route.name)
})
const championKey = computed(() => route.params?.championKey)

const routes = computed<TabsItem[]>(() => buildSummonerProfileRoutes())
</script>

<template>
  <div
    class="absolute inset-x-0 z-40 h-15 w-full rounded-t-6xl border border-b-p0/40 bg-p0/70 px-4 backdrop-blur-sm">
    <div class="flex w-full flex-nowrap items-center">
      <SummonerDropdown>
        <UButton
          variant="ghost"
          size="lg"
          trailing-icon="i-more"
          aria-label="trigger for summoner profile menu"
          :ui="{
            trailingIcon: 'size-4! opacity-60 group-hover/btn:opacity-100!',
            base: 'flex w-max max-w-94 min-w-74 items-center gap-3 rounded-5xl ring-p1/80 inset-ring-p0 open:ring hover:bg-p1/60 hover:shadow-none! hover:ring hover:drop-shadow-none!',
          }">
          <!-- AVATAR -->
          <Ping
            :inset="false"
            size="sm"
            position="bottom-right"
            :ui="{
              base: 'translate-x-0.25 -translate-y-0.75',
            }"
            :color="asChipColor(String(account?.color))">
            <NuxtImg
              :style="{
                maskImage:
                  'radial-gradient(circle at 90% 80%, transparent 5px, black 6px)',
              }"
              class="size-9 rounded-full drop-shadow-sm"
              :src="getSummonerIcon(summoner?.icon)"
              :summoner="summoner ?? undefined" />
          </Ping>

          <!-- SUMMONER NAME -->
          <div
            class="inline-flex grow items-end justify-start gap-2 pr-8 text-start align-baseline">
            <h3 class="font-display leading-6 font-semibold">
              {{ summoner?.name }}
            </h3>
            <span
              class="inline-flex items-center gap-px text-sm leading-5 font-medium text-n5">
              <Icon
                name="i-hash"
                class="inline size-3.25 align-baseline text-n5" />
              {{ summoner?.tag }}
            </span>
          </div>
        </UButton>
      </SummonerDropdown>
      <Grow />
      <div class="flex w-full flex-nowrap items-center">
        <div
          class="pointer-evens-auto! flex w-full items-center justify-end gap-4">
          <Tooltip :content="{ side: 'bottom' }" :text="tooltipText">
            <HeartButton
              v-if="summoner"
              trailing-icon="i-heart-fill"
              size="lg"
              :ui="{
                base: 'relative grid w-15 place-items-center rounded-5xl! drop-shadow-none fx-0!',
                leadingIcon: cn(
                  'absolute size-4.5! group-not-checked/btn:text-pc/60! group-not-checked/btn:group-hover/btn:text-pc!'
                ),
              }"
              variant="outline"
              :tooltip-text="tooltipText"
              :model-value="isFavorite"
              @update:model-value="update($event)" />
          </Tooltip>
          <!-- UPDATE SUMMONER -->
          <UpdateSummoner>
            <UButton
              v-if="summoner"
              icon="i-bytesize-reload"
              variant="outline"
              size="lg"
              :ui="{
                base: 'relative w-15 overflow-hidden! rounded-5xl! px-5! drop-shadow-none fx-0!',
                leadingIcon:
                  'size-4.5 **:stroke-[10%] group-not-checked/btn:text-pc/60! group-hover/btn:text-pc!',
              }" />
          </UpdateSummoner>
        </div>
        <!-- ROUTE TABS -->
        <UTabs
          v-model:model-value="activeRoute"
          :items="routes"
          :ui="{
            list: 'w-max shrink-0 bg-transparent inset-shadow-none inset-ring-0',
            trigger: 'w-max shrink-0 px-6 active:pointer-events-none',
            indicator: 'h-12 rounded-5xl',
            label: cn(
              'shiny-tab-label bg-clip-text font-semibold opacity-60 group-hover/trigger:text-pc! group-hover/trigger:opacity-100! group-active/trigger:text-pc! group-active/trigger:opacity-100!'
              //default
            ),
          }"
          size="xl" />
      </div>
    </div>
  </div>
</template>
