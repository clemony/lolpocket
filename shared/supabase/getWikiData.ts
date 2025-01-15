import { formatEffects } from './item/formatEffects';

function fixInvalidJson(jsonString: string): string {
  jsonString = jsonString.replace(/\[(?!\d+\])([^\]]+)\]/g, (_, key) => `${key}`);
  jsonString = jsonString.replace(/\[([0-9]+)\]/g, (_, key) => `${key}`);
  jsonString = jsonString.replace(/=/g, ':');
  jsonString = jsonString.replace(/,(\s*[}\]])/g, '$1');
  jsonString = jsonString.replace(/"([^"]+)"\s*:\s*(?=,|\})/g, (_, key) => `${key}: null`);
  jsonString = jsonString.replace(/:\s*\{\s*([^:{}]+?)\s*\}/g, (_, values) => {
    const array = values.split(',').map((value: string) => `${value.trim()}`);
    return `: [${array.join(', ')}]`;
  });
  jsonString = jsonString.replace(/\[([0-9]+)\]/g, (_, key) => `${key}`);
  jsonString = jsonString.replace(/,(\s*[}\]])/g, '$1');
  jsonString = jsonString.replace(/:\s*\{\s*"([^"]+)"\s*\}/g, ': ["$1"]');
  jsonString = jsonString.replace(/(\s)+/gm, '$1');
  jsonString = jsonString.replace(/(\d)+\s:/gm, '"$1":');

  return jsonString;
}

const championTransformation = {
  regex: /"([a-zA-Z0-9_]+)"\s*:\s*\{[^}]*\}/g,
  replacement: (_: any, name: string, properties: object) => {
    return `{ "name": "${name}", ${properties} }`;
  },
};
const cleanupAramUrf = [
  {
    regex: /"urf"\s*:\s*{[^}]*}\s*,?/g,
    replacement: '',
  },
  {
    regex: /"aram"\s*:\s*{[^}]*}\s*,?/g,
    replacement: '',
  },
];

const cleanupTrailingCommas = {
  regex: /,\s*(?=\s*[\}\]])/g,
  replacement: '',
};

export const getWikiData = async (data: string, text: string, type?: string) => {
  console.log('💠 - getItemData - type:', type);
  const url =
    data +
    new URLSearchParams({
      action: 'expandtemplates',
      format: 'json',
      text: text,
      prop: 'wikitext',
    });

  const request = new Request(url, {
    method: 'GET',
    cache: 'reload',
  });

  try {
    const req = await fetch(request);

    if (!req.ok) {
      throw new Error(`Response status: ${req.status}`);
    }

    const json = await req.json();

    const input = json?.expandtemplates?.wikitext;
    console.log('💠 - getItemData - input:', input);

    if (input) {
      let cleanedJsonString = input;

      const transformations = [
        { regex: /^[\s\S]*?return\s\{/, replacement: '{' },
        { regex: /=/g, replacement: ':' },
        { regex: /text: × none × }}{{/, replacement: '' },
        {
          regex: /\|type:target's kill color:gold\}\}/,
          replacement: '',
        },
        { regex: /:\s*\{\s*"([^"]+)"\s*\}/g, replacement: ': ["$1"]' },
        { regex: /\s*--.*$/, replacement: '' },
        { regex: /<s>/g, replacement: '' },
        { regex: /-- <\/pre>/g, replacement: '' },
        { regex: /<\/s>/g, replacement: '' },
        {
          regex: /"skill_(i|q|w|e|r)"\s*:\s*{[^}]*},?/g,
          replacement: '',
        },
        { regex: /"skills"\s*:\s*{[^}]*\}?,?/g, replacement: '' },
        { regex: /\n+/g, replacement: '' },
        { regex: /,(\s*[}\]])/g, replacement: '$1' },
        {
          regex: /"([a-zA-Z0-9_]+)"\s*:\s*([^",\{\}\[\]\s][^,\}\n]*)/g,
          replacement: (_: any, key: any, value: any) => `"${key}": "${value.trim()}"`,
        },
        { regex: /^\s*\d+\s*:\s*[^,}]+,?/gm, replacement: '' },
        { regex: /(\s)+/gm, replacement: '$1' },
        { regex: /"\s:/gm, replacement: '":' },
      ];

      cleanedJsonString = transformations.reduce((result, { regex, replacement }) => result.replace(regex, replacement), cleanedJsonString);
      console.log('💠 - cleanedJsonString before champ transform:', cleanedJsonString);

      const championTransformations = [
        {
          regex: /"stats"\s*:\s*{[^}]*}/g,
          replacement: (match: string) => {
            const fixedStats = match.replace(/,\s*}/g, '}').replace(/:\s*([^",\{\}\[\]\s][^,\}\n]*)/g, ': $1');
            return fixedStats;
          },
        },

        { regex: /(84\+1150\/17)/g, replacement: '"$1"' },

        {
          regex: /"role"\s*:\s*\{([^}]+)\}/g,
          replacement: (_: any, roles: any) =>
            `"role": [${roles
              .split(',')
              .map((r: string) => `"${r.trim()}"`)
              .join(', ')}]`,
        },

        {
          regex: /"skillArray"\s*:\s*\[([^\]]+)\]/g,
          replacement: (match: object, skills: any) => {
            const formattedSkills = skills
              .split(',')
              .map((s: string) => s.trim())
              .filter(Boolean)
              .join('", "');
            return `"skillArray": ["${formattedSkills}"]`;
          },
        },
      ];

      cleanedJsonString = championTransformations.reduce((result, { regex, replacement }) => result.replace(regex, replacement), cleanedJsonString);

      cleanedJsonString = fixInvalidJson(cleanedJsonString);
      console.log('💠 - cleanedJsonString right before obj:', cleanedJsonString);

      cleanedJsonString = cleanedJsonString;
      cleanupAramUrf.forEach(({ regex, replacement }) => {
        cleanedJsonString = cleanedJsonString.replace(regex, replacement);
      });

      cleanedJsonString = cleanedJsonString.replace(cleanupTrailingCommas.regex, cleanupTrailingCommas.replacement);

      try {
        const jsonObject = JSON.parse(cleanedJsonString);

        if (type === 'item' && jsonObject.effects) {
          jsonObject.effects = formatEffects(JSON.stringify(jsonObject.effects));
          console.log('💠 - jsonObject.effects :', jsonObject.effects);
        }

        console.log('💠 - getItemData - final:', jsonObject);
        return jsonObject;
      } catch (error) {
        console.error('Error parsing or processing JSON:', error, cleanedJsonString);
      }
    } else {
      console.error('Missing expanded wikitext in response:', json);
    }
  } catch (e) {
    console.error('Error during fetch or parse:', e);
  }
};
