// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "Void Shift",
  "affects": "Self",
  "blurb": "Innate: Periodically,  Malzahar gains Void Shift until he takes non- minion damage or negates a  crowd control effect, to which it then lingers for a brief time before expiring.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, Malzahar gains Void Shift until he takes non- minion damage or negates a crowd control effect, to which it then lingers for 0.25 seconds before expiring. Void Shift: Malzahar gains crowd control immunity and 90% damage reduction.</p>"
    },
    {
      "description": "Void Shift's cooldown refreshes whenever Malzahar takes non- minion damage or is affected by a crowd control effect, and resets upon respawning."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Malzahar/ability-icon/p",
  "notes": "Void Shift will not resist allied  crowd control nor will it be deactivated by them.\nVoid Shift will not mitigate  true damage but the buff will still be consumed.\nIt does not deactivate against the  Nexus Obelisk.\n Shields will take priority over Void Shift, but the buff will still be consumed (does not reduce damage inflicted). Void Shift triggers even if the shield negated the damage entirely.\nHowever, if Malzahar has a  spell shield and the  shield fully mitigates the damage, Void Shift does not trigger.(bug) The damage taken must be from an effect that cannot be negated by spell shields.\n Spell shields take priority over Void Shift. If the triggering hostile ability does not contain a  crowd control effect, both Void Shift and the spell shield break simultaneously.\nSince spell shields are precedent over Void Shift, applied  crowd control from effects that cannot be blocked by spell shields (i.e.  Wall of Pain) will also ignore Void Shift despite its  crowd control immunity. The effect must not damage Malzahar for this event to take place.\nVoid Shift will specifically not deactivate if Malzahar eats  Honeyfruit or is within a hostile  Frozen Heart passive aura.\nVoid Shift will prevent  Chum the Waters from attaching to him.",
  "targeting": "Passive"
}
export default ability
