export async function useAccountUpdate(
  riotPuuid?: string,
  regionGroup?: string,
) {
  const puuid = riotPuuid || as().account?.puuid?.toString();
  if (!puuid) return;

  const resolve = await $fetch<Partial<Summoner>>(
    "/api/riot/fetchSummonerData",
    { params: { puuid } },
  );

  if (!resolve) return;

  const account = {
    name: resolve.name,
    puuid: resolve.puuid,
    icon: resolve.profileIcon,
    level: resolve.level,
    region: resolve.region,
    tag: resolve.tag,
  };

  const session = await useSupabaseClient().auth.getSession();

  const post = await $fetch("api/supabase/updateUserAccount", {
    body: {
      account,
    },
    headers: {
      Authorization: `Bearer ${session?.data.session.access_token}`,
    },
    method: "POST",
  });

  return account;
}
