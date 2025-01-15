export const getChampsFromDatabase = async () => {
  const supabase = useSupabaseClient();

  try {
    const { data, error } = await supabase.from('league_data').select('champion_data');

    if (error) {
      console.error('Error fetching JSONB object:', error);
      return null;
    }
    const champdata = Object.values(data[0]);
    console.log('💠 - getChampsFromDatabase - champdata:', champdata);
    const b = manageObject(champdata[0]);
    const c = b.sort((a, b) => a.name.localeCompare(b.name));
    const d = c.filter((champion) => champion.name != 'Mega Gnar');
    const e = d.filter((champion) => champion.name != 'Kled & Skaarl');
    useDataStore().champions = [...e];
    console.log('💠 - getChampsFromDatabase -useDataStore().champions:', useDataStore().champions);
  } catch (error) {
    console.error('Error processing data:', error);
  }
};

export const manageObject = (nestedData: any): Champion[] => {
  let championsArray: Champion[] = [];

  // Check if the data has the expected structure
  if (!nestedData || typeof nestedData !== 'object') {
    console.error('Unexpected data structure:', nestedData);
    return championsArray;
  }

  // Loop through each champion (champion name) in the nested data
  Object.keys(nestedData).forEach((name) => {
    const champion = nestedData[name];

    // Check if champion is an object and contains the expected properties
    if (champion && typeof champion === 'object') {
      championsArray.push({
        id: champion.id || null,
        name,
        adaptivetype: champion.adaptivetype || null,
        alttype: champion.alttype || null,
        apiname: champion.apiname || null,
        be: champion.be || null,
        changes: champion.changes || null,
        client_positions: champion.client_positions || null,
        control: champion.control || null,
        damage: champion.damage || null,
        date: champion.date || null,
        difficulty: champion.difficulty || null,
        external_positions: champion.external_positions || null,
        herotype: champion.herotype || null,
        mobility: champion.mobility || null,
        nickname: champion.nickname || null,
        patch: champion.patch || null,
        rangetype: champion.rangetype || null,
        resource: champion.resource || null,
        role: champion.role || null,
        rp: champion.rp || null,
        skills: champion.skills || null,
        stats: champion.stats || null,
        style: champion.style || null,
        title: champion.title || null,
        toughness: champion.toughness || null,
        utility: champion.utility || null,
      });
    } else {
      console.error('Champion is not an object:', name);
    }
  });

  return championsArray;
};
