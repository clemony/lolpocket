<script setup lang="ts">
import { formatDataText } from 'components/runes/data/format'

const rs = useRuneStore()
const rune = rs.selectedRune
</script>

<!-- This will be the content of the popover -->
<template>
  <div class="drawer">
    <input
      id="champ-drawer"
      type="checkbox"
      class="drawer-toggle" />

    <div class="drawer-side z-60">
      <label
        for="champ-drawer"
        aria-label="close sidebar"
        class="drawer-overlay !bg-black/70"></label>

      <div class="backdrop-blur-md min-h-full w-100 bg-b1 shadow-pretty overflow-hidden rounded-r-md inset-shadow-sm relative">
        <div class="relative grid w-110 justify-center overscroll-none px-6 py-5">
          <div class="border-b3 mb-8 grid w-full max-w-100 grid-cols-[1fr_2fr] gap-1 border-b pb-8">
            <div class="group/link relative col-start-1 h-full items-center justify-center">
              <LoadImg
                :key="rune.name"
                :url="rune.icon"
                :alt="`${rune.name} Image`"
                class="'ring-b2 ring-offset-b3 pointer-events-none size-20 rounded-full bg-black ring-1 ring-offset-1" />
            </div>

            <div class="grid h-full grid-cols-1">
              <div class="text-middle flex">
                <h3 class="text-2 flex flex-wrap leading-4 font-bold tracking-tight">
                  {{ rune.name }}
                </h3>
              </div>

              <a
                class="flex items-center gap-2 capitalize underline-offset-2 hover:underline"
                :href="getWikiLink(rune.name)"
                target="_blank"
                alt="link to league wiki">
                Official Wiki
                <icon
                  name="mingcute:external-link-line"
                  class="mb-[2px] !size-4.25 shrink-0" />
              </a>
            </div>
          </div>

          <div
            :key="`${rune.name}2`"
            class="relative">
            <div
              id="runeStats"
              :key="`${rune.name}3`"
              class="max-w-105 pr-10 text-pretty whitespace-pre-line"
              v-html="formatDataText(rune.longDesc)"></div>

            <!--       <p class="mt-20 text-wrap">
                {{ rune.longDesc }}
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
