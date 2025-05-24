import { replaceAs } from './wikitext/replaceAs'
import { replaceFt } from './wikitext/replaceFt'
import { replaceLinks } from './wikitext/replaceLinks'
import { replacePp } from './wikitext/replacePp'
import { replaceQuotes } from './wikitext/replaceQuotes'
import { replaceRd } from './wikitext/replaceRd'
import { replaceSti } from './wikitext/replaceSti'
import { replaceTips } from './wikitext/replaceTips'
import { replaceTt } from './wikitext/replaceTt'
import { resolveTemplates } from './wikitext/resolveTemplate'

export async function handleWikiText(wikitext: string): Promise<string> {
  let text = wikitext

  text = text.replace(/([a-z0-9])\{\{/gi, '$1 {{')

  // Resolve all templates first
  text = resolveTemplates(text)

  // Run the rest of the cleanup
  text = replaceTips(text)
  text = replaceTt(text)
  text = replaceSti(text)
  text = replaceLinks(text)
  text = replacePp(text)
  text = replaceRd(text)
  text = replaceFt(text)
  text = replaceAs(text)
  text = replaceQuotes(text)

  text = text.replace('+color=pd ', '')
  text = text.replace('+color=md ', '')
  text = text.replace('+ +', '+')

  return text.trim()
}
// shurelya redemption zhonya locket
// icononly=true 525 units radius around you take from all sources.
// Dealing ability damage to enemy champions with your ultimate ability creates a +251;251.8;253.1;255.5;259.8;267.3;280.7;304.2;345.9;419.7;550 ultimate's damage i maglignance
// no's  on-attack abilitydamage
// {{ii|Fimbulwinter}}
// {{tt|700 units|center to edge}}  frozen heart ALL tt
// overlord Unique Passive - Tyranny:
// Gain bonus attack damage equal to 2.5s% bonus health.
