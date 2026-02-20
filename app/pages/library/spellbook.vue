<script setup lang="ts">
definePageMeta({
  title: "Spells",
  icon: "i-basil-book-solid",

  description: "Don't forget the petricite!",
  listClass: "**:stroke-[2.6]",
  path: "/spells",
  searchKeys: [
    "summoner",
    "spell",
    "heal",
    "barrier",
    "flash",
    "ignite",
    "ghost",
    "smite",
    "teleport",
    "cleanse",
    "exhaust",
  ],
})

const selectedSpellId = ref(1)
const selectedSpell = computed(
  () => spells[selectedSpellId.value] ?? spells[0]!
)
</script>

<template>
  <div class="size-full items-center justify-center gap-15 px-27">
    <div class="w-full pt-28">
      <h1>Summoner Spells</h1>
    </div>

    <div class="flex w-full gap-[8%] px-3 py-24">
      <div class="flex w-114 flex-col gap-14">
        <div
          class="shadow-smooth grid h-fit grid-cols-3 grid-rows-3 gap-4 rounded-box border-p3/80 px-9 py-8">
          <div
            v-for="spell in spells"
            :key="spell.name"
            v-tippy="{ content: spell.name, theme: 'neutral' }"
            class="size-fit">
            <label
              class="btn size-27 cursor-pointer! px-2.5 py-2 btn-ghost hover:border-p3 hover:bg-p2 has-checked:border-p3 has-checked:bg-p3/70 has-checked:shadow-sm">
              <img
                class="peer-checked:borderneutral/90 size-22 rounded-lg border border-p3 shadow-sm inset-shadow-sm shadow-black/20"
                :alt="selectedSpell.name.toString()"
                :src="`/img/spells/${spell.id}.webp`" />

              <input
                v-model="selectedSpellId"
                class="peer hidden"
                type="radio"
                :value="spell.id" />
            </label>
          </div>
        </div>

        <div
          v-if="selectedSpell.description"
          :key="selectedSpell.name"
          class="pr-3 pl-4.5">
          <p class="dst font-serif text-lg leading-9">
            {{ selectedSpell.description }}
          </p>

          <p class="mt-6 flex w-full justify-end pr-3 font-thin italic">
            —
            <a
              :href="`https://wiki.leagueoflegends.com/en-us/${selectedSpell.name}`"
              target="_blank"
              class="flex flex-nowrap items-center gap-2 font-sans! underline-offset-2 hover:underline">
              summary from LolWiki
              <icon name="link" class="mb-1 size-4" />
            </a>
          </p>
        </div>
      </div>

      <div
        :key="selectedSpell.name"
        v-auto-animate
        class="flex w-160 flex-col gap-14 transition-all duration-300">
        <div
          class="shadow-smooth flex max-h-min w-full flex-col gap-6 rounded-xl border border-p3/80 px-9 pt-7 pb-8 transition-all duration-300">
          <div class="i-c flex w-full gap-6">
            <img
              class="size-24 rounded-lg shadow-sm shadow-black/20"
              :alt="selectedSpell.name.toString()"
              :src="`/img/spells/${selectedSpell.id}.webp`" />

            <div class="items-between grid h-full py-2">
              <p class="font-medium">
                Summoner
              </p>

              <h1 class="dst text-5xl tracking-tight">
                {{ selectedSpell.name }}
              </h1>
            </div>
          </div>

          <p>{{ selectedSpell.description }}</p>

          <ul class="w-74 space-y-3">
            <li
              v-if="selectedSpell.cd"
              class="grid grid-cols-2 items-end gap-3">
              <p class="font-semibold tracking-tight">
                Cooldown:
              </p>

              <p class="font-medium">
                {{ selectedSpell.cd }} seconds
              </p>
            </li>

            <li
              v-if="selectedSpell.charges"
              class="grid grid-cols-2 items-end gap-3">
              <p class="font-semibold tracking-tight">
                Charges:
              </p>

              <p class="font-medium">
                {{ selectedSpell.charges }}
              </p>
            </li>

            <li
              v-if="selectedSpell.recharge"
              class="grid grid-cols-2 items-end gap-3">
              <p class="font-semibold tracking-tight">
                Recharge Time:
              </p>

              <p class="font-medium">
                {{ selectedSpell.recharge }} seconds
              </p>
            </li>
          </ul>
        </div>

        <div class="shadow-pretty w-full rounded-xl bg-black/90">
          <video class="aspect-video h-auto w-90 rounded-xl">
            <source
              :src="`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-collections/global/default/video/spells/spells_${selectedSpell.id}.webm`" />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>
