<script setup lang="ts">
definePageMeta({
  title: 'Spells',
  icon: 'teenyicons:book-outline',

  description: 'Learn magic in the summoner spellbook.',
  listClass: '**:stroke-[2.6]',
  path: '/library/spells',
  searchKeys: [
    'summoner',
    'spell',
    'heal',
    'barrier',
    'flash',
    'ignite',
    'ghost',
    'smite',
    'teleport',
    'cleanse',
    'exhaust',
  ],
})

const selectedSpellId = ref(1)
const selectedSpell = computed(() => spells[selectedSpellId.value])
</script>

<template>
  <div class="size-full items-center justify-center gap-15 px-27">
    <div class="w-full pt-28">
      <h1>Summoner Spells</h1>
    </div>

    <div class="flex w-full gap-[8%] px-3 py-24">
      <div class="flex w-114 flex-col gap-14">
        <div
          class="rounded-box border-b3/80 shadow-smooth grid h-fit grid-cols-3 grid-rows-3 gap-4 px-9 py-8"
        >
          <div
            v-for="spell in spells"
            :key="spell.name"
            v-tippy="{ content: spell.name, theme: 'neutral' }"
            class="size-fit"
          >
            <label
              class="btn btn-ghost hover:border-b3 hover:bg-b2 has-checked:border-b3 has-checked:bg-b3/70 size-27 cursor-pointer! px-2.5 py-2 has-checked:shadow-sm"
            >
              <img
                class="peer-checked:borderneutral/90 border-b3 size-22 rounded-lg border shadow-sm inset-shadow-sm shadow-black/20"
                :alt="selectedSpell.name.toString()"
                :src="`/img/spells/${spell.id}.webp`"
              >

              <input
                v-model="selectedSpellId"
                class="peer hidden"
                type="radio"
                :value="spell.id"
              >
            </label>
          </div>
        </div>

        <!--     <Transition
          v-if="selectedSpell"
          enter-active-class="transition-all duration-500"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100"
          leave-active-class="transition-all duration-500"
          leave-from-class="opacity-100 "
          leave-to-class="opacity-0 -translate-y-2"
          mode="out-in">
              <div
            v-if="selectedSpell.text"
            :key="selectedSpell.name"
            class="pl-4.5 pr-3">
            <p class="font-serif text-lg leading-9 dst">
              {{ selectedSpell.text }}
            </p>

            <p class="italic w-full flex justify-end mt-6 pr-3 font-thin">
              —
              <a
                :href="`https://wiki.leagueoflegends.com/en-us/${selectedSpell.name}`"
                target="_blank"
                class="!font-sans underline-offset-2 hover:underline items-center gap-2 flex flex-nowrap">
                summary from LolWiki
                <icon
                  name="link"
                  class="mb-1 size-4" />
              </a>
            </p>
          </div>
        </Transition> -->
      </div>

      <Transition
        enter-active-class="transition-all duration-500"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-500"
        leave-from-class="opacity-100 "
        leave-to-class="opacity-0 -translate-y-2"
        mode="out-in"
      >
        <div
          :key="selectedSpell.name"
          class="flex w-160 flex-col gap-14 transition-all duration-300"
        >
          <div
            class="border-b3/80 shadow-smooth flex max-h-min w-full flex-col gap-6 rounded-xl border px-9 pt-7 pb-8 transition-all duration-300"
          >
            <div class="i-c flex w-full gap-6">
              <img
                class="size-24 rounded-lg shadow-sm shadow-black/20"
                :alt="selectedSpell.name.toString()"
                :src="`/img/spells/${selectedSpell.id}.webp`"
              >

              <div class="items-between grid h-full py-2">
                <p class="font-medium">
                  Summoner
                </p>

                <h1 class="dst text-5xl tracking-tight">
                  {{ selectedSpell.name }}
                </h1>
              </div>
            </div>

            <!--  <p>{{ selectedSpell.description }}</p>

            <ul class="w-74 space-y-3">
              <li
                v-if="selectedSpell.cd"
                class="grid-cols-2 grid gap-3 items-end">
                <p class="font-semibold tracking-tight">
                  Cooldown:
                </p>

                <p class="font-medium">
                  {{ selectedSpell.cd }} seconds
                </p>
              </li>

              <li
                v-if="selectedSpell.charges"
                class="grid-cols-2 grid gap-3 items-end">
                <p class="font-semibold tracking-tight">
                  Charges:
                </p>

                <p class="font-medium">
                  {{ selectedSpell.charges }}
                </p>
              </li>

              <li
                v-if="selectedSpell.recharge"
                class="grid-cols-2 grid gap-3 items-end">
                <p class="font-semibold tracking-tight">
                  Recharge Time:
                </p>

                <p class="font-medium">
                  {{ selectedSpell.recharge }} seconds
                </p>
              </li>
            </ul> -->
          </div>

          <div class="shadow-pretty w-full rounded-xl bg-black/90">
            <video-background
              class="aspect-video h-auto w-90 rounded-xl"
              :src="`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-collections/global/default/video/spells/spells_${selectedSpell.id}.webm`"
            />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
