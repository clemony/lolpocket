<script setup lang="ts">
definePageMeta({
  name: 'Spellbook',
  section: 'library',
  searchKeys: ['summoner', 'spell', 'heal', 'barrier', 'flash', 'ignite', 'ghost', 'smite', 'teleport', 'cleanse', 'exhaust'],
  icon: 'teenyicons:book-outline',
})

const ix = useIndexStore()

const selectedSpellId = ref(1)
const selectedSpell = computed (() => ix.spellById(selectedSpellId.value))
</script>

<template>
  <div class="items-center justify-center gap-15 px-27 size-full">
    <div class="w-full pt-28">
      <h1>Summoner Spells</h1>
    </div>

    <div v-if="ix.spells.length" class="w-full  flex gap-[8%] px-3 py-24">
      <div class="flex flex-col gap-14 w-114">
        <div class="grid grid-cols-3 grid-rows-3 gap-4 py-8 border-b3/80 rounded-box shadow-smooth  px-9 h-fit  ">
          <div v-for="spell in ix.spells" :key="spell.name" v-tippy="spell.name" class="size-fit">
            <label class="btn    py-2 !cursor-pointer btn-ghost px-2.5  size-27  has-checked:bg-b3/70 has-checked:border-b3 has-checked:shadow-sm hover:bg-b2 hover:border-b3   ">

              <img :src="`/img/spells/${spell.name?.toLowerCase()}.webp`" class="size-22 rounded-lg shadow-sm inset-shadow-sm shadow-black/20 border border-b3 peer-checked:border-neutral/90" />

              <input v-model="selectedSpellId" type="radio" class="peer hidden" :value="spell.id" />
            </label>
          </div>
        </div>

        <Transition
          v-if="selectedSpell"
          enter-active-class="transition-all duration-500"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100"
          leave-active-class="transition-all duration-500"
          leave-from-class="opacity-100 "
          leave-to-class="opacity-0 -translate-y-2"
          mode="out-in">
          <div v-if="selectedSpell.text" :key="selectedSpell.name" class="pl-4.5 pr-3">
            <p class="font-serif text-4 leading-9 dst">
              {{ selectedSpell.text }}
            </p>

            <p class="italic w-full flex justify-end mt-6 pr-3 font-thin ">
              —<a :href="`https://wiki.leagueoflegends.com/en-us/${selectedSpell.name}`" target="_blank" class="!font-sans underline-offset-2 hover:underline items-center gap-2 flex flex-nowrap">summary from LolWiki
                <icon name="link" class="mb-1 size-4" /></a>
            </p>
          </div>
        </Transition>
      </div>

      <Transition
        enter-active-class="transition-all duration-500"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-500"
        leave-from-class="opacity-100 "
        leave-to-class="opacity-0 -translate-y-2"
        mode="out-in">
        <div :key="selectedSpell.name" class="flex flex-col gap-14 w-160 transition-all duration-300">
          <div class="border-b3/80 rounded-xl shadow-smooth pt-7 pb-8 px-9  w-full border flex max-h-min flex-col gap-6 transition-all duration-300">
            <div class="w-full flex gap-6 i-c">
              <img :src="`/img/spells/${selectedSpell.name.toLowerCase()}.webp`" class="rounded-lg shadow-sm  shadow-black/20 size-24" />

              <div class="h-full grid items-between py-2">
                <p class="font-medium">
                  Summoner
                </p>

                <h1 class="text-9 dst tracking-tight">
                  {{ selectedSpell.name }}
                </h1>
              </div>
            </div>

            <p>{{ selectedSpell.description }}</p>

            <ul class="w-74 space-y-3">
              <li v-if=" selectedSpell.cd" class="grid-cols-2 grid gap-3  items-end ">
                <p class="font-semibold tracking-tight">
                  Cooldown:
                </p>

                <p class="font-medium">
                  {{ selectedSpell.cd }} seconds
                </p>
              </li>

              <li v-if=" selectedSpell.charges" class="grid-cols-2 grid gap-3  items-end ">
                <p class="font-semibold tracking-tight">
                  Charges:
                </p>

                <p class="font-medium">
                  {{ selectedSpell.charges }}
                </p>
              </li>

              <li v-if=" selectedSpell.recharge" class="grid-cols-2 grid gap-3  items-end ">
                <p class="font-semibold tracking-tight">
                  Recharge Time:
                </p>

                <p class="font-medium">
                  {{ selectedSpell.recharge }} seconds
                </p>
              </li>
            </ul>
          </div>

          <div class="bg-black/90 w-full  rounded-xl shadow-pretty ">
            <video-background
              :src="`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-collections/global/default/video/spells/spells_${selectedSpell.id}.webm`"
              class="w-90 h-auto aspect-video rounded-xl">
            </video-background>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
