<script lang="ts" setup>
const ts = useTempStore()
const as = useAccountStore()

const summonerName = computed(() => {
  return as.riotAccountLinked ? as.riotAccount.name : 'Summoner'
})

const userLinks = [
  {
    name: 'Build Analysis',
    link: '/summoner/analysis',
    icon: 'octicon:graph-24',
  },
  {
    name: 'Match History',
    link: '/summoner/MatchHistory',
    icon: 'iconoir:archery-match',
  },
  {
    name: 'Favorites',
    link: '/summoner/Favorites',
    icon: 'teenyicons:heart-outline',
  },
]

const userCheck = ref(true)

const user = useSupabaseUser()

const role = computedAsync(() => {
  if (!ts.sessionInfo) {

  }
  else {
    if (user.value && user.value.app_metadata.user_role == 'admin') {
      return 'admin'
    }
    else if (user.value) {
      return 'summoner'
    }
  }
})
</script>

<template>
  <li
    v-if="user.value && role == 'admin'"
    class=""
  >
    <NuxtLink
      to="/admin/Admin"
      class="flex items-center gap-4 px-2.5"
    >
      <icon
        name="codicon:source-control"
        class="size-4.5"
      />
      Admin Board
    </NuxtLink>
  </li>

  <li class="">
    <NuxtLink
      to="/summoner"
      class="flex items-center gap-4 px-2.5 capitalize"
    >
      <icon
        name="f7:grid"
        class="size-5 border border-bc rounded-sm"
      />
      {{ summonerName || 'Summoner' }}'s Board
    </NuxtLink>
  </li>

  <li
    key="resources"
    class="collapse"
  >
    <input
      v-model="userCheck"
      name="resources"
      type="checkbox"
    />
    <div class="collapse-title flex items-center gap-4 capitalize">
      <LittleIcon
        icon="teenyicons:home-outline"
        class="size-4.5"
      />
      {{ summonerName || 'Summoner' }}'s Data
      <ExpandIndicator v-model:check="userCheck" />
    </div>
    <ul class="collapse-content">
      <li
        v-for="link in userLinks"
        :key="link.name"
      >
        <NuxtLink
          :to="{
            path: link.link,
          }"
          class="flex items-center gap-4 px-2.5"
        >
          <icon
            v-if="link.icon"
            :name="link.icon"
            class="size-4.5"
            :class="{ '!size-6 !-mx-1 ': link.icon == 'ph:squares-four-light' }"
          />
          <span class="capitalize">
            {{ link.name }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>

<style scoped></style>
