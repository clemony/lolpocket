<script lang="ts" setup>
import { riotDisclaimer } from "#shared/data/riot-disclaimer";

definePageMeta({
  name: "terms",
  title: "Terms & Conditions",
  description: "Information concerning general app usage.",
  icon: "lucide:scale",
  iconClass: "!**:stroke-1.1",
  listClass: "**:!stroke-[1.6] scale-130",
  path: "/support/terms",
});
</script>

<template>
  <SeparatorLayout>
    <LayoutAsideSplit>
      <template #aside>
        <SettingsNav />
      </template>

      <SettingsLayout
        title="Data"
        description="Where the raw data on lolpockets comes from. Raw data is processed and calculated by lolpocket's own algorithms and functions."
      >
        <ol
          class="list-outside list-[upper-roman] space-y-6 pl-6 leading-7 text-pretty marker:w-12 marker:justify-start marker:pr-6 marker:text-start"
        >
          <li>
            <b>Riot's</b>
            public
            <InlineLink
              to="https://wiki.leagueoflegends.com/en-us/"
              title="https://wiki.leagueoflegends.com/en-us/"
              external
            >
              API
            </InlineLink>
            .
          </li>
          <li>
            The Official
            <InlineLink
              to="https://wiki.leagueoflegends.com/en-us/"
              title="https://wiki.leagueoflegends.com/en-us/"
              external
            >
              League of Legends Wiki
            </InlineLink>
            , written and maintained by players.
          </li>
          <li>
            <InlineLink
              to="https://www.riotgames.com/en/legal"
              title="https://www.riotgames.com/en/legal"
              external
            >
              Official Data Dragon
            </InlineLink>
          </li>
          <li>
            <InlineLink
              to="https://www.communitydragon.org"
              title="https://www.communitydragon.org"
              external
            >
              Community Dragon
            </InlineLink>
            , an open source, community driven, public CDN.
          </li>
        </ol>
      </SettingsLayout>
      <SettingsLayout
        title="Riot Policies"
        description="About Riot data and asset usage."
      >
        <ol
          class="list-outside list-[upper-roman] space-y-6 pl-6 leading-7 text-pretty marker:w-12 marker:justify-start marker:pr-6 marker:text-start"
        >
          <li>
            {{ riotDisclaimer }}
          </li>
          <li>
            For more information,
            <b>Riot's</b>
            policies on use of their assets and game data is expanded upon in
            their
            <InlineLink
              class="italic"
              to="https://www.riotgames.com/en/legal"
              title="https://www.riotgames.com/en/legal"
              external
            >
              Legal Jibber Jabber
            </InlineLink>
            and
            <InlineLink
              class="italic"
              to="https://www.riotgames.com/en/terms-of-service"
              title="https://www.riotgames.com/en/terms-of-service"
              external
            >
              Terms of Serivce.
            </InlineLink>
          </li>
        </ol>
      </SettingsLayout>
    </LayoutAsideSplit>
  </SeparatorLayout>
</template>
