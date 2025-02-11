<script setup lang="ts">
import Spells from 'shared/data/spells.json'

const selectedSpell = ref(0)

const extra = [
  {
    spell: 'Cleanse',
    video: '1',
    text: '"Cleanse remove active crowd control effects, allowing the champion to continue pursuit or escape, but cannot be used under suppression or while in stasis."',
  },
  {
    spell: 'Smite',
    video: '11',
    text: '"Smite is generally used for jungling. Beyond dramatically speeding up clear time, its high damage provides a strategic last-hit advantage at high-priority buffs like Dragon and  Baron Nashor."',
  },
  {
    spell: 'Ignite',
    video: '14',
    text: '"Ignite provides players an offensive utility and damage spell that scales with level. A well-placed healing reduction debuff from Ignite can severely limit the effectiveness of enemy champions or their healing items."',
  },
  {
    spell: 'Barrier',
    video: '21',
    text: '"Barrier is great for absorbing the burst of enemy champions or turret enhanced shots. Whether used on a squishy mid-laner or a tanky top-laner, a well-timed Barrier will help escape from tough situations."',
  },
  {
    spell: 'Exhaust',
    video: '3',
    text: '"Exhaust is an extremely powerful tool for disabling champions who can deal a high amount of damage. When your team is chasing an enemy and they are getting away, using Exhaust on them will help your team gain the upper hand. "',
  },
  {
    spell: 'Ghost',
    video: '6',
    text: '"Ghost can be used either offensively or defensively. The increase in movement speed and ignoring unit collision makes it easier to both chase down enemy champions, and escape bad situations."',
  },
  {
    spell: 'Flash',
    video: '4',
    text: '"Flash can easily be used to escape from or catch up with a foe. It can be used to dodge or land abilities. It can also be used to move over walls, either for a quick escape or in response to an opponent\'s dash."',
  },
  {
    spell: 'Heal',
    video: '7',
    text: '"Heal can be used to save a life when low on health and under attack.  It is commonly used to get an early first blood by healing oneself for more than one\'s opponent expects."',
  },
  {
    spell: 'Teleport',
    video: '12',
    text: '"During the early game, Teleport is mainly used to quickly return to lane after a  Recall, or in the event of an early death.Teleport can be used to react if an enemy champion tries to destroy an unguarded turret."',
  },
]

const spellCompute = computed (() => {
  const sp = ref(Spells[selectedSpell.value])
  return extra.find(s => s.spell == sp.value.name)
})
</script>

<template>
  <div class="pt-[5vh] wrapper size-full items-center justify-center gap-15 px-27">
    <div class="w-full grid-cols-3 grid h-[9vh] items-center">
      <div class=" flex items-center gap-3">
        <h1 class="!text-9 drop-shadow-text px-2 tracking-tight flex flex-wrap capitalize">
          Summoner Spells
        </h1>
      </div>
    </div>
    <div class="w-full  h-[83vh] flex gap-[8%] px-3 py-4.5">
      <div class="flex flex-col gap-14 w-114">
        <div class="grid grid-cols-3 grid-rows-3 gap-4 py-8 border-b3/80 rounded-xl shadow-smooth  px-9 h-fit  border">
          <div v-for="(spell, i) in Spells" :key="spell.name" v-tippy="spell.name" class="size-fit">
            <label class="btn    py-2 !cursor-pointer btn-ghost px-2.5  size-27 !rounded-lg has-checked:bg-b3/70 has-checked:border-b3 has-checked:shadow-sm hover:bg-b2 hover:border-b3   ">

              <img :src="`/img/spells/${spell.name.toLowerCase()}.webp`" class="size-22 rounded-lg shadow-sm inset-shadow-sm shadow-black/20 border border-b3 peer-checked:border-neutral/90" />

              <input v-model="selectedSpell" type="radio" class="peer hidden" :value="i" />
            </label>
          </div>
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
          <div :key="selectedSpell" class="pl-4.5 pr-3">
            <p class="font-serif text-4 leading-9 dst">
              {{ spellCompute.text }}
            </p>
            <p class="italic w-full flex justify-end mt-6 pr-3 font-thin ">
              —<a :href="`https://wiki.leagueoflegends.com/en-us/${Spells[selectedSpell].name}`" target="_blank" class="!font-sans underline-offset-2 hover:underline items-center gap-2 flex flex-nowrap">summary from LolWiki
                <icon name="link" class="mb-1" /></a>
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
        mode="out-in"
      >
        <div :key="selectedSpell" class="flex flex-col gap-14 w-160 transition-all duration-300">
          <div class="border-b3/80 rounded-xl shadow-smooth pt-7 pb-8 px-9  w-full border flex max-h-min flex-col gap-6 transition-all duration-300">
            <div class="w-full flex gap-6 i-c">
              <img :src="`/img/spells/${Spells[selectedSpell].name.toLowerCase()}.webp`" class="rounded-lg shadow-sm  shadow-black/20 size-24" />
              <div class="h-full grid items-between py-2">
                <p class="font-medium">
                  Summoner
                </p>
                <h1 class="text-9 dst tracking-tight">
                  {{ Spells[selectedSpell].name }}
                </h1>
              </div>
            </div>

            <p>{{ Spells[selectedSpell].description }}</p>

            <ul class="w-74 space-y-3">
              <li v-if="Spells[selectedSpell].cd" class="grid-cols-2 grid gap-3  items-end ">
                <p class="font-semibold tracking-tight">
                  Cooldown:
                </p>
                <p class="font-medium">
                  {{ Spells[selectedSpell].cd }} seconds
                </p>
              </li>

              <li v-if="Spells[selectedSpell].charges" class="grid-cols-2 grid gap-3  items-end ">
                <p class="font-semibold tracking-tight">
                  Charges:
                </p>
                <p class="font-medium">
                  {{ Spells[selectedSpell].charges }}
                </p>
              </li>

              <li v-if="Spells[selectedSpell].recharge" class="grid-cols-2 grid gap-3  items-end ">
                <p class="font-semibold tracking-tight">
                  Recharge Time:
                </p>
                <p class="font-medium">
                  {{ Spells[selectedSpell].recharge }} seconds
                </p>
              </li>
            </ul>
          </div>

          <div class="bg-black/90 w-full  rounded-xl shadow-pretty ">
            <video-background
              :src="`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-collections/global/default/video/spells/spells_${spellCompute.video}.webm`"
              class="w-90 h-auto aspect-video rounded-xl"
            >
            </video-background>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped></style>
