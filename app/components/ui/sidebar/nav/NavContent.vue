<script lang="ts" setup>
const option = ref(['Backpack', 'Analytics', 'Library', 'Summoner'])

function getSummonerLink(obj: LinkObject) {
  if (obj.name != 'Summoner')
    return obj

  const as = useAccountStore()
  if (!as?.userAccount?.riot?.name) {
    return {
      name: 'Connect Riot ID',
      icon: {
        name: 'plug',
      },
    }
  }

  /* const { summoner } = useSummoner(as.userAccount.riot.puuid) */

  return {
    name: `${as.userAccount.riot.name}'s Profile`,
    icon: {
      name: getSummonerIcon(as.userAccount.riot.profileIcon),
      class: 'size-6 rounded-full drop-shadow-sm shadow-sm',
    },
    link: `/summoner/${as.userAccount.riot.region}/${as.userAccount.riot.name}_${as.userAccount.riot.tag}`,
  }
}
</script>

<template>
  <SidebarContentWrapper title="Navigation">
    <Accordion
      v-model:model-value="option"
      type="multiple"
      collapsible
      class="w-full justify-start px-4">
      <SidebarAccordionItem
        v-for="linkObject in navLinks"
        :key="linkObject.name"
        :link-object="getSummonerLink(linkObject)" />
    </Accordion>
  </SidebarContentWrapper>
</template>