// Updated Patch 15.24.1 - 12/26/2025 07:04:09 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Joy Unending",
  "affects": "Self, Allies",
  "blurb": "Innate: Whenever  Nilah kills a  minion, she and the nearest allied champion gain an additional portion of the  experience they would have lost from sharing.",
  "effectRadius": "1000",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever Nilah kills a minion, she and the nearest allied champion gain an additional 50% of the experience they would have lost from sharing.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever a nearby allied champion uses an ability to heal or shield either Nilah or themselves, both they and Nilah receive a bonus amount equal to 7.5% of the healing or 15% of the shielding after a 0.5-second delay. Bonus shielding lasts as long as the shield that triggered the effect, up to a maximum duration of 4 seconds.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nilah/ability-icon/p",
  "notes": "Nilah will gain a portion of all healing and all shielding from nearby allies that activate either of the effects on themselves while she is within range of them.\nThe same applies to allies that grant Nilah a heal or shield; they gain a portion of the heal or shield given to her by them, even if the heal or shield affects both units.\nHeal and shields granted by items, runes, and summoner spells will not trigger the increased amount.\nThe heal and shield increases do not trigger from their own heal or shield.\nNilah may still gain a shield from her allies' shields even if they are longer than 4 seconds, but the buff of the shield will only last for up to 4 seconds.\nNilah can receive a normal shield from nearby allies that gain physical or magic shields.",
  "targeting": "Passive"
}
export default ability
