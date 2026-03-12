<script lang="ts" setup>
import { riotDisclaimer } from "~/domain/riot/riot-disclaimer"

definePageMeta({
  title: "Terms & Conditions",
  description: "Information concerning general app usage.",
  icon: "lucide:scale",
  prefix: "Docs",
})
</script>

<template>
  <SeparatorLayout>
    <LayoutAsideSplit>
      <template #aside>
        <SettingsNav />
      </template>

      <SettingsLayout
        title="Data"
        description="Where the raw data on lolpockets comes from. Raw data is processed and calculated by lolpocket's own algorithms and functions.">
        <ol
          class="list-outside list-[upper-roman] space-y-6 pl-6 leading-7 text-pretty marker:w-12 marker:justify-start marker:pr-6 marker:text-start">
          <li>
            <b>Riot's</b>
            public
            <NuxtLink
              class="inline hover:underline"
              to="https://wiki.leagueoflegends.com/en-us/"
              title="https://wiki.leagueoflegends.com/en-us/"
              external>
              API
            </NuxtLink>
            .
          </li>
          <li>
            The Official
            <NuxtLink
              class="inline hover:underline"
              to="https://wiki.leagueoflegends.com/en-us/"
              title="https://wiki.leagueoflegends.com/en-us/"
              external>
              League of Legends Wiki
            </NuxtLink>
            , written and maintained by players.
          </li>
          <li>
            <NuxtLink
              class="inline hover:underline"
              to="https://www.riotgames.com/en/legal"
              title="https://www.riotgames.com/en/legal"
              external>
              Official Data Dragon
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="inline hover:underline"
              to="https://www.communitydragon.org"
              title="https://www.communitydragon.org"
              external>
              Community Dragon
            </NuxtLink>
            , an open source, community driven, public CDN.
          </li>
        </ol>
      </SettingsLayout>
      <SettingsLayout
        title="Riot Policies"
        description="About Riot data and asset usage.">
        <ol
          class="list-outside list-[upper-roman] space-y-6 pl-6 leading-7 text-pretty marker:w-12 marker:justify-start marker:pr-6 marker:text-start">
          <li>
            {{ riotDisclaimer }}
          </li>
          <li>
            For more information,
            <b>Riot's</b>
            policies on use of their assets and game data is expanded upon in
            their
            <NuxtLink
              class="inline italic hover:underline"
              to="https://www.riotgames.com/en/legal"
              title="https://www.riotgames.com/en/legal"
              external>
              Legal Jibber Jabber
            </NuxtLink>
            and
            <NuxtLink
              class="inline italic hover:underline"
              to="https://www.riotgames.com/en/terms-of-service"
              title="https://www.riotgames.com/en/terms-of-service"
              external>
              Terms of Serivce.
            </NuxtLink>
          </li>
        </ol>
      </SettingsLayout>
    </LayoutAsideSplit>
  </SeparatorLayout>
</template>
