/*
  '[[File:Sight icon.png|20px|link=Sight]]': '/img/icons/sight.png',
  '[[File:Heal power icon.png|20px|link=Healing]]': '/img/icons/healing.png',
  '[[File:AnotherFile.png|20px|link=Example]]': '/img/icons/example.png',
  '[[File:NewImage.png|30px|link=Example]]': '/img/icons/newimage.png',
  '[[File:Shield.png|25px|link=Shield]]': '/img/icons/shield.png',
*/
const fileImageMap = {
  '[[File:Gold colored icon.png|20xpx|link=Gold|An icon representing Gold]]': '/img/icons/40px-Gold_colored_icon.webp',
  '[[File:Turret icon.png|20px|link=Turret]]': '/img/icons/20px-Turret_icon.png',
  '[[File:Melee role.png|16px|link=Melee]]': '/img/icons/40px-Melee_role.webp',
  '[[File:Ranged role.png|16px|link=Ranged]]': '/img/icons/40px-Ranged_role.webp',
  '[[File:Damage rating.png|20px|link=Takedown]]': '/img/icons/40px-Damage_rating.webp',
  '[[File:Range center.png|20px|link=Range]]': '/img/icons/30px-Range_icon.webp',
  '[[File:Stun icon.png|20px|link=Crowd control]]': '/img/icons/40px-Stun_icon.webp',
  '[[File:Hybrid resistances icon.png|20px|link=Shield]]': '/img/icons/20px-Hybrid_resistances_icon.png',
  '[[File:Muramana item.png|20xpx|border|link=Muramana|An icon for the item Muramana]]': '/img/item/3042.webp',
  '[[File:On-hit icon.png|20px|link=Attack_effects#On_Hitting]]': '/img/icons/40px-On-hit_icon.webp',
  '[[File:Pyke OriginalSquare.png|20xpx|border|link=Pyke|An icon representing Pyke]]': '/img/icons/Pyke_Death_from_Below.png',
  '[[File:Pyke Death from Below.png|20xpx|border|link=Pyke#Death from Below|An icon for Pyke\'s ability Death from Below]]': '/img/icons/Pyke_Death_from_Below.png',
  '[[File:Runic Compass item.png|20xpx|border|link=Runic Compass|An icon for the item Runic Compass]]': '/img/item/3866.webp',
  '[[File:Bounty of Worlds item.png|20xpx|border|link=Bounty of Worlds|An icon for the item Bounty of Worlds]]': '/img/item/3867.webp',
  '[[File:Stealth Ward icon.png|20px|link=Ward#Stealth Ward]]': '/img/icons/40px-Stealth_Ward_item.webp',
  '[[File:Sight icon.png|20px|link=Sight]]': '/img/icons/Sight_icon.webp',
  '[[File:Mejais Soulstealer item.png|20xpx|border|link=Mejais Soulstealer|An icon for the item Mejais Soulstealer]]': '/img/item/3041.webp',
  '[[File:Grievous Wounds icon.png|20px|link=Grievous Wounds]]': '/img/icons/40px-Grievous_Wounds_icon.webp',
  '[[File:Heal power icon.png|20px|link=Healing]]': '/img/icons/40px-Heal_power_icon.webp',
  '[[File:Minion icon.png|20px|link=Minion (League of Legends)]]': '/img/icons/40px-Minion_icon.webp',
  '[[File:Blue Siege MinionSquare.png|20xpx|border|link=Siege minion|An icon representing Siege minion]]': '/img/icons/40px-Minion_icon.webp',
  '[[File:Blue Super MinionSquare.png|20xpx|border|link=Super minion|An icon representing Super minion]]': '/img/icons/40px-Minion_icon.webp',
  '[[File:Range model.png|20px|link=Range]]': '/img/icons/30px-Range_icon.webp',
  '[[File:Focused Resolve.png|20px|link=Tether]]': '/img/icons/Karma_Focused_Resolve.webp',
  '[[File:Sweeper Drone icon.png|20px|link=Oracle Lens]]': '/img/icons/40px-Sweeper_Drone_icon.webp',
  '[[File:Health icon.png|15px|link=Health]]': '/img/icons/40px-Additive_stacking_icon.webp',
  '[[File:Critical strike icon.png|20px|link=Critical strike]]': '/img/icons/30px-Critical_strike_chance_icon.webp',
  '[[File:Samira OriginalSquare.png|20xpx|border|link=Samira|An icon representing Samira]]': '/img/champion/Samira.webp',
  '[[File:Ranged role.png|20px|link=Ranged]]': '/img/icons/40px-Ranged_role.webp',
  '[[File:Melee role.png|20px|link=Melee]]': '/img/icons/40px-Melee_role.webp',
  '[[File:Slow icon.png|20px|link=Slow]]': '/img/icons/40px-Slow_icon.webp',
  '[[File:Ambush_2.png|20px|link=Stealth#Camouflage]]': '/img/icons/40px-Twitch_Ambush_2.webp',
  '[[File:Twilight Shroud old2.png|20px|link=Stealth#Invisibility]]': '/img/icons/40px-Akali_Twilight_Shroud_old2.webp',
  '[[File:Death from Below.png|20px|link=Kill#Execute]]': '/img/icons/Pyke_Death_from_Below.png',
  '[[File:Monster icon.png|20px|link=Monster]]': '/img/icons/Monster_icon.webp',
  '[[File:Control Ward icon.png|20px|link=Ward#Control Ward]]': '/img/icons/40px-Control_Ward_icon.webp',
  '[[File:Disabled Ward icon.png|20px|link=Ward]]': '/img/icons/40px-Disabled_Ward_icon.webp',
  '[[File:Noxious Trap.png|20px|link=Stealth#Stealthed_traps_and_wards]]': '/img/icons/40px-Teemo_Noxious_Trap.webp',
  '[[File:Exposed icon.png|20px|link=Sight]]': '/img/icons/40px-Exposed_icon.webp',
  '[[File:Illaoi Prophet of an Elder God.png|20xpx|border|link=Illaoi#Prophet of an Elder God|An icon for Illaoi\'s ability Prophet of an Elder God]]': '/img/icons/Illaoi_Prophet_of_an_Elder_God.png',
  '[[File:Cripple icon.png|20px|link=Cripple]]': '/img/icons/40px-Cripple_icon.webp',
  '[[File:Totem Ward icon.png|20px|link=Ward#Totem Ward]]': '/img/icons/40px-Totem_Ward_icon.webp',
  '[[File:Basic Attack.png|20px|link=Damage]]': '/img/icons/Basic_attack_icon.webp',
  '[[File:Spell Shield.png|20px|link=Spell shield]]': '/img/icons/40px-Keyword_SpellShield.webp',
  '[[File:Life steal icon.png|15px|link=Life steal]]': '/img/icons/30px-Life_steal_icon.webp',
  '[[File:Health regeneration icon.png|15px|link=Health regeneration]]': '/img/icons/30px-Health_regeneration_icon.webp',
  '[[File:Reveal icon.png|20px|link=Sight#Standard sight]]': '/img/icons/Sight_icon.webp',
  '[[File:Ward_icon.png|20px|link=Ward]]': '/img/icons/40px-Ward_icon.webp',
  '[[File:True Sight icon.png|20px|link=Sight#True_sight]]': '/img/icons/40px-True_Sight_icon.webp',
  '[[File:Tenacity icon.png|20px|link=Tenacity]]': '/img/icons/30px-Tenacity_icon.webp',
  '[[File:Revival icon.png|20px|link=Death#Ways to prevent death when reaching zero health]]': '/img/icons/40px-Revival_icon.webp',
  '[[File:Cosmic Radiance.png|20px|link=Invulnerability]]': '/img/icons/Taric_Cosmic_Radiance.png',
  '[[File:Untargetable icon.png|20px|link=Untargetable]]': '/img/icons/40px-Untargetable_icon.webp',
  '[[File:Ghost.png|20px|link=Unit collision]]': '/img/spells/Ghost.webp',
  '[[File:Smite.png|20xpx|border|link=Smite|An icon representing Smite]]': 'img/spells/Smite.webp',
  '[[File:Scorchclaw\'s Slash buff.png|20xpx|border|link=Scorchclaw\'s Slash|An icon representing Scorchclaw\'s Slash]]': '/img/icons/Scorchclaw\'s_Slash_buff.webp',
  '[[File:Slow immune icon.png|20px|link=Slow resist]]': '/img/icons/30px-Slow_immune_icon.webp',
  '[[File:Triple Tonic rune.png|20xpx|link=Triple Tonic|An icon representing Triple Tonic]]': '/img/icons/Triple_Tonic_rune.png',
  '[[File:Stun icon.png|20px|link=Crowd_control#Immobilizing]]': '/img/icons/40px-Stun_icon.webp',
  '[[File:Empowered Recall.png|20xpx|border|link=Recall#Empowered Recall|An icon representing Recall#Empowered Recall]]': '/img/icons/40px-Empowered_Recall.webp',
  '[[File:Dash.png|20px|link=Dash]]': '/img/icons/40px-Dash.webp',
  '[[File:Flash.png|20px|link=Blink]]': '/img/spells/Flash.webp',
  '[[File:Synchronized Souls item.png|20xpx|border|link=Synchronized Souls|An icon for the item Synchronized Souls]]': '/img/item/3013.webp',
  '[[File:Seraphs Embrace item.png|20xpx|border|link=Seraphs Embrace|An icon for the item Seraphs Embrace]]': '/img/item/3040.webp',
  '[[File:Bloodsong item.png|20xpx|border|link=Bloodsong|An icon for the item Bloodsong]]': '/img/item/3877.webp',
  '[[File:Celestial Opposition item.png|20xpx|border|link=Celestial Opposition|An icon for the item Celestial Opposition]]': '/img/item/3869.webp',
  '[[File:Dream Maker item.png|20xpx|border|link=Dream Maker|An icon for the item Dream Maker]]': '/img/item/3870.webp',
  '[[File:Solstice Sleigh item.png|20xpx|border|link=Solstice Sleigh|An icon for the item Solstice Sleigh]]': '/img/item/.3976webp',
  '[[File:ZazZaks Realmspike item.png|20xpx|border|link=ZazZaks Realmspike|An icon for the item ZazZaks Realmspike]]': '/img/item/3871.webp',
  '[[File:Airborne icon.png|20px|link=Airborne]]': '/img/icons/40px-Airborne_icon.webp',
  '[[File:Blind icon.png|20px|link=Blind]]': '/img/icons/40px-Blind_icon.webp',
  '[[File:Disarm icon.png|20px|link=Disarm]]': '/img/icons/40px-Disarm_icon.webp',
  '[[File:Nearsight icon.png|20px|link=Nearsight]]': '/img/icons/40px-Nearsight_icon.webp',
  '[[File:Suppression icon.png|20px|link=Types of Crowd Control#Suppression]]': '/img/icons/40px-Suppression_icon.webp',
  '[[File:Kircheis Shard item.png|20px|link=Named_item_effect#Energized]]': '/img/icons/Kircheis_Shard_item.png',
  '[[File:Shattered Armguard item.png|20xpx|border|link=Shattered Armguard|An icon for the item Shattered Armguard]]': '/img/item/2421.webp',
  '[[File:Stasis icon.png|20px|link=Invulnerability#Stasis]]': '/img/icons/40px-Stasis_icon.webp',
  '[[File:Fimbulwinter item.png|20xpx|border|link=Fimbulwinter|An icon for the item Fimbulwinter]]': '/img/item/3121.webp',
  '[[File:Channeling icon.png|20px|link=Channel]]': '/img/icons/Channeling_icon.webp',
  '[[File:Rift HeraldSquare.png|20xpx|border|link=Rift Herald|An icon representing Rift Herald]]': '/img/icons/40px-Rift_HeraldSquare.webp',
  '[[File:Rift Herald Rodeo buff.png|20px|link=]]': '/img/icons/40px-Rift_HeraldSquare.webp',
  '[[File:Death.png|20px|link=Death]]': '/img/icons/40px-Death.webp',
  '[[File:Dark Seal item.png|20xpx|border|link=Dark Seal|An icon for the item Dark Seal]]': '/img/item/1082.webp',
  '[[File:Seekers Armguard item.png|20xpx|border|link=Seekers Armguard|An icon for the item Seekers Armguard]]': '/img/item/2420.webp',
  '[[File:Symbiotic Soles item.png|20xpx|border|link=Symbiotic Soles|An icon for the item Symbiotic Soles]]': '/img/item/3010.webp',
  '[[File:Control Ward item.png|20xpx|border|link=Control Ward|An icon for the item Control Ward]]': '/img/item/2055.webp',
  '[[File:Bear Stance.png|20px|link=Dash#Lunge]]': '/img/icons/Udyr_Iron_Mantle.webp',
  '[[File:Guerrilla Warfare.png|20px|link=Stealth]]': '/img/icons/40px-Teemo_Guerrilla_Warfare.webp',
  '[[File:Farsight Ward icon.png|20px|link=Ward#Farsight Ward]]': '/img/icons/40px-Farsight_Ward_icon.webp',
  '[[File:Mosstomper\'s Courage buff.png|20xpx|border|link=Mosstomper\'s Courage|An icon representing Mosstomper\'s Courage]]': '/img/icons/Mosstomper\'s_Courage_buff.png',
  '[[File:Gustwalker\'s Gait buff.png|20xpx|border|link=Gustwalker\'s Gait|An icon representing Gustwalker\'s Gait]]': '/img/icons/Gustwalker\'s_Gait_buff.png',
  '[[File:Magical Footwear rune.png|20xpx|link=Magical Footwear|An icon representing Magical Footwear]]': '/img/item/2422.webp',
  '[[File:Boots item.png|20xpx|border|link=Boots|An icon for the item Boots]]': '/img/item/1001.webp',
  '[[File:Biscuit Delivery rune.png|20xpx|link=Biscuit Delivery|An icon representing Biscuit Delivery]]': '/img/icons/Biscuit_Delivery_rune.png',
  '[[File:Mejai\'s Soulstealer item.png|20xpx|border|link=Mejai\'s Soulstealer|An icon for the item Mejai\'s Soulstealer]]': '/img/item/3041.webp',

}

export function replaceFileReferencesWithImages(text) {
  return text.replace(/\[\[File:.*?\]\]/g, (match) => {
    const imageUrl = fileImageMap[match]
    return imageUrl ? `<span class="inline-flex items-center align-baseline size-fit"><img src="${imageUrl}" alt="icon"  class="shrink-0 h-4 w-auto"></span>` : match
  })
}

const more = {

'[[File:Heal and shield power icon.png 15px|link=Heal and shield power': '/img/icons/40px-Heal_power_icon.webp',
}

export function replaceMoreFileReferencesWithImages(text) {
let t = text.replace("[[File:Heal and shield power icon.png 15px|link=Heal and shield power", `<span class="inline-flex items-center align-baseline size-fit"><img src="/img/icons/40px-Heal_power_icon.webp" alt="icon"  class="shrink-0 h-4 w-auto"></span>`)
  t = t.replace('[[Heal and shield power|heal and shield power]]', ' heal and shield power' )
  return t
  }
