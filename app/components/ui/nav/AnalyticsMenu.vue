<script lang="ts" setup>
const emit = defineEmits(['open:sign-in'])

const as = useAccountStore()
</script>

<template>
  <TwoColNav class="gap-6 p-4 w-160 h-90 grid-rows-1 grid-cols-[0.92fr_1fr]">
    <div class="size-full">
      <NavMenuItemTitle>
        <icon name="history" />

        <h4 class="">
          Match History
        </h4>
      </NavMenuItemTitle>
    </div>

    <div
      class="size-full grid auto-rows-min gap-1 pl-4 border-l border-l-b3/80">
      <Badge
        v-if="as?.userAccount?.id && as.userAccount.riot.puuid"
        v-tippy="'Riot ID Connected!'"
        size="xl"
        variant="n1"
        class="items-center w-full h-11 gap-3 -ml-0.25">
        <div class="flex items-center grow gap-4 drop-shadow-sm">
          <h1
            class="*:!text-5 font-serif mb-0.5 self-center font-bold truncate">
            <SummonerName />
          </h1>

          <span class="lowercase grow **:text-2 mt-px **:text-bc/40">
            <SummonerTag />
          </span>

          <span class="**:text-2 mt-px text-bc/40">
            lv.
            <SummonerLevel />
          </span>
        </div>
      </Badge>

      <button
        v-else
        class="btn w-full justify-start"
        @click="emit('open:sign-in')">
        {{
          as.userAccount.riot.puuid
            ? "No Riot ID Connected."
            : "Sign in for personalized data."
        }}
      </button>

      <div class="ml-1 mt-4">
        <h4 class="dst mb-1">
          Match Analytics
        </h4>

        <p class="leading-tight text-2 mb-2 normal-case text-pretty">
          Aggregated match data. Weighted, sorted, rated, and all about
          <i><b>you</b></i>
          .
        </p>
      </div>

      <div class="grow h-full grid -ml-1 mt-2 gap-1">
        <NavMenuLink
          v-for="item in analyticsLinks"
          :key="item.name"
          class="flex justify-start flex-row gap-2 py-2.5 items-center"
          @click="navigateTo(item.link)">
          <hicon
            :name="item.icon.name"
            :class="cn('', item.icon.class)" />

          <h5>
            {{ item.name }}
          </h5>
        </NavMenuLink>
      </div>
    </div>
  </TwoColNav>
</template>
